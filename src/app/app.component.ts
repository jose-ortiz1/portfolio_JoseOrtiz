import { Component, HostListener } from '@angular/core';
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
  sections = [
    { id: 'home', offset: 0 },
    { id: 'about', offset: 0 },
    { id: 'skills', offset: 0 },
    { id: 'projects', offset: 0 },
    { id: 'experience', offset: 0 },
    { id: 'contact', offset: 0 }
  ];

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;
    this.sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) {
        section.offset = element.offsetTop - 70; // Adjust for fixed navbar height
      }
    });

    const currentSection = this.sections.find(
      (section, index) =>
        scrollPosition >= section.offset &&
        (index === this.sections.length - 1 || scrollPosition < this.sections[index + 1].offset)
    );

    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach((link) => link.classList.remove('active'));
    if (currentSection) {
      const activeLink = document.querySelector(`a[href="#${currentSection.id}"]`);
      if (activeLink) activeLink.classList.add('active');
    }
  }
}

