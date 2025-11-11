import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,                // <-- important
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {

  public openLink(url: string): void {
    window.open(url, '_blank');
  }
}