import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { AuthanService } from './auth.service';
import AuthanServiceGuard from './auth.serviceguard';

@Module({
  imports: [HttpModule],
  providers: [AuthanService, AuthanServiceGuard],
  exports: [AuthanService],
})
export class AuthModule {}
