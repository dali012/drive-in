import { IS_PUBLIC } from '@/utils/constants';
import { SetMetadata } from '@nestjs/common';

export const SkipAuth = () => SetMetadata(IS_PUBLIC, true);
