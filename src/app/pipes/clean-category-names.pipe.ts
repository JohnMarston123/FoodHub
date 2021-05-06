import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cleanCategoryNames'
})
export class CleanCategoryNamesPipe implements PipeTransform {
  transform(value: any): any {
    if (value === undefined) return "undefined";
    return value.replace(/\s/g, "");
  }
}
