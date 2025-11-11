import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-projects',
    standalone: true,                 // <-- important for standalone apps
    imports: [CommonModule],          // <-- allows *ngIf, *ngFor, etc. if needed
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
    public openLink(url: string): void {
        window.open(url, '_blank');
    }
}
