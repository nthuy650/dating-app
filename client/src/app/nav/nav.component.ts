import { AccountService } from './../_services/account.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  model: any = {};
  isLoggedIn: boolean;

  constructor(
    private accountService: AccountService
  ) { }

  ngOnInit(): void {
  }

  login() {
    this.accountService.login(this.model).subscribe(response =>
      {
        this.isLoggedIn = true;
        console.log(this.isLoggedIn);
      },
      error => console.log(error));
  }
}
