import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

   title:string="Login";
   name:string='';
   logo:string= "https://www.systemsdna.com/assets/images/logo/01_logo.png";
  constructor()
  {

  }

  ngOnInit()
  {
     this.title = "Login Page Impletementation";
  }

  ngOnDestroy()
  {
 
  }

  clickMe()
  {
    alert("Haye...  clicked")
  }
}
