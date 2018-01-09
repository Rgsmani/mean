import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticateService } from '../services/authenticate.service';
import { UserComponent } from '../user/user.component';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthenticateService]
})
export class LoginComponent {
  public user = new UserComponent('', '');
  public errorMsg = '';

  constructor(private _router: Router, private _service: AuthenticateService) { }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
    this._service.checkCredentials();
  }

  login() {

    if ((this.user.username === '') || (this.user.password === '')) {
      this.errorMsg = 'Please Enter Username and Password'
    } else {
      this._service.login(this.user)
        .subscribe((resvalue) => {
          console.log('resvalue', resvalue);
          // tslint:disable-next-line:one-line
          if (resvalue._id){
            localStorage.setItem('currentUser', resvalue);
            this._router.navigate(['/home']);
          } else if (resvalue.message === 'Password is Wrong!') {
            this.errorMsg = 'Password is Wrong!';
          } else if (resvalue.message === 'No User Found!') {
            this.errorMsg = 'No User Found!';
          // tslint:disable-next-line:no-trailing-whitespace
          } 
        });
    }


  }


}
