import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any[], keyword: string): any[] {
    if (!value) return [];
    if (!keyword || keyword.trim() === '') {
      return value;
    }
    keyword = keyword.toLowerCase();
    return value.filter((item: any) =>
      item?.name?.toLowerCase().includes(keyword) ||
      item?.cuisine?.toLowerCase().includes(keyword) ||
      item?.mealType?.some((meal: string) =>
        meal.toLowerCase().includes(keyword)
      )
    );
  }

}