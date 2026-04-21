import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule],
  template: `
    <nav class="navbar" [class.scrolled]="isScrolled">
      <div class="container navbar-content">
        <a href="#" (click)="scrollTo($event, 'top')" class="brand">
          <div class="brand-icon">A</div>
          <span>Angular Forms</span>
        </a>
        
        <div class="nav-links">
          <a *ngFor="let link of links" [href]="'#' + link.id" (click)="scrollTo($event, link.id)">{{link.label}}</a>
        </div>
        
        <button class="mobile-btn" (click)="mobileOpen = !mobileOpen">
          <span></span><span></span><span></span>
        </button>
      </div>
      
      <div class="mobile-menu" [class.open]="mobileOpen">
        <a *ngFor="let link of links" [href]="'#' + link.id" (click)="scrollTo($event, link.id); mobileOpen = false">{{link.label}}</a>
      </div>
    </nav>
  `,
  styles: [`
    .navbar {
      position: sticky;
      top: 0;
      z-index: 1000;
      border-bottom: 1px solid rgba(255,255,255,0.1);
      background: rgba(7,10,18,0.55);
      backdrop-filter: blur(24px);
      transition: all 0.3s;
    }
    .navbar.scrolled { background: rgba(7,10,18,0.85); box-shadow: 0 4px 20px rgba(0,0,0,0.3); }
    .navbar-content { display: flex; align-items: center; justify-content: space-between; height: 4rem; }
    .brand { display: flex; align-items: center; gap: 0.5rem; text-decoration: none; color: #EAF0FF; font-weight: 600; font-size: 0.875rem; }
    .brand-icon { width: 2rem; height: 2rem; border-radius: 0.5rem; background: linear-gradient(135deg, #8B5CF6, #38BDF8); display: flex; align-items: center; justify-content: center; color: white; font-weight: 700; }
    .nav-links { display: none; gap: 1.5rem; }
    @media (min-width: 768px) { .nav-links { display: flex; } }
    .nav-links a { font-size: 0.875rem; color: #AAB4D6; text-decoration: none; transition: color 0.2s; }
    .nav-links a:hover { color: #EAF0FF; }
    .mobile-btn { display: flex; flex-direction: column; gap: 0.25rem; background: none; border: none; cursor: pointer; padding: 0.5rem; }
    @media (min-width: 768px) { .mobile-btn { display: none; } }
    .mobile-btn span { width: 1.5rem; height: 2px; background: #EAF0FF; transition: all 0.3s; }
    .mobile-menu { max-height: 0; overflow: hidden; transition: max-height 0.3s; background: rgba(7,10,18,0.95); }
    .mobile-menu.open { max-height: 400px; }
    .mobile-menu a { display: block; padding: 1rem 1.5rem; color: #AAB4D6; text-decoration: none; border-bottom: 1px solid rgba(255,255,255,0.05); }
    @media (min-width: 768px) { .mobile-menu { display: none; } }
  `]
})
export class NavbarComponent {
  isScrolled = false;
  mobileOpen = false;
  links = [
    {label: 'Home', id: 'top'},
    {label: 'Template', id: 'template'},
    {label: 'Reactive', id: 'reactive'},
    {label: 'Comparison', id: 'comparison'},
    {label: 'When to Use', id: 'when-to-use'}
  ];

  @HostListener('window:scroll')
  onScroll() { this.isScrolled = window.scrollY > 20; }

  scrollTo(e: Event, id: string) {
    e.preventDefault();
    if (id === 'top') {
      window.scrollTo({top: 0, behavior: 'smooth'});
    } else {
      document.getElementById(id)?.scrollIntoView({behavior: 'smooth'});
    }
  }
}