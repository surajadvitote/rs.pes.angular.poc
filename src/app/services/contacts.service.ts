import { Injectable, OnInit } from '@angular/core';
import { Http, RequestOptions, Request, RequestMethod,RequestOptionsArgs,Headers } from '@angular/http';
import 'rxjs/add/operator/map'
import { Contact }  from './contacts.interface'
import { Observable } from 'rxjs/Observable';


@Injectable()
export class ContactsService implements OnInit {

  private url = 'http://localhost:52038/api/plans/000015/contacts';  

  constructor(private http: Http) {


  }

  ngOnInit() {

  }

  getContacts(): Observable<Contact[]>  {

    return this.http.get(this.url)
           .map( response  => response.json());
  }

 addContact (contact : Contact)
 {    
      let headers = new Headers();
     headers.append('Content-Type', 'application/json');
     headers.append('Accept', 'application/json');
    let opts:RequestOptionsArgs = { headers: headers };
    
     console.log(JSON.stringify(contact));
    return this.http.post(this.url, JSON.stringify(contact),opts );
      
 }

  updateContact (contact : Contact)
 {    
      let headers = new Headers();
     headers.append('Content-Type', 'application/json');
     headers.append('Accept', 'application/json');
    let opts:RequestOptionsArgs = { headers: headers };
    
     console.log(JSON.stringify(contact));
    return this.http.put(this.url, JSON.stringify(contact),opts );
      
 }

 deleteContact (contact : Contact)
 {    
     
      let headers = new Headers();
     headers.append('Content-Type', 'application/json');
     headers.append('Accept', 'application/json');
    let opts:RequestOptionsArgs = { headers: headers };
    
     console.log(JSON.stringify(contact));
    return this.http.delete(this.url+'/'+contact.contactType);
      
 }

}
