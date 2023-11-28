import { Component } from '@angular/core';
import { AtuthenticationService } from '../atuthentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  user:any
  constructor(public router:Router, public authService:AtuthenticationService) {
    this.user = authService.getProfile()
  }

  async logout(){
    this.authService.signOut().then(()=>{
      this.router.navigate(['/login'])
    }).catch((error)=>{
      console.log(error);
    })
  }
}
