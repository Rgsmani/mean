import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { UserComponent } from '../user/user.component';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthService]
})
export class LoginComponent {
  public user = new UserComponent('', '');
  public errorMsg = '';

  constructor(private _router: Router, private _service: AuthService) { }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
   if (this._service.authenticated) {
    this._router.navigate(['/home']);
   }
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
