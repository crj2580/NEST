import { Controller, Get, Param, Post, Body, Patch, Delete, Query } from '@nestjs/common';
import { ParamsTokenFactory } from '@nestjs/core/pipes';
import { get } from 'http';
import { PaginationQueryDto } from 'src/common/dto/pagination-query.dto/pagination-query.dto';
import { CoffeesService } from './coffees.service';
import { CreateCoffeeDto } from './dto/create-coffee.dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto/update-coffee.dto';

@Controller('coffees')
export class CoffeesController {
    constructor(
        private readonly coffeesService: CoffeesService
    ) { }

    @Get()
    findAll(@Query() paginattionQuery:PaginationQueryDto) {
        // const { limit, offset } = paginattionQuery;
        return this.coffeesService.findAll(paginattionQuery);
    }

    @Get(`:id`)
    findOne(@Param('id') id: number) {
        return this.coffeesService.findOne('' + id);
    }

    @Post()
    create(@Body() createCoffeeDto: CreateCoffeeDto) {
        console.log('createCoffeeDto', createCoffeeDto instanceof CreateCoffeeDto)
        return this.coffeesService.create(createCoffeeDto);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateCoffeeDto: UpdateCoffeeDto) {
        return this.coffeesService.update(id, updateCoffeeDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.coffeesService.remove(id);
    }

}
