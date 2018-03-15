import { Component, OnInit } from '@angular/core'; 
import { Router } from '@angular/router';  

class Passenger {
  constructor(public Title: string) { };
}
class MenuItems {
  constructor(public Value: number, public Text: string) { }
} 

@Component({  
selector: 'app-root',  
templateUrl: './app.component.html'
})  

export class AppComponent { 



  passenger: Passenger = new Passenger("Lord");
  
  titleArray: MenuItems[] = [
    new MenuItems(1, "Message with Text only"),
    new MenuItems(2, "Message with Text and Image"),
    new MenuItems(3, "Message with Text and buttons")
  ];

}  
