
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Family
 * 
 */
export type Family = $Result.DefaultSelection<Prisma.$FamilyPayload>
/**
 * Model Category
 * 
 */
export type Category = $Result.DefaultSelection<Prisma.$CategoryPayload>
/**
 * Model Kind
 * 
 */
export type Kind = $Result.DefaultSelection<Prisma.$KindPayload>
/**
 * Model Font
 * 
 */
export type Font = $Result.DefaultSelection<Prisma.$FontPayload>
/**
 * Model Variant
 * 
 */
export type Variant = $Result.DefaultSelection<Prisma.$VariantPayload>
/**
 * Model Upload
 * 
 */
export type Upload = $Result.DefaultSelection<Prisma.$UploadPayload>
/**
 * Model Design
 * 
 */
export type Design = $Result.DefaultSelection<Prisma.$DesignPayload>
/**
 * Model BlockCategory
 * 
 */
export type BlockCategory = $Result.DefaultSelection<Prisma.$BlockCategoryPayload>
/**
 * Model Block
 * 
 */
export type Block = $Result.DefaultSelection<Prisma.$BlockPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Families
 * const families = await prisma.family.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Families
   * const families = await prisma.family.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.family`: Exposes CRUD operations for the **Family** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Families
    * const families = await prisma.family.findMany()
    * ```
    */
  get family(): Prisma.FamilyDelegate<ExtArgs>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<ExtArgs>;

  /**
   * `prisma.kind`: Exposes CRUD operations for the **Kind** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Kinds
    * const kinds = await prisma.kind.findMany()
    * ```
    */
  get kind(): Prisma.KindDelegate<ExtArgs>;

  /**
   * `prisma.font`: Exposes CRUD operations for the **Font** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Fonts
    * const fonts = await prisma.font.findMany()
    * ```
    */
  get font(): Prisma.FontDelegate<ExtArgs>;

  /**
   * `prisma.variant`: Exposes CRUD operations for the **Variant** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Variants
    * const variants = await prisma.variant.findMany()
    * ```
    */
  get variant(): Prisma.VariantDelegate<ExtArgs>;

  /**
   * `prisma.upload`: Exposes CRUD operations for the **Upload** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Uploads
    * const uploads = await prisma.upload.findMany()
    * ```
    */
  get upload(): Prisma.UploadDelegate<ExtArgs>;

  /**
   * `prisma.design`: Exposes CRUD operations for the **Design** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Designs
    * const designs = await prisma.design.findMany()
    * ```
    */
  get design(): Prisma.DesignDelegate<ExtArgs>;

  /**
   * `prisma.blockCategory`: Exposes CRUD operations for the **BlockCategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BlockCategories
    * const blockCategories = await prisma.blockCategory.findMany()
    * ```
    */
  get blockCategory(): Prisma.BlockCategoryDelegate<ExtArgs>;

  /**
   * `prisma.block`: Exposes CRUD operations for the **Block** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Blocks
    * const blocks = await prisma.block.findMany()
    * ```
    */
  get block(): Prisma.BlockDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.6.0
   * Query Engine version: 23fdc5965b1e05fc54e5f26ed3de66776b93de64
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Family: 'Family',
    Category: 'Category',
    Kind: 'Kind',
    Font: 'Font',
    Variant: 'Variant',
    Upload: 'Upload',
    Design: 'Design',
    BlockCategory: 'BlockCategory',
    Block: 'Block'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'family' | 'category' | 'kind' | 'font' | 'variant' | 'upload' | 'design' | 'blockCategory' | 'block'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      Family: {
        payload: Prisma.$FamilyPayload<ExtArgs>
        fields: Prisma.FamilyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FamilyFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FamilyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FamilyFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FamilyPayload>
          }
          findFirst: {
            args: Prisma.FamilyFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FamilyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FamilyFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FamilyPayload>
          }
          findMany: {
            args: Prisma.FamilyFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FamilyPayload>[]
          }
          create: {
            args: Prisma.FamilyCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FamilyPayload>
          }
          createMany: {
            args: Prisma.FamilyCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.FamilyDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FamilyPayload>
          }
          update: {
            args: Prisma.FamilyUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FamilyPayload>
          }
          deleteMany: {
            args: Prisma.FamilyDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.FamilyUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.FamilyUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FamilyPayload>
          }
          aggregate: {
            args: Prisma.FamilyAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateFamily>
          }
          groupBy: {
            args: Prisma.FamilyGroupByArgs<ExtArgs>,
            result: $Utils.Optional<FamilyGroupByOutputType>[]
          }
          count: {
            args: Prisma.FamilyCountArgs<ExtArgs>,
            result: $Utils.Optional<FamilyCountAggregateOutputType> | number
          }
        }
      }
      Category: {
        payload: Prisma.$CategoryPayload<ExtArgs>
        fields: Prisma.CategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findFirst: {
            args: Prisma.CategoryFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findMany: {
            args: Prisma.CategoryFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          create: {
            args: Prisma.CategoryCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          createMany: {
            args: Prisma.CategoryCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.CategoryDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          update: {
            args: Prisma.CategoryUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          deleteMany: {
            args: Prisma.CategoryDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.CategoryUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.CategoryGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoryCountArgs<ExtArgs>,
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      Kind: {
        payload: Prisma.$KindPayload<ExtArgs>
        fields: Prisma.KindFieldRefs
        operations: {
          findUnique: {
            args: Prisma.KindFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$KindPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.KindFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$KindPayload>
          }
          findFirst: {
            args: Prisma.KindFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$KindPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.KindFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$KindPayload>
          }
          findMany: {
            args: Prisma.KindFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$KindPayload>[]
          }
          create: {
            args: Prisma.KindCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$KindPayload>
          }
          createMany: {
            args: Prisma.KindCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.KindDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$KindPayload>
          }
          update: {
            args: Prisma.KindUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$KindPayload>
          }
          deleteMany: {
            args: Prisma.KindDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.KindUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.KindUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$KindPayload>
          }
          aggregate: {
            args: Prisma.KindAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateKind>
          }
          groupBy: {
            args: Prisma.KindGroupByArgs<ExtArgs>,
            result: $Utils.Optional<KindGroupByOutputType>[]
          }
          count: {
            args: Prisma.KindCountArgs<ExtArgs>,
            result: $Utils.Optional<KindCountAggregateOutputType> | number
          }
        }
      }
      Font: {
        payload: Prisma.$FontPayload<ExtArgs>
        fields: Prisma.FontFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FontFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FontPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FontFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FontPayload>
          }
          findFirst: {
            args: Prisma.FontFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FontPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FontFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FontPayload>
          }
          findMany: {
            args: Prisma.FontFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FontPayload>[]
          }
          create: {
            args: Prisma.FontCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FontPayload>
          }
          createMany: {
            args: Prisma.FontCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.FontDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FontPayload>
          }
          update: {
            args: Prisma.FontUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FontPayload>
          }
          deleteMany: {
            args: Prisma.FontDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.FontUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.FontUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FontPayload>
          }
          aggregate: {
            args: Prisma.FontAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateFont>
          }
          groupBy: {
            args: Prisma.FontGroupByArgs<ExtArgs>,
            result: $Utils.Optional<FontGroupByOutputType>[]
          }
          count: {
            args: Prisma.FontCountArgs<ExtArgs>,
            result: $Utils.Optional<FontCountAggregateOutputType> | number
          }
        }
      }
      Variant: {
        payload: Prisma.$VariantPayload<ExtArgs>
        fields: Prisma.VariantFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VariantFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VariantPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VariantFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VariantPayload>
          }
          findFirst: {
            args: Prisma.VariantFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VariantPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VariantFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VariantPayload>
          }
          findMany: {
            args: Prisma.VariantFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VariantPayload>[]
          }
          create: {
            args: Prisma.VariantCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VariantPayload>
          }
          createMany: {
            args: Prisma.VariantCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.VariantDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VariantPayload>
          }
          update: {
            args: Prisma.VariantUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VariantPayload>
          }
          deleteMany: {
            args: Prisma.VariantDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.VariantUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.VariantUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VariantPayload>
          }
          aggregate: {
            args: Prisma.VariantAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateVariant>
          }
          groupBy: {
            args: Prisma.VariantGroupByArgs<ExtArgs>,
            result: $Utils.Optional<VariantGroupByOutputType>[]
          }
          count: {
            args: Prisma.VariantCountArgs<ExtArgs>,
            result: $Utils.Optional<VariantCountAggregateOutputType> | number
          }
        }
      }
      Upload: {
        payload: Prisma.$UploadPayload<ExtArgs>
        fields: Prisma.UploadFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UploadFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UploadPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UploadFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UploadPayload>
          }
          findFirst: {
            args: Prisma.UploadFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UploadPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UploadFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UploadPayload>
          }
          findMany: {
            args: Prisma.UploadFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UploadPayload>[]
          }
          create: {
            args: Prisma.UploadCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UploadPayload>
          }
          createMany: {
            args: Prisma.UploadCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UploadDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UploadPayload>
          }
          update: {
            args: Prisma.UploadUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UploadPayload>
          }
          deleteMany: {
            args: Prisma.UploadDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UploadUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UploadUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UploadPayload>
          }
          aggregate: {
            args: Prisma.UploadAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUpload>
          }
          groupBy: {
            args: Prisma.UploadGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UploadGroupByOutputType>[]
          }
          count: {
            args: Prisma.UploadCountArgs<ExtArgs>,
            result: $Utils.Optional<UploadCountAggregateOutputType> | number
          }
        }
      }
      Design: {
        payload: Prisma.$DesignPayload<ExtArgs>
        fields: Prisma.DesignFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DesignFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DesignPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DesignFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DesignPayload>
          }
          findFirst: {
            args: Prisma.DesignFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DesignPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DesignFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DesignPayload>
          }
          findMany: {
            args: Prisma.DesignFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DesignPayload>[]
          }
          create: {
            args: Prisma.DesignCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DesignPayload>
          }
          createMany: {
            args: Prisma.DesignCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.DesignDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DesignPayload>
          }
          update: {
            args: Prisma.DesignUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DesignPayload>
          }
          deleteMany: {
            args: Prisma.DesignDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.DesignUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.DesignUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DesignPayload>
          }
          aggregate: {
            args: Prisma.DesignAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateDesign>
          }
          groupBy: {
            args: Prisma.DesignGroupByArgs<ExtArgs>,
            result: $Utils.Optional<DesignGroupByOutputType>[]
          }
          count: {
            args: Prisma.DesignCountArgs<ExtArgs>,
            result: $Utils.Optional<DesignCountAggregateOutputType> | number
          }
        }
      }
      BlockCategory: {
        payload: Prisma.$BlockCategoryPayload<ExtArgs>
        fields: Prisma.BlockCategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BlockCategoryFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BlockCategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BlockCategoryFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BlockCategoryPayload>
          }
          findFirst: {
            args: Prisma.BlockCategoryFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BlockCategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BlockCategoryFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BlockCategoryPayload>
          }
          findMany: {
            args: Prisma.BlockCategoryFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BlockCategoryPayload>[]
          }
          create: {
            args: Prisma.BlockCategoryCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BlockCategoryPayload>
          }
          createMany: {
            args: Prisma.BlockCategoryCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.BlockCategoryDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BlockCategoryPayload>
          }
          update: {
            args: Prisma.BlockCategoryUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BlockCategoryPayload>
          }
          deleteMany: {
            args: Prisma.BlockCategoryDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.BlockCategoryUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.BlockCategoryUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BlockCategoryPayload>
          }
          aggregate: {
            args: Prisma.BlockCategoryAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateBlockCategory>
          }
          groupBy: {
            args: Prisma.BlockCategoryGroupByArgs<ExtArgs>,
            result: $Utils.Optional<BlockCategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.BlockCategoryCountArgs<ExtArgs>,
            result: $Utils.Optional<BlockCategoryCountAggregateOutputType> | number
          }
        }
      }
      Block: {
        payload: Prisma.$BlockPayload<ExtArgs>
        fields: Prisma.BlockFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BlockFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BlockPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BlockFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BlockPayload>
          }
          findFirst: {
            args: Prisma.BlockFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BlockPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BlockFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BlockPayload>
          }
          findMany: {
            args: Prisma.BlockFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BlockPayload>[]
          }
          create: {
            args: Prisma.BlockCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BlockPayload>
          }
          createMany: {
            args: Prisma.BlockCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.BlockDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BlockPayload>
          }
          update: {
            args: Prisma.BlockUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BlockPayload>
          }
          deleteMany: {
            args: Prisma.BlockDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.BlockUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.BlockUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BlockPayload>
          }
          aggregate: {
            args: Prisma.BlockAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateBlock>
          }
          groupBy: {
            args: Prisma.BlockGroupByArgs<ExtArgs>,
            result: $Utils.Optional<BlockGroupByOutputType>[]
          }
          count: {
            args: Prisma.BlockCountArgs<ExtArgs>,
            result: $Utils.Optional<BlockCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type FamilyCountOutputType
   */

  export type FamilyCountOutputType = {
    fonts: number
  }

  export type FamilyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fonts?: boolean | FamilyCountOutputTypeCountFontsArgs
  }

  // Custom InputTypes

  /**
   * FamilyCountOutputType without action
   */
  export type FamilyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FamilyCountOutputType
     */
    select?: FamilyCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * FamilyCountOutputType without action
   */
  export type FamilyCountOutputTypeCountFontsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FontWhereInput
  }



  /**
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    fonts: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fonts?: boolean | CategoryCountOutputTypeCountFontsArgs
  }

  // Custom InputTypes

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountFontsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FontWhereInput
  }



  /**
   * Count Type KindCountOutputType
   */

  export type KindCountOutputType = {
    fonts: number
  }

  export type KindCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fonts?: boolean | KindCountOutputTypeCountFontsArgs
  }

  // Custom InputTypes

  /**
   * KindCountOutputType without action
   */
  export type KindCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KindCountOutputType
     */
    select?: KindCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * KindCountOutputType without action
   */
  export type KindCountOutputTypeCountFontsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FontWhereInput
  }



  /**
   * Count Type FontCountOutputType
   */

  export type FontCountOutputType = {
    variants: number
  }

  export type FontCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    variants?: boolean | FontCountOutputTypeCountVariantsArgs
  }

  // Custom InputTypes

  /**
   * FontCountOutputType without action
   */
  export type FontCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FontCountOutputType
     */
    select?: FontCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * FontCountOutputType without action
   */
  export type FontCountOutputTypeCountVariantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VariantWhereInput
  }



  /**
   * Count Type BlockCategoryCountOutputType
   */

  export type BlockCategoryCountOutputType = {
    blocks: number
  }

  export type BlockCategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    blocks?: boolean | BlockCategoryCountOutputTypeCountBlocksArgs
  }

  // Custom InputTypes

  /**
   * BlockCategoryCountOutputType without action
   */
  export type BlockCategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockCategoryCountOutputType
     */
    select?: BlockCategoryCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * BlockCategoryCountOutputType without action
   */
  export type BlockCategoryCountOutputTypeCountBlocksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlockWhereInput
  }



  /**
   * Models
   */

  /**
   * Model Family
   */

  export type AggregateFamily = {
    _count: FamilyCountAggregateOutputType | null
    _avg: FamilyAvgAggregateOutputType | null
    _sum: FamilySumAggregateOutputType | null
    _min: FamilyMinAggregateOutputType | null
    _max: FamilyMaxAggregateOutputType | null
  }

  export type FamilyAvgAggregateOutputType = {
    id: number | null
  }

  export type FamilySumAggregateOutputType = {
    id: number | null
  }

  export type FamilyMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type FamilyMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type FamilyCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type FamilyAvgAggregateInputType = {
    id?: true
  }

  export type FamilySumAggregateInputType = {
    id?: true
  }

  export type FamilyMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type FamilyMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type FamilyCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type FamilyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Family to aggregate.
     */
    where?: FamilyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Families to fetch.
     */
    orderBy?: FamilyOrderByWithRelationInput | FamilyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FamilyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Families from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Families.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Families
    **/
    _count?: true | FamilyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FamilyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FamilySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FamilyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FamilyMaxAggregateInputType
  }

  export type GetFamilyAggregateType<T extends FamilyAggregateArgs> = {
        [P in keyof T & keyof AggregateFamily]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFamily[P]>
      : GetScalarType<T[P], AggregateFamily[P]>
  }




  export type FamilyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FamilyWhereInput
    orderBy?: FamilyOrderByWithAggregationInput | FamilyOrderByWithAggregationInput[]
    by: FamilyScalarFieldEnum[] | FamilyScalarFieldEnum
    having?: FamilyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FamilyCountAggregateInputType | true
    _avg?: FamilyAvgAggregateInputType
    _sum?: FamilySumAggregateInputType
    _min?: FamilyMinAggregateInputType
    _max?: FamilyMaxAggregateInputType
  }

  export type FamilyGroupByOutputType = {
    id: number
    name: string
    _count: FamilyCountAggregateOutputType | null
    _avg: FamilyAvgAggregateOutputType | null
    _sum: FamilySumAggregateOutputType | null
    _min: FamilyMinAggregateOutputType | null
    _max: FamilyMaxAggregateOutputType | null
  }

  type GetFamilyGroupByPayload<T extends FamilyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FamilyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FamilyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FamilyGroupByOutputType[P]>
            : GetScalarType<T[P], FamilyGroupByOutputType[P]>
        }
      >
    >


  export type FamilySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    fonts?: boolean | Family$fontsArgs<ExtArgs>
    _count?: boolean | FamilyCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["family"]>

  export type FamilySelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type FamilyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fonts?: boolean | Family$fontsArgs<ExtArgs>
    _count?: boolean | FamilyCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $FamilyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Family"
    objects: {
      fonts: Prisma.$FontPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["family"]>
    composites: {}
  }


  type FamilyGetPayload<S extends boolean | null | undefined | FamilyDefaultArgs> = $Result.GetResult<Prisma.$FamilyPayload, S>

  type FamilyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<FamilyFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: FamilyCountAggregateInputType | true
    }

  export interface FamilyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Family'], meta: { name: 'Family' } }
    /**
     * Find zero or one Family that matches the filter.
     * @param {FamilyFindUniqueArgs} args - Arguments to find a Family
     * @example
     * // Get one Family
     * const family = await prisma.family.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends FamilyFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, FamilyFindUniqueArgs<ExtArgs>>
    ): Prisma__FamilyClient<$Result.GetResult<Prisma.$FamilyPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Family that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {FamilyFindUniqueOrThrowArgs} args - Arguments to find a Family
     * @example
     * // Get one Family
     * const family = await prisma.family.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends FamilyFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, FamilyFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__FamilyClient<$Result.GetResult<Prisma.$FamilyPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Family that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FamilyFindFirstArgs} args - Arguments to find a Family
     * @example
     * // Get one Family
     * const family = await prisma.family.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends FamilyFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, FamilyFindFirstArgs<ExtArgs>>
    ): Prisma__FamilyClient<$Result.GetResult<Prisma.$FamilyPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Family that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FamilyFindFirstOrThrowArgs} args - Arguments to find a Family
     * @example
     * // Get one Family
     * const family = await prisma.family.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends FamilyFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, FamilyFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__FamilyClient<$Result.GetResult<Prisma.$FamilyPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Families that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FamilyFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Families
     * const families = await prisma.family.findMany()
     * 
     * // Get first 10 Families
     * const families = await prisma.family.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const familyWithIdOnly = await prisma.family.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends FamilyFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FamilyFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FamilyPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Family.
     * @param {FamilyCreateArgs} args - Arguments to create a Family.
     * @example
     * // Create one Family
     * const Family = await prisma.family.create({
     *   data: {
     *     // ... data to create a Family
     *   }
     * })
     * 
    **/
    create<T extends FamilyCreateArgs<ExtArgs>>(
      args: SelectSubset<T, FamilyCreateArgs<ExtArgs>>
    ): Prisma__FamilyClient<$Result.GetResult<Prisma.$FamilyPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Families.
     *     @param {FamilyCreateManyArgs} args - Arguments to create many Families.
     *     @example
     *     // Create many Families
     *     const family = await prisma.family.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends FamilyCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FamilyCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Family.
     * @param {FamilyDeleteArgs} args - Arguments to delete one Family.
     * @example
     * // Delete one Family
     * const Family = await prisma.family.delete({
     *   where: {
     *     // ... filter to delete one Family
     *   }
     * })
     * 
    **/
    delete<T extends FamilyDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, FamilyDeleteArgs<ExtArgs>>
    ): Prisma__FamilyClient<$Result.GetResult<Prisma.$FamilyPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Family.
     * @param {FamilyUpdateArgs} args - Arguments to update one Family.
     * @example
     * // Update one Family
     * const family = await prisma.family.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends FamilyUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, FamilyUpdateArgs<ExtArgs>>
    ): Prisma__FamilyClient<$Result.GetResult<Prisma.$FamilyPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Families.
     * @param {FamilyDeleteManyArgs} args - Arguments to filter Families to delete.
     * @example
     * // Delete a few Families
     * const { count } = await prisma.family.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends FamilyDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FamilyDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Families.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FamilyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Families
     * const family = await prisma.family.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends FamilyUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, FamilyUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Family.
     * @param {FamilyUpsertArgs} args - Arguments to update or create a Family.
     * @example
     * // Update or create a Family
     * const family = await prisma.family.upsert({
     *   create: {
     *     // ... data to create a Family
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Family we want to update
     *   }
     * })
    **/
    upsert<T extends FamilyUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, FamilyUpsertArgs<ExtArgs>>
    ): Prisma__FamilyClient<$Result.GetResult<Prisma.$FamilyPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Families.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FamilyCountArgs} args - Arguments to filter Families to count.
     * @example
     * // Count the number of Families
     * const count = await prisma.family.count({
     *   where: {
     *     // ... the filter for the Families we want to count
     *   }
     * })
    **/
    count<T extends FamilyCountArgs>(
      args?: Subset<T, FamilyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FamilyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Family.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FamilyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FamilyAggregateArgs>(args: Subset<T, FamilyAggregateArgs>): Prisma.PrismaPromise<GetFamilyAggregateType<T>>

    /**
     * Group by Family.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FamilyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FamilyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FamilyGroupByArgs['orderBy'] }
        : { orderBy?: FamilyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FamilyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFamilyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Family model
   */
  readonly fields: FamilyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Family.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FamilyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    fonts<T extends Family$fontsArgs<ExtArgs> = {}>(args?: Subset<T, Family$fontsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FontPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Family model
   */ 
  interface FamilyFieldRefs {
    readonly id: FieldRef<"Family", 'Int'>
    readonly name: FieldRef<"Family", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Family findUnique
   */
  export type FamilyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Family
     */
    select?: FamilySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FamilyInclude<ExtArgs> | null
    /**
     * Filter, which Family to fetch.
     */
    where: FamilyWhereUniqueInput
  }


  /**
   * Family findUniqueOrThrow
   */
  export type FamilyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Family
     */
    select?: FamilySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FamilyInclude<ExtArgs> | null
    /**
     * Filter, which Family to fetch.
     */
    where: FamilyWhereUniqueInput
  }


  /**
   * Family findFirst
   */
  export type FamilyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Family
     */
    select?: FamilySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FamilyInclude<ExtArgs> | null
    /**
     * Filter, which Family to fetch.
     */
    where?: FamilyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Families to fetch.
     */
    orderBy?: FamilyOrderByWithRelationInput | FamilyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Families.
     */
    cursor?: FamilyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Families from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Families.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Families.
     */
    distinct?: FamilyScalarFieldEnum | FamilyScalarFieldEnum[]
  }


  /**
   * Family findFirstOrThrow
   */
  export type FamilyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Family
     */
    select?: FamilySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FamilyInclude<ExtArgs> | null
    /**
     * Filter, which Family to fetch.
     */
    where?: FamilyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Families to fetch.
     */
    orderBy?: FamilyOrderByWithRelationInput | FamilyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Families.
     */
    cursor?: FamilyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Families from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Families.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Families.
     */
    distinct?: FamilyScalarFieldEnum | FamilyScalarFieldEnum[]
  }


  /**
   * Family findMany
   */
  export type FamilyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Family
     */
    select?: FamilySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FamilyInclude<ExtArgs> | null
    /**
     * Filter, which Families to fetch.
     */
    where?: FamilyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Families to fetch.
     */
    orderBy?: FamilyOrderByWithRelationInput | FamilyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Families.
     */
    cursor?: FamilyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Families from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Families.
     */
    skip?: number
    distinct?: FamilyScalarFieldEnum | FamilyScalarFieldEnum[]
  }


  /**
   * Family create
   */
  export type FamilyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Family
     */
    select?: FamilySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FamilyInclude<ExtArgs> | null
    /**
     * The data needed to create a Family.
     */
    data: XOR<FamilyCreateInput, FamilyUncheckedCreateInput>
  }


  /**
   * Family createMany
   */
  export type FamilyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Families.
     */
    data: FamilyCreateManyInput | FamilyCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Family update
   */
  export type FamilyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Family
     */
    select?: FamilySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FamilyInclude<ExtArgs> | null
    /**
     * The data needed to update a Family.
     */
    data: XOR<FamilyUpdateInput, FamilyUncheckedUpdateInput>
    /**
     * Choose, which Family to update.
     */
    where: FamilyWhereUniqueInput
  }


  /**
   * Family updateMany
   */
  export type FamilyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Families.
     */
    data: XOR<FamilyUpdateManyMutationInput, FamilyUncheckedUpdateManyInput>
    /**
     * Filter which Families to update
     */
    where?: FamilyWhereInput
  }


  /**
   * Family upsert
   */
  export type FamilyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Family
     */
    select?: FamilySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FamilyInclude<ExtArgs> | null
    /**
     * The filter to search for the Family to update in case it exists.
     */
    where: FamilyWhereUniqueInput
    /**
     * In case the Family found by the `where` argument doesn't exist, create a new Family with this data.
     */
    create: XOR<FamilyCreateInput, FamilyUncheckedCreateInput>
    /**
     * In case the Family was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FamilyUpdateInput, FamilyUncheckedUpdateInput>
  }


  /**
   * Family delete
   */
  export type FamilyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Family
     */
    select?: FamilySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FamilyInclude<ExtArgs> | null
    /**
     * Filter which Family to delete.
     */
    where: FamilyWhereUniqueInput
  }


  /**
   * Family deleteMany
   */
  export type FamilyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Families to delete
     */
    where?: FamilyWhereInput
  }


  /**
   * Family.fonts
   */
  export type Family$fontsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Font
     */
    select?: FontSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FontInclude<ExtArgs> | null
    where?: FontWhereInput
    orderBy?: FontOrderByWithRelationInput | FontOrderByWithRelationInput[]
    cursor?: FontWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FontScalarFieldEnum | FontScalarFieldEnum[]
  }


  /**
   * Family without action
   */
  export type FamilyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Family
     */
    select?: FamilySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FamilyInclude<ExtArgs> | null
  }



  /**
   * Model Category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryAvgAggregateOutputType = {
    id: number | null
  }

  export type CategorySumAggregateOutputType = {
    id: number | null
  }

  export type CategoryMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type CategoryAvgAggregateInputType = {
    id?: true
  }

  export type CategorySumAggregateInputType = {
    id?: true
  }

  export type CategoryMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Category to aggregate.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type CategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithAggregationInput | CategoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _avg?: CategoryAvgAggregateInputType
    _sum?: CategorySumAggregateInputType
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    id: number
    name: string
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type CategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    fonts?: boolean | Category$fontsArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type CategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fonts?: boolean | Category$fontsArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $CategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Category"
    objects: {
      fonts: Prisma.$FontPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["category"]>
    composites: {}
  }


  type CategoryGetPayload<S extends boolean | null | undefined | CategoryDefaultArgs> = $Result.GetResult<Prisma.$CategoryPayload, S>

  type CategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CategoryFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface CategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Category'], meta: { name: 'Category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CategoryFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, CategoryFindUniqueArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Category that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoryFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CategoryFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoryFindFirstArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoryFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CategoryFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoryFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
    **/
    create<T extends CategoryCreateArgs<ExtArgs>>(
      args: SelectSubset<T, CategoryCreateArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Categories.
     *     @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     *     @example
     *     // Create many Categories
     *     const category = await prisma.category.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CategoryCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoryCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
    **/
    delete<T extends CategoryDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, CategoryDeleteArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CategoryUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, CategoryUpdateArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CategoryDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoryDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CategoryUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, CategoryUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
    **/
    upsert<T extends CategoryUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, CategoryUpsertArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Category model
   */
  readonly fields: CategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    fonts<T extends Category$fontsArgs<ExtArgs> = {}>(args?: Subset<T, Category$fontsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FontPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Category model
   */ 
  interface CategoryFieldRefs {
    readonly id: FieldRef<"Category", 'Int'>
    readonly name: FieldRef<"Category", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Category findUnique
   */
  export type CategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }


  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }


  /**
   * Category findFirst
   */
  export type CategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }


  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }


  /**
   * Category findMany
   */
  export type CategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }


  /**
   * Category create
   */
  export type CategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Category.
     */
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }


  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Category update
   */
  export type CategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Category.
     */
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
     */
    where: CategoryWhereUniqueInput
  }


  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
  }


  /**
   * Category upsert
   */
  export type CategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Category to update in case it exists.
     */
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     */
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }


  /**
   * Category delete
   */
  export type CategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter which Category to delete.
     */
    where: CategoryWhereUniqueInput
  }


  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput
  }


  /**
   * Category.fonts
   */
  export type Category$fontsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Font
     */
    select?: FontSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FontInclude<ExtArgs> | null
    where?: FontWhereInput
    orderBy?: FontOrderByWithRelationInput | FontOrderByWithRelationInput[]
    cursor?: FontWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FontScalarFieldEnum | FontScalarFieldEnum[]
  }


  /**
   * Category without action
   */
  export type CategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
  }



  /**
   * Model Kind
   */

  export type AggregateKind = {
    _count: KindCountAggregateOutputType | null
    _avg: KindAvgAggregateOutputType | null
    _sum: KindSumAggregateOutputType | null
    _min: KindMinAggregateOutputType | null
    _max: KindMaxAggregateOutputType | null
  }

  export type KindAvgAggregateOutputType = {
    id: number | null
  }

  export type KindSumAggregateOutputType = {
    id: number | null
  }

  export type KindMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type KindMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type KindCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type KindAvgAggregateInputType = {
    id?: true
  }

  export type KindSumAggregateInputType = {
    id?: true
  }

  export type KindMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type KindMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type KindCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type KindAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Kind to aggregate.
     */
    where?: KindWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Kinds to fetch.
     */
    orderBy?: KindOrderByWithRelationInput | KindOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: KindWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Kinds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Kinds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Kinds
    **/
    _count?: true | KindCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: KindAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: KindSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: KindMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: KindMaxAggregateInputType
  }

  export type GetKindAggregateType<T extends KindAggregateArgs> = {
        [P in keyof T & keyof AggregateKind]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateKind[P]>
      : GetScalarType<T[P], AggregateKind[P]>
  }




  export type KindGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: KindWhereInput
    orderBy?: KindOrderByWithAggregationInput | KindOrderByWithAggregationInput[]
    by: KindScalarFieldEnum[] | KindScalarFieldEnum
    having?: KindScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: KindCountAggregateInputType | true
    _avg?: KindAvgAggregateInputType
    _sum?: KindSumAggregateInputType
    _min?: KindMinAggregateInputType
    _max?: KindMaxAggregateInputType
  }

  export type KindGroupByOutputType = {
    id: number
    name: string
    _count: KindCountAggregateOutputType | null
    _avg: KindAvgAggregateOutputType | null
    _sum: KindSumAggregateOutputType | null
    _min: KindMinAggregateOutputType | null
    _max: KindMaxAggregateOutputType | null
  }

  type GetKindGroupByPayload<T extends KindGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<KindGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof KindGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], KindGroupByOutputType[P]>
            : GetScalarType<T[P], KindGroupByOutputType[P]>
        }
      >
    >


  export type KindSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    fonts?: boolean | Kind$fontsArgs<ExtArgs>
    _count?: boolean | KindCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["kind"]>

  export type KindSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type KindInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fonts?: boolean | Kind$fontsArgs<ExtArgs>
    _count?: boolean | KindCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $KindPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Kind"
    objects: {
      fonts: Prisma.$FontPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["kind"]>
    composites: {}
  }


  type KindGetPayload<S extends boolean | null | undefined | KindDefaultArgs> = $Result.GetResult<Prisma.$KindPayload, S>

  type KindCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<KindFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: KindCountAggregateInputType | true
    }

  export interface KindDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Kind'], meta: { name: 'Kind' } }
    /**
     * Find zero or one Kind that matches the filter.
     * @param {KindFindUniqueArgs} args - Arguments to find a Kind
     * @example
     * // Get one Kind
     * const kind = await prisma.kind.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends KindFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, KindFindUniqueArgs<ExtArgs>>
    ): Prisma__KindClient<$Result.GetResult<Prisma.$KindPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Kind that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {KindFindUniqueOrThrowArgs} args - Arguments to find a Kind
     * @example
     * // Get one Kind
     * const kind = await prisma.kind.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends KindFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, KindFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__KindClient<$Result.GetResult<Prisma.$KindPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Kind that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KindFindFirstArgs} args - Arguments to find a Kind
     * @example
     * // Get one Kind
     * const kind = await prisma.kind.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends KindFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, KindFindFirstArgs<ExtArgs>>
    ): Prisma__KindClient<$Result.GetResult<Prisma.$KindPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Kind that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KindFindFirstOrThrowArgs} args - Arguments to find a Kind
     * @example
     * // Get one Kind
     * const kind = await prisma.kind.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends KindFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, KindFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__KindClient<$Result.GetResult<Prisma.$KindPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Kinds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KindFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Kinds
     * const kinds = await prisma.kind.findMany()
     * 
     * // Get first 10 Kinds
     * const kinds = await prisma.kind.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const kindWithIdOnly = await prisma.kind.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends KindFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, KindFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KindPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Kind.
     * @param {KindCreateArgs} args - Arguments to create a Kind.
     * @example
     * // Create one Kind
     * const Kind = await prisma.kind.create({
     *   data: {
     *     // ... data to create a Kind
     *   }
     * })
     * 
    **/
    create<T extends KindCreateArgs<ExtArgs>>(
      args: SelectSubset<T, KindCreateArgs<ExtArgs>>
    ): Prisma__KindClient<$Result.GetResult<Prisma.$KindPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Kinds.
     *     @param {KindCreateManyArgs} args - Arguments to create many Kinds.
     *     @example
     *     // Create many Kinds
     *     const kind = await prisma.kind.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends KindCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, KindCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Kind.
     * @param {KindDeleteArgs} args - Arguments to delete one Kind.
     * @example
     * // Delete one Kind
     * const Kind = await prisma.kind.delete({
     *   where: {
     *     // ... filter to delete one Kind
     *   }
     * })
     * 
    **/
    delete<T extends KindDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, KindDeleteArgs<ExtArgs>>
    ): Prisma__KindClient<$Result.GetResult<Prisma.$KindPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Kind.
     * @param {KindUpdateArgs} args - Arguments to update one Kind.
     * @example
     * // Update one Kind
     * const kind = await prisma.kind.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends KindUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, KindUpdateArgs<ExtArgs>>
    ): Prisma__KindClient<$Result.GetResult<Prisma.$KindPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Kinds.
     * @param {KindDeleteManyArgs} args - Arguments to filter Kinds to delete.
     * @example
     * // Delete a few Kinds
     * const { count } = await prisma.kind.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends KindDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, KindDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Kinds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KindUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Kinds
     * const kind = await prisma.kind.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends KindUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, KindUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Kind.
     * @param {KindUpsertArgs} args - Arguments to update or create a Kind.
     * @example
     * // Update or create a Kind
     * const kind = await prisma.kind.upsert({
     *   create: {
     *     // ... data to create a Kind
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Kind we want to update
     *   }
     * })
    **/
    upsert<T extends KindUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, KindUpsertArgs<ExtArgs>>
    ): Prisma__KindClient<$Result.GetResult<Prisma.$KindPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Kinds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KindCountArgs} args - Arguments to filter Kinds to count.
     * @example
     * // Count the number of Kinds
     * const count = await prisma.kind.count({
     *   where: {
     *     // ... the filter for the Kinds we want to count
     *   }
     * })
    **/
    count<T extends KindCountArgs>(
      args?: Subset<T, KindCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], KindCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Kind.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KindAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends KindAggregateArgs>(args: Subset<T, KindAggregateArgs>): Prisma.PrismaPromise<GetKindAggregateType<T>>

    /**
     * Group by Kind.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KindGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends KindGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: KindGroupByArgs['orderBy'] }
        : { orderBy?: KindGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, KindGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetKindGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Kind model
   */
  readonly fields: KindFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Kind.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__KindClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    fonts<T extends Kind$fontsArgs<ExtArgs> = {}>(args?: Subset<T, Kind$fontsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FontPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Kind model
   */ 
  interface KindFieldRefs {
    readonly id: FieldRef<"Kind", 'Int'>
    readonly name: FieldRef<"Kind", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Kind findUnique
   */
  export type KindFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kind
     */
    select?: KindSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: KindInclude<ExtArgs> | null
    /**
     * Filter, which Kind to fetch.
     */
    where: KindWhereUniqueInput
  }


  /**
   * Kind findUniqueOrThrow
   */
  export type KindFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kind
     */
    select?: KindSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: KindInclude<ExtArgs> | null
    /**
     * Filter, which Kind to fetch.
     */
    where: KindWhereUniqueInput
  }


  /**
   * Kind findFirst
   */
  export type KindFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kind
     */
    select?: KindSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: KindInclude<ExtArgs> | null
    /**
     * Filter, which Kind to fetch.
     */
    where?: KindWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Kinds to fetch.
     */
    orderBy?: KindOrderByWithRelationInput | KindOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Kinds.
     */
    cursor?: KindWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Kinds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Kinds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Kinds.
     */
    distinct?: KindScalarFieldEnum | KindScalarFieldEnum[]
  }


  /**
   * Kind findFirstOrThrow
   */
  export type KindFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kind
     */
    select?: KindSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: KindInclude<ExtArgs> | null
    /**
     * Filter, which Kind to fetch.
     */
    where?: KindWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Kinds to fetch.
     */
    orderBy?: KindOrderByWithRelationInput | KindOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Kinds.
     */
    cursor?: KindWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Kinds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Kinds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Kinds.
     */
    distinct?: KindScalarFieldEnum | KindScalarFieldEnum[]
  }


  /**
   * Kind findMany
   */
  export type KindFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kind
     */
    select?: KindSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: KindInclude<ExtArgs> | null
    /**
     * Filter, which Kinds to fetch.
     */
    where?: KindWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Kinds to fetch.
     */
    orderBy?: KindOrderByWithRelationInput | KindOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Kinds.
     */
    cursor?: KindWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Kinds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Kinds.
     */
    skip?: number
    distinct?: KindScalarFieldEnum | KindScalarFieldEnum[]
  }


  /**
   * Kind create
   */
  export type KindCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kind
     */
    select?: KindSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: KindInclude<ExtArgs> | null
    /**
     * The data needed to create a Kind.
     */
    data: XOR<KindCreateInput, KindUncheckedCreateInput>
  }


  /**
   * Kind createMany
   */
  export type KindCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Kinds.
     */
    data: KindCreateManyInput | KindCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Kind update
   */
  export type KindUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kind
     */
    select?: KindSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: KindInclude<ExtArgs> | null
    /**
     * The data needed to update a Kind.
     */
    data: XOR<KindUpdateInput, KindUncheckedUpdateInput>
    /**
     * Choose, which Kind to update.
     */
    where: KindWhereUniqueInput
  }


  /**
   * Kind updateMany
   */
  export type KindUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Kinds.
     */
    data: XOR<KindUpdateManyMutationInput, KindUncheckedUpdateManyInput>
    /**
     * Filter which Kinds to update
     */
    where?: KindWhereInput
  }


  /**
   * Kind upsert
   */
  export type KindUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kind
     */
    select?: KindSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: KindInclude<ExtArgs> | null
    /**
     * The filter to search for the Kind to update in case it exists.
     */
    where: KindWhereUniqueInput
    /**
     * In case the Kind found by the `where` argument doesn't exist, create a new Kind with this data.
     */
    create: XOR<KindCreateInput, KindUncheckedCreateInput>
    /**
     * In case the Kind was found with the provided `where` argument, update it with this data.
     */
    update: XOR<KindUpdateInput, KindUncheckedUpdateInput>
  }


  /**
   * Kind delete
   */
  export type KindDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kind
     */
    select?: KindSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: KindInclude<ExtArgs> | null
    /**
     * Filter which Kind to delete.
     */
    where: KindWhereUniqueInput
  }


  /**
   * Kind deleteMany
   */
  export type KindDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Kinds to delete
     */
    where?: KindWhereInput
  }


  /**
   * Kind.fonts
   */
  export type Kind$fontsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Font
     */
    select?: FontSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FontInclude<ExtArgs> | null
    where?: FontWhereInput
    orderBy?: FontOrderByWithRelationInput | FontOrderByWithRelationInput[]
    cursor?: FontWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FontScalarFieldEnum | FontScalarFieldEnum[]
  }


  /**
   * Kind without action
   */
  export type KindDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kind
     */
    select?: KindSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: KindInclude<ExtArgs> | null
  }



  /**
   * Model Font
   */

  export type AggregateFont = {
    _count: FontCountAggregateOutputType | null
    _avg: FontAvgAggregateOutputType | null
    _sum: FontSumAggregateOutputType | null
    _min: FontMinAggregateOutputType | null
    _max: FontMaxAggregateOutputType | null
  }

  export type FontAvgAggregateOutputType = {
    id: number | null
    familyId: number | null
    categoryId: number | null
    kindId: number | null
  }

  export type FontSumAggregateOutputType = {
    id: number | null
    familyId: number | null
    categoryId: number | null
    kindId: number | null
  }

  export type FontMinAggregateOutputType = {
    id: number | null
    familyId: number | null
    categoryId: number | null
    kindId: number | null
  }

  export type FontMaxAggregateOutputType = {
    id: number | null
    familyId: number | null
    categoryId: number | null
    kindId: number | null
  }

  export type FontCountAggregateOutputType = {
    id: number
    familyId: number
    categoryId: number
    kindId: number
    subsets: number
    _all: number
  }


  export type FontAvgAggregateInputType = {
    id?: true
    familyId?: true
    categoryId?: true
    kindId?: true
  }

  export type FontSumAggregateInputType = {
    id?: true
    familyId?: true
    categoryId?: true
    kindId?: true
  }

  export type FontMinAggregateInputType = {
    id?: true
    familyId?: true
    categoryId?: true
    kindId?: true
  }

  export type FontMaxAggregateInputType = {
    id?: true
    familyId?: true
    categoryId?: true
    kindId?: true
  }

  export type FontCountAggregateInputType = {
    id?: true
    familyId?: true
    categoryId?: true
    kindId?: true
    subsets?: true
    _all?: true
  }

  export type FontAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Font to aggregate.
     */
    where?: FontWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fonts to fetch.
     */
    orderBy?: FontOrderByWithRelationInput | FontOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FontWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fonts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fonts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Fonts
    **/
    _count?: true | FontCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FontAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FontSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FontMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FontMaxAggregateInputType
  }

  export type GetFontAggregateType<T extends FontAggregateArgs> = {
        [P in keyof T & keyof AggregateFont]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFont[P]>
      : GetScalarType<T[P], AggregateFont[P]>
  }




  export type FontGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FontWhereInput
    orderBy?: FontOrderByWithAggregationInput | FontOrderByWithAggregationInput[]
    by: FontScalarFieldEnum[] | FontScalarFieldEnum
    having?: FontScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FontCountAggregateInputType | true
    _avg?: FontAvgAggregateInputType
    _sum?: FontSumAggregateInputType
    _min?: FontMinAggregateInputType
    _max?: FontMaxAggregateInputType
  }

  export type FontGroupByOutputType = {
    id: number
    familyId: number
    categoryId: number
    kindId: number
    subsets: string[]
    _count: FontCountAggregateOutputType | null
    _avg: FontAvgAggregateOutputType | null
    _sum: FontSumAggregateOutputType | null
    _min: FontMinAggregateOutputType | null
    _max: FontMaxAggregateOutputType | null
  }

  type GetFontGroupByPayload<T extends FontGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FontGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FontGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FontGroupByOutputType[P]>
            : GetScalarType<T[P], FontGroupByOutputType[P]>
        }
      >
    >


  export type FontSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    familyId?: boolean
    categoryId?: boolean
    kindId?: boolean
    subsets?: boolean
    family?: boolean | FamilyDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    kind?: boolean | KindDefaultArgs<ExtArgs>
    variants?: boolean | Font$variantsArgs<ExtArgs>
    _count?: boolean | FontCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["font"]>

  export type FontSelectScalar = {
    id?: boolean
    familyId?: boolean
    categoryId?: boolean
    kindId?: boolean
    subsets?: boolean
  }

  export type FontInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    family?: boolean | FamilyDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    kind?: boolean | KindDefaultArgs<ExtArgs>
    variants?: boolean | Font$variantsArgs<ExtArgs>
    _count?: boolean | FontCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $FontPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Font"
    objects: {
      family: Prisma.$FamilyPayload<ExtArgs>
      category: Prisma.$CategoryPayload<ExtArgs>
      kind: Prisma.$KindPayload<ExtArgs>
      variants: Prisma.$VariantPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      familyId: number
      categoryId: number
      kindId: number
      subsets: string[]
    }, ExtArgs["result"]["font"]>
    composites: {}
  }


  type FontGetPayload<S extends boolean | null | undefined | FontDefaultArgs> = $Result.GetResult<Prisma.$FontPayload, S>

  type FontCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<FontFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: FontCountAggregateInputType | true
    }

  export interface FontDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Font'], meta: { name: 'Font' } }
    /**
     * Find zero or one Font that matches the filter.
     * @param {FontFindUniqueArgs} args - Arguments to find a Font
     * @example
     * // Get one Font
     * const font = await prisma.font.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends FontFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, FontFindUniqueArgs<ExtArgs>>
    ): Prisma__FontClient<$Result.GetResult<Prisma.$FontPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Font that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {FontFindUniqueOrThrowArgs} args - Arguments to find a Font
     * @example
     * // Get one Font
     * const font = await prisma.font.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends FontFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, FontFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__FontClient<$Result.GetResult<Prisma.$FontPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Font that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FontFindFirstArgs} args - Arguments to find a Font
     * @example
     * // Get one Font
     * const font = await prisma.font.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends FontFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, FontFindFirstArgs<ExtArgs>>
    ): Prisma__FontClient<$Result.GetResult<Prisma.$FontPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Font that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FontFindFirstOrThrowArgs} args - Arguments to find a Font
     * @example
     * // Get one Font
     * const font = await prisma.font.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends FontFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, FontFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__FontClient<$Result.GetResult<Prisma.$FontPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Fonts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FontFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Fonts
     * const fonts = await prisma.font.findMany()
     * 
     * // Get first 10 Fonts
     * const fonts = await prisma.font.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fontWithIdOnly = await prisma.font.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends FontFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FontFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FontPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Font.
     * @param {FontCreateArgs} args - Arguments to create a Font.
     * @example
     * // Create one Font
     * const Font = await prisma.font.create({
     *   data: {
     *     // ... data to create a Font
     *   }
     * })
     * 
    **/
    create<T extends FontCreateArgs<ExtArgs>>(
      args: SelectSubset<T, FontCreateArgs<ExtArgs>>
    ): Prisma__FontClient<$Result.GetResult<Prisma.$FontPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Fonts.
     *     @param {FontCreateManyArgs} args - Arguments to create many Fonts.
     *     @example
     *     // Create many Fonts
     *     const font = await prisma.font.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends FontCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FontCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Font.
     * @param {FontDeleteArgs} args - Arguments to delete one Font.
     * @example
     * // Delete one Font
     * const Font = await prisma.font.delete({
     *   where: {
     *     // ... filter to delete one Font
     *   }
     * })
     * 
    **/
    delete<T extends FontDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, FontDeleteArgs<ExtArgs>>
    ): Prisma__FontClient<$Result.GetResult<Prisma.$FontPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Font.
     * @param {FontUpdateArgs} args - Arguments to update one Font.
     * @example
     * // Update one Font
     * const font = await prisma.font.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends FontUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, FontUpdateArgs<ExtArgs>>
    ): Prisma__FontClient<$Result.GetResult<Prisma.$FontPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Fonts.
     * @param {FontDeleteManyArgs} args - Arguments to filter Fonts to delete.
     * @example
     * // Delete a few Fonts
     * const { count } = await prisma.font.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends FontDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FontDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Fonts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FontUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Fonts
     * const font = await prisma.font.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends FontUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, FontUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Font.
     * @param {FontUpsertArgs} args - Arguments to update or create a Font.
     * @example
     * // Update or create a Font
     * const font = await prisma.font.upsert({
     *   create: {
     *     // ... data to create a Font
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Font we want to update
     *   }
     * })
    **/
    upsert<T extends FontUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, FontUpsertArgs<ExtArgs>>
    ): Prisma__FontClient<$Result.GetResult<Prisma.$FontPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Fonts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FontCountArgs} args - Arguments to filter Fonts to count.
     * @example
     * // Count the number of Fonts
     * const count = await prisma.font.count({
     *   where: {
     *     // ... the filter for the Fonts we want to count
     *   }
     * })
    **/
    count<T extends FontCountArgs>(
      args?: Subset<T, FontCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FontCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Font.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FontAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FontAggregateArgs>(args: Subset<T, FontAggregateArgs>): Prisma.PrismaPromise<GetFontAggregateType<T>>

    /**
     * Group by Font.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FontGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FontGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FontGroupByArgs['orderBy'] }
        : { orderBy?: FontGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FontGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFontGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Font model
   */
  readonly fields: FontFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Font.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FontClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    family<T extends FamilyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FamilyDefaultArgs<ExtArgs>>): Prisma__FamilyClient<$Result.GetResult<Prisma.$FamilyPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    category<T extends CategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoryDefaultArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    kind<T extends KindDefaultArgs<ExtArgs> = {}>(args?: Subset<T, KindDefaultArgs<ExtArgs>>): Prisma__KindClient<$Result.GetResult<Prisma.$KindPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    variants<T extends Font$variantsArgs<ExtArgs> = {}>(args?: Subset<T, Font$variantsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VariantPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Font model
   */ 
  interface FontFieldRefs {
    readonly id: FieldRef<"Font", 'Int'>
    readonly familyId: FieldRef<"Font", 'Int'>
    readonly categoryId: FieldRef<"Font", 'Int'>
    readonly kindId: FieldRef<"Font", 'Int'>
    readonly subsets: FieldRef<"Font", 'String[]'>
  }
    

  // Custom InputTypes

  /**
   * Font findUnique
   */
  export type FontFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Font
     */
    select?: FontSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FontInclude<ExtArgs> | null
    /**
     * Filter, which Font to fetch.
     */
    where: FontWhereUniqueInput
  }


  /**
   * Font findUniqueOrThrow
   */
  export type FontFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Font
     */
    select?: FontSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FontInclude<ExtArgs> | null
    /**
     * Filter, which Font to fetch.
     */
    where: FontWhereUniqueInput
  }


  /**
   * Font findFirst
   */
  export type FontFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Font
     */
    select?: FontSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FontInclude<ExtArgs> | null
    /**
     * Filter, which Font to fetch.
     */
    where?: FontWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fonts to fetch.
     */
    orderBy?: FontOrderByWithRelationInput | FontOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Fonts.
     */
    cursor?: FontWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fonts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fonts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Fonts.
     */
    distinct?: FontScalarFieldEnum | FontScalarFieldEnum[]
  }


  /**
   * Font findFirstOrThrow
   */
  export type FontFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Font
     */
    select?: FontSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FontInclude<ExtArgs> | null
    /**
     * Filter, which Font to fetch.
     */
    where?: FontWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fonts to fetch.
     */
    orderBy?: FontOrderByWithRelationInput | FontOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Fonts.
     */
    cursor?: FontWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fonts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fonts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Fonts.
     */
    distinct?: FontScalarFieldEnum | FontScalarFieldEnum[]
  }


  /**
   * Font findMany
   */
  export type FontFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Font
     */
    select?: FontSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FontInclude<ExtArgs> | null
    /**
     * Filter, which Fonts to fetch.
     */
    where?: FontWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fonts to fetch.
     */
    orderBy?: FontOrderByWithRelationInput | FontOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Fonts.
     */
    cursor?: FontWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fonts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fonts.
     */
    skip?: number
    distinct?: FontScalarFieldEnum | FontScalarFieldEnum[]
  }


  /**
   * Font create
   */
  export type FontCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Font
     */
    select?: FontSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FontInclude<ExtArgs> | null
    /**
     * The data needed to create a Font.
     */
    data: XOR<FontCreateInput, FontUncheckedCreateInput>
  }


  /**
   * Font createMany
   */
  export type FontCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Fonts.
     */
    data: FontCreateManyInput | FontCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Font update
   */
  export type FontUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Font
     */
    select?: FontSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FontInclude<ExtArgs> | null
    /**
     * The data needed to update a Font.
     */
    data: XOR<FontUpdateInput, FontUncheckedUpdateInput>
    /**
     * Choose, which Font to update.
     */
    where: FontWhereUniqueInput
  }


  /**
   * Font updateMany
   */
  export type FontUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Fonts.
     */
    data: XOR<FontUpdateManyMutationInput, FontUncheckedUpdateManyInput>
    /**
     * Filter which Fonts to update
     */
    where?: FontWhereInput
  }


  /**
   * Font upsert
   */
  export type FontUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Font
     */
    select?: FontSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FontInclude<ExtArgs> | null
    /**
     * The filter to search for the Font to update in case it exists.
     */
    where: FontWhereUniqueInput
    /**
     * In case the Font found by the `where` argument doesn't exist, create a new Font with this data.
     */
    create: XOR<FontCreateInput, FontUncheckedCreateInput>
    /**
     * In case the Font was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FontUpdateInput, FontUncheckedUpdateInput>
  }


  /**
   * Font delete
   */
  export type FontDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Font
     */
    select?: FontSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FontInclude<ExtArgs> | null
    /**
     * Filter which Font to delete.
     */
    where: FontWhereUniqueInput
  }


  /**
   * Font deleteMany
   */
  export type FontDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Fonts to delete
     */
    where?: FontWhereInput
  }


  /**
   * Font.variants
   */
  export type Font$variantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Variant
     */
    select?: VariantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VariantInclude<ExtArgs> | null
    where?: VariantWhereInput
    orderBy?: VariantOrderByWithRelationInput | VariantOrderByWithRelationInput[]
    cursor?: VariantWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VariantScalarFieldEnum | VariantScalarFieldEnum[]
  }


  /**
   * Font without action
   */
  export type FontDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Font
     */
    select?: FontSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FontInclude<ExtArgs> | null
  }



  /**
   * Model Variant
   */

  export type AggregateVariant = {
    _count: VariantCountAggregateOutputType | null
    _avg: VariantAvgAggregateOutputType | null
    _sum: VariantSumAggregateOutputType | null
    _min: VariantMinAggregateOutputType | null
    _max: VariantMaxAggregateOutputType | null
  }

  export type VariantAvgAggregateOutputType = {
    id: number | null
    fontId: number | null
  }

  export type VariantSumAggregateOutputType = {
    id: number | null
    fontId: number | null
  }

  export type VariantMinAggregateOutputType = {
    id: number | null
    name: string | null
    imageUrl: string | null
    style: string | null
    weight: string | null
    fontUrl: string | null
    fontId: number | null
  }

  export type VariantMaxAggregateOutputType = {
    id: number | null
    name: string | null
    imageUrl: string | null
    style: string | null
    weight: string | null
    fontUrl: string | null
    fontId: number | null
  }

  export type VariantCountAggregateOutputType = {
    id: number
    name: number
    imageUrl: number
    style: number
    weight: number
    fontUrl: number
    fontId: number
    _all: number
  }


  export type VariantAvgAggregateInputType = {
    id?: true
    fontId?: true
  }

  export type VariantSumAggregateInputType = {
    id?: true
    fontId?: true
  }

  export type VariantMinAggregateInputType = {
    id?: true
    name?: true
    imageUrl?: true
    style?: true
    weight?: true
    fontUrl?: true
    fontId?: true
  }

  export type VariantMaxAggregateInputType = {
    id?: true
    name?: true
    imageUrl?: true
    style?: true
    weight?: true
    fontUrl?: true
    fontId?: true
  }

  export type VariantCountAggregateInputType = {
    id?: true
    name?: true
    imageUrl?: true
    style?: true
    weight?: true
    fontUrl?: true
    fontId?: true
    _all?: true
  }

  export type VariantAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Variant to aggregate.
     */
    where?: VariantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Variants to fetch.
     */
    orderBy?: VariantOrderByWithRelationInput | VariantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VariantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Variants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Variants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Variants
    **/
    _count?: true | VariantCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VariantAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VariantSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VariantMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VariantMaxAggregateInputType
  }

  export type GetVariantAggregateType<T extends VariantAggregateArgs> = {
        [P in keyof T & keyof AggregateVariant]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVariant[P]>
      : GetScalarType<T[P], AggregateVariant[P]>
  }




  export type VariantGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VariantWhereInput
    orderBy?: VariantOrderByWithAggregationInput | VariantOrderByWithAggregationInput[]
    by: VariantScalarFieldEnum[] | VariantScalarFieldEnum
    having?: VariantScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VariantCountAggregateInputType | true
    _avg?: VariantAvgAggregateInputType
    _sum?: VariantSumAggregateInputType
    _min?: VariantMinAggregateInputType
    _max?: VariantMaxAggregateInputType
  }

  export type VariantGroupByOutputType = {
    id: number
    name: string
    imageUrl: string
    style: string
    weight: string
    fontUrl: string
    fontId: number
    _count: VariantCountAggregateOutputType | null
    _avg: VariantAvgAggregateOutputType | null
    _sum: VariantSumAggregateOutputType | null
    _min: VariantMinAggregateOutputType | null
    _max: VariantMaxAggregateOutputType | null
  }

  type GetVariantGroupByPayload<T extends VariantGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VariantGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VariantGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VariantGroupByOutputType[P]>
            : GetScalarType<T[P], VariantGroupByOutputType[P]>
        }
      >
    >


  export type VariantSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    imageUrl?: boolean
    style?: boolean
    weight?: boolean
    fontUrl?: boolean
    fontId?: boolean
    font?: boolean | FontDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["variant"]>

  export type VariantSelectScalar = {
    id?: boolean
    name?: boolean
    imageUrl?: boolean
    style?: boolean
    weight?: boolean
    fontUrl?: boolean
    fontId?: boolean
  }

  export type VariantInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    font?: boolean | FontDefaultArgs<ExtArgs>
  }


  export type $VariantPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Variant"
    objects: {
      font: Prisma.$FontPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      imageUrl: string
      style: string
      weight: string
      fontUrl: string
      fontId: number
    }, ExtArgs["result"]["variant"]>
    composites: {}
  }


  type VariantGetPayload<S extends boolean | null | undefined | VariantDefaultArgs> = $Result.GetResult<Prisma.$VariantPayload, S>

  type VariantCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<VariantFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: VariantCountAggregateInputType | true
    }

  export interface VariantDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Variant'], meta: { name: 'Variant' } }
    /**
     * Find zero or one Variant that matches the filter.
     * @param {VariantFindUniqueArgs} args - Arguments to find a Variant
     * @example
     * // Get one Variant
     * const variant = await prisma.variant.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends VariantFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, VariantFindUniqueArgs<ExtArgs>>
    ): Prisma__VariantClient<$Result.GetResult<Prisma.$VariantPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Variant that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {VariantFindUniqueOrThrowArgs} args - Arguments to find a Variant
     * @example
     * // Get one Variant
     * const variant = await prisma.variant.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends VariantFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, VariantFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__VariantClient<$Result.GetResult<Prisma.$VariantPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Variant that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VariantFindFirstArgs} args - Arguments to find a Variant
     * @example
     * // Get one Variant
     * const variant = await prisma.variant.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends VariantFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, VariantFindFirstArgs<ExtArgs>>
    ): Prisma__VariantClient<$Result.GetResult<Prisma.$VariantPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Variant that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VariantFindFirstOrThrowArgs} args - Arguments to find a Variant
     * @example
     * // Get one Variant
     * const variant = await prisma.variant.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends VariantFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, VariantFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__VariantClient<$Result.GetResult<Prisma.$VariantPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Variants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VariantFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Variants
     * const variants = await prisma.variant.findMany()
     * 
     * // Get first 10 Variants
     * const variants = await prisma.variant.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const variantWithIdOnly = await prisma.variant.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends VariantFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, VariantFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VariantPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Variant.
     * @param {VariantCreateArgs} args - Arguments to create a Variant.
     * @example
     * // Create one Variant
     * const Variant = await prisma.variant.create({
     *   data: {
     *     // ... data to create a Variant
     *   }
     * })
     * 
    **/
    create<T extends VariantCreateArgs<ExtArgs>>(
      args: SelectSubset<T, VariantCreateArgs<ExtArgs>>
    ): Prisma__VariantClient<$Result.GetResult<Prisma.$VariantPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Variants.
     *     @param {VariantCreateManyArgs} args - Arguments to create many Variants.
     *     @example
     *     // Create many Variants
     *     const variant = await prisma.variant.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends VariantCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, VariantCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Variant.
     * @param {VariantDeleteArgs} args - Arguments to delete one Variant.
     * @example
     * // Delete one Variant
     * const Variant = await prisma.variant.delete({
     *   where: {
     *     // ... filter to delete one Variant
     *   }
     * })
     * 
    **/
    delete<T extends VariantDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, VariantDeleteArgs<ExtArgs>>
    ): Prisma__VariantClient<$Result.GetResult<Prisma.$VariantPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Variant.
     * @param {VariantUpdateArgs} args - Arguments to update one Variant.
     * @example
     * // Update one Variant
     * const variant = await prisma.variant.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends VariantUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, VariantUpdateArgs<ExtArgs>>
    ): Prisma__VariantClient<$Result.GetResult<Prisma.$VariantPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Variants.
     * @param {VariantDeleteManyArgs} args - Arguments to filter Variants to delete.
     * @example
     * // Delete a few Variants
     * const { count } = await prisma.variant.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends VariantDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, VariantDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Variants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VariantUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Variants
     * const variant = await prisma.variant.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends VariantUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, VariantUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Variant.
     * @param {VariantUpsertArgs} args - Arguments to update or create a Variant.
     * @example
     * // Update or create a Variant
     * const variant = await prisma.variant.upsert({
     *   create: {
     *     // ... data to create a Variant
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Variant we want to update
     *   }
     * })
    **/
    upsert<T extends VariantUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, VariantUpsertArgs<ExtArgs>>
    ): Prisma__VariantClient<$Result.GetResult<Prisma.$VariantPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Variants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VariantCountArgs} args - Arguments to filter Variants to count.
     * @example
     * // Count the number of Variants
     * const count = await prisma.variant.count({
     *   where: {
     *     // ... the filter for the Variants we want to count
     *   }
     * })
    **/
    count<T extends VariantCountArgs>(
      args?: Subset<T, VariantCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VariantCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Variant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VariantAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VariantAggregateArgs>(args: Subset<T, VariantAggregateArgs>): Prisma.PrismaPromise<GetVariantAggregateType<T>>

    /**
     * Group by Variant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VariantGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VariantGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VariantGroupByArgs['orderBy'] }
        : { orderBy?: VariantGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VariantGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVariantGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Variant model
   */
  readonly fields: VariantFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Variant.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VariantClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    font<T extends FontDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FontDefaultArgs<ExtArgs>>): Prisma__FontClient<$Result.GetResult<Prisma.$FontPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Variant model
   */ 
  interface VariantFieldRefs {
    readonly id: FieldRef<"Variant", 'Int'>
    readonly name: FieldRef<"Variant", 'String'>
    readonly imageUrl: FieldRef<"Variant", 'String'>
    readonly style: FieldRef<"Variant", 'String'>
    readonly weight: FieldRef<"Variant", 'String'>
    readonly fontUrl: FieldRef<"Variant", 'String'>
    readonly fontId: FieldRef<"Variant", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Variant findUnique
   */
  export type VariantFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Variant
     */
    select?: VariantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VariantInclude<ExtArgs> | null
    /**
     * Filter, which Variant to fetch.
     */
    where: VariantWhereUniqueInput
  }


  /**
   * Variant findUniqueOrThrow
   */
  export type VariantFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Variant
     */
    select?: VariantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VariantInclude<ExtArgs> | null
    /**
     * Filter, which Variant to fetch.
     */
    where: VariantWhereUniqueInput
  }


  /**
   * Variant findFirst
   */
  export type VariantFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Variant
     */
    select?: VariantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VariantInclude<ExtArgs> | null
    /**
     * Filter, which Variant to fetch.
     */
    where?: VariantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Variants to fetch.
     */
    orderBy?: VariantOrderByWithRelationInput | VariantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Variants.
     */
    cursor?: VariantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Variants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Variants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Variants.
     */
    distinct?: VariantScalarFieldEnum | VariantScalarFieldEnum[]
  }


  /**
   * Variant findFirstOrThrow
   */
  export type VariantFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Variant
     */
    select?: VariantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VariantInclude<ExtArgs> | null
    /**
     * Filter, which Variant to fetch.
     */
    where?: VariantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Variants to fetch.
     */
    orderBy?: VariantOrderByWithRelationInput | VariantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Variants.
     */
    cursor?: VariantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Variants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Variants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Variants.
     */
    distinct?: VariantScalarFieldEnum | VariantScalarFieldEnum[]
  }


  /**
   * Variant findMany
   */
  export type VariantFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Variant
     */
    select?: VariantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VariantInclude<ExtArgs> | null
    /**
     * Filter, which Variants to fetch.
     */
    where?: VariantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Variants to fetch.
     */
    orderBy?: VariantOrderByWithRelationInput | VariantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Variants.
     */
    cursor?: VariantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Variants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Variants.
     */
    skip?: number
    distinct?: VariantScalarFieldEnum | VariantScalarFieldEnum[]
  }


  /**
   * Variant create
   */
  export type VariantCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Variant
     */
    select?: VariantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VariantInclude<ExtArgs> | null
    /**
     * The data needed to create a Variant.
     */
    data: XOR<VariantCreateInput, VariantUncheckedCreateInput>
  }


  /**
   * Variant createMany
   */
  export type VariantCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Variants.
     */
    data: VariantCreateManyInput | VariantCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Variant update
   */
  export type VariantUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Variant
     */
    select?: VariantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VariantInclude<ExtArgs> | null
    /**
     * The data needed to update a Variant.
     */
    data: XOR<VariantUpdateInput, VariantUncheckedUpdateInput>
    /**
     * Choose, which Variant to update.
     */
    where: VariantWhereUniqueInput
  }


  /**
   * Variant updateMany
   */
  export type VariantUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Variants.
     */
    data: XOR<VariantUpdateManyMutationInput, VariantUncheckedUpdateManyInput>
    /**
     * Filter which Variants to update
     */
    where?: VariantWhereInput
  }


  /**
   * Variant upsert
   */
  export type VariantUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Variant
     */
    select?: VariantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VariantInclude<ExtArgs> | null
    /**
     * The filter to search for the Variant to update in case it exists.
     */
    where: VariantWhereUniqueInput
    /**
     * In case the Variant found by the `where` argument doesn't exist, create a new Variant with this data.
     */
    create: XOR<VariantCreateInput, VariantUncheckedCreateInput>
    /**
     * In case the Variant was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VariantUpdateInput, VariantUncheckedUpdateInput>
  }


  /**
   * Variant delete
   */
  export type VariantDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Variant
     */
    select?: VariantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VariantInclude<ExtArgs> | null
    /**
     * Filter which Variant to delete.
     */
    where: VariantWhereUniqueInput
  }


  /**
   * Variant deleteMany
   */
  export type VariantDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Variants to delete
     */
    where?: VariantWhereInput
  }


  /**
   * Variant without action
   */
  export type VariantDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Variant
     */
    select?: VariantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VariantInclude<ExtArgs> | null
  }



  /**
   * Model Upload
   */

  export type AggregateUpload = {
    _count: UploadCountAggregateOutputType | null
    _avg: UploadAvgAggregateOutputType | null
    _sum: UploadSumAggregateOutputType | null
    _min: UploadMinAggregateOutputType | null
    _max: UploadMaxAggregateOutputType | null
  }

  export type UploadAvgAggregateOutputType = {
    id: number | null
  }

  export type UploadSumAggregateOutputType = {
    id: number | null
  }

  export type UploadMinAggregateOutputType = {
    id: number | null
    url: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
    publicId: string | null
    backgroundRemoved: boolean | null
  }

  export type UploadMaxAggregateOutputType = {
    id: number | null
    url: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
    publicId: string | null
    backgroundRemoved: boolean | null
  }

  export type UploadCountAggregateOutputType = {
    id: number
    url: number
    createdAt: number
    updatedAt: number
    userId: number
    publicId: number
    backgroundRemoved: number
    _all: number
  }


  export type UploadAvgAggregateInputType = {
    id?: true
  }

  export type UploadSumAggregateInputType = {
    id?: true
  }

  export type UploadMinAggregateInputType = {
    id?: true
    url?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    publicId?: true
    backgroundRemoved?: true
  }

  export type UploadMaxAggregateInputType = {
    id?: true
    url?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    publicId?: true
    backgroundRemoved?: true
  }

  export type UploadCountAggregateInputType = {
    id?: true
    url?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    publicId?: true
    backgroundRemoved?: true
    _all?: true
  }

  export type UploadAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Upload to aggregate.
     */
    where?: UploadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Uploads to fetch.
     */
    orderBy?: UploadOrderByWithRelationInput | UploadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UploadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Uploads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Uploads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Uploads
    **/
    _count?: true | UploadCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UploadAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UploadSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UploadMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UploadMaxAggregateInputType
  }

  export type GetUploadAggregateType<T extends UploadAggregateArgs> = {
        [P in keyof T & keyof AggregateUpload]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUpload[P]>
      : GetScalarType<T[P], AggregateUpload[P]>
  }




  export type UploadGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UploadWhereInput
    orderBy?: UploadOrderByWithAggregationInput | UploadOrderByWithAggregationInput[]
    by: UploadScalarFieldEnum[] | UploadScalarFieldEnum
    having?: UploadScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UploadCountAggregateInputType | true
    _avg?: UploadAvgAggregateInputType
    _sum?: UploadSumAggregateInputType
    _min?: UploadMinAggregateInputType
    _max?: UploadMaxAggregateInputType
  }

  export type UploadGroupByOutputType = {
    id: number
    url: string
    createdAt: Date
    updatedAt: Date
    userId: string
    publicId: string
    backgroundRemoved: boolean
    _count: UploadCountAggregateOutputType | null
    _avg: UploadAvgAggregateOutputType | null
    _sum: UploadSumAggregateOutputType | null
    _min: UploadMinAggregateOutputType | null
    _max: UploadMaxAggregateOutputType | null
  }

  type GetUploadGroupByPayload<T extends UploadGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UploadGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UploadGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UploadGroupByOutputType[P]>
            : GetScalarType<T[P], UploadGroupByOutputType[P]>
        }
      >
    >


  export type UploadSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    publicId?: boolean
    backgroundRemoved?: boolean
  }, ExtArgs["result"]["upload"]>

  export type UploadSelectScalar = {
    id?: boolean
    url?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    publicId?: boolean
    backgroundRemoved?: boolean
  }


  export type $UploadPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Upload"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      url: string
      createdAt: Date
      updatedAt: Date
      userId: string
      publicId: string
      backgroundRemoved: boolean
    }, ExtArgs["result"]["upload"]>
    composites: {}
  }


  type UploadGetPayload<S extends boolean | null | undefined | UploadDefaultArgs> = $Result.GetResult<Prisma.$UploadPayload, S>

  type UploadCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UploadFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: UploadCountAggregateInputType | true
    }

  export interface UploadDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Upload'], meta: { name: 'Upload' } }
    /**
     * Find zero or one Upload that matches the filter.
     * @param {UploadFindUniqueArgs} args - Arguments to find a Upload
     * @example
     * // Get one Upload
     * const upload = await prisma.upload.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UploadFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UploadFindUniqueArgs<ExtArgs>>
    ): Prisma__UploadClient<$Result.GetResult<Prisma.$UploadPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Upload that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UploadFindUniqueOrThrowArgs} args - Arguments to find a Upload
     * @example
     * // Get one Upload
     * const upload = await prisma.upload.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UploadFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UploadFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UploadClient<$Result.GetResult<Prisma.$UploadPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Upload that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UploadFindFirstArgs} args - Arguments to find a Upload
     * @example
     * // Get one Upload
     * const upload = await prisma.upload.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UploadFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UploadFindFirstArgs<ExtArgs>>
    ): Prisma__UploadClient<$Result.GetResult<Prisma.$UploadPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Upload that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UploadFindFirstOrThrowArgs} args - Arguments to find a Upload
     * @example
     * // Get one Upload
     * const upload = await prisma.upload.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UploadFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UploadFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UploadClient<$Result.GetResult<Prisma.$UploadPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Uploads that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UploadFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Uploads
     * const uploads = await prisma.upload.findMany()
     * 
     * // Get first 10 Uploads
     * const uploads = await prisma.upload.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const uploadWithIdOnly = await prisma.upload.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UploadFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UploadFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UploadPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Upload.
     * @param {UploadCreateArgs} args - Arguments to create a Upload.
     * @example
     * // Create one Upload
     * const Upload = await prisma.upload.create({
     *   data: {
     *     // ... data to create a Upload
     *   }
     * })
     * 
    **/
    create<T extends UploadCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UploadCreateArgs<ExtArgs>>
    ): Prisma__UploadClient<$Result.GetResult<Prisma.$UploadPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Uploads.
     *     @param {UploadCreateManyArgs} args - Arguments to create many Uploads.
     *     @example
     *     // Create many Uploads
     *     const upload = await prisma.upload.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UploadCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UploadCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Upload.
     * @param {UploadDeleteArgs} args - Arguments to delete one Upload.
     * @example
     * // Delete one Upload
     * const Upload = await prisma.upload.delete({
     *   where: {
     *     // ... filter to delete one Upload
     *   }
     * })
     * 
    **/
    delete<T extends UploadDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UploadDeleteArgs<ExtArgs>>
    ): Prisma__UploadClient<$Result.GetResult<Prisma.$UploadPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Upload.
     * @param {UploadUpdateArgs} args - Arguments to update one Upload.
     * @example
     * // Update one Upload
     * const upload = await prisma.upload.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UploadUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UploadUpdateArgs<ExtArgs>>
    ): Prisma__UploadClient<$Result.GetResult<Prisma.$UploadPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Uploads.
     * @param {UploadDeleteManyArgs} args - Arguments to filter Uploads to delete.
     * @example
     * // Delete a few Uploads
     * const { count } = await prisma.upload.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UploadDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UploadDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Uploads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UploadUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Uploads
     * const upload = await prisma.upload.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UploadUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UploadUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Upload.
     * @param {UploadUpsertArgs} args - Arguments to update or create a Upload.
     * @example
     * // Update or create a Upload
     * const upload = await prisma.upload.upsert({
     *   create: {
     *     // ... data to create a Upload
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Upload we want to update
     *   }
     * })
    **/
    upsert<T extends UploadUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UploadUpsertArgs<ExtArgs>>
    ): Prisma__UploadClient<$Result.GetResult<Prisma.$UploadPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Uploads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UploadCountArgs} args - Arguments to filter Uploads to count.
     * @example
     * // Count the number of Uploads
     * const count = await prisma.upload.count({
     *   where: {
     *     // ... the filter for the Uploads we want to count
     *   }
     * })
    **/
    count<T extends UploadCountArgs>(
      args?: Subset<T, UploadCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UploadCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Upload.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UploadAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UploadAggregateArgs>(args: Subset<T, UploadAggregateArgs>): Prisma.PrismaPromise<GetUploadAggregateType<T>>

    /**
     * Group by Upload.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UploadGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UploadGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UploadGroupByArgs['orderBy'] }
        : { orderBy?: UploadGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UploadGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUploadGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Upload model
   */
  readonly fields: UploadFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Upload.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UploadClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Upload model
   */ 
  interface UploadFieldRefs {
    readonly id: FieldRef<"Upload", 'Int'>
    readonly url: FieldRef<"Upload", 'String'>
    readonly createdAt: FieldRef<"Upload", 'DateTime'>
    readonly updatedAt: FieldRef<"Upload", 'DateTime'>
    readonly userId: FieldRef<"Upload", 'String'>
    readonly publicId: FieldRef<"Upload", 'String'>
    readonly backgroundRemoved: FieldRef<"Upload", 'Boolean'>
  }
    

  // Custom InputTypes

  /**
   * Upload findUnique
   */
  export type UploadFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Upload
     */
    select?: UploadSelect<ExtArgs> | null
    /**
     * Filter, which Upload to fetch.
     */
    where: UploadWhereUniqueInput
  }


  /**
   * Upload findUniqueOrThrow
   */
  export type UploadFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Upload
     */
    select?: UploadSelect<ExtArgs> | null
    /**
     * Filter, which Upload to fetch.
     */
    where: UploadWhereUniqueInput
  }


  /**
   * Upload findFirst
   */
  export type UploadFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Upload
     */
    select?: UploadSelect<ExtArgs> | null
    /**
     * Filter, which Upload to fetch.
     */
    where?: UploadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Uploads to fetch.
     */
    orderBy?: UploadOrderByWithRelationInput | UploadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Uploads.
     */
    cursor?: UploadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Uploads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Uploads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Uploads.
     */
    distinct?: UploadScalarFieldEnum | UploadScalarFieldEnum[]
  }


  /**
   * Upload findFirstOrThrow
   */
  export type UploadFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Upload
     */
    select?: UploadSelect<ExtArgs> | null
    /**
     * Filter, which Upload to fetch.
     */
    where?: UploadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Uploads to fetch.
     */
    orderBy?: UploadOrderByWithRelationInput | UploadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Uploads.
     */
    cursor?: UploadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Uploads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Uploads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Uploads.
     */
    distinct?: UploadScalarFieldEnum | UploadScalarFieldEnum[]
  }


  /**
   * Upload findMany
   */
  export type UploadFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Upload
     */
    select?: UploadSelect<ExtArgs> | null
    /**
     * Filter, which Uploads to fetch.
     */
    where?: UploadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Uploads to fetch.
     */
    orderBy?: UploadOrderByWithRelationInput | UploadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Uploads.
     */
    cursor?: UploadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Uploads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Uploads.
     */
    skip?: number
    distinct?: UploadScalarFieldEnum | UploadScalarFieldEnum[]
  }


  /**
   * Upload create
   */
  export type UploadCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Upload
     */
    select?: UploadSelect<ExtArgs> | null
    /**
     * The data needed to create a Upload.
     */
    data: XOR<UploadCreateInput, UploadUncheckedCreateInput>
  }


  /**
   * Upload createMany
   */
  export type UploadCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Uploads.
     */
    data: UploadCreateManyInput | UploadCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Upload update
   */
  export type UploadUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Upload
     */
    select?: UploadSelect<ExtArgs> | null
    /**
     * The data needed to update a Upload.
     */
    data: XOR<UploadUpdateInput, UploadUncheckedUpdateInput>
    /**
     * Choose, which Upload to update.
     */
    where: UploadWhereUniqueInput
  }


  /**
   * Upload updateMany
   */
  export type UploadUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Uploads.
     */
    data: XOR<UploadUpdateManyMutationInput, UploadUncheckedUpdateManyInput>
    /**
     * Filter which Uploads to update
     */
    where?: UploadWhereInput
  }


  /**
   * Upload upsert
   */
  export type UploadUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Upload
     */
    select?: UploadSelect<ExtArgs> | null
    /**
     * The filter to search for the Upload to update in case it exists.
     */
    where: UploadWhereUniqueInput
    /**
     * In case the Upload found by the `where` argument doesn't exist, create a new Upload with this data.
     */
    create: XOR<UploadCreateInput, UploadUncheckedCreateInput>
    /**
     * In case the Upload was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UploadUpdateInput, UploadUncheckedUpdateInput>
  }


  /**
   * Upload delete
   */
  export type UploadDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Upload
     */
    select?: UploadSelect<ExtArgs> | null
    /**
     * Filter which Upload to delete.
     */
    where: UploadWhereUniqueInput
  }


  /**
   * Upload deleteMany
   */
  export type UploadDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Uploads to delete
     */
    where?: UploadWhereInput
  }


  /**
   * Upload without action
   */
  export type UploadDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Upload
     */
    select?: UploadSelect<ExtArgs> | null
  }



  /**
   * Model Design
   */

  export type AggregateDesign = {
    _count: DesignCountAggregateOutputType | null
    _avg: DesignAvgAggregateOutputType | null
    _sum: DesignSumAggregateOutputType | null
    _min: DesignMinAggregateOutputType | null
    _max: DesignMaxAggregateOutputType | null
  }

  export type DesignAvgAggregateOutputType = {
    canvasWidth: number | null
    canvasHeight: number | null
  }

  export type DesignSumAggregateOutputType = {
    canvasWidth: number | null
    canvasHeight: number | null
  }

  export type DesignMinAggregateOutputType = {
    id: string | null
    name: string | null
    userId: string | null
    canvasWidth: number | null
    canvasHeight: number | null
    background: string | null
    elements: string | null
    thumbnail: string | null
  }

  export type DesignMaxAggregateOutputType = {
    id: string | null
    name: string | null
    userId: string | null
    canvasWidth: number | null
    canvasHeight: number | null
    background: string | null
    elements: string | null
    thumbnail: string | null
  }

  export type DesignCountAggregateOutputType = {
    id: number
    name: number
    userId: number
    canvasWidth: number
    canvasHeight: number
    background: number
    elements: number
    fonts: number
    thumbnail: number
    _all: number
  }


  export type DesignAvgAggregateInputType = {
    canvasWidth?: true
    canvasHeight?: true
  }

  export type DesignSumAggregateInputType = {
    canvasWidth?: true
    canvasHeight?: true
  }

  export type DesignMinAggregateInputType = {
    id?: true
    name?: true
    userId?: true
    canvasWidth?: true
    canvasHeight?: true
    background?: true
    elements?: true
    thumbnail?: true
  }

  export type DesignMaxAggregateInputType = {
    id?: true
    name?: true
    userId?: true
    canvasWidth?: true
    canvasHeight?: true
    background?: true
    elements?: true
    thumbnail?: true
  }

  export type DesignCountAggregateInputType = {
    id?: true
    name?: true
    userId?: true
    canvasWidth?: true
    canvasHeight?: true
    background?: true
    elements?: true
    fonts?: true
    thumbnail?: true
    _all?: true
  }

  export type DesignAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Design to aggregate.
     */
    where?: DesignWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Designs to fetch.
     */
    orderBy?: DesignOrderByWithRelationInput | DesignOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DesignWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Designs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Designs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Designs
    **/
    _count?: true | DesignCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DesignAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DesignSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DesignMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DesignMaxAggregateInputType
  }

  export type GetDesignAggregateType<T extends DesignAggregateArgs> = {
        [P in keyof T & keyof AggregateDesign]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDesign[P]>
      : GetScalarType<T[P], AggregateDesign[P]>
  }




  export type DesignGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DesignWhereInput
    orderBy?: DesignOrderByWithAggregationInput | DesignOrderByWithAggregationInput[]
    by: DesignScalarFieldEnum[] | DesignScalarFieldEnum
    having?: DesignScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DesignCountAggregateInputType | true
    _avg?: DesignAvgAggregateInputType
    _sum?: DesignSumAggregateInputType
    _min?: DesignMinAggregateInputType
    _max?: DesignMaxAggregateInputType
  }

  export type DesignGroupByOutputType = {
    id: string
    name: string
    userId: string
    canvasWidth: number
    canvasHeight: number
    background: string
    elements: string
    fonts: string[]
    thumbnail: string
    _count: DesignCountAggregateOutputType | null
    _avg: DesignAvgAggregateOutputType | null
    _sum: DesignSumAggregateOutputType | null
    _min: DesignMinAggregateOutputType | null
    _max: DesignMaxAggregateOutputType | null
  }

  type GetDesignGroupByPayload<T extends DesignGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DesignGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DesignGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DesignGroupByOutputType[P]>
            : GetScalarType<T[P], DesignGroupByOutputType[P]>
        }
      >
    >


  export type DesignSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    userId?: boolean
    canvasWidth?: boolean
    canvasHeight?: boolean
    background?: boolean
    elements?: boolean
    fonts?: boolean
    thumbnail?: boolean
  }, ExtArgs["result"]["design"]>

  export type DesignSelectScalar = {
    id?: boolean
    name?: boolean
    userId?: boolean
    canvasWidth?: boolean
    canvasHeight?: boolean
    background?: boolean
    elements?: boolean
    fonts?: boolean
    thumbnail?: boolean
  }


  export type $DesignPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Design"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      userId: string
      canvasWidth: number
      canvasHeight: number
      background: string
      elements: string
      fonts: string[]
      thumbnail: string
    }, ExtArgs["result"]["design"]>
    composites: {}
  }


  type DesignGetPayload<S extends boolean | null | undefined | DesignDefaultArgs> = $Result.GetResult<Prisma.$DesignPayload, S>

  type DesignCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<DesignFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: DesignCountAggregateInputType | true
    }

  export interface DesignDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Design'], meta: { name: 'Design' } }
    /**
     * Find zero or one Design that matches the filter.
     * @param {DesignFindUniqueArgs} args - Arguments to find a Design
     * @example
     * // Get one Design
     * const design = await prisma.design.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends DesignFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, DesignFindUniqueArgs<ExtArgs>>
    ): Prisma__DesignClient<$Result.GetResult<Prisma.$DesignPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Design that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {DesignFindUniqueOrThrowArgs} args - Arguments to find a Design
     * @example
     * // Get one Design
     * const design = await prisma.design.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends DesignFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DesignFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__DesignClient<$Result.GetResult<Prisma.$DesignPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Design that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DesignFindFirstArgs} args - Arguments to find a Design
     * @example
     * // Get one Design
     * const design = await prisma.design.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends DesignFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, DesignFindFirstArgs<ExtArgs>>
    ): Prisma__DesignClient<$Result.GetResult<Prisma.$DesignPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Design that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DesignFindFirstOrThrowArgs} args - Arguments to find a Design
     * @example
     * // Get one Design
     * const design = await prisma.design.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends DesignFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DesignFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__DesignClient<$Result.GetResult<Prisma.$DesignPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Designs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DesignFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Designs
     * const designs = await prisma.design.findMany()
     * 
     * // Get first 10 Designs
     * const designs = await prisma.design.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const designWithIdOnly = await prisma.design.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends DesignFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DesignFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DesignPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Design.
     * @param {DesignCreateArgs} args - Arguments to create a Design.
     * @example
     * // Create one Design
     * const Design = await prisma.design.create({
     *   data: {
     *     // ... data to create a Design
     *   }
     * })
     * 
    **/
    create<T extends DesignCreateArgs<ExtArgs>>(
      args: SelectSubset<T, DesignCreateArgs<ExtArgs>>
    ): Prisma__DesignClient<$Result.GetResult<Prisma.$DesignPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Designs.
     *     @param {DesignCreateManyArgs} args - Arguments to create many Designs.
     *     @example
     *     // Create many Designs
     *     const design = await prisma.design.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends DesignCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DesignCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Design.
     * @param {DesignDeleteArgs} args - Arguments to delete one Design.
     * @example
     * // Delete one Design
     * const Design = await prisma.design.delete({
     *   where: {
     *     // ... filter to delete one Design
     *   }
     * })
     * 
    **/
    delete<T extends DesignDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, DesignDeleteArgs<ExtArgs>>
    ): Prisma__DesignClient<$Result.GetResult<Prisma.$DesignPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Design.
     * @param {DesignUpdateArgs} args - Arguments to update one Design.
     * @example
     * // Update one Design
     * const design = await prisma.design.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends DesignUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, DesignUpdateArgs<ExtArgs>>
    ): Prisma__DesignClient<$Result.GetResult<Prisma.$DesignPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Designs.
     * @param {DesignDeleteManyArgs} args - Arguments to filter Designs to delete.
     * @example
     * // Delete a few Designs
     * const { count } = await prisma.design.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends DesignDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DesignDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Designs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DesignUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Designs
     * const design = await prisma.design.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends DesignUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, DesignUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Design.
     * @param {DesignUpsertArgs} args - Arguments to update or create a Design.
     * @example
     * // Update or create a Design
     * const design = await prisma.design.upsert({
     *   create: {
     *     // ... data to create a Design
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Design we want to update
     *   }
     * })
    **/
    upsert<T extends DesignUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, DesignUpsertArgs<ExtArgs>>
    ): Prisma__DesignClient<$Result.GetResult<Prisma.$DesignPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Designs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DesignCountArgs} args - Arguments to filter Designs to count.
     * @example
     * // Count the number of Designs
     * const count = await prisma.design.count({
     *   where: {
     *     // ... the filter for the Designs we want to count
     *   }
     * })
    **/
    count<T extends DesignCountArgs>(
      args?: Subset<T, DesignCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DesignCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Design.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DesignAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DesignAggregateArgs>(args: Subset<T, DesignAggregateArgs>): Prisma.PrismaPromise<GetDesignAggregateType<T>>

    /**
     * Group by Design.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DesignGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DesignGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DesignGroupByArgs['orderBy'] }
        : { orderBy?: DesignGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DesignGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDesignGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Design model
   */
  readonly fields: DesignFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Design.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DesignClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Design model
   */ 
  interface DesignFieldRefs {
    readonly id: FieldRef<"Design", 'String'>
    readonly name: FieldRef<"Design", 'String'>
    readonly userId: FieldRef<"Design", 'String'>
    readonly canvasWidth: FieldRef<"Design", 'Int'>
    readonly canvasHeight: FieldRef<"Design", 'Int'>
    readonly background: FieldRef<"Design", 'String'>
    readonly elements: FieldRef<"Design", 'String'>
    readonly fonts: FieldRef<"Design", 'String[]'>
    readonly thumbnail: FieldRef<"Design", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Design findUnique
   */
  export type DesignFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Design
     */
    select?: DesignSelect<ExtArgs> | null
    /**
     * Filter, which Design to fetch.
     */
    where: DesignWhereUniqueInput
  }


  /**
   * Design findUniqueOrThrow
   */
  export type DesignFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Design
     */
    select?: DesignSelect<ExtArgs> | null
    /**
     * Filter, which Design to fetch.
     */
    where: DesignWhereUniqueInput
  }


  /**
   * Design findFirst
   */
  export type DesignFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Design
     */
    select?: DesignSelect<ExtArgs> | null
    /**
     * Filter, which Design to fetch.
     */
    where?: DesignWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Designs to fetch.
     */
    orderBy?: DesignOrderByWithRelationInput | DesignOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Designs.
     */
    cursor?: DesignWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Designs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Designs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Designs.
     */
    distinct?: DesignScalarFieldEnum | DesignScalarFieldEnum[]
  }


  /**
   * Design findFirstOrThrow
   */
  export type DesignFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Design
     */
    select?: DesignSelect<ExtArgs> | null
    /**
     * Filter, which Design to fetch.
     */
    where?: DesignWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Designs to fetch.
     */
    orderBy?: DesignOrderByWithRelationInput | DesignOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Designs.
     */
    cursor?: DesignWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Designs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Designs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Designs.
     */
    distinct?: DesignScalarFieldEnum | DesignScalarFieldEnum[]
  }


  /**
   * Design findMany
   */
  export type DesignFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Design
     */
    select?: DesignSelect<ExtArgs> | null
    /**
     * Filter, which Designs to fetch.
     */
    where?: DesignWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Designs to fetch.
     */
    orderBy?: DesignOrderByWithRelationInput | DesignOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Designs.
     */
    cursor?: DesignWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Designs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Designs.
     */
    skip?: number
    distinct?: DesignScalarFieldEnum | DesignScalarFieldEnum[]
  }


  /**
   * Design create
   */
  export type DesignCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Design
     */
    select?: DesignSelect<ExtArgs> | null
    /**
     * The data needed to create a Design.
     */
    data: XOR<DesignCreateInput, DesignUncheckedCreateInput>
  }


  /**
   * Design createMany
   */
  export type DesignCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Designs.
     */
    data: DesignCreateManyInput | DesignCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Design update
   */
  export type DesignUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Design
     */
    select?: DesignSelect<ExtArgs> | null
    /**
     * The data needed to update a Design.
     */
    data: XOR<DesignUpdateInput, DesignUncheckedUpdateInput>
    /**
     * Choose, which Design to update.
     */
    where: DesignWhereUniqueInput
  }


  /**
   * Design updateMany
   */
  export type DesignUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Designs.
     */
    data: XOR<DesignUpdateManyMutationInput, DesignUncheckedUpdateManyInput>
    /**
     * Filter which Designs to update
     */
    where?: DesignWhereInput
  }


  /**
   * Design upsert
   */
  export type DesignUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Design
     */
    select?: DesignSelect<ExtArgs> | null
    /**
     * The filter to search for the Design to update in case it exists.
     */
    where: DesignWhereUniqueInput
    /**
     * In case the Design found by the `where` argument doesn't exist, create a new Design with this data.
     */
    create: XOR<DesignCreateInput, DesignUncheckedCreateInput>
    /**
     * In case the Design was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DesignUpdateInput, DesignUncheckedUpdateInput>
  }


  /**
   * Design delete
   */
  export type DesignDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Design
     */
    select?: DesignSelect<ExtArgs> | null
    /**
     * Filter which Design to delete.
     */
    where: DesignWhereUniqueInput
  }


  /**
   * Design deleteMany
   */
  export type DesignDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Designs to delete
     */
    where?: DesignWhereInput
  }


  /**
   * Design without action
   */
  export type DesignDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Design
     */
    select?: DesignSelect<ExtArgs> | null
  }



  /**
   * Model BlockCategory
   */

  export type AggregateBlockCategory = {
    _count: BlockCategoryCountAggregateOutputType | null
    _avg: BlockCategoryAvgAggregateOutputType | null
    _sum: BlockCategorySumAggregateOutputType | null
    _min: BlockCategoryMinAggregateOutputType | null
    _max: BlockCategoryMaxAggregateOutputType | null
  }

  export type BlockCategoryAvgAggregateOutputType = {
    id: number | null
  }

  export type BlockCategorySumAggregateOutputType = {
    id: number | null
  }

  export type BlockCategoryMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    name: string | null
  }

  export type BlockCategoryMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    name: string | null
  }

  export type BlockCategoryCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    name: number
    _all: number
  }


  export type BlockCategoryAvgAggregateInputType = {
    id?: true
  }

  export type BlockCategorySumAggregateInputType = {
    id?: true
  }

  export type BlockCategoryMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    name?: true
  }

  export type BlockCategoryMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    name?: true
  }

  export type BlockCategoryCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    _all?: true
  }

  export type BlockCategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BlockCategory to aggregate.
     */
    where?: BlockCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlockCategories to fetch.
     */
    orderBy?: BlockCategoryOrderByWithRelationInput | BlockCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BlockCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlockCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlockCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BlockCategories
    **/
    _count?: true | BlockCategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BlockCategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BlockCategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BlockCategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BlockCategoryMaxAggregateInputType
  }

  export type GetBlockCategoryAggregateType<T extends BlockCategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateBlockCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBlockCategory[P]>
      : GetScalarType<T[P], AggregateBlockCategory[P]>
  }




  export type BlockCategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlockCategoryWhereInput
    orderBy?: BlockCategoryOrderByWithAggregationInput | BlockCategoryOrderByWithAggregationInput[]
    by: BlockCategoryScalarFieldEnum[] | BlockCategoryScalarFieldEnum
    having?: BlockCategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BlockCategoryCountAggregateInputType | true
    _avg?: BlockCategoryAvgAggregateInputType
    _sum?: BlockCategorySumAggregateInputType
    _min?: BlockCategoryMinAggregateInputType
    _max?: BlockCategoryMaxAggregateInputType
  }

  export type BlockCategoryGroupByOutputType = {
    id: number
    createdAt: Date
    updatedAt: Date
    name: string
    _count: BlockCategoryCountAggregateOutputType | null
    _avg: BlockCategoryAvgAggregateOutputType | null
    _sum: BlockCategorySumAggregateOutputType | null
    _min: BlockCategoryMinAggregateOutputType | null
    _max: BlockCategoryMaxAggregateOutputType | null
  }

  type GetBlockCategoryGroupByPayload<T extends BlockCategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BlockCategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BlockCategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BlockCategoryGroupByOutputType[P]>
            : GetScalarType<T[P], BlockCategoryGroupByOutputType[P]>
        }
      >
    >


  export type BlockCategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
    blocks?: boolean | BlockCategory$blocksArgs<ExtArgs>
    _count?: boolean | BlockCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["blockCategory"]>

  export type BlockCategorySelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
  }

  export type BlockCategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    blocks?: boolean | BlockCategory$blocksArgs<ExtArgs>
    _count?: boolean | BlockCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $BlockCategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BlockCategory"
    objects: {
      blocks: Prisma.$BlockPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      createdAt: Date
      updatedAt: Date
      name: string
    }, ExtArgs["result"]["blockCategory"]>
    composites: {}
  }


  type BlockCategoryGetPayload<S extends boolean | null | undefined | BlockCategoryDefaultArgs> = $Result.GetResult<Prisma.$BlockCategoryPayload, S>

  type BlockCategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<BlockCategoryFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: BlockCategoryCountAggregateInputType | true
    }

  export interface BlockCategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BlockCategory'], meta: { name: 'BlockCategory' } }
    /**
     * Find zero or one BlockCategory that matches the filter.
     * @param {BlockCategoryFindUniqueArgs} args - Arguments to find a BlockCategory
     * @example
     * // Get one BlockCategory
     * const blockCategory = await prisma.blockCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends BlockCategoryFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, BlockCategoryFindUniqueArgs<ExtArgs>>
    ): Prisma__BlockCategoryClient<$Result.GetResult<Prisma.$BlockCategoryPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one BlockCategory that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {BlockCategoryFindUniqueOrThrowArgs} args - Arguments to find a BlockCategory
     * @example
     * // Get one BlockCategory
     * const blockCategory = await prisma.blockCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends BlockCategoryFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, BlockCategoryFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__BlockCategoryClient<$Result.GetResult<Prisma.$BlockCategoryPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first BlockCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockCategoryFindFirstArgs} args - Arguments to find a BlockCategory
     * @example
     * // Get one BlockCategory
     * const blockCategory = await prisma.blockCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends BlockCategoryFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, BlockCategoryFindFirstArgs<ExtArgs>>
    ): Prisma__BlockCategoryClient<$Result.GetResult<Prisma.$BlockCategoryPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first BlockCategory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockCategoryFindFirstOrThrowArgs} args - Arguments to find a BlockCategory
     * @example
     * // Get one BlockCategory
     * const blockCategory = await prisma.blockCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends BlockCategoryFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, BlockCategoryFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__BlockCategoryClient<$Result.GetResult<Prisma.$BlockCategoryPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more BlockCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockCategoryFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BlockCategories
     * const blockCategories = await prisma.blockCategory.findMany()
     * 
     * // Get first 10 BlockCategories
     * const blockCategories = await prisma.blockCategory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const blockCategoryWithIdOnly = await prisma.blockCategory.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends BlockCategoryFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BlockCategoryFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlockCategoryPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a BlockCategory.
     * @param {BlockCategoryCreateArgs} args - Arguments to create a BlockCategory.
     * @example
     * // Create one BlockCategory
     * const BlockCategory = await prisma.blockCategory.create({
     *   data: {
     *     // ... data to create a BlockCategory
     *   }
     * })
     * 
    **/
    create<T extends BlockCategoryCreateArgs<ExtArgs>>(
      args: SelectSubset<T, BlockCategoryCreateArgs<ExtArgs>>
    ): Prisma__BlockCategoryClient<$Result.GetResult<Prisma.$BlockCategoryPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many BlockCategories.
     *     @param {BlockCategoryCreateManyArgs} args - Arguments to create many BlockCategories.
     *     @example
     *     // Create many BlockCategories
     *     const blockCategory = await prisma.blockCategory.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends BlockCategoryCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BlockCategoryCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a BlockCategory.
     * @param {BlockCategoryDeleteArgs} args - Arguments to delete one BlockCategory.
     * @example
     * // Delete one BlockCategory
     * const BlockCategory = await prisma.blockCategory.delete({
     *   where: {
     *     // ... filter to delete one BlockCategory
     *   }
     * })
     * 
    **/
    delete<T extends BlockCategoryDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, BlockCategoryDeleteArgs<ExtArgs>>
    ): Prisma__BlockCategoryClient<$Result.GetResult<Prisma.$BlockCategoryPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one BlockCategory.
     * @param {BlockCategoryUpdateArgs} args - Arguments to update one BlockCategory.
     * @example
     * // Update one BlockCategory
     * const blockCategory = await prisma.blockCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends BlockCategoryUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, BlockCategoryUpdateArgs<ExtArgs>>
    ): Prisma__BlockCategoryClient<$Result.GetResult<Prisma.$BlockCategoryPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more BlockCategories.
     * @param {BlockCategoryDeleteManyArgs} args - Arguments to filter BlockCategories to delete.
     * @example
     * // Delete a few BlockCategories
     * const { count } = await prisma.blockCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends BlockCategoryDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BlockCategoryDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BlockCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BlockCategories
     * const blockCategory = await prisma.blockCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends BlockCategoryUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, BlockCategoryUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one BlockCategory.
     * @param {BlockCategoryUpsertArgs} args - Arguments to update or create a BlockCategory.
     * @example
     * // Update or create a BlockCategory
     * const blockCategory = await prisma.blockCategory.upsert({
     *   create: {
     *     // ... data to create a BlockCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BlockCategory we want to update
     *   }
     * })
    **/
    upsert<T extends BlockCategoryUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, BlockCategoryUpsertArgs<ExtArgs>>
    ): Prisma__BlockCategoryClient<$Result.GetResult<Prisma.$BlockCategoryPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of BlockCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockCategoryCountArgs} args - Arguments to filter BlockCategories to count.
     * @example
     * // Count the number of BlockCategories
     * const count = await prisma.blockCategory.count({
     *   where: {
     *     // ... the filter for the BlockCategories we want to count
     *   }
     * })
    **/
    count<T extends BlockCategoryCountArgs>(
      args?: Subset<T, BlockCategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BlockCategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BlockCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BlockCategoryAggregateArgs>(args: Subset<T, BlockCategoryAggregateArgs>): Prisma.PrismaPromise<GetBlockCategoryAggregateType<T>>

    /**
     * Group by BlockCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockCategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BlockCategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BlockCategoryGroupByArgs['orderBy'] }
        : { orderBy?: BlockCategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BlockCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBlockCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BlockCategory model
   */
  readonly fields: BlockCategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BlockCategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BlockCategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    blocks<T extends BlockCategory$blocksArgs<ExtArgs> = {}>(args?: Subset<T, BlockCategory$blocksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlockPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the BlockCategory model
   */ 
  interface BlockCategoryFieldRefs {
    readonly id: FieldRef<"BlockCategory", 'Int'>
    readonly createdAt: FieldRef<"BlockCategory", 'DateTime'>
    readonly updatedAt: FieldRef<"BlockCategory", 'DateTime'>
    readonly name: FieldRef<"BlockCategory", 'String'>
  }
    

  // Custom InputTypes

  /**
   * BlockCategory findUnique
   */
  export type BlockCategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockCategory
     */
    select?: BlockCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BlockCategoryInclude<ExtArgs> | null
    /**
     * Filter, which BlockCategory to fetch.
     */
    where: BlockCategoryWhereUniqueInput
  }


  /**
   * BlockCategory findUniqueOrThrow
   */
  export type BlockCategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockCategory
     */
    select?: BlockCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BlockCategoryInclude<ExtArgs> | null
    /**
     * Filter, which BlockCategory to fetch.
     */
    where: BlockCategoryWhereUniqueInput
  }


  /**
   * BlockCategory findFirst
   */
  export type BlockCategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockCategory
     */
    select?: BlockCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BlockCategoryInclude<ExtArgs> | null
    /**
     * Filter, which BlockCategory to fetch.
     */
    where?: BlockCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlockCategories to fetch.
     */
    orderBy?: BlockCategoryOrderByWithRelationInput | BlockCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BlockCategories.
     */
    cursor?: BlockCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlockCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlockCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BlockCategories.
     */
    distinct?: BlockCategoryScalarFieldEnum | BlockCategoryScalarFieldEnum[]
  }


  /**
   * BlockCategory findFirstOrThrow
   */
  export type BlockCategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockCategory
     */
    select?: BlockCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BlockCategoryInclude<ExtArgs> | null
    /**
     * Filter, which BlockCategory to fetch.
     */
    where?: BlockCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlockCategories to fetch.
     */
    orderBy?: BlockCategoryOrderByWithRelationInput | BlockCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BlockCategories.
     */
    cursor?: BlockCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlockCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlockCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BlockCategories.
     */
    distinct?: BlockCategoryScalarFieldEnum | BlockCategoryScalarFieldEnum[]
  }


  /**
   * BlockCategory findMany
   */
  export type BlockCategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockCategory
     */
    select?: BlockCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BlockCategoryInclude<ExtArgs> | null
    /**
     * Filter, which BlockCategories to fetch.
     */
    where?: BlockCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlockCategories to fetch.
     */
    orderBy?: BlockCategoryOrderByWithRelationInput | BlockCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BlockCategories.
     */
    cursor?: BlockCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlockCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlockCategories.
     */
    skip?: number
    distinct?: BlockCategoryScalarFieldEnum | BlockCategoryScalarFieldEnum[]
  }


  /**
   * BlockCategory create
   */
  export type BlockCategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockCategory
     */
    select?: BlockCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BlockCategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a BlockCategory.
     */
    data: XOR<BlockCategoryCreateInput, BlockCategoryUncheckedCreateInput>
  }


  /**
   * BlockCategory createMany
   */
  export type BlockCategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BlockCategories.
     */
    data: BlockCategoryCreateManyInput | BlockCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * BlockCategory update
   */
  export type BlockCategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockCategory
     */
    select?: BlockCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BlockCategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a BlockCategory.
     */
    data: XOR<BlockCategoryUpdateInput, BlockCategoryUncheckedUpdateInput>
    /**
     * Choose, which BlockCategory to update.
     */
    where: BlockCategoryWhereUniqueInput
  }


  /**
   * BlockCategory updateMany
   */
  export type BlockCategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BlockCategories.
     */
    data: XOR<BlockCategoryUpdateManyMutationInput, BlockCategoryUncheckedUpdateManyInput>
    /**
     * Filter which BlockCategories to update
     */
    where?: BlockCategoryWhereInput
  }


  /**
   * BlockCategory upsert
   */
  export type BlockCategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockCategory
     */
    select?: BlockCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BlockCategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the BlockCategory to update in case it exists.
     */
    where: BlockCategoryWhereUniqueInput
    /**
     * In case the BlockCategory found by the `where` argument doesn't exist, create a new BlockCategory with this data.
     */
    create: XOR<BlockCategoryCreateInput, BlockCategoryUncheckedCreateInput>
    /**
     * In case the BlockCategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BlockCategoryUpdateInput, BlockCategoryUncheckedUpdateInput>
  }


  /**
   * BlockCategory delete
   */
  export type BlockCategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockCategory
     */
    select?: BlockCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BlockCategoryInclude<ExtArgs> | null
    /**
     * Filter which BlockCategory to delete.
     */
    where: BlockCategoryWhereUniqueInput
  }


  /**
   * BlockCategory deleteMany
   */
  export type BlockCategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BlockCategories to delete
     */
    where?: BlockCategoryWhereInput
  }


  /**
   * BlockCategory.blocks
   */
  export type BlockCategory$blocksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Block
     */
    select?: BlockSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BlockInclude<ExtArgs> | null
    where?: BlockWhereInput
    orderBy?: BlockOrderByWithRelationInput | BlockOrderByWithRelationInput[]
    cursor?: BlockWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BlockScalarFieldEnum | BlockScalarFieldEnum[]
  }


  /**
   * BlockCategory without action
   */
  export type BlockCategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockCategory
     */
    select?: BlockCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BlockCategoryInclude<ExtArgs> | null
  }



  /**
   * Model Block
   */

  export type AggregateBlock = {
    _count: BlockCountAggregateOutputType | null
    _avg: BlockAvgAggregateOutputType | null
    _sum: BlockSumAggregateOutputType | null
    _min: BlockMinAggregateOutputType | null
    _max: BlockMaxAggregateOutputType | null
  }

  export type BlockAvgAggregateOutputType = {
    categoryId: number | null
  }

  export type BlockSumAggregateOutputType = {
    categoryId: number | null
  }

  export type BlockMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
    elements: string | null
    url: string | null
    categoryId: number | null
  }

  export type BlockMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
    elements: string | null
    url: string | null
    categoryId: number | null
  }

  export type BlockCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    userId: number
    elements: number
    url: number
    categoryId: number
    _all: number
  }


  export type BlockAvgAggregateInputType = {
    categoryId?: true
  }

  export type BlockSumAggregateInputType = {
    categoryId?: true
  }

  export type BlockMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    elements?: true
    url?: true
    categoryId?: true
  }

  export type BlockMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    elements?: true
    url?: true
    categoryId?: true
  }

  export type BlockCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    elements?: true
    url?: true
    categoryId?: true
    _all?: true
  }

  export type BlockAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Block to aggregate.
     */
    where?: BlockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Blocks to fetch.
     */
    orderBy?: BlockOrderByWithRelationInput | BlockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BlockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Blocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Blocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Blocks
    **/
    _count?: true | BlockCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BlockAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BlockSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BlockMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BlockMaxAggregateInputType
  }

  export type GetBlockAggregateType<T extends BlockAggregateArgs> = {
        [P in keyof T & keyof AggregateBlock]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBlock[P]>
      : GetScalarType<T[P], AggregateBlock[P]>
  }




  export type BlockGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlockWhereInput
    orderBy?: BlockOrderByWithAggregationInput | BlockOrderByWithAggregationInput[]
    by: BlockScalarFieldEnum[] | BlockScalarFieldEnum
    having?: BlockScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BlockCountAggregateInputType | true
    _avg?: BlockAvgAggregateInputType
    _sum?: BlockSumAggregateInputType
    _min?: BlockMinAggregateInputType
    _max?: BlockMaxAggregateInputType
  }

  export type BlockGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    userId: string
    elements: string
    url: string
    categoryId: number
    _count: BlockCountAggregateOutputType | null
    _avg: BlockAvgAggregateOutputType | null
    _sum: BlockSumAggregateOutputType | null
    _min: BlockMinAggregateOutputType | null
    _max: BlockMaxAggregateOutputType | null
  }

  type GetBlockGroupByPayload<T extends BlockGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BlockGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BlockGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BlockGroupByOutputType[P]>
            : GetScalarType<T[P], BlockGroupByOutputType[P]>
        }
      >
    >


  export type BlockSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    elements?: boolean
    url?: boolean
    categoryId?: boolean
    category?: boolean | BlockCategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["block"]>

  export type BlockSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    elements?: boolean
    url?: boolean
    categoryId?: boolean
  }

  export type BlockInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | BlockCategoryDefaultArgs<ExtArgs>
  }


  export type $BlockPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Block"
    objects: {
      category: Prisma.$BlockCategoryPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      userId: string
      elements: string
      url: string
      categoryId: number
    }, ExtArgs["result"]["block"]>
    composites: {}
  }


  type BlockGetPayload<S extends boolean | null | undefined | BlockDefaultArgs> = $Result.GetResult<Prisma.$BlockPayload, S>

  type BlockCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<BlockFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: BlockCountAggregateInputType | true
    }

  export interface BlockDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Block'], meta: { name: 'Block' } }
    /**
     * Find zero or one Block that matches the filter.
     * @param {BlockFindUniqueArgs} args - Arguments to find a Block
     * @example
     * // Get one Block
     * const block = await prisma.block.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends BlockFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, BlockFindUniqueArgs<ExtArgs>>
    ): Prisma__BlockClient<$Result.GetResult<Prisma.$BlockPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Block that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {BlockFindUniqueOrThrowArgs} args - Arguments to find a Block
     * @example
     * // Get one Block
     * const block = await prisma.block.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends BlockFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, BlockFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__BlockClient<$Result.GetResult<Prisma.$BlockPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Block that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockFindFirstArgs} args - Arguments to find a Block
     * @example
     * // Get one Block
     * const block = await prisma.block.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends BlockFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, BlockFindFirstArgs<ExtArgs>>
    ): Prisma__BlockClient<$Result.GetResult<Prisma.$BlockPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Block that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockFindFirstOrThrowArgs} args - Arguments to find a Block
     * @example
     * // Get one Block
     * const block = await prisma.block.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends BlockFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, BlockFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__BlockClient<$Result.GetResult<Prisma.$BlockPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Blocks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Blocks
     * const blocks = await prisma.block.findMany()
     * 
     * // Get first 10 Blocks
     * const blocks = await prisma.block.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const blockWithIdOnly = await prisma.block.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends BlockFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BlockFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlockPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Block.
     * @param {BlockCreateArgs} args - Arguments to create a Block.
     * @example
     * // Create one Block
     * const Block = await prisma.block.create({
     *   data: {
     *     // ... data to create a Block
     *   }
     * })
     * 
    **/
    create<T extends BlockCreateArgs<ExtArgs>>(
      args: SelectSubset<T, BlockCreateArgs<ExtArgs>>
    ): Prisma__BlockClient<$Result.GetResult<Prisma.$BlockPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Blocks.
     *     @param {BlockCreateManyArgs} args - Arguments to create many Blocks.
     *     @example
     *     // Create many Blocks
     *     const block = await prisma.block.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends BlockCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BlockCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Block.
     * @param {BlockDeleteArgs} args - Arguments to delete one Block.
     * @example
     * // Delete one Block
     * const Block = await prisma.block.delete({
     *   where: {
     *     // ... filter to delete one Block
     *   }
     * })
     * 
    **/
    delete<T extends BlockDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, BlockDeleteArgs<ExtArgs>>
    ): Prisma__BlockClient<$Result.GetResult<Prisma.$BlockPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Block.
     * @param {BlockUpdateArgs} args - Arguments to update one Block.
     * @example
     * // Update one Block
     * const block = await prisma.block.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends BlockUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, BlockUpdateArgs<ExtArgs>>
    ): Prisma__BlockClient<$Result.GetResult<Prisma.$BlockPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Blocks.
     * @param {BlockDeleteManyArgs} args - Arguments to filter Blocks to delete.
     * @example
     * // Delete a few Blocks
     * const { count } = await prisma.block.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends BlockDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BlockDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Blocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Blocks
     * const block = await prisma.block.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends BlockUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, BlockUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Block.
     * @param {BlockUpsertArgs} args - Arguments to update or create a Block.
     * @example
     * // Update or create a Block
     * const block = await prisma.block.upsert({
     *   create: {
     *     // ... data to create a Block
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Block we want to update
     *   }
     * })
    **/
    upsert<T extends BlockUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, BlockUpsertArgs<ExtArgs>>
    ): Prisma__BlockClient<$Result.GetResult<Prisma.$BlockPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Blocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockCountArgs} args - Arguments to filter Blocks to count.
     * @example
     * // Count the number of Blocks
     * const count = await prisma.block.count({
     *   where: {
     *     // ... the filter for the Blocks we want to count
     *   }
     * })
    **/
    count<T extends BlockCountArgs>(
      args?: Subset<T, BlockCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BlockCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Block.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BlockAggregateArgs>(args: Subset<T, BlockAggregateArgs>): Prisma.PrismaPromise<GetBlockAggregateType<T>>

    /**
     * Group by Block.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BlockGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BlockGroupByArgs['orderBy'] }
        : { orderBy?: BlockGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BlockGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBlockGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Block model
   */
  readonly fields: BlockFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Block.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BlockClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    category<T extends BlockCategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BlockCategoryDefaultArgs<ExtArgs>>): Prisma__BlockCategoryClient<$Result.GetResult<Prisma.$BlockCategoryPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Block model
   */ 
  interface BlockFieldRefs {
    readonly id: FieldRef<"Block", 'String'>
    readonly createdAt: FieldRef<"Block", 'DateTime'>
    readonly updatedAt: FieldRef<"Block", 'DateTime'>
    readonly userId: FieldRef<"Block", 'String'>
    readonly elements: FieldRef<"Block", 'String'>
    readonly url: FieldRef<"Block", 'String'>
    readonly categoryId: FieldRef<"Block", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Block findUnique
   */
  export type BlockFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Block
     */
    select?: BlockSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BlockInclude<ExtArgs> | null
    /**
     * Filter, which Block to fetch.
     */
    where: BlockWhereUniqueInput
  }


  /**
   * Block findUniqueOrThrow
   */
  export type BlockFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Block
     */
    select?: BlockSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BlockInclude<ExtArgs> | null
    /**
     * Filter, which Block to fetch.
     */
    where: BlockWhereUniqueInput
  }


  /**
   * Block findFirst
   */
  export type BlockFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Block
     */
    select?: BlockSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BlockInclude<ExtArgs> | null
    /**
     * Filter, which Block to fetch.
     */
    where?: BlockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Blocks to fetch.
     */
    orderBy?: BlockOrderByWithRelationInput | BlockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Blocks.
     */
    cursor?: BlockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Blocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Blocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Blocks.
     */
    distinct?: BlockScalarFieldEnum | BlockScalarFieldEnum[]
  }


  /**
   * Block findFirstOrThrow
   */
  export type BlockFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Block
     */
    select?: BlockSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BlockInclude<ExtArgs> | null
    /**
     * Filter, which Block to fetch.
     */
    where?: BlockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Blocks to fetch.
     */
    orderBy?: BlockOrderByWithRelationInput | BlockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Blocks.
     */
    cursor?: BlockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Blocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Blocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Blocks.
     */
    distinct?: BlockScalarFieldEnum | BlockScalarFieldEnum[]
  }


  /**
   * Block findMany
   */
  export type BlockFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Block
     */
    select?: BlockSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BlockInclude<ExtArgs> | null
    /**
     * Filter, which Blocks to fetch.
     */
    where?: BlockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Blocks to fetch.
     */
    orderBy?: BlockOrderByWithRelationInput | BlockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Blocks.
     */
    cursor?: BlockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Blocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Blocks.
     */
    skip?: number
    distinct?: BlockScalarFieldEnum | BlockScalarFieldEnum[]
  }


  /**
   * Block create
   */
  export type BlockCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Block
     */
    select?: BlockSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BlockInclude<ExtArgs> | null
    /**
     * The data needed to create a Block.
     */
    data: XOR<BlockCreateInput, BlockUncheckedCreateInput>
  }


  /**
   * Block createMany
   */
  export type BlockCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Blocks.
     */
    data: BlockCreateManyInput | BlockCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Block update
   */
  export type BlockUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Block
     */
    select?: BlockSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BlockInclude<ExtArgs> | null
    /**
     * The data needed to update a Block.
     */
    data: XOR<BlockUpdateInput, BlockUncheckedUpdateInput>
    /**
     * Choose, which Block to update.
     */
    where: BlockWhereUniqueInput
  }


  /**
   * Block updateMany
   */
  export type BlockUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Blocks.
     */
    data: XOR<BlockUpdateManyMutationInput, BlockUncheckedUpdateManyInput>
    /**
     * Filter which Blocks to update
     */
    where?: BlockWhereInput
  }


  /**
   * Block upsert
   */
  export type BlockUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Block
     */
    select?: BlockSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BlockInclude<ExtArgs> | null
    /**
     * The filter to search for the Block to update in case it exists.
     */
    where: BlockWhereUniqueInput
    /**
     * In case the Block found by the `where` argument doesn't exist, create a new Block with this data.
     */
    create: XOR<BlockCreateInput, BlockUncheckedCreateInput>
    /**
     * In case the Block was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BlockUpdateInput, BlockUncheckedUpdateInput>
  }


  /**
   * Block delete
   */
  export type BlockDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Block
     */
    select?: BlockSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BlockInclude<ExtArgs> | null
    /**
     * Filter which Block to delete.
     */
    where: BlockWhereUniqueInput
  }


  /**
   * Block deleteMany
   */
  export type BlockDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Blocks to delete
     */
    where?: BlockWhereInput
  }


  /**
   * Block without action
   */
  export type BlockDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Block
     */
    select?: BlockSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BlockInclude<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const FamilyScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type FamilyScalarFieldEnum = (typeof FamilyScalarFieldEnum)[keyof typeof FamilyScalarFieldEnum]


  export const CategoryScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const KindScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type KindScalarFieldEnum = (typeof KindScalarFieldEnum)[keyof typeof KindScalarFieldEnum]


  export const FontScalarFieldEnum: {
    id: 'id',
    familyId: 'familyId',
    categoryId: 'categoryId',
    kindId: 'kindId',
    subsets: 'subsets'
  };

  export type FontScalarFieldEnum = (typeof FontScalarFieldEnum)[keyof typeof FontScalarFieldEnum]


  export const VariantScalarFieldEnum: {
    id: 'id',
    name: 'name',
    imageUrl: 'imageUrl',
    style: 'style',
    weight: 'weight',
    fontUrl: 'fontUrl',
    fontId: 'fontId'
  };

  export type VariantScalarFieldEnum = (typeof VariantScalarFieldEnum)[keyof typeof VariantScalarFieldEnum]


  export const UploadScalarFieldEnum: {
    id: 'id',
    url: 'url',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId',
    publicId: 'publicId',
    backgroundRemoved: 'backgroundRemoved'
  };

  export type UploadScalarFieldEnum = (typeof UploadScalarFieldEnum)[keyof typeof UploadScalarFieldEnum]


  export const DesignScalarFieldEnum: {
    id: 'id',
    name: 'name',
    userId: 'userId',
    canvasWidth: 'canvasWidth',
    canvasHeight: 'canvasHeight',
    background: 'background',
    elements: 'elements',
    fonts: 'fonts',
    thumbnail: 'thumbnail'
  };

  export type DesignScalarFieldEnum = (typeof DesignScalarFieldEnum)[keyof typeof DesignScalarFieldEnum]


  export const BlockCategoryScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    name: 'name'
  };

  export type BlockCategoryScalarFieldEnum = (typeof BlockCategoryScalarFieldEnum)[keyof typeof BlockCategoryScalarFieldEnum]


  export const BlockScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId',
    elements: 'elements',
    url: 'url',
    categoryId: 'categoryId'
  };

  export type BlockScalarFieldEnum = (typeof BlockScalarFieldEnum)[keyof typeof BlockScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type FamilyWhereInput = {
    AND?: FamilyWhereInput | FamilyWhereInput[]
    OR?: FamilyWhereInput[]
    NOT?: FamilyWhereInput | FamilyWhereInput[]
    id?: IntFilter<"Family"> | number
    name?: StringFilter<"Family"> | string
    fonts?: FontListRelationFilter
  }

  export type FamilyOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    fonts?: FontOrderByRelationAggregateInput
  }

  export type FamilyWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: FamilyWhereInput | FamilyWhereInput[]
    OR?: FamilyWhereInput[]
    NOT?: FamilyWhereInput | FamilyWhereInput[]
    fonts?: FontListRelationFilter
  }, "id" | "name">

  export type FamilyOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: FamilyCountOrderByAggregateInput
    _avg?: FamilyAvgOrderByAggregateInput
    _max?: FamilyMaxOrderByAggregateInput
    _min?: FamilyMinOrderByAggregateInput
    _sum?: FamilySumOrderByAggregateInput
  }

  export type FamilyScalarWhereWithAggregatesInput = {
    AND?: FamilyScalarWhereWithAggregatesInput | FamilyScalarWhereWithAggregatesInput[]
    OR?: FamilyScalarWhereWithAggregatesInput[]
    NOT?: FamilyScalarWhereWithAggregatesInput | FamilyScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Family"> | number
    name?: StringWithAggregatesFilter<"Family"> | string
  }

  export type CategoryWhereInput = {
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    id?: IntFilter<"Category"> | number
    name?: StringFilter<"Category"> | string
    fonts?: FontListRelationFilter
  }

  export type CategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    fonts?: FontOrderByRelationAggregateInput
  }

  export type CategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    fonts?: FontListRelationFilter
  }, "id" | "name">

  export type CategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: CategoryCountOrderByAggregateInput
    _avg?: CategoryAvgOrderByAggregateInput
    _max?: CategoryMaxOrderByAggregateInput
    _min?: CategoryMinOrderByAggregateInput
    _sum?: CategorySumOrderByAggregateInput
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    OR?: CategoryScalarWhereWithAggregatesInput[]
    NOT?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Category"> | number
    name?: StringWithAggregatesFilter<"Category"> | string
  }

  export type KindWhereInput = {
    AND?: KindWhereInput | KindWhereInput[]
    OR?: KindWhereInput[]
    NOT?: KindWhereInput | KindWhereInput[]
    id?: IntFilter<"Kind"> | number
    name?: StringFilter<"Kind"> | string
    fonts?: FontListRelationFilter
  }

  export type KindOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    fonts?: FontOrderByRelationAggregateInput
  }

  export type KindWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: KindWhereInput | KindWhereInput[]
    OR?: KindWhereInput[]
    NOT?: KindWhereInput | KindWhereInput[]
    fonts?: FontListRelationFilter
  }, "id" | "name">

  export type KindOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: KindCountOrderByAggregateInput
    _avg?: KindAvgOrderByAggregateInput
    _max?: KindMaxOrderByAggregateInput
    _min?: KindMinOrderByAggregateInput
    _sum?: KindSumOrderByAggregateInput
  }

  export type KindScalarWhereWithAggregatesInput = {
    AND?: KindScalarWhereWithAggregatesInput | KindScalarWhereWithAggregatesInput[]
    OR?: KindScalarWhereWithAggregatesInput[]
    NOT?: KindScalarWhereWithAggregatesInput | KindScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Kind"> | number
    name?: StringWithAggregatesFilter<"Kind"> | string
  }

  export type FontWhereInput = {
    AND?: FontWhereInput | FontWhereInput[]
    OR?: FontWhereInput[]
    NOT?: FontWhereInput | FontWhereInput[]
    id?: IntFilter<"Font"> | number
    familyId?: IntFilter<"Font"> | number
    categoryId?: IntFilter<"Font"> | number
    kindId?: IntFilter<"Font"> | number
    subsets?: StringNullableListFilter<"Font">
    family?: XOR<FamilyRelationFilter, FamilyWhereInput>
    category?: XOR<CategoryRelationFilter, CategoryWhereInput>
    kind?: XOR<KindRelationFilter, KindWhereInput>
    variants?: VariantListRelationFilter
  }

  export type FontOrderByWithRelationInput = {
    id?: SortOrder
    familyId?: SortOrder
    categoryId?: SortOrder
    kindId?: SortOrder
    subsets?: SortOrder
    family?: FamilyOrderByWithRelationInput
    category?: CategoryOrderByWithRelationInput
    kind?: KindOrderByWithRelationInput
    variants?: VariantOrderByRelationAggregateInput
  }

  export type FontWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: FontWhereInput | FontWhereInput[]
    OR?: FontWhereInput[]
    NOT?: FontWhereInput | FontWhereInput[]
    familyId?: IntFilter<"Font"> | number
    categoryId?: IntFilter<"Font"> | number
    kindId?: IntFilter<"Font"> | number
    subsets?: StringNullableListFilter<"Font">
    family?: XOR<FamilyRelationFilter, FamilyWhereInput>
    category?: XOR<CategoryRelationFilter, CategoryWhereInput>
    kind?: XOR<KindRelationFilter, KindWhereInput>
    variants?: VariantListRelationFilter
  }, "id">

  export type FontOrderByWithAggregationInput = {
    id?: SortOrder
    familyId?: SortOrder
    categoryId?: SortOrder
    kindId?: SortOrder
    subsets?: SortOrder
    _count?: FontCountOrderByAggregateInput
    _avg?: FontAvgOrderByAggregateInput
    _max?: FontMaxOrderByAggregateInput
    _min?: FontMinOrderByAggregateInput
    _sum?: FontSumOrderByAggregateInput
  }

  export type FontScalarWhereWithAggregatesInput = {
    AND?: FontScalarWhereWithAggregatesInput | FontScalarWhereWithAggregatesInput[]
    OR?: FontScalarWhereWithAggregatesInput[]
    NOT?: FontScalarWhereWithAggregatesInput | FontScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Font"> | number
    familyId?: IntWithAggregatesFilter<"Font"> | number
    categoryId?: IntWithAggregatesFilter<"Font"> | number
    kindId?: IntWithAggregatesFilter<"Font"> | number
    subsets?: StringNullableListFilter<"Font">
  }

  export type VariantWhereInput = {
    AND?: VariantWhereInput | VariantWhereInput[]
    OR?: VariantWhereInput[]
    NOT?: VariantWhereInput | VariantWhereInput[]
    id?: IntFilter<"Variant"> | number
    name?: StringFilter<"Variant"> | string
    imageUrl?: StringFilter<"Variant"> | string
    style?: StringFilter<"Variant"> | string
    weight?: StringFilter<"Variant"> | string
    fontUrl?: StringFilter<"Variant"> | string
    fontId?: IntFilter<"Variant"> | number
    font?: XOR<FontRelationFilter, FontWhereInput>
  }

  export type VariantOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    imageUrl?: SortOrder
    style?: SortOrder
    weight?: SortOrder
    fontUrl?: SortOrder
    fontId?: SortOrder
    font?: FontOrderByWithRelationInput
  }

  export type VariantWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: VariantWhereInput | VariantWhereInput[]
    OR?: VariantWhereInput[]
    NOT?: VariantWhereInput | VariantWhereInput[]
    name?: StringFilter<"Variant"> | string
    imageUrl?: StringFilter<"Variant"> | string
    style?: StringFilter<"Variant"> | string
    weight?: StringFilter<"Variant"> | string
    fontUrl?: StringFilter<"Variant"> | string
    fontId?: IntFilter<"Variant"> | number
    font?: XOR<FontRelationFilter, FontWhereInput>
  }, "id">

  export type VariantOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    imageUrl?: SortOrder
    style?: SortOrder
    weight?: SortOrder
    fontUrl?: SortOrder
    fontId?: SortOrder
    _count?: VariantCountOrderByAggregateInput
    _avg?: VariantAvgOrderByAggregateInput
    _max?: VariantMaxOrderByAggregateInput
    _min?: VariantMinOrderByAggregateInput
    _sum?: VariantSumOrderByAggregateInput
  }

  export type VariantScalarWhereWithAggregatesInput = {
    AND?: VariantScalarWhereWithAggregatesInput | VariantScalarWhereWithAggregatesInput[]
    OR?: VariantScalarWhereWithAggregatesInput[]
    NOT?: VariantScalarWhereWithAggregatesInput | VariantScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Variant"> | number
    name?: StringWithAggregatesFilter<"Variant"> | string
    imageUrl?: StringWithAggregatesFilter<"Variant"> | string
    style?: StringWithAggregatesFilter<"Variant"> | string
    weight?: StringWithAggregatesFilter<"Variant"> | string
    fontUrl?: StringWithAggregatesFilter<"Variant"> | string
    fontId?: IntWithAggregatesFilter<"Variant"> | number
  }

  export type UploadWhereInput = {
    AND?: UploadWhereInput | UploadWhereInput[]
    OR?: UploadWhereInput[]
    NOT?: UploadWhereInput | UploadWhereInput[]
    id?: IntFilter<"Upload"> | number
    url?: StringFilter<"Upload"> | string
    createdAt?: DateTimeFilter<"Upload"> | Date | string
    updatedAt?: DateTimeFilter<"Upload"> | Date | string
    userId?: StringFilter<"Upload"> | string
    publicId?: StringFilter<"Upload"> | string
    backgroundRemoved?: BoolFilter<"Upload"> | boolean
  }

  export type UploadOrderByWithRelationInput = {
    id?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    publicId?: SortOrder
    backgroundRemoved?: SortOrder
  }

  export type UploadWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    url?: string
    AND?: UploadWhereInput | UploadWhereInput[]
    OR?: UploadWhereInput[]
    NOT?: UploadWhereInput | UploadWhereInput[]
    createdAt?: DateTimeFilter<"Upload"> | Date | string
    updatedAt?: DateTimeFilter<"Upload"> | Date | string
    userId?: StringFilter<"Upload"> | string
    publicId?: StringFilter<"Upload"> | string
    backgroundRemoved?: BoolFilter<"Upload"> | boolean
  }, "id" | "url">

  export type UploadOrderByWithAggregationInput = {
    id?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    publicId?: SortOrder
    backgroundRemoved?: SortOrder
    _count?: UploadCountOrderByAggregateInput
    _avg?: UploadAvgOrderByAggregateInput
    _max?: UploadMaxOrderByAggregateInput
    _min?: UploadMinOrderByAggregateInput
    _sum?: UploadSumOrderByAggregateInput
  }

  export type UploadScalarWhereWithAggregatesInput = {
    AND?: UploadScalarWhereWithAggregatesInput | UploadScalarWhereWithAggregatesInput[]
    OR?: UploadScalarWhereWithAggregatesInput[]
    NOT?: UploadScalarWhereWithAggregatesInput | UploadScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Upload"> | number
    url?: StringWithAggregatesFilter<"Upload"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Upload"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Upload"> | Date | string
    userId?: StringWithAggregatesFilter<"Upload"> | string
    publicId?: StringWithAggregatesFilter<"Upload"> | string
    backgroundRemoved?: BoolWithAggregatesFilter<"Upload"> | boolean
  }

  export type DesignWhereInput = {
    AND?: DesignWhereInput | DesignWhereInput[]
    OR?: DesignWhereInput[]
    NOT?: DesignWhereInput | DesignWhereInput[]
    id?: StringFilter<"Design"> | string
    name?: StringFilter<"Design"> | string
    userId?: StringFilter<"Design"> | string
    canvasWidth?: IntFilter<"Design"> | number
    canvasHeight?: IntFilter<"Design"> | number
    background?: StringFilter<"Design"> | string
    elements?: StringFilter<"Design"> | string
    fonts?: StringNullableListFilter<"Design">
    thumbnail?: StringFilter<"Design"> | string
  }

  export type DesignOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    canvasWidth?: SortOrder
    canvasHeight?: SortOrder
    background?: SortOrder
    elements?: SortOrder
    fonts?: SortOrder
    thumbnail?: SortOrder
  }

  export type DesignWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DesignWhereInput | DesignWhereInput[]
    OR?: DesignWhereInput[]
    NOT?: DesignWhereInput | DesignWhereInput[]
    name?: StringFilter<"Design"> | string
    userId?: StringFilter<"Design"> | string
    canvasWidth?: IntFilter<"Design"> | number
    canvasHeight?: IntFilter<"Design"> | number
    background?: StringFilter<"Design"> | string
    elements?: StringFilter<"Design"> | string
    fonts?: StringNullableListFilter<"Design">
    thumbnail?: StringFilter<"Design"> | string
  }, "id">

  export type DesignOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    canvasWidth?: SortOrder
    canvasHeight?: SortOrder
    background?: SortOrder
    elements?: SortOrder
    fonts?: SortOrder
    thumbnail?: SortOrder
    _count?: DesignCountOrderByAggregateInput
    _avg?: DesignAvgOrderByAggregateInput
    _max?: DesignMaxOrderByAggregateInput
    _min?: DesignMinOrderByAggregateInput
    _sum?: DesignSumOrderByAggregateInput
  }

  export type DesignScalarWhereWithAggregatesInput = {
    AND?: DesignScalarWhereWithAggregatesInput | DesignScalarWhereWithAggregatesInput[]
    OR?: DesignScalarWhereWithAggregatesInput[]
    NOT?: DesignScalarWhereWithAggregatesInput | DesignScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Design"> | string
    name?: StringWithAggregatesFilter<"Design"> | string
    userId?: StringWithAggregatesFilter<"Design"> | string
    canvasWidth?: IntWithAggregatesFilter<"Design"> | number
    canvasHeight?: IntWithAggregatesFilter<"Design"> | number
    background?: StringWithAggregatesFilter<"Design"> | string
    elements?: StringWithAggregatesFilter<"Design"> | string
    fonts?: StringNullableListFilter<"Design">
    thumbnail?: StringWithAggregatesFilter<"Design"> | string
  }

  export type BlockCategoryWhereInput = {
    AND?: BlockCategoryWhereInput | BlockCategoryWhereInput[]
    OR?: BlockCategoryWhereInput[]
    NOT?: BlockCategoryWhereInput | BlockCategoryWhereInput[]
    id?: IntFilter<"BlockCategory"> | number
    createdAt?: DateTimeFilter<"BlockCategory"> | Date | string
    updatedAt?: DateTimeFilter<"BlockCategory"> | Date | string
    name?: StringFilter<"BlockCategory"> | string
    blocks?: BlockListRelationFilter
  }

  export type BlockCategoryOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    blocks?: BlockOrderByRelationAggregateInput
  }

  export type BlockCategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: BlockCategoryWhereInput | BlockCategoryWhereInput[]
    OR?: BlockCategoryWhereInput[]
    NOT?: BlockCategoryWhereInput | BlockCategoryWhereInput[]
    createdAt?: DateTimeFilter<"BlockCategory"> | Date | string
    updatedAt?: DateTimeFilter<"BlockCategory"> | Date | string
    name?: StringFilter<"BlockCategory"> | string
    blocks?: BlockListRelationFilter
  }, "id">

  export type BlockCategoryOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    _count?: BlockCategoryCountOrderByAggregateInput
    _avg?: BlockCategoryAvgOrderByAggregateInput
    _max?: BlockCategoryMaxOrderByAggregateInput
    _min?: BlockCategoryMinOrderByAggregateInput
    _sum?: BlockCategorySumOrderByAggregateInput
  }

  export type BlockCategoryScalarWhereWithAggregatesInput = {
    AND?: BlockCategoryScalarWhereWithAggregatesInput | BlockCategoryScalarWhereWithAggregatesInput[]
    OR?: BlockCategoryScalarWhereWithAggregatesInput[]
    NOT?: BlockCategoryScalarWhereWithAggregatesInput | BlockCategoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"BlockCategory"> | number
    createdAt?: DateTimeWithAggregatesFilter<"BlockCategory"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"BlockCategory"> | Date | string
    name?: StringWithAggregatesFilter<"BlockCategory"> | string
  }

  export type BlockWhereInput = {
    AND?: BlockWhereInput | BlockWhereInput[]
    OR?: BlockWhereInput[]
    NOT?: BlockWhereInput | BlockWhereInput[]
    id?: StringFilter<"Block"> | string
    createdAt?: DateTimeFilter<"Block"> | Date | string
    updatedAt?: DateTimeFilter<"Block"> | Date | string
    userId?: StringFilter<"Block"> | string
    elements?: StringFilter<"Block"> | string
    url?: StringFilter<"Block"> | string
    categoryId?: IntFilter<"Block"> | number
    category?: XOR<BlockCategoryRelationFilter, BlockCategoryWhereInput>
  }

  export type BlockOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    elements?: SortOrder
    url?: SortOrder
    categoryId?: SortOrder
    category?: BlockCategoryOrderByWithRelationInput
  }

  export type BlockWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BlockWhereInput | BlockWhereInput[]
    OR?: BlockWhereInput[]
    NOT?: BlockWhereInput | BlockWhereInput[]
    createdAt?: DateTimeFilter<"Block"> | Date | string
    updatedAt?: DateTimeFilter<"Block"> | Date | string
    userId?: StringFilter<"Block"> | string
    elements?: StringFilter<"Block"> | string
    url?: StringFilter<"Block"> | string
    categoryId?: IntFilter<"Block"> | number
    category?: XOR<BlockCategoryRelationFilter, BlockCategoryWhereInput>
  }, "id">

  export type BlockOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    elements?: SortOrder
    url?: SortOrder
    categoryId?: SortOrder
    _count?: BlockCountOrderByAggregateInput
    _avg?: BlockAvgOrderByAggregateInput
    _max?: BlockMaxOrderByAggregateInput
    _min?: BlockMinOrderByAggregateInput
    _sum?: BlockSumOrderByAggregateInput
  }

  export type BlockScalarWhereWithAggregatesInput = {
    AND?: BlockScalarWhereWithAggregatesInput | BlockScalarWhereWithAggregatesInput[]
    OR?: BlockScalarWhereWithAggregatesInput[]
    NOT?: BlockScalarWhereWithAggregatesInput | BlockScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Block"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Block"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Block"> | Date | string
    userId?: StringWithAggregatesFilter<"Block"> | string
    elements?: StringWithAggregatesFilter<"Block"> | string
    url?: StringWithAggregatesFilter<"Block"> | string
    categoryId?: IntWithAggregatesFilter<"Block"> | number
  }

  export type FamilyCreateInput = {
    name: string
    fonts?: FontCreateNestedManyWithoutFamilyInput
  }

  export type FamilyUncheckedCreateInput = {
    id?: number
    name: string
    fonts?: FontUncheckedCreateNestedManyWithoutFamilyInput
  }

  export type FamilyUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    fonts?: FontUpdateManyWithoutFamilyNestedInput
  }

  export type FamilyUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    fonts?: FontUncheckedUpdateManyWithoutFamilyNestedInput
  }

  export type FamilyCreateManyInput = {
    id?: number
    name: string
  }

  export type FamilyUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type FamilyUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type CategoryCreateInput = {
    name: string
    fonts?: FontCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateInput = {
    id?: number
    name: string
    fonts?: FontUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    fonts?: FontUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    fonts?: FontUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryCreateManyInput = {
    id?: number
    name: string
  }

  export type CategoryUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type CategoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type KindCreateInput = {
    name: string
    fonts?: FontCreateNestedManyWithoutKindInput
  }

  export type KindUncheckedCreateInput = {
    id?: number
    name: string
    fonts?: FontUncheckedCreateNestedManyWithoutKindInput
  }

  export type KindUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    fonts?: FontUpdateManyWithoutKindNestedInput
  }

  export type KindUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    fonts?: FontUncheckedUpdateManyWithoutKindNestedInput
  }

  export type KindCreateManyInput = {
    id?: number
    name: string
  }

  export type KindUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type KindUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type FontCreateInput = {
    subsets?: FontCreatesubsetsInput | string[]
    family: FamilyCreateNestedOneWithoutFontsInput
    category: CategoryCreateNestedOneWithoutFontsInput
    kind: KindCreateNestedOneWithoutFontsInput
    variants?: VariantCreateNestedManyWithoutFontInput
  }

  export type FontUncheckedCreateInput = {
    id?: number
    familyId: number
    categoryId: number
    kindId: number
    subsets?: FontCreatesubsetsInput | string[]
    variants?: VariantUncheckedCreateNestedManyWithoutFontInput
  }

  export type FontUpdateInput = {
    subsets?: FontUpdatesubsetsInput | string[]
    family?: FamilyUpdateOneRequiredWithoutFontsNestedInput
    category?: CategoryUpdateOneRequiredWithoutFontsNestedInput
    kind?: KindUpdateOneRequiredWithoutFontsNestedInput
    variants?: VariantUpdateManyWithoutFontNestedInput
  }

  export type FontUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    familyId?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    kindId?: IntFieldUpdateOperationsInput | number
    subsets?: FontUpdatesubsetsInput | string[]
    variants?: VariantUncheckedUpdateManyWithoutFontNestedInput
  }

  export type FontCreateManyInput = {
    id?: number
    familyId: number
    categoryId: number
    kindId: number
    subsets?: FontCreatesubsetsInput | string[]
  }

  export type FontUpdateManyMutationInput = {
    subsets?: FontUpdatesubsetsInput | string[]
  }

  export type FontUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    familyId?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    kindId?: IntFieldUpdateOperationsInput | number
    subsets?: FontUpdatesubsetsInput | string[]
  }

  export type VariantCreateInput = {
    name: string
    imageUrl: string
    style: string
    weight: string
    fontUrl: string
    font: FontCreateNestedOneWithoutVariantsInput
  }

  export type VariantUncheckedCreateInput = {
    id?: number
    name: string
    imageUrl: string
    style: string
    weight: string
    fontUrl: string
    fontId: number
  }

  export type VariantUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    style?: StringFieldUpdateOperationsInput | string
    weight?: StringFieldUpdateOperationsInput | string
    fontUrl?: StringFieldUpdateOperationsInput | string
    font?: FontUpdateOneRequiredWithoutVariantsNestedInput
  }

  export type VariantUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    style?: StringFieldUpdateOperationsInput | string
    weight?: StringFieldUpdateOperationsInput | string
    fontUrl?: StringFieldUpdateOperationsInput | string
    fontId?: IntFieldUpdateOperationsInput | number
  }

  export type VariantCreateManyInput = {
    id?: number
    name: string
    imageUrl: string
    style: string
    weight: string
    fontUrl: string
    fontId: number
  }

  export type VariantUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    style?: StringFieldUpdateOperationsInput | string
    weight?: StringFieldUpdateOperationsInput | string
    fontUrl?: StringFieldUpdateOperationsInput | string
  }

  export type VariantUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    style?: StringFieldUpdateOperationsInput | string
    weight?: StringFieldUpdateOperationsInput | string
    fontUrl?: StringFieldUpdateOperationsInput | string
    fontId?: IntFieldUpdateOperationsInput | number
  }

  export type UploadCreateInput = {
    url: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    publicId: string
    backgroundRemoved?: boolean
  }

  export type UploadUncheckedCreateInput = {
    id?: number
    url: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    publicId: string
    backgroundRemoved?: boolean
  }

  export type UploadUpdateInput = {
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    publicId?: StringFieldUpdateOperationsInput | string
    backgroundRemoved?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UploadUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    publicId?: StringFieldUpdateOperationsInput | string
    backgroundRemoved?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UploadCreateManyInput = {
    id?: number
    url: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    publicId: string
    backgroundRemoved?: boolean
  }

  export type UploadUpdateManyMutationInput = {
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    publicId?: StringFieldUpdateOperationsInput | string
    backgroundRemoved?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UploadUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    publicId?: StringFieldUpdateOperationsInput | string
    backgroundRemoved?: BoolFieldUpdateOperationsInput | boolean
  }

  export type DesignCreateInput = {
    id?: string
    name: string
    userId: string
    canvasWidth: number
    canvasHeight: number
    background: string
    elements: string
    fonts?: DesignCreatefontsInput | string[]
    thumbnail?: string
  }

  export type DesignUncheckedCreateInput = {
    id?: string
    name: string
    userId: string
    canvasWidth: number
    canvasHeight: number
    background: string
    elements: string
    fonts?: DesignCreatefontsInput | string[]
    thumbnail?: string
  }

  export type DesignUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    canvasWidth?: IntFieldUpdateOperationsInput | number
    canvasHeight?: IntFieldUpdateOperationsInput | number
    background?: StringFieldUpdateOperationsInput | string
    elements?: StringFieldUpdateOperationsInput | string
    fonts?: DesignUpdatefontsInput | string[]
    thumbnail?: StringFieldUpdateOperationsInput | string
  }

  export type DesignUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    canvasWidth?: IntFieldUpdateOperationsInput | number
    canvasHeight?: IntFieldUpdateOperationsInput | number
    background?: StringFieldUpdateOperationsInput | string
    elements?: StringFieldUpdateOperationsInput | string
    fonts?: DesignUpdatefontsInput | string[]
    thumbnail?: StringFieldUpdateOperationsInput | string
  }

  export type DesignCreateManyInput = {
    id?: string
    name: string
    userId: string
    canvasWidth: number
    canvasHeight: number
    background: string
    elements: string
    fonts?: DesignCreatefontsInput | string[]
    thumbnail?: string
  }

  export type DesignUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    canvasWidth?: IntFieldUpdateOperationsInput | number
    canvasHeight?: IntFieldUpdateOperationsInput | number
    background?: StringFieldUpdateOperationsInput | string
    elements?: StringFieldUpdateOperationsInput | string
    fonts?: DesignUpdatefontsInput | string[]
    thumbnail?: StringFieldUpdateOperationsInput | string
  }

  export type DesignUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    canvasWidth?: IntFieldUpdateOperationsInput | number
    canvasHeight?: IntFieldUpdateOperationsInput | number
    background?: StringFieldUpdateOperationsInput | string
    elements?: StringFieldUpdateOperationsInput | string
    fonts?: DesignUpdatefontsInput | string[]
    thumbnail?: StringFieldUpdateOperationsInput | string
  }

  export type BlockCategoryCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    blocks?: BlockCreateNestedManyWithoutCategoryInput
  }

  export type BlockCategoryUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    blocks?: BlockUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type BlockCategoryUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    blocks?: BlockUpdateManyWithoutCategoryNestedInput
  }

  export type BlockCategoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    blocks?: BlockUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type BlockCategoryCreateManyInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
  }

  export type BlockCategoryUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type BlockCategoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type BlockCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    elements: string
    url: string
    category: BlockCategoryCreateNestedOneWithoutBlocksInput
  }

  export type BlockUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    elements: string
    url: string
    categoryId: number
  }

  export type BlockUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    elements?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    category?: BlockCategoryUpdateOneRequiredWithoutBlocksNestedInput
  }

  export type BlockUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    elements?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    categoryId?: IntFieldUpdateOperationsInput | number
  }

  export type BlockCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    elements: string
    url: string
    categoryId: number
  }

  export type BlockUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    elements?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type BlockUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    elements?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    categoryId?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type FontListRelationFilter = {
    every?: FontWhereInput
    some?: FontWhereInput
    none?: FontWhereInput
  }

  export type FontOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FamilyCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type FamilyAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type FamilyMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type FamilyMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type FamilySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type CategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type CategoryAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type CategorySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type KindCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type KindAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type KindMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type KindMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type KindSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type FamilyRelationFilter = {
    is?: FamilyWhereInput
    isNot?: FamilyWhereInput
  }

  export type CategoryRelationFilter = {
    is?: CategoryWhereInput
    isNot?: CategoryWhereInput
  }

  export type KindRelationFilter = {
    is?: KindWhereInput
    isNot?: KindWhereInput
  }

  export type VariantListRelationFilter = {
    every?: VariantWhereInput
    some?: VariantWhereInput
    none?: VariantWhereInput
  }

  export type VariantOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FontCountOrderByAggregateInput = {
    id?: SortOrder
    familyId?: SortOrder
    categoryId?: SortOrder
    kindId?: SortOrder
    subsets?: SortOrder
  }

  export type FontAvgOrderByAggregateInput = {
    id?: SortOrder
    familyId?: SortOrder
    categoryId?: SortOrder
    kindId?: SortOrder
  }

  export type FontMaxOrderByAggregateInput = {
    id?: SortOrder
    familyId?: SortOrder
    categoryId?: SortOrder
    kindId?: SortOrder
  }

  export type FontMinOrderByAggregateInput = {
    id?: SortOrder
    familyId?: SortOrder
    categoryId?: SortOrder
    kindId?: SortOrder
  }

  export type FontSumOrderByAggregateInput = {
    id?: SortOrder
    familyId?: SortOrder
    categoryId?: SortOrder
    kindId?: SortOrder
  }

  export type FontRelationFilter = {
    is?: FontWhereInput
    isNot?: FontWhereInput
  }

  export type VariantCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    imageUrl?: SortOrder
    style?: SortOrder
    weight?: SortOrder
    fontUrl?: SortOrder
    fontId?: SortOrder
  }

  export type VariantAvgOrderByAggregateInput = {
    id?: SortOrder
    fontId?: SortOrder
  }

  export type VariantMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    imageUrl?: SortOrder
    style?: SortOrder
    weight?: SortOrder
    fontUrl?: SortOrder
    fontId?: SortOrder
  }

  export type VariantMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    imageUrl?: SortOrder
    style?: SortOrder
    weight?: SortOrder
    fontUrl?: SortOrder
    fontId?: SortOrder
  }

  export type VariantSumOrderByAggregateInput = {
    id?: SortOrder
    fontId?: SortOrder
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type UploadCountOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    publicId?: SortOrder
    backgroundRemoved?: SortOrder
  }

  export type UploadAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UploadMaxOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    publicId?: SortOrder
    backgroundRemoved?: SortOrder
  }

  export type UploadMinOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    publicId?: SortOrder
    backgroundRemoved?: SortOrder
  }

  export type UploadSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DesignCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    canvasWidth?: SortOrder
    canvasHeight?: SortOrder
    background?: SortOrder
    elements?: SortOrder
    fonts?: SortOrder
    thumbnail?: SortOrder
  }

  export type DesignAvgOrderByAggregateInput = {
    canvasWidth?: SortOrder
    canvasHeight?: SortOrder
  }

  export type DesignMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    canvasWidth?: SortOrder
    canvasHeight?: SortOrder
    background?: SortOrder
    elements?: SortOrder
    thumbnail?: SortOrder
  }

  export type DesignMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    canvasWidth?: SortOrder
    canvasHeight?: SortOrder
    background?: SortOrder
    elements?: SortOrder
    thumbnail?: SortOrder
  }

  export type DesignSumOrderByAggregateInput = {
    canvasWidth?: SortOrder
    canvasHeight?: SortOrder
  }

  export type BlockListRelationFilter = {
    every?: BlockWhereInput
    some?: BlockWhereInput
    none?: BlockWhereInput
  }

  export type BlockOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BlockCategoryCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
  }

  export type BlockCategoryAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BlockCategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
  }

  export type BlockCategoryMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
  }

  export type BlockCategorySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BlockCategoryRelationFilter = {
    is?: BlockCategoryWhereInput
    isNot?: BlockCategoryWhereInput
  }

  export type BlockCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    elements?: SortOrder
    url?: SortOrder
    categoryId?: SortOrder
  }

  export type BlockAvgOrderByAggregateInput = {
    categoryId?: SortOrder
  }

  export type BlockMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    elements?: SortOrder
    url?: SortOrder
    categoryId?: SortOrder
  }

  export type BlockMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    elements?: SortOrder
    url?: SortOrder
    categoryId?: SortOrder
  }

  export type BlockSumOrderByAggregateInput = {
    categoryId?: SortOrder
  }

  export type FontCreateNestedManyWithoutFamilyInput = {
    create?: XOR<FontCreateWithoutFamilyInput, FontUncheckedCreateWithoutFamilyInput> | FontCreateWithoutFamilyInput[] | FontUncheckedCreateWithoutFamilyInput[]
    connectOrCreate?: FontCreateOrConnectWithoutFamilyInput | FontCreateOrConnectWithoutFamilyInput[]
    createMany?: FontCreateManyFamilyInputEnvelope
    connect?: FontWhereUniqueInput | FontWhereUniqueInput[]
  }

  export type FontUncheckedCreateNestedManyWithoutFamilyInput = {
    create?: XOR<FontCreateWithoutFamilyInput, FontUncheckedCreateWithoutFamilyInput> | FontCreateWithoutFamilyInput[] | FontUncheckedCreateWithoutFamilyInput[]
    connectOrCreate?: FontCreateOrConnectWithoutFamilyInput | FontCreateOrConnectWithoutFamilyInput[]
    createMany?: FontCreateManyFamilyInputEnvelope
    connect?: FontWhereUniqueInput | FontWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type FontUpdateManyWithoutFamilyNestedInput = {
    create?: XOR<FontCreateWithoutFamilyInput, FontUncheckedCreateWithoutFamilyInput> | FontCreateWithoutFamilyInput[] | FontUncheckedCreateWithoutFamilyInput[]
    connectOrCreate?: FontCreateOrConnectWithoutFamilyInput | FontCreateOrConnectWithoutFamilyInput[]
    upsert?: FontUpsertWithWhereUniqueWithoutFamilyInput | FontUpsertWithWhereUniqueWithoutFamilyInput[]
    createMany?: FontCreateManyFamilyInputEnvelope
    set?: FontWhereUniqueInput | FontWhereUniqueInput[]
    disconnect?: FontWhereUniqueInput | FontWhereUniqueInput[]
    delete?: FontWhereUniqueInput | FontWhereUniqueInput[]
    connect?: FontWhereUniqueInput | FontWhereUniqueInput[]
    update?: FontUpdateWithWhereUniqueWithoutFamilyInput | FontUpdateWithWhereUniqueWithoutFamilyInput[]
    updateMany?: FontUpdateManyWithWhereWithoutFamilyInput | FontUpdateManyWithWhereWithoutFamilyInput[]
    deleteMany?: FontScalarWhereInput | FontScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FontUncheckedUpdateManyWithoutFamilyNestedInput = {
    create?: XOR<FontCreateWithoutFamilyInput, FontUncheckedCreateWithoutFamilyInput> | FontCreateWithoutFamilyInput[] | FontUncheckedCreateWithoutFamilyInput[]
    connectOrCreate?: FontCreateOrConnectWithoutFamilyInput | FontCreateOrConnectWithoutFamilyInput[]
    upsert?: FontUpsertWithWhereUniqueWithoutFamilyInput | FontUpsertWithWhereUniqueWithoutFamilyInput[]
    createMany?: FontCreateManyFamilyInputEnvelope
    set?: FontWhereUniqueInput | FontWhereUniqueInput[]
    disconnect?: FontWhereUniqueInput | FontWhereUniqueInput[]
    delete?: FontWhereUniqueInput | FontWhereUniqueInput[]
    connect?: FontWhereUniqueInput | FontWhereUniqueInput[]
    update?: FontUpdateWithWhereUniqueWithoutFamilyInput | FontUpdateWithWhereUniqueWithoutFamilyInput[]
    updateMany?: FontUpdateManyWithWhereWithoutFamilyInput | FontUpdateManyWithWhereWithoutFamilyInput[]
    deleteMany?: FontScalarWhereInput | FontScalarWhereInput[]
  }

  export type FontCreateNestedManyWithoutCategoryInput = {
    create?: XOR<FontCreateWithoutCategoryInput, FontUncheckedCreateWithoutCategoryInput> | FontCreateWithoutCategoryInput[] | FontUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: FontCreateOrConnectWithoutCategoryInput | FontCreateOrConnectWithoutCategoryInput[]
    createMany?: FontCreateManyCategoryInputEnvelope
    connect?: FontWhereUniqueInput | FontWhereUniqueInput[]
  }

  export type FontUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<FontCreateWithoutCategoryInput, FontUncheckedCreateWithoutCategoryInput> | FontCreateWithoutCategoryInput[] | FontUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: FontCreateOrConnectWithoutCategoryInput | FontCreateOrConnectWithoutCategoryInput[]
    createMany?: FontCreateManyCategoryInputEnvelope
    connect?: FontWhereUniqueInput | FontWhereUniqueInput[]
  }

  export type FontUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<FontCreateWithoutCategoryInput, FontUncheckedCreateWithoutCategoryInput> | FontCreateWithoutCategoryInput[] | FontUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: FontCreateOrConnectWithoutCategoryInput | FontCreateOrConnectWithoutCategoryInput[]
    upsert?: FontUpsertWithWhereUniqueWithoutCategoryInput | FontUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: FontCreateManyCategoryInputEnvelope
    set?: FontWhereUniqueInput | FontWhereUniqueInput[]
    disconnect?: FontWhereUniqueInput | FontWhereUniqueInput[]
    delete?: FontWhereUniqueInput | FontWhereUniqueInput[]
    connect?: FontWhereUniqueInput | FontWhereUniqueInput[]
    update?: FontUpdateWithWhereUniqueWithoutCategoryInput | FontUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: FontUpdateManyWithWhereWithoutCategoryInput | FontUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: FontScalarWhereInput | FontScalarWhereInput[]
  }

  export type FontUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<FontCreateWithoutCategoryInput, FontUncheckedCreateWithoutCategoryInput> | FontCreateWithoutCategoryInput[] | FontUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: FontCreateOrConnectWithoutCategoryInput | FontCreateOrConnectWithoutCategoryInput[]
    upsert?: FontUpsertWithWhereUniqueWithoutCategoryInput | FontUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: FontCreateManyCategoryInputEnvelope
    set?: FontWhereUniqueInput | FontWhereUniqueInput[]
    disconnect?: FontWhereUniqueInput | FontWhereUniqueInput[]
    delete?: FontWhereUniqueInput | FontWhereUniqueInput[]
    connect?: FontWhereUniqueInput | FontWhereUniqueInput[]
    update?: FontUpdateWithWhereUniqueWithoutCategoryInput | FontUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: FontUpdateManyWithWhereWithoutCategoryInput | FontUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: FontScalarWhereInput | FontScalarWhereInput[]
  }

  export type FontCreateNestedManyWithoutKindInput = {
    create?: XOR<FontCreateWithoutKindInput, FontUncheckedCreateWithoutKindInput> | FontCreateWithoutKindInput[] | FontUncheckedCreateWithoutKindInput[]
    connectOrCreate?: FontCreateOrConnectWithoutKindInput | FontCreateOrConnectWithoutKindInput[]
    createMany?: FontCreateManyKindInputEnvelope
    connect?: FontWhereUniqueInput | FontWhereUniqueInput[]
  }

  export type FontUncheckedCreateNestedManyWithoutKindInput = {
    create?: XOR<FontCreateWithoutKindInput, FontUncheckedCreateWithoutKindInput> | FontCreateWithoutKindInput[] | FontUncheckedCreateWithoutKindInput[]
    connectOrCreate?: FontCreateOrConnectWithoutKindInput | FontCreateOrConnectWithoutKindInput[]
    createMany?: FontCreateManyKindInputEnvelope
    connect?: FontWhereUniqueInput | FontWhereUniqueInput[]
  }

  export type FontUpdateManyWithoutKindNestedInput = {
    create?: XOR<FontCreateWithoutKindInput, FontUncheckedCreateWithoutKindInput> | FontCreateWithoutKindInput[] | FontUncheckedCreateWithoutKindInput[]
    connectOrCreate?: FontCreateOrConnectWithoutKindInput | FontCreateOrConnectWithoutKindInput[]
    upsert?: FontUpsertWithWhereUniqueWithoutKindInput | FontUpsertWithWhereUniqueWithoutKindInput[]
    createMany?: FontCreateManyKindInputEnvelope
    set?: FontWhereUniqueInput | FontWhereUniqueInput[]
    disconnect?: FontWhereUniqueInput | FontWhereUniqueInput[]
    delete?: FontWhereUniqueInput | FontWhereUniqueInput[]
    connect?: FontWhereUniqueInput | FontWhereUniqueInput[]
    update?: FontUpdateWithWhereUniqueWithoutKindInput | FontUpdateWithWhereUniqueWithoutKindInput[]
    updateMany?: FontUpdateManyWithWhereWithoutKindInput | FontUpdateManyWithWhereWithoutKindInput[]
    deleteMany?: FontScalarWhereInput | FontScalarWhereInput[]
  }

  export type FontUncheckedUpdateManyWithoutKindNestedInput = {
    create?: XOR<FontCreateWithoutKindInput, FontUncheckedCreateWithoutKindInput> | FontCreateWithoutKindInput[] | FontUncheckedCreateWithoutKindInput[]
    connectOrCreate?: FontCreateOrConnectWithoutKindInput | FontCreateOrConnectWithoutKindInput[]
    upsert?: FontUpsertWithWhereUniqueWithoutKindInput | FontUpsertWithWhereUniqueWithoutKindInput[]
    createMany?: FontCreateManyKindInputEnvelope
    set?: FontWhereUniqueInput | FontWhereUniqueInput[]
    disconnect?: FontWhereUniqueInput | FontWhereUniqueInput[]
    delete?: FontWhereUniqueInput | FontWhereUniqueInput[]
    connect?: FontWhereUniqueInput | FontWhereUniqueInput[]
    update?: FontUpdateWithWhereUniqueWithoutKindInput | FontUpdateWithWhereUniqueWithoutKindInput[]
    updateMany?: FontUpdateManyWithWhereWithoutKindInput | FontUpdateManyWithWhereWithoutKindInput[]
    deleteMany?: FontScalarWhereInput | FontScalarWhereInput[]
  }

  export type FontCreatesubsetsInput = {
    set: string[]
  }

  export type FamilyCreateNestedOneWithoutFontsInput = {
    create?: XOR<FamilyCreateWithoutFontsInput, FamilyUncheckedCreateWithoutFontsInput>
    connectOrCreate?: FamilyCreateOrConnectWithoutFontsInput
    connect?: FamilyWhereUniqueInput
  }

  export type CategoryCreateNestedOneWithoutFontsInput = {
    create?: XOR<CategoryCreateWithoutFontsInput, CategoryUncheckedCreateWithoutFontsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutFontsInput
    connect?: CategoryWhereUniqueInput
  }

  export type KindCreateNestedOneWithoutFontsInput = {
    create?: XOR<KindCreateWithoutFontsInput, KindUncheckedCreateWithoutFontsInput>
    connectOrCreate?: KindCreateOrConnectWithoutFontsInput
    connect?: KindWhereUniqueInput
  }

  export type VariantCreateNestedManyWithoutFontInput = {
    create?: XOR<VariantCreateWithoutFontInput, VariantUncheckedCreateWithoutFontInput> | VariantCreateWithoutFontInput[] | VariantUncheckedCreateWithoutFontInput[]
    connectOrCreate?: VariantCreateOrConnectWithoutFontInput | VariantCreateOrConnectWithoutFontInput[]
    createMany?: VariantCreateManyFontInputEnvelope
    connect?: VariantWhereUniqueInput | VariantWhereUniqueInput[]
  }

  export type VariantUncheckedCreateNestedManyWithoutFontInput = {
    create?: XOR<VariantCreateWithoutFontInput, VariantUncheckedCreateWithoutFontInput> | VariantCreateWithoutFontInput[] | VariantUncheckedCreateWithoutFontInput[]
    connectOrCreate?: VariantCreateOrConnectWithoutFontInput | VariantCreateOrConnectWithoutFontInput[]
    createMany?: VariantCreateManyFontInputEnvelope
    connect?: VariantWhereUniqueInput | VariantWhereUniqueInput[]
  }

  export type FontUpdatesubsetsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type FamilyUpdateOneRequiredWithoutFontsNestedInput = {
    create?: XOR<FamilyCreateWithoutFontsInput, FamilyUncheckedCreateWithoutFontsInput>
    connectOrCreate?: FamilyCreateOrConnectWithoutFontsInput
    upsert?: FamilyUpsertWithoutFontsInput
    connect?: FamilyWhereUniqueInput
    update?: XOR<XOR<FamilyUpdateToOneWithWhereWithoutFontsInput, FamilyUpdateWithoutFontsInput>, FamilyUncheckedUpdateWithoutFontsInput>
  }

  export type CategoryUpdateOneRequiredWithoutFontsNestedInput = {
    create?: XOR<CategoryCreateWithoutFontsInput, CategoryUncheckedCreateWithoutFontsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutFontsInput
    upsert?: CategoryUpsertWithoutFontsInput
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutFontsInput, CategoryUpdateWithoutFontsInput>, CategoryUncheckedUpdateWithoutFontsInput>
  }

  export type KindUpdateOneRequiredWithoutFontsNestedInput = {
    create?: XOR<KindCreateWithoutFontsInput, KindUncheckedCreateWithoutFontsInput>
    connectOrCreate?: KindCreateOrConnectWithoutFontsInput
    upsert?: KindUpsertWithoutFontsInput
    connect?: KindWhereUniqueInput
    update?: XOR<XOR<KindUpdateToOneWithWhereWithoutFontsInput, KindUpdateWithoutFontsInput>, KindUncheckedUpdateWithoutFontsInput>
  }

  export type VariantUpdateManyWithoutFontNestedInput = {
    create?: XOR<VariantCreateWithoutFontInput, VariantUncheckedCreateWithoutFontInput> | VariantCreateWithoutFontInput[] | VariantUncheckedCreateWithoutFontInput[]
    connectOrCreate?: VariantCreateOrConnectWithoutFontInput | VariantCreateOrConnectWithoutFontInput[]
    upsert?: VariantUpsertWithWhereUniqueWithoutFontInput | VariantUpsertWithWhereUniqueWithoutFontInput[]
    createMany?: VariantCreateManyFontInputEnvelope
    set?: VariantWhereUniqueInput | VariantWhereUniqueInput[]
    disconnect?: VariantWhereUniqueInput | VariantWhereUniqueInput[]
    delete?: VariantWhereUniqueInput | VariantWhereUniqueInput[]
    connect?: VariantWhereUniqueInput | VariantWhereUniqueInput[]
    update?: VariantUpdateWithWhereUniqueWithoutFontInput | VariantUpdateWithWhereUniqueWithoutFontInput[]
    updateMany?: VariantUpdateManyWithWhereWithoutFontInput | VariantUpdateManyWithWhereWithoutFontInput[]
    deleteMany?: VariantScalarWhereInput | VariantScalarWhereInput[]
  }

  export type VariantUncheckedUpdateManyWithoutFontNestedInput = {
    create?: XOR<VariantCreateWithoutFontInput, VariantUncheckedCreateWithoutFontInput> | VariantCreateWithoutFontInput[] | VariantUncheckedCreateWithoutFontInput[]
    connectOrCreate?: VariantCreateOrConnectWithoutFontInput | VariantCreateOrConnectWithoutFontInput[]
    upsert?: VariantUpsertWithWhereUniqueWithoutFontInput | VariantUpsertWithWhereUniqueWithoutFontInput[]
    createMany?: VariantCreateManyFontInputEnvelope
    set?: VariantWhereUniqueInput | VariantWhereUniqueInput[]
    disconnect?: VariantWhereUniqueInput | VariantWhereUniqueInput[]
    delete?: VariantWhereUniqueInput | VariantWhereUniqueInput[]
    connect?: VariantWhereUniqueInput | VariantWhereUniqueInput[]
    update?: VariantUpdateWithWhereUniqueWithoutFontInput | VariantUpdateWithWhereUniqueWithoutFontInput[]
    updateMany?: VariantUpdateManyWithWhereWithoutFontInput | VariantUpdateManyWithWhereWithoutFontInput[]
    deleteMany?: VariantScalarWhereInput | VariantScalarWhereInput[]
  }

  export type FontCreateNestedOneWithoutVariantsInput = {
    create?: XOR<FontCreateWithoutVariantsInput, FontUncheckedCreateWithoutVariantsInput>
    connectOrCreate?: FontCreateOrConnectWithoutVariantsInput
    connect?: FontWhereUniqueInput
  }

  export type FontUpdateOneRequiredWithoutVariantsNestedInput = {
    create?: XOR<FontCreateWithoutVariantsInput, FontUncheckedCreateWithoutVariantsInput>
    connectOrCreate?: FontCreateOrConnectWithoutVariantsInput
    upsert?: FontUpsertWithoutVariantsInput
    connect?: FontWhereUniqueInput
    update?: XOR<XOR<FontUpdateToOneWithWhereWithoutVariantsInput, FontUpdateWithoutVariantsInput>, FontUncheckedUpdateWithoutVariantsInput>
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DesignCreatefontsInput = {
    set: string[]
  }

  export type DesignUpdatefontsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type BlockCreateNestedManyWithoutCategoryInput = {
    create?: XOR<BlockCreateWithoutCategoryInput, BlockUncheckedCreateWithoutCategoryInput> | BlockCreateWithoutCategoryInput[] | BlockUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: BlockCreateOrConnectWithoutCategoryInput | BlockCreateOrConnectWithoutCategoryInput[]
    createMany?: BlockCreateManyCategoryInputEnvelope
    connect?: BlockWhereUniqueInput | BlockWhereUniqueInput[]
  }

  export type BlockUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<BlockCreateWithoutCategoryInput, BlockUncheckedCreateWithoutCategoryInput> | BlockCreateWithoutCategoryInput[] | BlockUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: BlockCreateOrConnectWithoutCategoryInput | BlockCreateOrConnectWithoutCategoryInput[]
    createMany?: BlockCreateManyCategoryInputEnvelope
    connect?: BlockWhereUniqueInput | BlockWhereUniqueInput[]
  }

  export type BlockUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<BlockCreateWithoutCategoryInput, BlockUncheckedCreateWithoutCategoryInput> | BlockCreateWithoutCategoryInput[] | BlockUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: BlockCreateOrConnectWithoutCategoryInput | BlockCreateOrConnectWithoutCategoryInput[]
    upsert?: BlockUpsertWithWhereUniqueWithoutCategoryInput | BlockUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: BlockCreateManyCategoryInputEnvelope
    set?: BlockWhereUniqueInput | BlockWhereUniqueInput[]
    disconnect?: BlockWhereUniqueInput | BlockWhereUniqueInput[]
    delete?: BlockWhereUniqueInput | BlockWhereUniqueInput[]
    connect?: BlockWhereUniqueInput | BlockWhereUniqueInput[]
    update?: BlockUpdateWithWhereUniqueWithoutCategoryInput | BlockUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: BlockUpdateManyWithWhereWithoutCategoryInput | BlockUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: BlockScalarWhereInput | BlockScalarWhereInput[]
  }

  export type BlockUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<BlockCreateWithoutCategoryInput, BlockUncheckedCreateWithoutCategoryInput> | BlockCreateWithoutCategoryInput[] | BlockUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: BlockCreateOrConnectWithoutCategoryInput | BlockCreateOrConnectWithoutCategoryInput[]
    upsert?: BlockUpsertWithWhereUniqueWithoutCategoryInput | BlockUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: BlockCreateManyCategoryInputEnvelope
    set?: BlockWhereUniqueInput | BlockWhereUniqueInput[]
    disconnect?: BlockWhereUniqueInput | BlockWhereUniqueInput[]
    delete?: BlockWhereUniqueInput | BlockWhereUniqueInput[]
    connect?: BlockWhereUniqueInput | BlockWhereUniqueInput[]
    update?: BlockUpdateWithWhereUniqueWithoutCategoryInput | BlockUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: BlockUpdateManyWithWhereWithoutCategoryInput | BlockUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: BlockScalarWhereInput | BlockScalarWhereInput[]
  }

  export type BlockCategoryCreateNestedOneWithoutBlocksInput = {
    create?: XOR<BlockCategoryCreateWithoutBlocksInput, BlockCategoryUncheckedCreateWithoutBlocksInput>
    connectOrCreate?: BlockCategoryCreateOrConnectWithoutBlocksInput
    connect?: BlockCategoryWhereUniqueInput
  }

  export type BlockCategoryUpdateOneRequiredWithoutBlocksNestedInput = {
    create?: XOR<BlockCategoryCreateWithoutBlocksInput, BlockCategoryUncheckedCreateWithoutBlocksInput>
    connectOrCreate?: BlockCategoryCreateOrConnectWithoutBlocksInput
    upsert?: BlockCategoryUpsertWithoutBlocksInput
    connect?: BlockCategoryWhereUniqueInput
    update?: XOR<XOR<BlockCategoryUpdateToOneWithWhereWithoutBlocksInput, BlockCategoryUpdateWithoutBlocksInput>, BlockCategoryUncheckedUpdateWithoutBlocksInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type FontCreateWithoutFamilyInput = {
    subsets?: FontCreatesubsetsInput | string[]
    category: CategoryCreateNestedOneWithoutFontsInput
    kind: KindCreateNestedOneWithoutFontsInput
    variants?: VariantCreateNestedManyWithoutFontInput
  }

  export type FontUncheckedCreateWithoutFamilyInput = {
    id?: number
    categoryId: number
    kindId: number
    subsets?: FontCreatesubsetsInput | string[]
    variants?: VariantUncheckedCreateNestedManyWithoutFontInput
  }

  export type FontCreateOrConnectWithoutFamilyInput = {
    where: FontWhereUniqueInput
    create: XOR<FontCreateWithoutFamilyInput, FontUncheckedCreateWithoutFamilyInput>
  }

  export type FontCreateManyFamilyInputEnvelope = {
    data: FontCreateManyFamilyInput | FontCreateManyFamilyInput[]
    skipDuplicates?: boolean
  }

  export type FontUpsertWithWhereUniqueWithoutFamilyInput = {
    where: FontWhereUniqueInput
    update: XOR<FontUpdateWithoutFamilyInput, FontUncheckedUpdateWithoutFamilyInput>
    create: XOR<FontCreateWithoutFamilyInput, FontUncheckedCreateWithoutFamilyInput>
  }

  export type FontUpdateWithWhereUniqueWithoutFamilyInput = {
    where: FontWhereUniqueInput
    data: XOR<FontUpdateWithoutFamilyInput, FontUncheckedUpdateWithoutFamilyInput>
  }

  export type FontUpdateManyWithWhereWithoutFamilyInput = {
    where: FontScalarWhereInput
    data: XOR<FontUpdateManyMutationInput, FontUncheckedUpdateManyWithoutFamilyInput>
  }

  export type FontScalarWhereInput = {
    AND?: FontScalarWhereInput | FontScalarWhereInput[]
    OR?: FontScalarWhereInput[]
    NOT?: FontScalarWhereInput | FontScalarWhereInput[]
    id?: IntFilter<"Font"> | number
    familyId?: IntFilter<"Font"> | number
    categoryId?: IntFilter<"Font"> | number
    kindId?: IntFilter<"Font"> | number
    subsets?: StringNullableListFilter<"Font">
  }

  export type FontCreateWithoutCategoryInput = {
    subsets?: FontCreatesubsetsInput | string[]
    family: FamilyCreateNestedOneWithoutFontsInput
    kind: KindCreateNestedOneWithoutFontsInput
    variants?: VariantCreateNestedManyWithoutFontInput
  }

  export type FontUncheckedCreateWithoutCategoryInput = {
    id?: number
    familyId: number
    kindId: number
    subsets?: FontCreatesubsetsInput | string[]
    variants?: VariantUncheckedCreateNestedManyWithoutFontInput
  }

  export type FontCreateOrConnectWithoutCategoryInput = {
    where: FontWhereUniqueInput
    create: XOR<FontCreateWithoutCategoryInput, FontUncheckedCreateWithoutCategoryInput>
  }

  export type FontCreateManyCategoryInputEnvelope = {
    data: FontCreateManyCategoryInput | FontCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type FontUpsertWithWhereUniqueWithoutCategoryInput = {
    where: FontWhereUniqueInput
    update: XOR<FontUpdateWithoutCategoryInput, FontUncheckedUpdateWithoutCategoryInput>
    create: XOR<FontCreateWithoutCategoryInput, FontUncheckedCreateWithoutCategoryInput>
  }

  export type FontUpdateWithWhereUniqueWithoutCategoryInput = {
    where: FontWhereUniqueInput
    data: XOR<FontUpdateWithoutCategoryInput, FontUncheckedUpdateWithoutCategoryInput>
  }

  export type FontUpdateManyWithWhereWithoutCategoryInput = {
    where: FontScalarWhereInput
    data: XOR<FontUpdateManyMutationInput, FontUncheckedUpdateManyWithoutCategoryInput>
  }

  export type FontCreateWithoutKindInput = {
    subsets?: FontCreatesubsetsInput | string[]
    family: FamilyCreateNestedOneWithoutFontsInput
    category: CategoryCreateNestedOneWithoutFontsInput
    variants?: VariantCreateNestedManyWithoutFontInput
  }

  export type FontUncheckedCreateWithoutKindInput = {
    id?: number
    familyId: number
    categoryId: number
    subsets?: FontCreatesubsetsInput | string[]
    variants?: VariantUncheckedCreateNestedManyWithoutFontInput
  }

  export type FontCreateOrConnectWithoutKindInput = {
    where: FontWhereUniqueInput
    create: XOR<FontCreateWithoutKindInput, FontUncheckedCreateWithoutKindInput>
  }

  export type FontCreateManyKindInputEnvelope = {
    data: FontCreateManyKindInput | FontCreateManyKindInput[]
    skipDuplicates?: boolean
  }

  export type FontUpsertWithWhereUniqueWithoutKindInput = {
    where: FontWhereUniqueInput
    update: XOR<FontUpdateWithoutKindInput, FontUncheckedUpdateWithoutKindInput>
    create: XOR<FontCreateWithoutKindInput, FontUncheckedCreateWithoutKindInput>
  }

  export type FontUpdateWithWhereUniqueWithoutKindInput = {
    where: FontWhereUniqueInput
    data: XOR<FontUpdateWithoutKindInput, FontUncheckedUpdateWithoutKindInput>
  }

  export type FontUpdateManyWithWhereWithoutKindInput = {
    where: FontScalarWhereInput
    data: XOR<FontUpdateManyMutationInput, FontUncheckedUpdateManyWithoutKindInput>
  }

  export type FamilyCreateWithoutFontsInput = {
    name: string
  }

  export type FamilyUncheckedCreateWithoutFontsInput = {
    id?: number
    name: string
  }

  export type FamilyCreateOrConnectWithoutFontsInput = {
    where: FamilyWhereUniqueInput
    create: XOR<FamilyCreateWithoutFontsInput, FamilyUncheckedCreateWithoutFontsInput>
  }

  export type CategoryCreateWithoutFontsInput = {
    name: string
  }

  export type CategoryUncheckedCreateWithoutFontsInput = {
    id?: number
    name: string
  }

  export type CategoryCreateOrConnectWithoutFontsInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutFontsInput, CategoryUncheckedCreateWithoutFontsInput>
  }

  export type KindCreateWithoutFontsInput = {
    name: string
  }

  export type KindUncheckedCreateWithoutFontsInput = {
    id?: number
    name: string
  }

  export type KindCreateOrConnectWithoutFontsInput = {
    where: KindWhereUniqueInput
    create: XOR<KindCreateWithoutFontsInput, KindUncheckedCreateWithoutFontsInput>
  }

  export type VariantCreateWithoutFontInput = {
    name: string
    imageUrl: string
    style: string
    weight: string
    fontUrl: string
  }

  export type VariantUncheckedCreateWithoutFontInput = {
    id?: number
    name: string
    imageUrl: string
    style: string
    weight: string
    fontUrl: string
  }

  export type VariantCreateOrConnectWithoutFontInput = {
    where: VariantWhereUniqueInput
    create: XOR<VariantCreateWithoutFontInput, VariantUncheckedCreateWithoutFontInput>
  }

  export type VariantCreateManyFontInputEnvelope = {
    data: VariantCreateManyFontInput | VariantCreateManyFontInput[]
    skipDuplicates?: boolean
  }

  export type FamilyUpsertWithoutFontsInput = {
    update: XOR<FamilyUpdateWithoutFontsInput, FamilyUncheckedUpdateWithoutFontsInput>
    create: XOR<FamilyCreateWithoutFontsInput, FamilyUncheckedCreateWithoutFontsInput>
    where?: FamilyWhereInput
  }

  export type FamilyUpdateToOneWithWhereWithoutFontsInput = {
    where?: FamilyWhereInput
    data: XOR<FamilyUpdateWithoutFontsInput, FamilyUncheckedUpdateWithoutFontsInput>
  }

  export type FamilyUpdateWithoutFontsInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type FamilyUncheckedUpdateWithoutFontsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type CategoryUpsertWithoutFontsInput = {
    update: XOR<CategoryUpdateWithoutFontsInput, CategoryUncheckedUpdateWithoutFontsInput>
    create: XOR<CategoryCreateWithoutFontsInput, CategoryUncheckedCreateWithoutFontsInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutFontsInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutFontsInput, CategoryUncheckedUpdateWithoutFontsInput>
  }

  export type CategoryUpdateWithoutFontsInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type CategoryUncheckedUpdateWithoutFontsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type KindUpsertWithoutFontsInput = {
    update: XOR<KindUpdateWithoutFontsInput, KindUncheckedUpdateWithoutFontsInput>
    create: XOR<KindCreateWithoutFontsInput, KindUncheckedCreateWithoutFontsInput>
    where?: KindWhereInput
  }

  export type KindUpdateToOneWithWhereWithoutFontsInput = {
    where?: KindWhereInput
    data: XOR<KindUpdateWithoutFontsInput, KindUncheckedUpdateWithoutFontsInput>
  }

  export type KindUpdateWithoutFontsInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type KindUncheckedUpdateWithoutFontsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type VariantUpsertWithWhereUniqueWithoutFontInput = {
    where: VariantWhereUniqueInput
    update: XOR<VariantUpdateWithoutFontInput, VariantUncheckedUpdateWithoutFontInput>
    create: XOR<VariantCreateWithoutFontInput, VariantUncheckedCreateWithoutFontInput>
  }

  export type VariantUpdateWithWhereUniqueWithoutFontInput = {
    where: VariantWhereUniqueInput
    data: XOR<VariantUpdateWithoutFontInput, VariantUncheckedUpdateWithoutFontInput>
  }

  export type VariantUpdateManyWithWhereWithoutFontInput = {
    where: VariantScalarWhereInput
    data: XOR<VariantUpdateManyMutationInput, VariantUncheckedUpdateManyWithoutFontInput>
  }

  export type VariantScalarWhereInput = {
    AND?: VariantScalarWhereInput | VariantScalarWhereInput[]
    OR?: VariantScalarWhereInput[]
    NOT?: VariantScalarWhereInput | VariantScalarWhereInput[]
    id?: IntFilter<"Variant"> | number
    name?: StringFilter<"Variant"> | string
    imageUrl?: StringFilter<"Variant"> | string
    style?: StringFilter<"Variant"> | string
    weight?: StringFilter<"Variant"> | string
    fontUrl?: StringFilter<"Variant"> | string
    fontId?: IntFilter<"Variant"> | number
  }

  export type FontCreateWithoutVariantsInput = {
    subsets?: FontCreatesubsetsInput | string[]
    family: FamilyCreateNestedOneWithoutFontsInput
    category: CategoryCreateNestedOneWithoutFontsInput
    kind: KindCreateNestedOneWithoutFontsInput
  }

  export type FontUncheckedCreateWithoutVariantsInput = {
    id?: number
    familyId: number
    categoryId: number
    kindId: number
    subsets?: FontCreatesubsetsInput | string[]
  }

  export type FontCreateOrConnectWithoutVariantsInput = {
    where: FontWhereUniqueInput
    create: XOR<FontCreateWithoutVariantsInput, FontUncheckedCreateWithoutVariantsInput>
  }

  export type FontUpsertWithoutVariantsInput = {
    update: XOR<FontUpdateWithoutVariantsInput, FontUncheckedUpdateWithoutVariantsInput>
    create: XOR<FontCreateWithoutVariantsInput, FontUncheckedCreateWithoutVariantsInput>
    where?: FontWhereInput
  }

  export type FontUpdateToOneWithWhereWithoutVariantsInput = {
    where?: FontWhereInput
    data: XOR<FontUpdateWithoutVariantsInput, FontUncheckedUpdateWithoutVariantsInput>
  }

  export type FontUpdateWithoutVariantsInput = {
    subsets?: FontUpdatesubsetsInput | string[]
    family?: FamilyUpdateOneRequiredWithoutFontsNestedInput
    category?: CategoryUpdateOneRequiredWithoutFontsNestedInput
    kind?: KindUpdateOneRequiredWithoutFontsNestedInput
  }

  export type FontUncheckedUpdateWithoutVariantsInput = {
    id?: IntFieldUpdateOperationsInput | number
    familyId?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    kindId?: IntFieldUpdateOperationsInput | number
    subsets?: FontUpdatesubsetsInput | string[]
  }

  export type BlockCreateWithoutCategoryInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    elements: string
    url: string
  }

  export type BlockUncheckedCreateWithoutCategoryInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    elements: string
    url: string
  }

  export type BlockCreateOrConnectWithoutCategoryInput = {
    where: BlockWhereUniqueInput
    create: XOR<BlockCreateWithoutCategoryInput, BlockUncheckedCreateWithoutCategoryInput>
  }

  export type BlockCreateManyCategoryInputEnvelope = {
    data: BlockCreateManyCategoryInput | BlockCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type BlockUpsertWithWhereUniqueWithoutCategoryInput = {
    where: BlockWhereUniqueInput
    update: XOR<BlockUpdateWithoutCategoryInput, BlockUncheckedUpdateWithoutCategoryInput>
    create: XOR<BlockCreateWithoutCategoryInput, BlockUncheckedCreateWithoutCategoryInput>
  }

  export type BlockUpdateWithWhereUniqueWithoutCategoryInput = {
    where: BlockWhereUniqueInput
    data: XOR<BlockUpdateWithoutCategoryInput, BlockUncheckedUpdateWithoutCategoryInput>
  }

  export type BlockUpdateManyWithWhereWithoutCategoryInput = {
    where: BlockScalarWhereInput
    data: XOR<BlockUpdateManyMutationInput, BlockUncheckedUpdateManyWithoutCategoryInput>
  }

  export type BlockScalarWhereInput = {
    AND?: BlockScalarWhereInput | BlockScalarWhereInput[]
    OR?: BlockScalarWhereInput[]
    NOT?: BlockScalarWhereInput | BlockScalarWhereInput[]
    id?: StringFilter<"Block"> | string
    createdAt?: DateTimeFilter<"Block"> | Date | string
    updatedAt?: DateTimeFilter<"Block"> | Date | string
    userId?: StringFilter<"Block"> | string
    elements?: StringFilter<"Block"> | string
    url?: StringFilter<"Block"> | string
    categoryId?: IntFilter<"Block"> | number
  }

  export type BlockCategoryCreateWithoutBlocksInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
  }

  export type BlockCategoryUncheckedCreateWithoutBlocksInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
  }

  export type BlockCategoryCreateOrConnectWithoutBlocksInput = {
    where: BlockCategoryWhereUniqueInput
    create: XOR<BlockCategoryCreateWithoutBlocksInput, BlockCategoryUncheckedCreateWithoutBlocksInput>
  }

  export type BlockCategoryUpsertWithoutBlocksInput = {
    update: XOR<BlockCategoryUpdateWithoutBlocksInput, BlockCategoryUncheckedUpdateWithoutBlocksInput>
    create: XOR<BlockCategoryCreateWithoutBlocksInput, BlockCategoryUncheckedCreateWithoutBlocksInput>
    where?: BlockCategoryWhereInput
  }

  export type BlockCategoryUpdateToOneWithWhereWithoutBlocksInput = {
    where?: BlockCategoryWhereInput
    data: XOR<BlockCategoryUpdateWithoutBlocksInput, BlockCategoryUncheckedUpdateWithoutBlocksInput>
  }

  export type BlockCategoryUpdateWithoutBlocksInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type BlockCategoryUncheckedUpdateWithoutBlocksInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type FontCreateManyFamilyInput = {
    id?: number
    categoryId: number
    kindId: number
    subsets?: FontCreatesubsetsInput | string[]
  }

  export type FontUpdateWithoutFamilyInput = {
    subsets?: FontUpdatesubsetsInput | string[]
    category?: CategoryUpdateOneRequiredWithoutFontsNestedInput
    kind?: KindUpdateOneRequiredWithoutFontsNestedInput
    variants?: VariantUpdateManyWithoutFontNestedInput
  }

  export type FontUncheckedUpdateWithoutFamilyInput = {
    id?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    kindId?: IntFieldUpdateOperationsInput | number
    subsets?: FontUpdatesubsetsInput | string[]
    variants?: VariantUncheckedUpdateManyWithoutFontNestedInput
  }

  export type FontUncheckedUpdateManyWithoutFamilyInput = {
    id?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    kindId?: IntFieldUpdateOperationsInput | number
    subsets?: FontUpdatesubsetsInput | string[]
  }

  export type FontCreateManyCategoryInput = {
    id?: number
    familyId: number
    kindId: number
    subsets?: FontCreatesubsetsInput | string[]
  }

  export type FontUpdateWithoutCategoryInput = {
    subsets?: FontUpdatesubsetsInput | string[]
    family?: FamilyUpdateOneRequiredWithoutFontsNestedInput
    kind?: KindUpdateOneRequiredWithoutFontsNestedInput
    variants?: VariantUpdateManyWithoutFontNestedInput
  }

  export type FontUncheckedUpdateWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    familyId?: IntFieldUpdateOperationsInput | number
    kindId?: IntFieldUpdateOperationsInput | number
    subsets?: FontUpdatesubsetsInput | string[]
    variants?: VariantUncheckedUpdateManyWithoutFontNestedInput
  }

  export type FontUncheckedUpdateManyWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    familyId?: IntFieldUpdateOperationsInput | number
    kindId?: IntFieldUpdateOperationsInput | number
    subsets?: FontUpdatesubsetsInput | string[]
  }

  export type FontCreateManyKindInput = {
    id?: number
    familyId: number
    categoryId: number
    subsets?: FontCreatesubsetsInput | string[]
  }

  export type FontUpdateWithoutKindInput = {
    subsets?: FontUpdatesubsetsInput | string[]
    family?: FamilyUpdateOneRequiredWithoutFontsNestedInput
    category?: CategoryUpdateOneRequiredWithoutFontsNestedInput
    variants?: VariantUpdateManyWithoutFontNestedInput
  }

  export type FontUncheckedUpdateWithoutKindInput = {
    id?: IntFieldUpdateOperationsInput | number
    familyId?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    subsets?: FontUpdatesubsetsInput | string[]
    variants?: VariantUncheckedUpdateManyWithoutFontNestedInput
  }

  export type FontUncheckedUpdateManyWithoutKindInput = {
    id?: IntFieldUpdateOperationsInput | number
    familyId?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    subsets?: FontUpdatesubsetsInput | string[]
  }

  export type VariantCreateManyFontInput = {
    id?: number
    name: string
    imageUrl: string
    style: string
    weight: string
    fontUrl: string
  }

  export type VariantUpdateWithoutFontInput = {
    name?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    style?: StringFieldUpdateOperationsInput | string
    weight?: StringFieldUpdateOperationsInput | string
    fontUrl?: StringFieldUpdateOperationsInput | string
  }

  export type VariantUncheckedUpdateWithoutFontInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    style?: StringFieldUpdateOperationsInput | string
    weight?: StringFieldUpdateOperationsInput | string
    fontUrl?: StringFieldUpdateOperationsInput | string
  }

  export type VariantUncheckedUpdateManyWithoutFontInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    style?: StringFieldUpdateOperationsInput | string
    weight?: StringFieldUpdateOperationsInput | string
    fontUrl?: StringFieldUpdateOperationsInput | string
  }

  export type BlockCreateManyCategoryInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    elements: string
    url: string
  }

  export type BlockUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    elements?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type BlockUncheckedUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    elements?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type BlockUncheckedUpdateManyWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    elements?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use FamilyCountOutputTypeDefaultArgs instead
     */
    export type FamilyCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = FamilyCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CategoryCountOutputTypeDefaultArgs instead
     */
    export type CategoryCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CategoryCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use KindCountOutputTypeDefaultArgs instead
     */
    export type KindCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = KindCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use FontCountOutputTypeDefaultArgs instead
     */
    export type FontCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = FontCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BlockCategoryCountOutputTypeDefaultArgs instead
     */
    export type BlockCategoryCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BlockCategoryCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use FamilyDefaultArgs instead
     */
    export type FamilyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = FamilyDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CategoryDefaultArgs instead
     */
    export type CategoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CategoryDefaultArgs<ExtArgs>
    /**
     * @deprecated Use KindDefaultArgs instead
     */
    export type KindArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = KindDefaultArgs<ExtArgs>
    /**
     * @deprecated Use FontDefaultArgs instead
     */
    export type FontArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = FontDefaultArgs<ExtArgs>
    /**
     * @deprecated Use VariantDefaultArgs instead
     */
    export type VariantArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = VariantDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UploadDefaultArgs instead
     */
    export type UploadArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UploadDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DesignDefaultArgs instead
     */
    export type DesignArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DesignDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BlockCategoryDefaultArgs instead
     */
    export type BlockCategoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BlockCategoryDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BlockDefaultArgs instead
     */
    export type BlockArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BlockDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}