import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module.js';
import { ConfigModule } from '@nestjs/config';
import { AppService } from './app.service.js';
import { AppController } from './app.controller.js';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
    envFilePath: ['.env.development']
  }), PrismaModule],
  providers: [AppService],
  controllers: [AppController]
})
export class AppModule {}
