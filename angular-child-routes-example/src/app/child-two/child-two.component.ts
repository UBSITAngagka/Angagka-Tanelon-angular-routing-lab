import { Component } from '@angular/core';
import { RouterOutlet,RouterLinkActive, RouterLink } from '@angular/router';
@Component({
  selector: 'app-child-two',
  imports: [RouterLinkActive, RouterLink, RouterOutlet],
  templateUrl: './child-two.component.html',
  styleUrl: './child-two.component.css'
})
export class ChildTwoComponent {

}
