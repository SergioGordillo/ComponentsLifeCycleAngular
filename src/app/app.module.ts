import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowNameComponent } from './components/show-name/show-name.component';
import { Page1Component } from './pages/page1/page1.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowNameComponent,
    Page1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
