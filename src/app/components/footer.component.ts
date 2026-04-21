import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  template: `
    <footer class="footer">
      <div class="container">
        <div class="separator"></div>
        <div class="content">
          <div class="brand">
            <div class="icon">A</div>
            <div>
              <div class="name">Angular Forms Guide</div>
              <div class="tagline">Built for learning Angular form patterns</div>
            </div>
          </div>
          <div class="links">
            <a href="https://github.com" target="_blank" aria-label="GitHub">
              <svg fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            </a>
            <a href="https://twitter.com" target="_blank" aria-label="Twitter">
              <svg fill="currentColor" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/></svg>
            </a>
          </div>
        </div>
        <div class="copyright">&copy; {{year}} Angular Forms Learning Project.</div>
      </div>
    </footer>
  `,
  styles: [`
    .footer { padding: 3rem 0; }
    .separator { height: 1px; background: rgba(255,255,255,0.1); margin-bottom: 2rem; }
    .content { display: flex; flex-direction: column; align-items: center; justify-content: space-between; gap: 1.5rem; margin-bottom: 2rem; }
    @media (min-width: 768px) { .content { flex-direction: row; } }
    .brand { display: flex; align-items: center; gap: 0.75rem; }
    .icon { width: 2rem; height: 2rem; border-radius: 0.5rem; background: linear-gradient(135deg, #8B5CF6, #38BDF8); display: flex; align-items: center; justify-content: center; color: white; font-weight: 700; font-size: 0.875rem; }
    .name { font-size: 0.875rem; font-weight: 600; color: #EAF0FF; }
    .tagline { font-size: 0.75rem; color: #AAB4D6; }
    .links { display: flex; gap: 1.5rem; }
    .links a { color: #AAB4D6; transition: color 0.2s; }
    .links a:hover { color: #EAF0FF; }
    .links svg { width: 1.25rem; height: 1.25rem; }
    .copyright { text-align: center; padding-top: 2rem; border-top: 1px solid rgba(255,255,255,0.05); font-size: 0.75rem; color: #AAB4D6; }
  `]
})
export class FooterComponent {
  year = new Date().getFullYear();
}