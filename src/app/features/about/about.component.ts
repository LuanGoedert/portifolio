import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,                 // <-- important for standalone apps
  imports: [CommonModule],          // <-- allows *ngIf, *ngFor, etc. if needed
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {

}