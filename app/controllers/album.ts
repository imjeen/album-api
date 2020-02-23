import { QueryParams, Param, Body, Get, Post, Put, Delete, JsonController } from 'routing-controllers';
import { AlbumService } from '../services/album';
import { Album as AlbumEntity } from '../entity/Album';

@JsonController('/api/album')
export default class AlbumController {
    @Get('/')
    async page(@QueryParams() params: any) {
        let result = await AlbumService.getList();
        return result;
    }

    @Get('/:id')
    async detail(@Param('id') id: string) {
        return await AlbumService.getDetail(id);
    }

    @Post('/')
    async add(@Body() body: AlbumEntity) {
        return await AlbumService.post(body);
    }

    @Put('/:id')
    async put(@Param('id') id: string, @Body() body: AlbumEntity) {
        return await AlbumService.put(id, body);
    }

    @Delete('/:id')
    async delete(@Param('id') id: string) {
        return await AlbumService.delete(id);
    }
}
