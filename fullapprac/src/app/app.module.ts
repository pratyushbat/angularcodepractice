import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './pages/first/first.component';
import { SecondComponent } from './pages/second/second.component';
import { MyErrorDirective } from './directive/app.myerrordirective';
import { MyCustomIfDirective } from './directive/app.mycustomifdirective';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    MyErrorDirective,
    MyCustomIfDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
