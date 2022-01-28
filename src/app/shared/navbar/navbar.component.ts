import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor() { }

  public showAlertOk: boolean = false;
  public showAlertNok: boolean = false;

  sendMail(mail: string){

    if(mail.length == 0){
      this.showAlertNok = true;
      this.showAlertOk = false;
    }else{
      this.showAlertNok = false;
      this.showAlertOk = true;
    }
  }
  

}
