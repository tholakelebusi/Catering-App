import { Component } from '@angular/core';
import { AuthentificationService } from '../Services/authentification.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  loginUser:any;
  email:any;
  password:any;
  loggonInUser:any;
  constructor(public authenticateService:AuthentificationService) {}



  logForm() {
    this.authenticateService.signInUser(this.email, this.password)
    this.loggonInUser = this.authenticateService.signInUser
  }
}
