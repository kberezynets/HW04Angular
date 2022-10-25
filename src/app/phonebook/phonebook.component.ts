import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-phonebook',
  templateUrl: './phonebook.component.html',
  styleUrls: ['./phonebook.component.scss']
})
export class PhonebookComponent implements OnInit {

  public contactData: IContact[] = [
    { 
      name: 'Petya',
      surname: 'Zhuk',
      phone: '0631111111'
    },
    { 
      name: 'Petro',
      surname: 'Petriv',
      phone: '0631222222'
    },
    { 
      name: 'Alejandro',
      surname: 'Del Rio Albrechet',
      phone: '0633333333'
    },
    { 
      name: 'Vasylyna',
      surname: 'Vrublevska',
      phone: '0635555555'
    },
    { 
      name: 'Ira',
      surname: 'Tytar',
      phone: '063666666'
    },
    { 
      name: 'Sofia',
      surname: 'Zhuk',
      phone: '0977777777'
    },
  ];

  public name = '';
  public surname = '';
  public phone = '';
  public myContact!: IContact;
  public openModal = false;
  public editStatus = false;
  public editIndex!: number;
  public asc!: boolean;
  public sortColumn = '';
  public myArrow = '';
  public showArrow = false;
  public searchText= '';

  constructor() { }

  ngOnInit(): void {
  }

  changeSort($event: any):void {
    this.asc !== true ? this.asc = true : this.asc = false; 
    this.asc !== true ? this.myArrow = "&#9660" : this.myArrow = "&#9650"; 
    this.sortColumn = ($event.target as Element).id;
    if (!this.showArrow) this.showArrow = true;
  }

  addContact(): void {
    this.openModal = true;
  }

  saveContact(): void{
    this.myContact = {
      name: this.name,
      surname: this.surname,
      phone: this.phone
    }
    if (!this.editStatus){      
      this.contactData.push(this.myContact);
    }
    else {
      this.contactData[this.editIndex] = this.myContact
      this.editStatus = false;
    }
    this.closeModal();
  }

  closeModal(): void {
    this.openModal = false;
    this.name = '';
    this.surname = '';
    this.phone = '';
  }

  editContact(index: number): void {
    this.editStatus = true;
    this.openModal = true;
    this.editIndex = index;
    this.name = this.contactData[index].name;
    this.surname = this.contactData[index].surname;
    this.phone = this.contactData[index].phone;
  }

  deleteContact(index: number): void {
    this.contactData.splice(index, 1);
  }
}

export interface IContact {
  name: string;
  surname: string;
  phone: string;
}