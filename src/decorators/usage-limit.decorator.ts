import { SetMetadata } from '@nestjs/common';

export type UsageLimitType =
  | 'downloads'
  | 'designs'
  | 'bgRemoval'
  | 'iconsApi'
  | 'photosApi';

export const USAGE_LIMIT_KEY = 'usageLimit';

export const UsageLimit = (type: UsageLimitType) =>
  SetMetadata(USAGE_LIMIT_KEY, type);
