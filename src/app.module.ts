import { AuthGoogleModule } from '@/auth-google/auth-google.module';
import googleConfig from '@/auth-google/config/google.config';
import { AuthModule } from '@/auth/auth.module';
import authConfig from '@/auth/config/auth.config';
import appConfig from '@/config/app.config';
import databaseConfig from '@/database/config/database.config';
import { TypeOrmConfigService } from '@/database/typeorm-config.service';
import fileConfig from '@/files/config/file.config';
import { FilesModule } from '@/files/files.module';
import { HealthModule } from '@/health/health.module';
import { HomeModule } from '@/home/home.module';
import mailConfig from '@/mail/config/mail.config';
import { MailModule } from '@/mail/mail.module';
import { MailerModule } from '@/mailer/mailer.module';
import { MetricsModule } from '@/metrics/metrics.module';
import { SessionModule } from '@/session/session.module';
import { UsersModule } from '@/users/users.module';
import { VerficationModule } from '@/verification/verification.module';
import { LoggingInterceptor } from '@algoan/nestjs-logging-interceptor';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource, DataSourceOptions } from 'typeorm';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [
        appConfig,
        databaseConfig,
        authConfig,
        mailConfig,
        fileConfig,
        googleConfig,
      ],
      envFilePath: ['.env'],
    }),
    TypeOrmModule.forRootAsync({
      useClass: TypeOrmConfigService,
      dataSourceFactory: async (options: DataSourceOptions) => {
        return new DataSource(options).initialize();
      },
    }),
    UsersModule,
    SessionModule,
    AuthModule,
    MailModule,
    MailerModule,
    FilesModule,
    AuthGoogleModule,
    VerficationModule,
    HealthModule,
    MetricsModule,
    HomeModule,
  ],
  controllers: [],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useFactory: () =>
        new LoggingInterceptor({
          mask: {
            requestHeader: {
              password: true,
              authorization: (header: string | string[]) => {
                if (Array.isArray(header)) {
                  return header.map((h) =>
                    h.replace(/Bearer\s.+/, 'Bearer hidden'),
                  );
                }
                return header.replace(/Bearer\s.+/, 'Bearer hidden');
              },
              'x-api-key': true,
            },
          },
        }),
    },
  ],
})
export class AppModule {}
