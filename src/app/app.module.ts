import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule }   from '@angular/forms'; // <-- NgModel lives here
import { AppComponent } from './app.component';

import { ContactComponent } from './contacts/contacts.component';

import { ContactsService} from './services/contacts.service'

@NgModule({
  declarations: [
    AppComponent,
   
    ContactComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [  ContactsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
