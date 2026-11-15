import { Injectable } from "@nestjs/common";
import { PrismaService } from "./prisma/prisma.service.js";

@Injectable()
export class AppService {
    constructor(private _prismaService: PrismaService) {}

    create(data: { name: string }) {
        return this._prismaService.user.create({
            data: {
                name: data.name
            }
        });
    }

    get() {
        return this._prismaService.user.findMany();
    }
}