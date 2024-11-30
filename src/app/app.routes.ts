import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { ExperienceComponent } from './experience/experience.component';
import { ContactFormComponent } from './contact-form/contact-form.component';

export const routes: Routes = [
    {path: '', redirectTo: '/homePage', pathMatch: 'full'},
    {path: 'about-me', component: AboutMeComponent},
    {path: 'tech-stack', component: SkillsComponent},
    {path: 'projects', component: ProjectsComponent},
    {path: 'experience', component: ExperienceComponent},
    {path: 'contact-me', component: ContactFormComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { anchorScrolling: 'enabled', scrollPositionRestoration: 'enabled' })],
    exports: [RouterModule]
  })

  export class AppRoutingModule {}
