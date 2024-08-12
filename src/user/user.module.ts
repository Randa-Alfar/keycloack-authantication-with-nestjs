import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import {
  AuthGuard,
  KeycloakConnectModule,
  ResourceGuard,
  RoleGuard,
} from 'nest-keycloak-connect';
import { APP_GUARD } from '@nestjs/core';
import { KeycloackConfigService } from 'src/config/config.service';
import { KeycloackConfigurationModule } from 'src/config/keycloackconfig.module';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [
    KeycloakConnectModule.registerAsync({
      useExisting: KeycloackConfigService,
      imports: [KeycloackConfigurationModule],
    }),
    KeycloackConfigurationModule,
    AuthModule,
  ],
  controllers: [UserController],
  providers: [
    UserService,
    // {
    //     provide: APP_GUARD,
    //     useClass: AuthGuard,
    //   },
    //   {
    //     provide: APP_GUARD,
    //     useClass: ResourceGuard,
    //   },
    //   {
    //     provide: APP_GUARD,
    //     useClass: RoleGuard,
    //   },
  ],
})
export class UserModule {}
