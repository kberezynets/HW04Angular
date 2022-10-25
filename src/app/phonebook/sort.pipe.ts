import { Pipe, PipeTransform } from '@angular/core';
import { IContact } from './phonebook.component';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(arrContacts: IContact[], sort: string, type: boolean): IContact[] {
    if (!arrContacts) return [];
    if (type) {
      if (sort === 'name') {
        return arrContacts.sort((a, b) => a.name > b.name ? 1 : ((a.name < b.name) ? -1 : 0));
      }
      else if (sort === 'surname'){
        return arrContacts.sort((a, b) => a.surname > b.surname ? 1 : ((a.surname < b.surname) ? -1 : 0));
      }
      else if (sort === 'phone'){
        return arrContacts.sort((a, b) => a.phone > b.phone ? 1 : ((a.phone < b.phone) ? -1 : 0));
      }
      return arrContacts;
    }
    else {
      if (sort === 'name') {
        return arrContacts.sort((a, b) => a.name < b.name ? -1 : ((a.name > b.name) ? -1 : 0));
      }
      else if (sort === 'surname'){
        return arrContacts.sort((a, b) => a.surname < b.surname ? -1 : ((a.surname > b.surname) ? -1 : 0));
      }
      else if (sort === 'phone'){
        return arrContacts.sort((a, b) => a.phone < b.phone ? -1 : ((a.phone > b.phone) ? -1 : 0));
      }
      return arrContacts;
    }
  }
}
