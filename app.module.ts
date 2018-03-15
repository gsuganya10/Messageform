import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { PopupModule } from 'ng2-opd-popup';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule }    from '@angular/forms'; 
import { MsgdetailComponent } from './msgdetail/msgdetail.component';
import { MsgDetailService }  from './msgdetail/msgdetail.service';



@NgModule({
  declarations: [
    AppComponent,
    MsgdetailComponent
  ],

  imports: [
    BrowserModule, 
    FormsModule,
    PopupModule.forRoot(),
    ReactiveFormsModule
  ],
  
  providers: [MsgDetailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
