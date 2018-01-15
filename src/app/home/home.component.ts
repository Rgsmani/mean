import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  providers: [AuthService],
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _service: AuthService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {

  }



  logout(): void {
    this._service.logout();
  }
}
