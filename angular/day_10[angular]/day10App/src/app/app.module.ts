import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PizzaService } from './Shared/PizzaService/pizza.service'

import { AppComponent } from './app.component';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { FooterComponentComponent } from './footer-component/footer-component.component';
import { PizzaListComponentComponent } from './pizza-list-component/pizza-list-component.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    FooterComponentComponent,
    PizzaListComponentComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [
    PizzaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
