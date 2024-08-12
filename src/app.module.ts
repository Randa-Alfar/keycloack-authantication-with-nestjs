import { KeycloackConfigurationModule } from './config/keycloackconfig.module';
import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import {
  AuthGuard,
  KeycloakConnectModule,
  ResourceGuard,
  RoleGuard,
} from 'nest-keycloak-connect';
import { LoginModule } from './login/login.module';
import { LoginController } from './login/login.controller';
import { KeycloackConfigService } from './config/config.service';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    KeycloakConnectModule.registerAsync({
      useExisting: KeycloackConfigService,
      imports: [KeycloackConfigurationModule],
    }),
    KeycloackConfigurationModule,
    LoginModule,
    HttpModule,
    // ConfigModule.forRoot({envFilePath: '.development.env',isGlobal: true,}),
    UserModule,
    AuthModule,
  ],

  // controllers: [LoginController],
  providers: [
    //   {
    //   provide: APP_GUARD,
    //   useClass: AuthGuard,
    // },
    // {
    //   provide: APP_GUARD,
    //   useClass: ResourceGuard,
    // },
    // {
    //   provide: APP_GUARD,
    //   useClass: RoleGuard,
    // },
  ],
})
export class AppModule {}
