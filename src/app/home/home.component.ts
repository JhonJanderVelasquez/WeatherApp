import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent {
  
  constructor(private router: Router){}

  goToDashboard(city:string){
    console.log(city);
    
    if(city == 'Kansas'){
      this.router.navigateByUrl('/weather/TOP');
    }
    if(city == 'Columbia'){
      this.router.navigateByUrl('/weather/LWX');
    }
  }
}
