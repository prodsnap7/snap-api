import { Injectable, OnModuleInit, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import Typesense from 'typesense';
import { Client as TypesenseClient } from 'typesense';
// Import FontsService if needed for getting data during indexing
// import { FontsService } from './fonts.service';

// Define the expected shape of the document in Typesense
interface FontDocument {
  id: string; // Typesense document ID (string version of fontId)
  fontId: number;
  fontFamily: string;
  category: string;
  kind: string;
  hasImageUrl: boolean;
  // Add other indexed fields here...
}

@Injectable()
export class FontSearchService implements OnModuleInit {
  private readonly logger = new Logger(FontSearchService.name);
  private client: TypesenseClient;

  // Use `any` for schema type if specific import fails
  private collectionSchema: any = {
    // Using `any` as fallback
    name: 'fonts',
    fields: [
      { name: 'fontId', type: 'int32' as const },
      { name: 'fontFamily', type: 'string' as const, index: true },
      { name: 'category', type: 'string' as const, index: true, facet: true },
      { name: 'kind', type: 'string' as const, facet: true },
      { name: 'hasImageUrl', type: 'bool' as const, filter: true, facet: true },
      // Add other fields you might want to index directly
    ],
    // Optional: Define default sorting field
    // default_sorting_field: 'fontFamily',
  };

  constructor(
    private readonly configService: ConfigService,
    // Inject FontsService if you need it for indexing data directly within this service
    // private readonly fontsService: FontsService
  ) {
    this.client = new Typesense.Client({
      nodes: [
        {
          host: this.configService.getOrThrow('TYPESENSE_HOST'),
          port: Number(this.configService.getOrThrow('TYPESENSE_PORT')),
          protocol: this.configService.getOrThrow('TYPESENSE_PROTOCOL'),
        },
      ],
      apiKey: this.configService.getOrThrow('TYPESENSE_API_KEY'),
      connectionTimeoutSeconds: 5,
    });
  }

  async onModuleInit() {
    await this.setupTypesenseCollection();
  }

  private async setupTypesenseCollection() {
    try {
      this.logger.log(
        `Checking Typesense collection '${this.collectionSchema.name}'...`,
      );
      await this.client.collections(this.collectionSchema.name).retrieve();
      this.logger.log(
        `Collection '${this.collectionSchema.name}' already exists.`,
      );
    } catch (error) {
      // Make the 404 check more robust: check status or message content
      const isNotFoundError =
        error?.httpStatus === 404 ||
        error?.message?.includes('Not Found') ||
        error?.message?.includes('Could not find a collection');

      if (isNotFoundError) {
        this.logger.log(
          `Collection '${this.collectionSchema.name}' not found, creating...`,
        );
        try {
          await this.client.collections().create(this.collectionSchema);
          this.logger.log(
            `Collection '${this.collectionSchema.name}' created successfully.`,
          );
        } catch (createError) {
          this.logger.error(
            `Failed to create Typesense collection '${this.collectionSchema.name}'`,
            createError?.message || createError,
          );
        }
      } else {
        // Log other errors (like connection issues, auth errors, etc.)
        this.logger.error(
          `Error checking Typesense collection '${this.collectionSchema.name}'`,
          error?.message || error, // Log the message or the whole error
        );
      }
    }
  }

  // --- Indexing Methods (Placeholders - Implement Actual Strategy) ---

  // Call this from a script or job to index all data
  async indexAllFonts(fontsData: FontDocument[]) {
    this.logger.log(`Starting indexing for ${fontsData.length} documents...`);
    try {
      const results = await this.client
        .collections(this.collectionSchema.name)
        .documents()
        .import(fontsData, { action: 'upsert' });

      // General error checking for import results
      const errors = results.filter((result: any) => !result.success);
      if (errors.length > 0) {
        // Log the full error object for inspection if types are unclear
        this.logger.error(
          `Indexing failed for ${errors.length} documents. First error detail: ${JSON.stringify(errors[0])}`,
        );
      } else {
        this.logger.log(
          `Successfully indexed or updated ${fontsData.length} documents.`,
        );
      }
    } catch (error) {
      this.logger.error('Error during bulk Typesense import:', error);
    }
  }

  // Call this when a single font is created or updated
  async indexSingleFont(fontData: FontDocument) {
    try {
      await this.client
        .collections(this.collectionSchema.name)
        .documents()
        .upsert(fontData);
      this.logger.log(`Indexed/updated font ID: ${fontData.id}`);
    } catch (error) {
      this.logger.error(`Error indexing font ID ${fontData.id}:`, error);
    }
  }

  // Call this when a font is deleted
  async deleteFontIndex(fontId: number | string) {
    try {
      await this.client
        .collections(this.collectionSchema.name)
        .documents(fontId.toString()) // ID must be string
        .delete();
      this.logger.log(`Deleted font index ID: ${fontId}`);
    } catch (error) {
      this.logger.error(`Error deleting font index ID ${fontId}:`, error);
    }
  }

  // --- End Indexing Methods ---

  // --- Search Method ---
  async searchFonts(params: {
    searchQuery: string;
    page?: number;
    limit?: number;
    filterByCategory?: string;
  }): Promise<{
    ids: number[]; // Return ordered IDs
    totalHits: number;
    totalPages: number;
    currentPage: number;
  }> {
    const { searchQuery, page = 1, limit = 10, filterByCategory } = params;

    // If we have a search query, use it. Otherwise use * to match all
    const effectiveQuery =
      searchQuery && searchQuery.trim() !== '' ? searchQuery : '*';

    // --- Build filter string ---
    const filterConditions: string[] = [];
    // Always filter for documents that have an image URL
    filterConditions.push(`hasImageUrl:=true`);
    // Add category filter if provided
    if (filterByCategory) {
      filterConditions.push(`category:=${filterByCategory}`);
    }
    const filterByString = filterConditions.join(' && '); // Combine filters with AND
    // --- End Build filter string ---

    // Use `any` for search params type if specific import fails
    const searchParameters: any = {
      q: effectiveQuery,
      query_by: 'fontFamily', // Only search by font name, not category
      page: page,
      per_page: limit,
      filter_by: filterByString, // Use combined filter string
    };

    try {
      this.logger.log(
        `Searching Typesense fonts: Query='${effectiveQuery}', Filter='${searchParameters.filter_by || 'N/A'}' (Page: ${page}, Limit: ${limit})`,
      );
      // Infer type or use `any` for search response
      const searchResults = await this.client
        .collections(this.collectionSchema.name)
        .documents()
        .search(searchParameters);

      this.logger.log(`Found ${searchResults.found} total hits in Typesense.`);

      // Use type assertion or `any` if necessary for hits
      const hits = (searchResults.hits || []) as { document: FontDocument }[];
      const ids = hits.map((hit) => hit.document.fontId);

      // Explicitly type variables for calculation
      const totalHitsNumber: number = Number(searchResults.found || 0);
      const limitNumber: number = Number(limit);
      const totalPages: number =
        limitNumber > 0 ? Math.ceil(totalHitsNumber / limitNumber) : 0;

      return {
        ids: ids,
        totalHits: totalHitsNumber,
        totalPages: totalPages,
        currentPage: page,
      };
    } catch (error) {
      this.logger.error(
        `Error searching Typesense: ${error.message}`,
        error.stack,
      );
      return { ids: [], totalHits: 0, totalPages: 0, currentPage: page };
    }
  }
  // --- End Search Method ---
}
