import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';



import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { UsersComponent } from './users/users.component';
import { UsersService } from './users/users.service';
import { ReadComponent } from './read/read.component';
import { UpdateComponent } from './update/update.component';
import { CreateComponent } from './create/create.component';
import { DeleteComponent } from './delete/delete.component';




@NgModule({
  imports:      [ BrowserModule, HttpClientModule, FormsModule,
  AppRoutingModule,
  HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, {
        dataEncapsulation: false,
        passThruUnknownUrl: true,
        put204: false // return entity after PUT/update
      }
    ),
     ],
  declarations: [ AppComponent, HelloComponent, UsersComponent, ReadComponent, UpdateComponent, CreateComponent, DeleteComponent ],
  bootstrap:    [ AppComponent ],
  providers: [UsersService, InMemoryDataService]
})
export class AppModule { }
