import {
  Component,
  ElementRef,
  OnInit,
  OnDestroy,
  HostListener
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
  ValidationErrors
} from '@angular/forms';

@Component({
  selector: 'app-reactive-section',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <section id="reactive" class="section" [class.visible]="isVisible">
      <div class="floating-shapes">
        <div class="shape shape-1"></div>
        <div class="shape shape-2"></div>
      </div>

      <div class="container">
        <div class="header animate-item" [style.transform]="'translateY(' + parallaxY * 0.2 + 'px)'">
          <div class="section-label">APPROACH #2</div>
          <h2 class="glow-text gradient-text">Reactive Forms</h2>
          <p>Built in TypeScript with explicit form models and predictable state. The go-to for complex scenarios.</p>
        </div>

        <div class="grid">
          <!-- Info card -->
          <div class="card glass-card-strong full animate-item" style="animation-delay: 0.1s"
               [style.transform]="'translateY(' + parallaxY * 0.1 + 'px) rotateX(' + tiltX + 'deg) rotateY(' + tiltY + 'deg)'">
            <div class="card-shine"></div>
            <div class="card-header">
              <div class="title-row">
                <h3>
                  <span class="icon-wrapper">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                    </svg>
                  </span>
                  What are Reactive Forms?
                </h3>
                <span class="badge pulse">Powerful</span>
              </div>
              <p class="desc">Reactive forms are built in TypeScript with explicit form models and predictable state.</p>
            </div>

            <div class="code-block font-code">
              <div class="code-header">
                <span class="dot"></span><span class="dot"></span><span class="dot"></span>
              </div>
              <div class="comment">// Example: Reactive form</div>
              <div>loginForm = <span class="keyword">new</span> FormGroup(&#123;</div>
              <div class="indent">username: <span class="keyword">new</span> FormControl('', Validators.required),</div>
              <div class="indent">password: <span class="keyword">new</span> FormControl('', [Validators.required, Validators.minLength(8)])</div>
              <div>&#125;);</div>
            </div>
          </div>

          <!-- Reactive form card -->
          <div class="card glass-card-strong full">
            <div style="display:flex; align-items:center; gap:0.75rem; margin-bottom:1rem;">
              <div class="icon-badge success" style="margin:0;">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <h3 style="margin:0;">Register</h3>
            </div>

            <form [formGroup]="registrationForm" (ngSubmit)="onSubmit()" novalidate>
              <!-- Full name -->
              <div style="margin-bottom:0.75rem;">
                <input
                  formControlName="fullName"
                  placeholder="Full name"
                  class="input"
                />
                <div class="error" *ngIf="fullName?.invalid && (fullName?.dirty || fullName?.touched)" style="margin-top:0.25rem;">
                  <small *ngIf="fullName?.errors?.['required']">Name is required.</small>
                  <small *ngIf="fullName?.errors?.['minlength']">Name must be at least 2 characters.</small>
                </div>
              </div>

              <!-- Email -->
              <div style="margin-bottom:0.75rem;">
                <input
                  formControlName="email"
                  placeholder="Email address"
                  class="input"
                />
                <div class="error" *ngIf="email?.invalid && (email?.dirty || email?.touched)" style="margin-top:0.25rem;">
                  <small *ngIf="email?.errors?.['required']">Email is required.</small>
                  <small *ngIf="email?.errors?.['email']">Enter a valid email.</small>
                </div>
              </div>

              <!-- Password -->
              <div style="margin-bottom:0.75rem;">
                <input
                  type="password"
                  formControlName="password"
                  placeholder="Password (min 6 chars)"
                  class="input"
                />
                <div class="error" *ngIf="password?.invalid && (password?.dirty || password?.touched)" style="margin-top:0.25rem;">
                  <small *ngIf="password?.errors?.['required']">Password is required.</small>
                  <small *ngIf="password?.errors?.['minlength']">Password must be at least 6 characters.</small>
                </div>
              </div>

              <!-- Confirm Password -->
              <div style="margin-bottom:0.75rem;">
                <input
                  type="password"
                  formControlName="confirmPassword"
                  placeholder="Confirm password"
                  class="input"
                />
                <div class="error" *ngIf="confirmPassword?.dirty || confirmPassword?.touched" style="margin-top:0.25rem;">
                  <small *ngIf="registrationForm.errors?.['passwordMismatch']">Passwords do not match.</small>
                </div>
              </div>

              <!-- Phone -->
              <div style="margin-bottom:0.75rem;">
                <input
                  formControlName="phone"
                  placeholder="Phone (optional)"
                  class="input"
                />
                <div class="error" *ngIf="phone?.invalid && (phone?.dirty || phone?.touched)" style="margin-top:0.25rem;">
                  <small *ngIf="phone?.errors?.['pattern']">Enter a valid phone.</small>
                </div>
              </div>

              <!-- Bio -->
              <div style="margin-bottom:0.75rem;">
                <textarea
                  formControlName="bio"
                  rows="3"
                  placeholder="Short bio (optional, max 250 chars)"
                  class="input"
                  style="resize:vertical;"
                ></textarea>
                <div class="error" *ngIf="bio?.invalid && (bio?.dirty || bio?.touched)" style="margin-top:0.25rem;">
                  <small *ngIf="bio?.errors?.['maxlength']">Max 250 characters.</small>
                </div>
              </div>

              <!-- Submit / Reset -->
              <div style="display:flex; gap:0.5rem; margin-top:0.5rem; align-items:center;">
                <button type="submit" [disabled]="registrationForm.invalid" class="btn">Register</button>
                <button type="button" (click)="reset()" class="btn btn-ghost">Reset</button>
                <div style="margin-left:auto; font-size:0.85rem; color:#AAB4D6;">
                  <span *ngIf="submitted">Submitted ✓</span>
                </div>
              </div>
            </form>
          </div>

          <!-- Advantages -->
          <div class="card glass-card animate-item zoom-in" style="animation-delay: 0.2s">
            <div class="icon-badge success">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <h3>✓ Advantages</h3>
            <ul>
              <li *ngFor="let p of pros; let i = index"
                  class="list-item"
                  [style.animation-delay]="(0.3 + i * 0.1) + 's'">
                <span class="check">✓</span><span>{{ p }}</span>
              </li>
            </ul>
          </div>

          <!-- Limitations -->
          <div class="card glass-card animate-item zoom-in" style="animation-delay: 0.3s">
            <div class="icon-badge warning">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h3>! Limitations</h3>
            <ul>
              <li *ngFor="let c of cons; let i = index"
                  class="list-item"
                  [style.animation-delay]="(0.4 + i * 0.1) + 's'">
                <span class="warn">!</span><span>{{ c }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="section-separator"></div>
    </section>
  `,
  styles: [`
    .section { padding: 5rem 0; opacity: 0; transform: translateY(50px); transition: opacity 0.8s ease, transform 0.8s ease; position: relative; }
    .section.visible { opacity: 1; transform: translateY(0); }
    .floating-shapes { position: absolute; inset: 0; overflow: hidden; pointer-events: none; }
    .shape { position: absolute; border-radius: 50%; filter: blur(60px); }
    .shape-1 { width: 300px; height: 300px; background: radial-gradient(circle, rgba(139,92,246,0.25), transparent); top: 10%; left: -10%; animation: float1 15s ease-in-out infinite; }
    .shape-2 { width: 250px; height: 250px; background: radial-gradient(circle, rgba(56,189,248,0.2), transparent); bottom: 20%; right: -5%; animation: float2 18s ease-in-out infinite; }
    @keyframes float1 { 0%,100% { transform: translate(0,0) scale(1); } 50% { transform: translate(-50px,30px) scale(1.2); } }
    @keyframes float2 { 0%,100% { transform: translate(0,0) scale(1); } 50% { transform: translate(40px,-40px) scale(1.1); } }
    .section-label { font-size: 0.75rem; letter-spacing: 0.15em; color: #8B5CF6; font-weight: 600; margin-bottom: 0.5rem; }
    .gradient-text { background: linear-gradient(135deg, #8B5CF6, #38BDF8, #8B5CF6); background-size: 200% auto; -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; animation: gradientFlow 4s linear infinite; }
    @keyframes gradientFlow { 0% { background-position: 0% center; } 100% { background-position: 200% center; } }
    .animate-item { opacity: 0; transform: translateY(30px); transition: transform 0.2s ease; }
    .section.visible .animate-item { animation: fadeInUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards; }
    @keyframes fadeInUp { to { opacity: 1; transform: translateY(0); } }
    .zoom-in { transform: scale(0.9); }
    .section.visible .zoom-in { animation: zoomIn 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards; }
    @keyframes zoomIn { to { opacity: 1; transform: scale(1); } }
    .header { text-align: center; margin-bottom: 4rem; }
    .header h2 { font-size: 2rem; font-weight: 700; color: #EAF0FF; margin-bottom: 1rem; }
    .glow-text { text-shadow: 0 0 40px rgba(139,92,246,0.4), 0 0 80px rgba(56,189,248,0.3); }
    .header p { font-size: 0.875rem; color: #AAB4D6; max-width: 42rem; margin: 0 auto; }
    .grid { display: grid; gap: 2rem; perspective: 1000px; }
    @media (min-width: 1024px) { .grid { grid-template-columns: repeat(2, 1fr); gap: 2.5rem; } }
    .card { padding: 2rem; position: relative; transform-style: preserve-3d; background: rgba(10,12,20,0.6); border-radius: 1rem; border: 1px solid rgba(255,255,255,0.03); }
    .card.full { grid-column: 1 / -1; }
    .card-shine { position: absolute; inset: -2px; background: linear-gradient(135deg, rgba(139,92,246,0.4), rgba(56,189,248,0.3)); border-radius: 1.5rem; opacity: 0; transition: opacity 0.4s; filter: blur(30px); z-index: -1; animation: pulse 4s ease-in-out infinite; }
    @keyframes pulse { 0%,100% { opacity: 0; transform: scale(0.95); } 50% { opacity: 0.6; transform: scale(1.05); } }
    .card:hover .card-shine { opacity: 0.8; }
    .card-header { margin-bottom: 1.5rem; }
    .title-row { display: flex; align-items: flex-start; justify-content: space-between; margin-bottom: 1rem; }
    .icon-wrapper { display: inline-flex; width: 1.5rem; height: 1.5rem; color: #8B5CF6; margin-right: 0.5rem; }
    .icon-wrapper svg { width: 100%; height: 100%; }
    .card h3 { font-size: 1.25rem; font-weight: 600; color: #EAF0FF; display: flex; align-items: center; }
    .desc { font-size: 0.875rem; color: #AAB4D6; line-height: 1.7; }
    .code-block { background: linear-gradient(135deg, rgba(0,0,0,0.6), rgba(0,0,0,0.4)); padding: 1.5rem; border-radius: 0.75rem; font-size: 0.875rem; color: #AAB4D6; line-height: 1.8; border: 1px solid rgba(139,92,246,0.3); }
    .code-header { display: flex; gap: 0.5rem; margin-bottom: 1rem; }
    .dot { width: 12px; height: 12px; border-radius: 50%; }
    .dot:nth-child(1) { background: #FF5F57; }
    .dot:nth-child(2) { background: #FFBD2E; }
    .dot:nth-child(3) { background: #28CA42; }
    .comment { color: #8B5CF6; margin-bottom: 0.5rem; }
    .indent { margin-left: 1.5rem; }
    .keyword { color: #8B5CF6; }
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
    .pulse { animation: badgePulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite; }
    @keyframes badgePulse { 0%,100% { opacity: 1; } 50% { opacity: 0.7; } }

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
export class ReactiveSectionComponent implements OnInit, OnDestroy {
  isVisible = false;
  parallaxY = 0;
  tiltX = 0;
  tiltY = 0;
  submitted = false;

  pros = [
    'Best for complex/dynamic forms',
    'Easier unit testing',
    'Explicit validation + state management',
    'Immutable and predictable'
  ];

  cons = [
    'More boilerplate code',
    'Steeper learning curve',
    'Might be overkill for simple forms',
    'Requires understanding of RxJS'
  ];

  registrationForm: FormGroup;
  private storageKey = 'registrationForm';
  private observer?: IntersectionObserver;

  constructor(private el: ElementRef, private fb: FormBuilder) {
    this.registrationForm = this.fb.group(
      {
        fullName: ['', [Validators.required, Validators.minLength(2)]],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', Validators.required],
        phone: ['', [Validators.pattern(/^[0-9\-\s()]+$/)]],
        bio: ['', [Validators.maxLength(250)]]
      },
      { validators: this.passwordMatchValidator }
    );
  }

  get fullName() { return this.registrationForm.get('fullName'); }
  get email() { return this.registrationForm.get('email'); }
  get password() { return this.registrationForm.get('password'); }
  get confirmPassword() { return this.registrationForm.get('confirmPassword'); }
  get phone() { return this.registrationForm.get('phone'); }
  get bio() { return this.registrationForm.get('bio'); }

  passwordMatchValidator(group: AbstractControl): ValidationErrors | null {
    const password = group.get('password')?.value;
    const confirmPassword = group.get('confirmPassword')?.value;

    if (!password || !confirmPassword) {
      return null;
    }

    return password === confirmPassword ? null : { passwordMismatch: true };
  }

  onSubmit(): void {
    if (this.registrationForm.valid) {
      const { fullName, email, phone, bio } = this.registrationForm.getRawValue();

      const safeData = {
        fullName,
        email,
        phone,
        bio
      };

      try {
        localStorage.setItem(this.storageKey, JSON.stringify(safeData));
      } catch (error) {
        console.error('Failed to save form data', error);
      }

      this.submitted = true;
      this.registrationForm.reset();
    } else {
      this.registrationForm.markAllAsTouched();
    }
  }

  reset(): void {
    this.registrationForm.reset();
    this.submitted = false;
  }

  ngOnInit(): void {
    this.loadSavedForm();

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.isVisible = true;
          }
        });
      },
      { threshold: 0.1 }
    );

    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }

  private loadSavedForm(): void {
    const saved = localStorage.getItem(this.storageKey);

    if (!saved) return;

    try {
      const parsed = JSON.parse(saved);
      this.registrationForm.patchValue({
        fullName: parsed.fullName || '',
        email: parsed.email || '',
        phone: parsed.phone || '',
        bio: parsed.bio || ''
      });
    } catch (error) {
      console.error('Failed to parse saved form data', error);
    }
  }

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