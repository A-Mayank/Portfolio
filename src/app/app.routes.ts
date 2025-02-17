import { Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ProjectComponent } from './project/project.component';
import { GalleryComponent } from './gallery/gallery.component';

export const routes: Routes = [
    { path: '', component: HeaderComponent },
    { path: 'aboutMe', component: AboutMeComponent },
    { path: 'project', component: ProjectComponent },
    { path: 'gallery', component:GalleryComponent}
];
