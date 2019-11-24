import {Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'camelCase'
})

export class FiltreCamelCase implements PipeTransform {
    transform(value: string) {
        value = value.trim();
        return value.substr(0,1).toUpperCase() + value.substr(1).toLowerCase();
    }
}