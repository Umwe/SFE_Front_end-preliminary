import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private router: Router) {}

  onLogin() {
    // Placeholder for login authentication logic
    if (this.email === 'test@example.com' && this.password === 'password') {
      this.router.navigate(['/dashboard']);
    } else {
      alert('Invalid email or password');
    }
  }
}
