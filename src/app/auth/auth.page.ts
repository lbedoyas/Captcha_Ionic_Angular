import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {

  siteKey: string;
  public aFormGroup: FormGroup;


  constructor(private formBuilder: FormBuilder,
    private router: Router) {
      this.siteKey = '6Lf6LW8bAAAAAM45zrWMh-kt10P_ybwPP7g33zga';
     }

  ngOnInit() {
    this.aFormGroup = this.formBuilder.group({
      usuario: ['', Validators.required],
      password: ['', Validators.required],
      recaptcha: ['', Validators.required]
    });
  }

  login(data: any){
    console.log(data);
    console.log(this.aFormGroup);
    this.router.navigateByUrl('tabs');


  }

}
