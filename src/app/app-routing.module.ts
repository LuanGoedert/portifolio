import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { AboutComponent } from './features/about/about.component';
import { NgModule } from '@angular/core';



import { MainComponent } from './features/main/main.component';

export const routes: Routes = [
    {
        path: '', component: MainComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {
        anchorScrolling: 'enabled',
        scrollPositionRestoration: 'enabled',
    })],
    exports: [RouterModule
    ]
})
export class AppRoutingModule { } 