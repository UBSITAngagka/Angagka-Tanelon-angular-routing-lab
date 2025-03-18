import { Component } from '@angular/core';
import { RouterOutlet,RouterLinkActive, RouterLink } from '@angular/router';
import { ParentComponent } from './parent/parent.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-child-routes-example';
    name = ' ';
    email = ' ';
    address = ' ';
    phone = ' ';
    gender = ' ';
}
