import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="app-wrapper">
      <app-navbar></app-navbar>
      <main>
        <app-hero></app-hero>
        <app-template-section></app-template-section>
        <app-reactive-section></app-reactive-section>
        <app-comparison></app-comparison>
        <app-when-to-use></app-when-to-use>
      </main>
      <app-footer></app-footer>
    </div>
  `,
  styles: [`
    .app-wrapper {
      min-height: 100vh;
      background: #070A12;
    }
  `],
  imports: [
    NavbarComponent,
    HeroComponent,
    TemplateSectionComponent,
    ReactiveSectionComponent,
    ComparisonComponent,
    WhenToUseComponent,
    FooterComponent
  ]
})
export class AppComponent {}

import { NavbarComponent } from './components/navbar.component';
import { HeroComponent } from './components/hero.component';
import { TemplateSectionComponent } from './components/template-section.component';
import { ReactiveSectionComponent } from './components/reactive-section.component';
import { ComparisonComponent } from './components/comparison.component';
import { WhenToUseComponent } from './components/when-to-use.component';
import { FooterComponent } from './components/footer.component';