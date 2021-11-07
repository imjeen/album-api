import { QueryParams, Param, Body, Get, Post, Put, Delete, JsonController } from 'routing-controllers';

@JsonController('/api/test')
export default class TestController {
    @Get('/')
    async page(@QueryParams() params: any) {
        return await { action: 'get' };
    }

    @Get('/:id')
    async detail(@Param('id') id: string) {
        return await { action: 'get', id };
    }

    @Post('/')
    async add(@Body() body: any) {
        return await { action: 'post' };
    }

    @Put('/:id')
    async put(@Param('id') id: string, @Body() body: any) {
        return await { action: 'pu' };
    }

    @Delete('/:id')
    async delete(@Param('id') id: string) {
        return await { action: 'delete' };
    }
}
