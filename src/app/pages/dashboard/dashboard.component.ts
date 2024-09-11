import { Component } from '@angular/core';
import { User } from '../../models/users';
import { AuthService } from '../../services/auth.service';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  user: User = {
    id: 0,
    email: "",
    password: "",
    name: "",
    role: "",
    avatar: ""
  };

  constructor(private authService: AuthService, private router: Router) {

  }

  ngOnInit(): void {
    
    this.authService.getCurrentUser().subscribe({
      next: (res) => {
        this.user.avatar= res.avatar;
        this.user.email= res.email;
        this.user.name= res.name;
        this.user.role= res.role;
      }
    });
  }

  logout(): void {
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }


}
