import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { AtuthenticationService } from 'src/app/atuthentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm : FormGroup
  constructor(public formBuilder:FormBuilder, public loadingCtrl: LoadingController, public authService: AtuthenticationService, public router: Router) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: [''],
      password: ['']
    })
  }

  get errorControl(){
    return this.loginForm?.controls
  }

  async login(){
    const loading = await this.loadingCtrl.create();
    await loading.present();
    if(this.loginForm?.valid){
      const user = await this.authService.loginUser(this.loginForm.value.email, this.loginForm.value.password).catch((error) => {
        console.log(error);
        loading.dismiss()
      })

      if(user){
        console.log(user);
        loading.dismiss()
        this.router.navigate(['/home'])
      }else{
        console.log('escriba los valors correctos')
      }
    }
  }

}
