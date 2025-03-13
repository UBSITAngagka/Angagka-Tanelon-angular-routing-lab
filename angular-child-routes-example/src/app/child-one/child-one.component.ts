import { Component } from '@angular/core';
import { RouterOutlet,RouterLinkActive, RouterLink } from '@angular/router';
@Component({
  selector: 'app-child-one',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './child-one.component.html',
  styleUrl: './child-one.component.css'
})
export class ChildOneComponent {

}
