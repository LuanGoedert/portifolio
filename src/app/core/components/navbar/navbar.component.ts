import { Component } from '@angular/core';
import { RouterLink, } from "@angular/router";
import { PortraitComponent } from '../portrait/portrait.component';
import { DetailsComponent } from '../details/details.component';

@Component({
  selector: 'app-navbar',
  standalone: true,                // <-- important
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  imports: [RouterLink, PortraitComponent, DetailsComponent],
})
export class NavbarComponent {

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

}