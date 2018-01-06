import { Component, OnInit } from '@angular/core';
import {AuthenticateService} from '../services/authenticate.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  providers: [AuthenticateService],
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _service: AuthenticateService) { }

  ngOnInit() {
    // this._service.checkCredentials();
  }



  logout(): void {
    this._service.logout();
  }
}
