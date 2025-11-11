import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './core/components/navbar/navbar.component'; // <-- import
import { RouterOutlet } from "@angular/router";
import { FooterComponent } from './core/components/footer/footer.component';

@Component({
  selector: 'app',
  standalone: true,
  imports: [CommonModule, NavbarComponent,  RouterOutlet, FooterComponent],  // <-- add here
  templateUrl: './app.html',
  styleUrls: ['./app.scss'],
})
export class App {}
