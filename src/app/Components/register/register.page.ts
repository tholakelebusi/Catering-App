import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from 'src/app/Services/authentification.service';
import { Users } from 'src/app/Modals/users';
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  email
  password
  name
  surname
  age
  cellNo
  user: Users
  constructor(public authenticateService: AuthentificationService) { }

  ngOnInit(): void {
  }


  signUp() {

    this.user = new Users(this.name, this.surname, this.email,this.age,this.cellNo,this.password);
    console.log(this.user);
    this.authenticateService.signUpUser(this.user)
  }

}
