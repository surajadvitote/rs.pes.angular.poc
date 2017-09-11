import { Component, OnInit } from '@angular/core';

import { ContactsService } from '../services/contacts.service'

import { Contact } from '../services/contacts.interface'

import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})

export class ContactComponent {

  public updateMode: boolean = false;
  contacts: Contact[];
  message: string = '';

  public contact: Contact =
  {
    firstName: '',
    lastName: '',
    email: '',
    contactType: '',
    planNum: ''
  }


  constructor(private contactService: ContactsService) {
    console.log("test contact service");
  }

  ngOnInit() {

    this.getContacts()

  }

  getContacts() {
    this.contactService.getContacts()
      .subscribe(
        response => {
          this.contacts = response;
          if ( this.contacts ===null || this.contacts.length < 1)
            {
              this.message ='Unable to retrieve the contacts from system.'
            }
        }
      );
    console.log(JSON.stringify(this.contacts));
  }

  createContact() {
    this.contact.planNum = '000015';
    console.log(JSON.stringify(this.contact));

    this.contactService.addContact(this.contact).subscribe(
      response => {
        console.log(response.json());
        this.getContacts();
        this.message = 'Contact is created';
      },
      error => {
        this.message ="error occured while creating contact : Please try again";
        console.log(error);
      })



  }

  updateContact() {
    this.contact.planNum = '000015';
    console.log(JSON.stringify(this.contact));

    this.contactService.updateContact(this.contact).subscribe(
      response => {
        console.log(response.json());
        this.getContacts();
        this.message = 'Contact is updated';
      },
      error => {
        this.message ="error occured while updating contact : Please try again";
        console.log(error);
      })



  }

  checkMessageLength()
  {
    console.log(this.message.length);
    return  this.message.length > 0;
  }

  checkContact()
  {
    return this.contacts !=null && this.contacts.length >0;
  }

  onSubmit() {
    this.createContact();

  }

  onUpdate()
  {
      this.updateContact();
  }

  edit(c: Contact) {
    this.updateMode = true;
    this.contact = c;
  }

  delete(c: Contact) {
    this.contactService.deleteContact(c)
      .subscribe(
      data => {
        this.getContacts();
        this.message = 'Contact is deleted.'

      },
      (error: Response) => {
        if (error.status === 404)
          this.message = "This contact has already been deleted";
        else {
          this.message = "Error occured.Please try again /contact administrator.";
          console.log(error);
        }

      })
  }

  reset() {
    this.updateMode = false;
    this.contact =
      {
        firstName: '',
        lastName: '',
        email: '',
        contactType: '',
        planNum: ''
      }
      
  }

  get diagnostic() { return JSON.stringify(this.contact); }

}

