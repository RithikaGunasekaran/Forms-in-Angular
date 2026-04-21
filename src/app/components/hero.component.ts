import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  imports: [CommonModule],
  template: `
    <section class="hero">
      <div class="gradient-bg"></div>
      <div class="particles">
        <div class="particle" *ngFor="let p of particles" [style]="p"></div>
      </div>
      <div class="orbs">
        <div class="orb orb-1"></div>
        <div class="orb orb-2"></div>
        <div class="orb orb-3"></div>
      </div>
      
      <div class="container hero-content">
        <div class="hero-grid">
          <div class="hero-left">
            <div class="badge floating">
              <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
              </svg>
              <span>Learn Angular Form Patterns</span>
            </div>
            <h1 class="title animate-fade-in-up">
              <span class="gradient-text">Forms</span> in Angular
            </h1>
            <p class="subtitle animate-fade-in-up">Template-driven vs Reactive — understand the tradeoffs, patterns, and when to choose each approach for building robust forms.</p>
            <div class="buttons animate-fade-in-up">
              <button class="btn btn-primary" (click)="scrollTo('comparison')">
                <span>Start the Comparison</span>
                <svg class="arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                </svg>
              </button>
              <button class="btn btn-outline" (click)="scrollTo('template')">
                View Sections
              </button>
            </div>
          </div>
          
          <div class="hero-right animate-fade-in-up">
            <div class="code-card glass-card-strong">
              <div class="tabs">
                <button class="tab" [class.active]="tab==='template'" (click)="tab='template'">
                  <span>Template-driven</span>
                </button>
                <button class="tab" [class.active]="tab==='reactive'" (click)="tab='reactive'">
                  <span>Reactive</span>
                </button>
              </div>
              <div class="code font-code">
                <div *ngIf="tab==='template'" class="code-block">
                  <div class="comment">// Template-driven approach</div>
                  <div>&lt;input</div>
                  <div class="indent">[(ngModel)]=<span class="string">"user.name"</span></div>
                  <div class="indent">required</div>
                  <div>/&gt;</div>
                </div>
                <div *ngIf="tab==='reactive'" class="code-block">
                  <div class="comment">// Reactive approach</div>
                  <div>nameControl = <span class="keyword">new</span> FormControl(</div>
                  <div class="indent">'',</div>
                  <div class="indent">Validators.required</div>
                  <div>);</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="scroll-indicator">
        <div class="mouse">
          <div class="wheel"></div>
        </div>
        <div class="arrow-down"></div>
      </div>
    </section>
  `,
  styles: [`
    .hero { position: relative; min-height: 100vh; display: flex; align-items: center; overflow: hidden; padding: 5rem 0; }
    
    .gradient-bg { position: absolute; inset: 0; z-index: 0; background: radial-gradient(900px circle at 20% 10%, rgba(139,92,246,0.25), transparent 55%), radial-gradient(700px circle at 80% 20%, rgba(56,189,248,0.2), transparent 60%); animation: gradientShift 15s ease infinite; }
    @keyframes gradientShift { 0%,100% { transform: translate(0,0) scale(1) rotate(0deg); } 33% { transform: translate(30px,-30px) scale(1.08) rotate(2deg); } 66% { transform: translate(-30px,30px) scale(0.92) rotate(-2deg); } }
    
    .orbs { position: absolute; inset: 0; z-index: 1; }
    .orb { position: absolute; border-radius: 50%; filter: blur(80px); opacity: 0.3; }
    .orb-1 { width: 400px; height: 400px; background: radial-gradient(circle, #8B5CF6, transparent); top: 10%; left: -10%; animation: orbFloat1 20s ease-in-out infinite; }
    .orb-2 { width: 350px; height: 350px; background: radial-gradient(circle, #38BDF8, transparent); bottom: 10%; right: -10%; animation: orbFloat2 18s ease-in-out infinite; }
    .orb-3 { width: 300px; height: 300px; background: radial-gradient(circle, #8B5CF6, transparent); top: 50%; left: 50%; animation: orbFloat3 22s ease-in-out infinite; }
    @keyframes orbFloat1 { 0%,100% { transform: translate(0,0); } 50% { transform: translate(100px,50px); } }
    @keyframes orbFloat2 { 0%,100% { transform: translate(0,0); } 50% { transform: translate(-80px,-60px); } }
    @keyframes orbFloat3 { 0%,100% { transform: translate(-50%,-50%); } 50% { transform: translate(calc(-50% + 60px),calc(-50% - 40px)); } }
    
    .particles { position: absolute; inset: 0; z-index: 1; overflow: hidden; }
    .particle { position: absolute; width: 4px; height: 4px; background: rgba(139,92,246,0.6); border-radius: 50%; box-shadow: 0 0 10px rgba(139,92,246,0.8); animation: particleFloat 20s infinite ease-in-out; }
    @keyframes particleFloat { 0%,100% { transform: translateY(0) scale(1); opacity: 0.4; } 25% { transform: translateY(-80px) translateX(40px) scale(1.2); opacity: 0.8; } 50% { transform: translateY(-150px) translateX(-30px) scale(0.8); opacity: 0.4; } 75% { transform: translateY(-80px) translateX(-50px) scale(1.1); opacity: 0.7; } }
    
    .hero-content { position: relative; z-index: 2; }
    .hero-grid { display: grid; gap: 3rem; align-items: center; }
    @media (min-width: 1024px) { .hero-grid { grid-template-columns: 7fr 5fr; gap: 4rem; } }
    
    .badge { display: inline-flex; align-items: center; gap: 0.5rem; padding: 0.5rem 1rem; border-radius: 9999px; border: 1px solid rgba(139,92,246,0.4); background: rgba(139,92,246,0.15); color: #8B5CF6; font-size: 0.875rem; margin-bottom: 2rem; backdrop-filter: blur(10px); }
    .icon { width: 1rem; height: 1rem; }
    
    .title { font-size: 2.5rem; font-weight: 700; line-height: 1.1; color: #EAF0FF; margin-bottom: 1.5rem; }
    @media (min-width: 640px) { .title { font-size: 3.5rem; } }
    @media (min-width: 1024px) { .title { font-size: 4.5rem; } }
    .gradient-text { background: linear-gradient(135deg, #8B5CF6, #38BDF8); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; animation: gradientShine 3s ease infinite; }
    @keyframes gradientShine { 0%,100% { filter: hue-rotate(0deg); } 50% { filter: hue-rotate(20deg); } }
    
    .subtitle { font-size: 1rem; line-height: 1.8; color: #AAB4D6; max-width: 40rem; margin-bottom: 2.5rem; }
    @media (min-width: 640px) { .subtitle { font-size: 1.125rem; } }
    
    .buttons { display: flex; flex-direction: column; gap: 1rem; }
    @media (min-width: 640px) { .buttons { flex-direction: row; gap: 1rem; } }
    .btn { display: inline-flex; align-items: center; gap: 0.5rem; }
    .arrow { width: 1.25rem; height: 1.25rem; transition: transform 0.3s; }
    .btn:hover .arrow { transform: translateX(5px); }
    
    .code-card { padding: 1.5rem; position: relative; animation: float 6s ease-in-out infinite; }
    .tabs { display: grid; grid-template-columns: 1fr 1fr; gap: 0.5rem; margin-bottom: 1.5rem; background: rgba(0,0,0,0.3); padding: 0.25rem; border-radius: 0.75rem; }
    .tab { padding: 0.75rem 1rem; border-radius: 0.5rem; background: transparent; border: none; color: #AAB4D6; cursor: pointer; transition: all 0.3s; font-size: 0.875rem; font-weight: 500; position: relative; }
    .tab span { position: relative; z-index: 1; }
    .tab::before { content: ''; position: absolute; inset: 0; border-radius: 0.5rem; background: linear-gradient(135deg, rgba(139,92,246,0.3), rgba(139,92,246,0.1)); opacity: 0; transition: opacity 0.3s; }
    .tab:hover { color: #EAF0FF; }
    .tab.active { color: #8B5CF6; }
    .tab.active::before { opacity: 1; }
    
    .code { background: rgba(0,0,0,0.5); padding: 1.5rem; border-radius: 0.75rem; font-size: 0.875rem; color: #AAB4D6; line-height: 1.8; border: 1px solid rgba(139,92,246,0.2); }
    .code-block { animation: fadeIn 0.3s ease; }
    @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
    .comment { color: #8B5CF6; margin-bottom: 0.5rem; }
    .indent { margin-left: 1.5rem; }
    .string { color: #38BDF8; }
    .keyword { color: #8B5CF6; }
    
    .scroll-indicator { position: absolute; bottom: 2rem; left: 50%; transform: translateX(-50%); z-index: 2; display: flex; flex-direction: column; align-items: center; gap: 1rem; }
    .mouse { width: 24px; height: 36px; border: 2px solid rgba(139,92,246,0.5); border-radius: 12px; position: relative; }
    .wheel { width: 3px; height: 8px; background: #8B5CF6; border-radius: 2px; position: absolute; top: 6px; left: 50%; transform: translateX(-50%); animation: scroll 2s ease infinite; }
    @keyframes scroll { 0%,100% { transform: translateX(-50%) translateY(0); opacity: 1; } 50% { transform: translateX(-50%) translateY(12px); opacity: 0; } }
    .arrow-down { width: 12px; height: 12px; border-right: 2px solid rgba(139,92,246,0.5); border-bottom: 2px solid rgba(139,92,246,0.5); transform: rotate(45deg); animation: bounce 2s ease infinite; }
    @keyframes bounce { 0%,100% { transform: rotate(45deg) translateY(0); } 50% { transform: rotate(45deg) translateY(10px); } }
  `]
})
export class HeroComponent {
  tab = 'template';
  particles = Array(30).fill(0).map((_, i) => ({
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    'animation-delay': `${i * 0.3}s`,
    'animation-duration': `${15 + Math.random() * 10}s`
  }));

  scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({behavior: 'smooth'});
  }
}