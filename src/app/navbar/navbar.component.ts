import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  loggedIn: boolean;
  userName='niren here';
  constructor(public auth: AuthService) {
    auth.loggedInObservable.subscribe(value => {
      this.loggedIn = value;
    });
    auth.userProfile$.subscribe(value => {
      console.log(value);
      this.userName = value.name;
    });
    console.log(auth.userProfile$);
  }
  ngOnInit(): void {
    this.loggedIn  = this.loggedIn || !!localStorage.getItem('idToken');
  }
}
