import { Component, ElementRef, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-section',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <section id="template" class="section" [class.visible]="isVisible">
      <div class="floating-shapes">
        <div class="shape shape-1"></div>
        <div class="shape shape-2"></div>
      </div>
      <div class="container">
        <div class="header animate-item" [style.transform]="'translateY(' + parallaxY * 0.2 + 'px)'">
          <div class="section-label">APPROACH #1</div>
          <h2 class="glow-text">Template-Driven Forms</h2>
          <p>Declarative forms using directives in templates. Great for simple, straightforward scenarios.</p>
        </div>

        <div class="grid">
          <!-- Main explanatory card -->
          <div class="card glass-card-strong full animate-item" style="animation-delay: 0.1s" [style.transform]="'translateY(' + parallaxY * 0.1 + 'px) rotateX(' + tiltX + 'deg) rotateY(' + tiltY + 'deg)'">
                      <div class="card-glow"></div>
  
          <div class="card-shine"></div>
            <div class="card-header">
              <div class="title-row">
                <h3><span class="icon-wrapper"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg></span>What are Template Driven Forms?</h3>
                <span class="badge pulse">Simple</span>
              </div>
              <p class="desc">Template-driven forms are declared in the template and rely on directives like ngModel.</p>
            </div>
            <div class="code-block font-code">
              <div class="code-header"><span class="dot"></span><span class="dot"></span><span class="dot"></span></div>
              <div class="comment">// Example: Template-driven form</div>
              <div>&lt;form #loginForm=&lt;span class="string"&gt;"ngForm"&lt;/span&gt;&gt;</div>
              <div class="indent">&lt;input [(ngModel)]=<span class="string">"username"</span> name=<span class="string">"username"</span> required /&gt;</div>
              <div>&lt;/form&gt;</div>
            </div>
          </div>
 
          <!-- Registration Form Card (template-driven) -->
          <div class="card glass-card-strong full " style="animation-delay: 0.15s">

            <div style="display:flex; align-items:center; gap:0.75rem; margin-bottom:1rem;">
              <div class="icon-badge success" style="margin:0;">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <h3 style="margin:0;">Register</h3>
            </div>

            <form #registrationForm="ngForm" (ngSubmit)="onSubmit(registrationForm)" novalidate>

              <!-- Full name -->
              <div style="margin-bottom:0.75rem;">
                <input
                  name="fullName"
                  required
                  minlength="2"
                  [(ngModel)]="model.fullName"
                  #fullName="ngModel"
                  placeholder="Full name"
                  class="input"
                />
                <div class="error" *ngIf="fullName.invalid && (fullName.dirty || fullName.touched)" style="margin-top:0.25rem;">
                  <small *ngIf="fullName.errors?.['required']">Name is required.</small>
                  <small *ngIf="fullName.errors?.['minlength']">Name must be at least 2 characters.</small>
                </div>
              </div>

              <!-- Email -->
              <div style="margin-bottom:0.75rem;">
                <input
                  name="email"
                  required
                  email
                  [(ngModel)]="model.email"
                  #email="ngModel"
                  placeholder="Email address"
                  class="input"
                />
                <div class="error" *ngIf="email.invalid && (email.dirty || email.touched)" style="margin-top:0.25rem;">
                  <small *ngIf="email.errors?.['required']">Email is required.</small>
                  <small *ngIf="email.errors?.['email']">Enter a valid email.</small>
                </div>
              </div>

              <!-- Password -->
              <div style="margin-bottom:0.75rem;">
                <input
                  type="password"
                  name="password"
                  required
                  minlength="6"
                  [(ngModel)]="model.password"
                  #password="ngModel"
                  placeholder="Password (min 6 chars)"
                  class="input"
                />
                <div class="error" *ngIf="password.invalid && (password.dirty || password.touched)" style="margin-top:0.25rem;">
                  <small *ngIf="password.errors?.['required']">Password is required.</small>
                  <small *ngIf="password.errors?.['minlength']">Password must be at least 6 characters.</small>
                </div>
              </div>

              <!-- Confirm Password -->
              <div style="margin-bottom:0.75rem;">
                <input
                  type="password"
                  name="confirmPassword"
                  required
                  [(ngModel)]="model.confirmPassword"
                  #confirmPassword="ngModel"
                  placeholder="Confirm password"
                  class="input"
                />
                <div class="error" *ngIf="(confirmPassword.dirty || confirmPassword.touched)" style="margin-top:0.25rem;">
                  <small *ngIf="!passwordsMatch()">Passwords do not match.</small>
                </div>
              </div>

              <!-- Phone (optional) -->
              <div style="margin-bottom:0.75rem;">
                <input
                  name="phone"
                  pattern="^[0-9\\-\\s()]+$"
                  [(ngModel)]="model.phone"
                  #phone="ngModel"
                  placeholder="Phone (optional)"
                  class="input"
                />
                <div class="error" *ngIf="phone.invalid && (phone.dirty || phone.touched)" style="margin-top:0.25rem;">
                  <small *ngIf="phone.errors?.['pattern']">Enter a valid phone.</small>
                </div>
              </div>

              <!-- Bio (optional) -->
              <div style="margin-bottom:0.75rem;">
                <textarea
                  name="bio"
                  rows="3"
                  maxlength="250"
                  [(ngModel)]="model.bio"
                  #bio="ngModel"
                  placeholder="Short bio (optional, max 250 chars)"
                  class="input"
                  style="resize:vertical;"
                ></textarea>
                <div class="error" *ngIf="bio.invalid && (bio.dirty || bio.touched)" style="margin-top:0.25rem;">
                  <small *ngIf="bio.errors?.['maxlength']">Max 250 characters.</small>
                </div>
              </div>

              <!-- Submit / Reset -->
              <div style="display:flex; gap:0.5rem; margin-top:0.5rem; align-items:center;">
                <button type="submit" [disabled]="registrationForm.invalid || !passwordsMatch()" class="btn">Register</button>
                <button type="button" (click)="reset(registrationForm)" class="btn btn-ghost">Reset</button>
                <div style="margin-left:auto; font-size:0.85rem; color:#AAB4D6;">
                  <span *ngIf="submitted">Submitted ✓</span>
                </div>
              </div>

            </form>
          </div>

          <!-- Advantages -->
          <div class="card glass-card animate-item zoom-in" style="animation-delay: 0.2s">
            <div class="icon-badge success"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg></div>
            <h3>✓ Advantages</h3>
            <ul>
              <li *ngFor="let p of pros; let i = index" class="list-item" [style.animation-delay]="(0.3 + i * 0.1) + 's'"><span class="check">✓</span><span>{{p}}</span></li>
            </ul>
          </div>

          <!-- Limitations -->
          <div class="card glass-card animate-item zoom-in" style="animation-delay: 0.3s">
            <div class="icon-badge warning"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></div>
            <h3>! Limitations</h3>
            <ul>
              <li *ngFor="let c of cons; let i = index" class="list-item" [style.animation-delay]="(0.4 + i * 0.1) + 's'"><span class="warn">!</span><span>{{c}}</span></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="section-separator"></div>
    </section>
  `,
  styles: [`
    :host { display:block; }
    .section { padding: 5rem 0; opacity: 0; transform: translateY(50px); transition: opacity 0.8s ease, transform 0.8s ease; position: relative; }
    .section.visible { opacity: 1; transform: translateY(0); }
    .floating-shapes { position: absolute; inset: 0; overflow: hidden; pointer-events: none; }
    .shape { position: absolute; border-radius: 50%; filter: blur(60px); }
    .shape-1 { width: 300px; height: 300px; background: radial-gradient(circle, rgba(139,92,246,0.2), transparent); top: 10%; right: -10%; animation: float1 15s ease-in-out infinite; }
    .shape-2 { width: 250px; height: 250px; background: radial-gradient(circle, rgba(56,189,248,0.15), transparent); bottom: 20%; left: -5%; animation: float2 18s ease-in-out infinite; }
    @keyframes float1 { 0%,100% { transform: translate(0,0) scale(1); } 50% { transform: translate(50px,-30px) scale(1.2); } }
    @keyframes float2 { 0%,100% { transform: translate(0,0) scale(1); } 50% { transform: translate(-40px,40px) scale(1.1); } }
    .section-label { font-size: 0.75rem; letter-spacing: 0.15em; color: #8B5CF6; font-weight: 600; margin-bottom: 0.5rem; }
    .animate-item { opacity: 0; transform: translateY(30px); transition: transform 0.2s ease; }
    .section.visible .animate-item { animation: fadeInUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards; }
    @keyframes fadeInUp { to { opacity: 1; transform: translateY(0); } }
    .zoom-in { transform: scale(0.9); }
    .section.visible .zoom-in { animation: zoomIn 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards; }
    @keyframes zoomIn { to { opacity: 1; transform: scale(1); } }
    .header { text-align: center; margin-bottom: 4rem; }
    .header h2 { font-size: 2rem; font-weight: 700; color: #EAF0FF; margin-bottom: 1rem; position: relative; display: inline-block; }
    @media (min-width: 640px) { .header h2 { font-size: 2.75rem; } }
    .glow-text { text-shadow: 0 0 40px rgba(139,92,246,0.3); }
    .header p { font-size: 0.875rem; color: #AAB4D6; max-width: 42rem; margin: 0 auto; }
    @media (min-width: 640px) { .header p { font-size: 1rem; } }
    .grid { display: grid; gap: 2rem; perspective: 1000px; }
    @media (min-width: 1024px) { .grid { grid-template-columns: repeat(2, 1fr); gap: 2.5rem; } }
    .card { padding: 2rem; position: relative; transform-style: preserve-3d; background: rgba(10,12,20,0.6); border-radius: 1rem; border: 1px solid rgba(255,255,255,0.03); }
    .card.full { grid-column: 1 / -1; }
    .card-glow { position: absolute; inset: -2px; background: linear-gradient(135deg, rgba(139,92,246,0.3), rgba(56,189,248,0.2)); border-radius: 1.5rem; opacity: 0; transition: opacity 0.3s; filter: blur(20px); z-index: -1; }
    .card:hover .card-glow { opacity: 1; }
    .card-header { margin-bottom: 1.5rem; }
    .title-row { display: flex; align-items: flex-start; justify-content: space-between; margin-bottom: 1rem; }
    .icon-wrapper { display: inline-flex; width: 1.5rem; height: 1.5rem; color: #8B5CF6; margin-right: 0.5rem; }
    .icon-wrapper svg { width: 100%; height: 100%; }
    .card h3 { font-size: 1.25rem; font-weight: 600; color: #EAF0FF; display: flex; align-items: center; }
    .desc { font-size: 0.875rem; color: #AAB4D6; line-height: 1.7; }
    .code-block { background: linear-gradient(135deg, rgba(0,0,0,0.6), rgba(0,0,0,0.4)); padding: 1.5rem; border-radius: 0.75rem; font-size: 0.875rem; color: #AAB4D6; line-height: 1.8; border: 1px solid rgba(139,92,246,0.2); }
    .code-header { display: flex; gap: 0.5rem; margin-bottom: 1rem; }
    .dot { width: 12px; height: 12px; border-radius: 50%; }
    .dot:nth-child(1) { background: #FF5F57; }
    .dot:nth-child(2) { background: #FFBD2E; }
    .dot:nth-child(3) { background: #28CA42; }
    .comment { color: #8B5CF6; margin-bottom: 0.5rem; }
    .indent { margin-left: 1.5rem; }
    .string { color: #38BDF8; }
    .icon-badge { width: 3rem; height: 3rem; border-radius: 1rem; display: flex; align-items: center; justify-content: center; margin-bottom: 1rem; }
    .icon-badge.success { background: linear-gradient(135deg, rgba(52,211,153,0.2), rgba(52,211,153,0.1)); color: #34D399; }
    .icon-badge.warning { background: linear-gradient(135deg, rgba(245,158,11,0.2), rgba(245,158,11,0.1)); color: #F59E0B; }
    .icon-badge svg { width: 1.5rem; height: 1.5rem; }
    ul { list-style: none; display: flex; flex-direction: column; gap: 0.75rem; padding: 0; margin: 0; }
    .list-item { display: flex; align-items: flex-start; gap: 0.75rem; font-size: 0.875rem; color: #AAB4D6; opacity: 0; transform: translateX(-20px); padding: 0.5rem; border-radius: 0.5rem; transition: all 0.2s; }
    .list-item:hover { background: rgba(255,255,255,0.03); transform: translateX(5px); }
    .section.visible .list-item { animation: slideIn 0.5s cubic-bezier(0.4, 0, 0.2, 1) forwards; }
    @keyframes slideIn { to { opacity: 1; transform: translateX(0); } }
    .check { color: #34D399; font-weight: 700; font-size: 1.25rem; }
    .warn { color: #F59E0B; font-weight: 700; font-size: 1.25rem; }
    .pulse { animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite; }
    @keyframes pulse { 0%,100% { opacity: 1; } 50% { opacity: 0.7; } }
    .input {
      width: 100%;
      background: rgba(255,255,255,0.02);
      border: 1px solid rgba(255,255,255,0.04);
      color: #EAF0FF;
      padding: 0.65rem 0.75rem;
      border-radius: 0.5rem;
      font-size: 0.95rem;
      outline: none;
      transition: box-shadow 0.15s ease, border-color 0.15s ease;
    }
    .input:focus {
      box-shadow: 0 4px 18px rgba(56,189,248,0.08);
      border-color: rgba(56,189,248,0.5);
    }
    .error small { color: #F87171; }
    .btn {
      background: linear-gradient(90deg, rgba(139,92,246,0.95), rgba(56,189,248,0.9));
      border: none;
      color: white;
      padding: 0.55rem 0.9rem;
      border-radius: 0.5rem;
      cursor: pointer;
      font-weight: 600;
      box-shadow: 0 6px 18px rgba(56,189,248,0.08);
    }
    .btn[disabled] { opacity: 0.6; cursor: not-allowed; }
    .btn-ghost {
      background: transparent;
      border: 1px solid rgba(255,255,255,0.04);
      color: #AAB4D6;
    }
    .badge {
      background: rgba(255,255,255,0.03);
      padding: 0.25rem 0.5rem;
      border-radius: 999px;
      color: #EAF0FF;
      font-weight: 700;
      font-size: 0.75rem;
    }
    .section-separator { height: 2rem; }
  `]
})
export class TemplateSectionComponent implements OnInit {
  isVisible = false;
  parallaxY = 0;
  tiltX = 0;
  tiltY = 0;
  submitted = false;

  pros = ['Great for simple forms', 'Less TypeScript upfront', 'Validation lives close to markup', 'Quick to set up and prototype'];
  cons = ['Harder to unit test', 'Less control over form state', 'Can become messy with complex forms', 'Asynchronous validation is tricky'];

  model = {
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    bio: ''
  };

  // ── localStorage ──────────────────────────────────────────────────────────
  private storageKey = 'templateRegistrationForm';

  constructor(private el: ElementRef) {}

  // ── Lifecycle ─────────────────────────────────────────────────────────────
  ngOnInit() {
    this.loadSavedForm(); // restore safe fields before view renders

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.isVisible = true;
        }
      });
    }, { threshold: 0.1 });
    observer.observe(this.el.nativeElement);
  }

  // ── Form helpers ──────────────────────────────────────────────────────────
  passwordsMatch(): boolean {
    return this.model.password === this.model.confirmPassword;
  }

  onSubmit(form: NgForm): void {
    this.submitted = false;
    if (form.valid && this.passwordsMatch()) {

      // Save only non-sensitive fields — passwords intentionally excluded
      const safeData = {
        fullName: this.model.fullName,
        email:    this.model.email,
        phone:    this.model.phone,
        bio:      this.model.bio
      };

      try {
        localStorage.setItem(this.storageKey, JSON.stringify(safeData));
      } catch (error) {
        console.error('Failed to save form data', error);
      }

      console.log('Registration model', this.model);
      this.submitted = true;
      form.resetForm();
    } else {
      Object.values(form.controls).forEach(ctrl => ctrl.markAsTouched());
    }
  }

  reset(form: NgForm): void {
    form.resetForm();
    this.submitted = false;
    // Intentionally does NOT clear localStorage — mirrors reactive form behaviour
  }

  // ── Private ───────────────────────────────────────────────────────────────
  private loadSavedForm(): void {
    const saved = localStorage.getItem(this.storageKey);

    if (!saved) return;

    try {
      const parsed = JSON.parse(saved);
      // Directly mutate model — [(ngModel)] two-way binding picks this up automatically
      this.model.fullName = parsed.fullName || '';
      this.model.email    = parsed.email    || '';
      this.model.phone    = parsed.phone    || '';
      this.model.bio      = parsed.bio      || '';
    } catch (error) {
      console.error('Failed to parse saved form data', error);
    }
  }

  // ── Host listeners ────────────────────────────────────────────────────────
  @HostListener('window:scroll')
  onScroll(): void {
    const rect = this.el.nativeElement.getBoundingClientRect();
    this.parallaxY = (window.innerHeight - rect.top) * 0.1;
  }

  @HostListener('mousemove', ['$event'])
  onMouseMove(e: MouseEvent): void {
    const rect = this.el.nativeElement.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    this.tiltX = (y / rect.height - 0.5) * 5;
    this.tiltY = (x / rect.width - 0.5) * -5;
  }
}