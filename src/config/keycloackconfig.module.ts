import { Module } from '@nestjs/common';
import { KeycloackConfigService } from './config.service';

@Module({
  providers: [KeycloackConfigService],
  exports: [KeycloackConfigService],
})
export class KeycloackConfigurationModule {}
