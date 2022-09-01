import { Component, OnInit } from '@angular/core';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};
  loggedIn: boolean;

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
    this.getCurrentUser();
  }

  login() {
    console.log(this.model);
    this.accountService.login(this.model).subscribe({
      next: response => { 
        console.log(response);
        this.loggedIn = true;
      },
      error: error => console.log(error)
    });    
  }

  logout(){
    this.accountService.logout();
    this.loggedIn = false;
  }

  getCurrentUser() {
    this.accountService.currentUser$.subscribe(user => {
      this.loggedIn = !!user; // double exclaimation means if it is null = flase else something = true
    },error => {
      console.log(error);
    })
  }

}
