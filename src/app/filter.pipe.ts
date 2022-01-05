import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filter'
})

export class FilterPipe implements PipeTransform {
    transform(value: any, filterString: string){
        if(value.length === 0){
            return value;
        }

        const titleList = []
        for (const title of value){
            if(title.short_name === filterString){
                titleList.push(title);
            }
        }
        return titleList;
    }
} 