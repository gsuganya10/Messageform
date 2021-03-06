import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { Routes, RouterModule }  from '@angular/router';
import { routing } from './app.routes';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
	  FormsModule,
    HttpModule, 
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
