import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ciscoGraphicalConfig';
  
  constructor(public _router: Router){
    console.log(_router.url)
  }
}
