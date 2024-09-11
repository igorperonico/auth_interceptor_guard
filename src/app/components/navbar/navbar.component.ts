import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';
import { User } from '../../models/users';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  user: User = {
    id: 0,
    email: "",
    password: "",
    name: "",
    role: "",
    avatar: ""
  };

  constructor(protected authService: AuthService, private router: Router) { }

  ngOnInit(): void {

    this.authService.getCurrentUser().subscribe({
      next: (res) => {
        this.user.role = res.role;
      }
    });
  }

  logout(): void {
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }

}
