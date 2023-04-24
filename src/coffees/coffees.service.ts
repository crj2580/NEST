import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { Coffee } from './entities/coffee.entity';

@Injectable()
export class CoffeesService {
    private coffees: Coffee[] = [
        {
            id: 1,
            name: 'Chocolate',
            brand: 'Chocolate',
            flavors: ['vanilla', 'chocolate']
        },
        {
            id: 2,
            name: 'Chocolate',
            brand: 'Chocolate',
            flavors: ['vanilla', 'chocolate']
        }
    ];

    findAll() {
        return this.coffees;
    }

    findOne(id: number) {
        const coffee = this.coffees.find(coffee => coffee.id === +id);
        if (!coffee) {
            throw new NotFoundException(`Coffee #${id} not find`)
        }
        return coffee;
    }

    create(createCoffeeDto: any) {
        this.coffees.push(createCoffeeDto);
        return createCoffeeDto;
    }

    update(id: number, updateCoffeeDto: any) {
        const existingCoffee = this.findOne(id);
        if (existingCoffee) {

        }
    }

    remove(id: number) {
        const coffeeIndex = this.coffees.findIndex(coffee => coffee.id === +id);
        if (coffeeIndex >= 0) {
            this.coffees.splice(coffeeIndex, 1);
        }
    }
}
