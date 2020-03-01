import { QueryParams, Param, Body, Get, Post, Put, Delete, JsonController, UseBefore, UploadedFile } from 'routing-controllers';
import { UploadService } from '@app/services/upload';

@JsonController('/api/upload')
export default class UploadController {
    @Get('/')
    async page(@QueryParams() params: any) {
        return await { action: 'get' };
    }

    @Post('/')
    async add(@UploadedFile('file') file: any) {
        // console.log('file=>', file);
        // return await { action: 'ok' };
        return await UploadService.post(file);
    }

    /* @Post('/')
    @UseBefore(urlencodedParser) //  application/x-www-form-urlencoded
    async add(@Body() bodyForm: any) {
        return await { action: 'post' };
    } */

    @Delete('/:id')
    async delete(@Param('id') id: string) {
        return await { action: 'delete' };
    }
}
