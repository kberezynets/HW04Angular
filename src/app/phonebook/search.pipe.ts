import { Pipe, PipeTransform } from '@angular/core';
import { IContact } from './phonebook.component';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(arrContacts: IContact[], searchText: string): IContact[] {
    if (!arrContacts) return [];
    if (!searchText) return arrContacts;
    return arrContacts.filter(function (contact) {
      return contact.name.toLowerCase().includes(searchText.toLowerCase()) ||
        contact.surname.toLowerCase().includes(searchText.toLowerCase()) ||
        contact.phone.toLowerCase().includes(searchText.toLowerCase());
    })
  }
}
