import { Component, DoCheck } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck {
  
    ngDoCheck(): void {
      //throw new Error("Method not implemented.");
      console.log('docheck ejecutado!! - appComponent');
  }
  title = 'curso-angular';
}
