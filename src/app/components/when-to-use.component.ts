import { Component, ElementRef, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-when-to-use',
  imports: [CommonModule],
  template: `
    <section id="when-to-use" class="section" [class.visible]="isVisible">
      <div class="container">
        <div class="header animate-item">
          <div class="badge-header">Decision Guide</div>
          <h2>When to Use Which?</h2>
          <p>Choosing the right approach depends on your specific use case and requirements.</p>
        </div>
        
        <div class="scenarios">
          <div class="card glass-card animate-item" *ngFor="let s of scenarios; let i = index" [class.reactive]="s.type==='reactive'" [style.animation-delay]="(0.1 + i * 0.15) + 's'">
            <div class="icon">{{s.icon}}</div>
            <h3>{{s.title}}</h3>
            <p class="desc">{{s.desc}}</p>
            <span class="badge" [class.reactive-badge]="s.type==='reactive'">Use {{s.label}}</span>
            <p class="details">{{s.details}}</p>
          </div>
        </div>
        
        <div class="faq-card glass-card animate-item" style="animation-delay: 0.5s">
          <h3>Common Questions</h3>
          <div class="faq">
            <div class="faq-item" *ngFor="let f of faqs; let i = index">
              <button class="question" (click)="toggle(i)" [class.open]="f.open">
                <span>{{f.q}}</span>
                <span class="arrow" [class.rotate]="f.open">▼</span>
              </button>
              <div class="answer" [class.open]="f.open">
                <p>{{f.a}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .section { padding: 5rem 0; opacity: 0; transform: translateY(50px); transition: opacity 0.8s ease, transform 0.8s ease; }
    .section.visible { opacity: 1; transform: translateY(0); }
    .animate-item { opacity: 0; transform: translateY(30px); }
    .section.visible .animate-item { animation: fadeInUp 0.8s ease forwards; }
    @keyframes fadeInUp { to { opacity: 1; transform: translateY(0); } }
    .header { text-align: center; margin-bottom: 3rem; }
    .badge-header { display: inline-flex; padding: 0.5rem 1rem; border-radius: 9999px; border: 1px solid rgba(139,92,246,0.3); background: rgba(139,92,246,0.1); color: #8B5CF6; font-size: 0.875rem; margin-bottom: 1rem; }
    .header h2 { font-size: 1.875rem; font-weight: 600; color: #EAF0FF; margin-bottom: 1rem; }
    @media (min-width: 640px) { .header h2 { font-size: 2.25rem; } }
    .header p { font-size: 0.875rem; color: #AAB4D6; max-width: 42rem; margin: 0 auto; margin-bottom: 3rem; }
    @media (min-width: 640px) { .header p { font-size: 1rem; } }
    .scenarios { display: grid; gap: 1.5rem; margin-bottom: 3rem; }
    @media (min-width: 768px) { .scenarios { grid-template-columns: repeat(3, 1fr); } }
    .scenarios .card { padding: 1.5rem; display: flex; flex-direction: column; transform: scale(0.95); }
    .scenarios .card.reactive:hover { border-color: rgba(139,92,246,0.4); transform: scale(1.02); transition: all 0.3s ease; }
    .scenarios .icon { color: #8B5CF6; margin-bottom: 1rem; font-size: 1.5rem; }
    .scenarios h3 { font-size: 1rem; font-weight: 600; color: #EAF0FF; margin-bottom: 0.5rem; }
    .scenarios .desc { font-size: 0.75rem; color: #AAB4D6; margin-bottom: 1rem; }
    .scenarios .badge { margin-bottom: 1rem; align-self: flex-start; }
    .scenarios .badge.reactive-badge { border-color: rgba(139,92,246,0.4); color: #8B5CF6; background: rgba(139,92,246,0.1); }
    .scenarios .details { font-size: 0.75rem; color: #AAB4D6; line-height: 1.6; }
    .faq-card { padding: 1.5rem; }
    @media (min-width: 640px) { .faq-card { padding: 2rem; } }
    .faq-card h3 { font-size: 1.125rem; font-weight: 600; color: #EAF0FF; margin-bottom: 1.5rem; }
    .faq { display: flex; flex-direction: column; }
    .faq-item { border-bottom: 1px solid rgba(255,255,255,0.1); }
    .faq-item:last-child { border-bottom: none; }
    .question { width: 100%; display: flex; align-items: center; justify-content: space-between; padding: 1rem 0; background: none; border: none; color: #EAF0FF; font-size: 0.875rem; font-weight: 500; text-align: left; cursor: pointer; transition: color 0.2s; }
    .question:hover, .question.open { color: #8B5CF6; }
    .arrow { transition: transform 0.3s; }
    .arrow.rotate { transform: rotate(180deg); }
    .answer { max-height: 0; overflow: hidden; transition: max-height 0.3s ease; }
    .answer.open { max-height: 500px; }
    .answer p { font-size: 0.875rem; color: #AAB4D6; line-height: 1.6; padding-bottom: 1rem; }
  `]
})
export class WhenToUseComponent implements OnInit {
  isVisible = false;
  scenarios = [
    {icon: '⚡', title: 'Starting a new project', desc: 'Consider form complexity upfront', type: 'reactive', label: 'Reactive', details: 'For new projects, start with Reactive forms if you anticipate growth. They scale better and provide more control as requirements evolve.'},
    {icon: '✓', title: 'Simple CRUD operations', desc: 'Basic create, read, update, delete', type: 'template', label: 'Template-Driven', details: 'Template-driven forms work great for straightforward CRUD operations where the form structure is predictable and validation is simple.'},
    {icon: '⚡', title: 'Dynamic form fields', desc: 'Forms that change structure at runtime', type: 'reactive', label: 'Reactive', details: 'When forms need to add/remove fields dynamically or respond to complex user interactions, Reactive forms provide the necessary control and predictability.'}
  ];
  
  faqs = [
    {q: 'Can I mix both approaches in one application?', a: "Yes, you can mix them, but it's recommended to keep one dominant pattern per feature module for consistency and maintainability. Mixing within a single form is discouraged.", open: false},
    {q: 'Which approach is better for large enterprise applications?', a: 'Reactive forms are generally preferred for enterprise applications due to better testability, scalability, and maintainability. They provide explicit control over form state and validation.', open: false},
    {q: 'Is it hard to migrate from Template-Driven to Reactive?', a: "Migration is straightforward but requires refactoring. You'll move logic from templates to TypeScript classes. Plan the migration incrementally, one form at a time.", open: false}
  ];
  
  constructor(private el: ElementRef) {}

  ngOnInit() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.isVisible = true;
        }
      });
    }, { threshold: 0.1 });
    observer.observe(this.el.nativeElement);
  }

  toggle(i: number) {
    this.faqs[i].open = !this.faqs[i].open;
  }
}