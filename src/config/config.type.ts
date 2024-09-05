import { FileConfig } from '@/files/config/file-config.type';
import { GoogleConfig } from 'src/auth-google/config/google-config.type';
import { AuthConfig } from 'src/auth/config/auth-config.type';
import { DatabaseConfig } from 'src/database/config/database-config.type';
import { MailConfig } from 'src/mail/config/mail-config.type';
import { AppConfig } from './app-config.type';

export type AllConfigType = {
  app: AppConfig;
  database: DatabaseConfig;
  auth: AuthConfig;
  mail: MailConfig;
  file: FileConfig;
  google: GoogleConfig;
};
