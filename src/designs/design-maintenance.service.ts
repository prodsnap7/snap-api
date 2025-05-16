import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { PrismaService } from '../prisma/prisma.service'; // Adjusted path for PrismaService
import { InjectQueue } from '@nestjs/bull';
import { DESIGN_PHOTO_QUEUE } from '../constants'; // Adjusted path for constants
import { Queue } from 'bull';

@Injectable()
export class DesignMaintenanceService {
  private readonly logger = new Logger(DesignMaintenanceService.name);

  constructor(
    private readonly prisma: PrismaService,
    @InjectQueue(DESIGN_PHOTO_QUEUE) private readonly designPhotoQueue: Queue,
  ) {}

  @Cron(CronExpression.EVERY_5_MINUTES) // Runs every 5 minutes
  async handleGeneratePendingThumbnails() {
    this.logger.log('Cron: Checking for designs with pending thumbnails...');

    const designsToUpdate = await this.prisma.design.findMany({
      where: {
        thumbnail_pending: true,
      },
      take: 50, // Process in batches to avoid overwhelming the queue or DB in one go
    });

    if (designsToUpdate.length === 0) {
      this.logger.log('Cron: No designs found with pending thumbnails.');
      return;
    }

    this.logger.log(
      `Cron: Found ${designsToUpdate.length} designs with pending thumbnails. Enqueuing...`,
    );

    for (const design of designsToUpdate) {
      try {
        await this.designPhotoQueue.add('create-thumbnail', design.id, {
          jobId: `create_thumbnail_${design.id}`, // Optional: Helps prevent duplicate jobs if cron runs too quickly
          removeOnComplete: true,
          removeOnFail: 1000,
        });
        this.logger.log(`Cron: Enqueued job for design ${design.id}`);

        // Important: Update the flag to prevent re-processing by the next cron run immediately.
        // The consumer should ideally be the one to set thumbnail_pending to false upon *successful* generation.
        // For now, to prevent immediate re-queuing by the cron, we can set it to false here.
        // However, if the job fails in the queue, it won't be picked up again by this cron logic
        // until thumbnail_pending is set to true again manually or by an update operation.
        // A more robust solution might involve a separate status like 'thumbnail_processing'
        // or letting the consumer handle the final false state of thumbnail_pending.
        await this.prisma.design.update({
          where: { id: design.id },
          data: { thumbnail_pending: false }, // Set to false after ENQUEUEING
        });
      } catch (error) {
        this.logger.error(
          `Cron: Failed to enqueue job for design ${design.id}`,
          error.stack,
        );
      }
    }
    this.logger.log('Cron: Finished enqueuing jobs for pending thumbnails.');
  }
}
