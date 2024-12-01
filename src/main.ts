import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes, withEnabledBlockingInitialNavigation } from '@angular/router';
import { AppComponent } from './app/app.component';

const routes: Routes = [
  //{ path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', loadComponent: () => import('./app/home-page/home-page.component').then(m => m.HomePageComponent) },
  { path: 'about', loadComponent: () => import('./app/about-me/about-me.component').then(m => m.AboutMeComponent) },
  { path: 'skills', loadComponent: () => import('./app/skills/skills.component').then(m => m.SkillsComponent) },
  { path: 'projects', loadComponent: () => import('./app/projects/projects.component').then(m => m.ProjectsComponent) },
  { path: 'experience', loadComponent: () => import('./app/experience/experience.component').then(m => m.ExperienceComponent) },
  { path: 'contact', loadComponent: () => import('./app/contact-form/contact-form.component').then(m => m.ContactFormComponent) },
];

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes, withEnabledBlockingInitialNavigation()),
  ],
});
