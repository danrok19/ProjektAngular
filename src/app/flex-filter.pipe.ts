import { Pipe, PipeTransform } from '@angular/core';
import { TagsService } from './tags.service';
import { MealProtoClass } from './types/meal-proto';

@Pipe({
  name: 'flexFilter'
})

export class FlexFilterPipe implements PipeTransform {


  transform(list: MealProtoClass[], ...args: string[]): any {
    const filterValue = args[0];
    if (!filterValue) {
      return list;
    }
    
    const filteredList = list.filter(el => {
      return el.Name.toLowerCase().includes(filterValue.toLowerCase()) || el.Description.toLowerCase().includes(filterValue.toLowerCase()) || el.TagsList.includes(filterValue.toLowerCase())  });

    return filteredList;
  }

}
