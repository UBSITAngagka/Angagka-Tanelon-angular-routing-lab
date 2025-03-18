import { Component } from '@angular/core';
import { RouterOutlet,RouterLinkActive, RouterLink } from '@angular/router';
import { ParentComponent } from './parent/parent.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-child-routes-example';

  pageTitle = 'Angular 19 Data Binding';
  currentTime = new Date();

  imageUrl = 'assets/logo.png';
  isDisabled = true;

  clickCount = 0;

  incrementCount() {
    this.clickCount++;
  }

  onInput(event: Event) {
    console.log((event.target as HTMLInputElement).value);
  }

  name = ' ';
  email = ' ';
}
