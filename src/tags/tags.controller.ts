import { Controller, Get, Inject } from "@nestjs/common";
import { TagsService } from "./tags.service";

@Controller('tags')
export class TagsController {
    constructor(
        private readonly tagsService:TagsService
    ) { }
    @Get()
     async findAll():Promise<{tags:string[]}> {
         const tags = await this.tagsService.findAll();
         return {
            tags:tags.map(tag=>tag.name)
         }
    }
}