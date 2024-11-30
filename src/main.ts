import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, withEnabledBlockingInitialNavigation, Routes} from '@angular/router';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, ExtraOptions } from '@angular/router';

const routerOptions: ExtraOptions = {
  anchorScrolling: 'enabled', // Enable fragment scrolling
  scrollPositionRestoration: 'enabled', // Restore scroll position when navigating back
};

const routes: Routes   = [
  { path: '', redirectTo: '/about', pathMatch: 'full' },
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
