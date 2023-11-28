import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { AtuthenticationService } from 'src/app/atuthentication.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  regForm: FormGroup ;


  constructor(public formBuilder:FormBuilder, public loadingCtrl: LoadingController, public authService: AtuthenticationService, public router: Router) { }

  ngOnInit() {
    this.regForm = this.formBuilder.group({
      fullname: [''],
      email: [''],
      password: ['']
    })
  }

  get errorControl(){
    return this.regForm?.controls
  }

  async signUp(){
    const loading = await this.loadingCtrl.create();
    await loading.present();
    if(this.regForm?.valid){
      const user = await this.authService.registerUser(this.regForm.value.email, this.regForm.value.password).catch((error) => {
        console.log(error);
        loading.dismiss()
      })

      if(user){
        loading.dismiss()
        this.router.navigate(['/home'])
      }else{
        console.log('escriba los valors correctos')
      }
    }
  }
}
