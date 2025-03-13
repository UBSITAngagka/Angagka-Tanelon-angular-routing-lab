import { Component } from '@angular/core';
import { RouterOutlet,RouterLinkActive, RouterLink } from '@angular/router';
@Component({
  selector: 'app-parent',
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
  
}
