import { Component, ElementRef, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-comparison',
  imports: [CommonModule],
  template: `
    <section id="comparison" class="section" [class.visible]="isVisible">
      <div class="container">
        <div class="header animate-item">
          <div class="badge-header">Side-by-side Analysis</div>
          <h2>Template vs Reactive Comparison</h2>
          <p>Understanding the key differences helps you choose the right approach for your use case.</p>
        </div>
        
        <div class="table-card glass-card animate-item" style="animation-delay: 0.1s">
          <table>
            <thead>
              <tr>
                <th>Feature</th>
                <th>Template-Driven</th>
                <th>Reactive</th>
              </tr>
            </thead>
            <tbody>
              <tr *ngFor="let row of data; let i = index" class="table-row" [style.animation-delay]="(0.2 + i * 0.05) + 's'">
                <td class="feature">{{row.feature}}</td>
                <td>{{row.template}}</td>
                <td>{{row.reactive}}</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div class="summary-grid">
          <div class="card glass-card animate-item" style="animation-delay: 0.4s">
            <h3>Template-Driven Best For</h3>
            <div class="list">
              <div class="item" *ngFor="let item of templateBest; let i = index" [style.animation-delay]="(0.5 + i * 0.1) + 's'">
                <span class="icon">✓</span>
                <div>
                  <p class="title">{{item.title}}</p>
                  <p class="desc">{{item.desc}}</p>
                </div>
              </div>
            </div>
          </div>
          <div class="card glass-card-strong animate-item" style="animation-delay: 0.5s">
            <h3>Reactive Best For</h3>
            <div class="list">
              <div class="item" *ngFor="let item of reactiveBest; let i = index" [style.animation-delay]="(0.6 + i * 0.1) + 's'">
                <span class="icon primary">✓</span>
                <div>
                  <p class="title">{{item.title}}</p>
                  <p class="desc">{{item.desc}}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="section-separator"></div>
    </section>
  `,
  styles: [`
    .section { padding: 5rem 0; opacity: 0; transform: translateY(50px); transition: opacity 0.8s ease, transform 0.8s ease; }
    .section.visible { opacity: 1; transform: translateY(0); }
    .animate-item { opacity: 0; transform: translateY(30px); }
    .section.visible .animate-item { animation: fadeInUp 0.8s ease forwards; }
    @keyframes fadeInUp { to { opacity: 1; transform: translateY(0); } }
    .table-row { opacity: 0; transform: translateX(-20px); }
    .section.visible .table-row { animation: slideInRight 0.6s ease forwards; }
    @keyframes slideInRight { to { opacity: 1; transform: translateX(0); } }
    .item { opacity: 0; transform: scale(0.9); }
    .section.visible .item { animation: scaleIn 0.5s ease forwards; }
    @keyframes scaleIn { to { opacity: 1; transform: scale(1); } }
    .header { text-align: center; margin-bottom: 3rem; }
    .badge-header { display: inline-flex; padding: 0.5rem 1rem; border-radius: 9999px; border: 1px solid rgba(139,92,246,0.3); background: rgba(139,92,246,0.1); color: #8B5CF6; font-size: 0.875rem; margin-bottom: 1rem; }
    .header h2 { font-size: 1.875rem; font-weight: 600; color: #EAF0FF; margin-bottom: 1rem; }
    @media (min-width: 640px) { .header h2 { font-size: 2.25rem; } }
    .header p { font-size: 0.875rem; color: #AAB4D6; max-width: 42rem; margin: 0 auto; margin-bottom: 3rem; }
    @media (min-width: 640px) { .header p { font-size: 1rem; } }
    .table-card { padding: 0; overflow: hidden; margin-bottom: 1.5rem; }
    @media (min-width: 1024px) { .table-card { margin-bottom: 2rem; } }
    table { width: 100%; border-collapse: collapse; }
    thead { background: rgba(0,0,0,0.3); }
    th { padding: 1rem; text-align: left; font-weight: 600; color: #EAF0FF; font-size: 0.875rem; }
    tbody tr { border-bottom: 1px solid rgba(255,255,255,0.1); transition: background 0.2s; }
    tbody tr:hover { background: rgba(255,255,255,0.05); }
    tbody tr:last-child { border-bottom: none; }
    td { padding: 1rem; color: #AAB4D6; font-size: 0.875rem; }
    td.feature { font-weight: 500; color: #EAF0FF; }
    .summary-grid { display: grid; gap: 1.5rem; }
    @media (min-width: 1024px) { .summary-grid { grid-template-columns: repeat(2, 1fr); gap: 2rem; } }
    .card { padding: 1.5rem; }
    .card h3 { font-size: 1.125rem; font-weight: 600; color: #EAF0FF; margin-bottom: 1.5rem; }
    .list { display: flex; flex-direction: column; gap: 1rem; }
    .item { display: flex; align-items: flex-start; gap: 0.75rem; }
    .icon { width: 1.5rem; height: 1.5rem; color: #34D399; flex-shrink: 0; }
    .icon.primary { color: #8B5CF6; }
    .item .title { font-size: 0.875rem; font-weight: 500; color: #EAF0FF; margin-bottom: 0.25rem; }
    .item .desc { font-size: 0.75rem; color: #AAB4D6; }
  `]
})
export class ComparisonComponent implements OnInit {
  isVisible = false;
  data = [
    {feature: 'Setup Complexity', template: 'Simple', reactive: 'Moderate'},
    {feature: 'Form Model', template: 'Implicit', reactive: 'Explicit'},
    {feature: 'Data Flow', template: 'Asynchronous', reactive: 'Synchronous'},
    {feature: 'Validation', template: 'Directives', reactive: 'Functions'},
    {feature: 'Testability', template: 'Lower', reactive: 'Higher'},
    {feature: 'Scalability', template: 'Limited', reactive: 'Excellent'}
  ];
  
  templateBest = [
    {title: 'Simple forms', desc: 'Login, signup, contact forms'},
    {title: 'Quick prototyping', desc: 'When you need results fast'},
    {title: 'Static forms', desc: "Forms that don't change structure"}
  ];
  
  reactiveBest = [
    {title: 'Complex forms', desc: 'Multi-step, dynamic field generation'},
    {title: 'Unit testing', desc: 'When testability is critical'},
    {title: 'Reusable validators', desc: 'Share validation logic across forms'}
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
}