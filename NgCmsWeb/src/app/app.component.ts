import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth-service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string;
  constructor(private router: Router) {
    this.title = 'Ng Cms';
  }
}
