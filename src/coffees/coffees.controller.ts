import { Controller, Get, Param, Post, Body, Patch, Delete, Query } from '@nestjs/common';
import { ParamsTokenFactory } from '@nestjs/core/pipes';
import { get } from 'http';

@Controller('coffees')
export class CoffeesController {
    @Get()
    findAll(@Query() paginattionQuery) {
        const { limit, offset } = paginattionQuery;
        return `This action returns all coffees. Limit: ${limit}, offset: ${offset}`;
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return `This action returns #${id} coffees`;
    }

    @Post()
    create(@Body() body) {
        return body;
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() body) {
        return `This action updates #${id} coffee`;
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return `This action removes #${id} coffee`;
    }

}
