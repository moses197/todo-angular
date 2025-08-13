import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { TodoComponent } from './pages/todo/todo.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
    },
    {
        path: 'home',
        // redirectTo: 'home',
        component: HomeComponent
    },
    {
        path: 'about',
        component: AboutComponent,

    },
    {
        path: 'todo',
        component: TodoComponent,
    },
    {
        path: 'auth'
    }
];
