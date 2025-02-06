import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'fullcap',
    standalone: false
})

export class FullcapPipe implements PipeTransform {

    transform(value: string, ...args: unknown[]): string {
        if (!value) return "";

        return value.toLowerCase().replace(/\b\w/g, char => char.toUpperCase());
    }

}
