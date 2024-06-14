<<<<<<< HEAD
import { Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
=======
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { RoleSelectionComponent } from './role-selection/role-selection.component';
import { SignUpComponent } from './sign-up/sign-up.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,LoginComponent,RoleSelectionComponent,SignUpComponent],
>>>>>>> 4a544fe944c5c678383c5ddabe195f96bdb74451
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'oneKeyWeb'
}
