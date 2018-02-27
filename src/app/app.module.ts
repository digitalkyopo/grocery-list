import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NewcomponentComponent } from './newcomponent/newcomponent.component';
import { NewcompGrocerylistComponent } from './newcomp-grocerylist/newcomp-grocerylist.component';


@NgModule({
  declarations: [
    AppComponent,
    NewcomponentComponent,
    NewcompGrocerylistComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
