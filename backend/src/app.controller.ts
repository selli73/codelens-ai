import { Body, Controller, Get, Post } from "@nestjs/common";
import { AppService } from "./app.service.js";

@Controller('app')
export class AppController {
    constructor(private _appService: AppService) {}

    @Post('create')
    create(@Body() dto: { name: string }) {
        return this._appService.create(dto);
    }

    @Get('get')
    get() {
        return this._appService.get();
    }
}