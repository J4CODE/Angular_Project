import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AccountService } from '@app/_services';

@Component({ templateUrl: 'layout.component.html' })
export class LayoutComponent {
  constructor(private router: Router, private accountService: AccountService) {
    // This will redirect to the home page if the user is already logged in
    if (this.accountService.userValue) {
      this.router.navigate(['/']);
    }
  }
}
