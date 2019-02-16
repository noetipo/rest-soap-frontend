import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HOmeComponent } from './home/home.component';

const routes: Routes = [
    { path: 'home',
     component: HOmeComponent,
    },
    { path: '**', redirectTo: 'not-found' },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
