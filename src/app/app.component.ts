import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";
import { FooterComponent } from "./footer/footer.component";
import { AboutMeComponent } from "./about-me/about-me.component";
import { SkillsComponent } from "./skills/skills.component";
import { ProjectsComponent } from "./projects/projects.component";
import { ExperienceComponent } from "./experience/experience.component";
import { HomePageComponent } from "./home-page/home-page.component";
import { ContactFormComponent } from "./contact-form/contact-form.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent, AboutMeComponent, SkillsComponent, ProjectsComponent, ExperienceComponent, HomePageComponent, ContactFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio_Angular';
}
