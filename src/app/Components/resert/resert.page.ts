import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from 'src/app/Services/authentification.service';

@Component({
  selector: 'app-resert',
  templateUrl: './resert.page.html',
  styleUrls: ['./resert.page.scss'],
})
export class ResertPage implements OnInit {

  constructor(private authService : AuthentificationService) { }

  ngOnInit(): void {
  }

   onSubmit(form) {
   
this.authService.resetPassword(form);


}

  forgotPassword(email) {
    this.authService.ForgotPassword(email);
  }

}
