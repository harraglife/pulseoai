/* =========================================
   AETHERIS — Main JavaScript
   Content injection + Animations
   ========================================= */

document.addEventListener('DOMContentLoaded', () => {
    injectContent();
    initStreamLines();
    initScrollNav();
    initRevealAnimations();
    initFAQAccordion();
    initMagneticButtons();
    initLegalModals();
    initFormSubmission();
    initCounterAnimation();
    initMobileSliders();
});

/* -----------------------------------------
   Content Injection from CONTENT object
   ----------------------------------------- */

function injectContent() {
    const C = CONTENT;

    // --- Navigation ---
    document.getElementById('nav-brand-text').textContent = C.nav.brand;
    const navLinksEl = document.getElementById('nav-links');
    C.nav.links.forEach(link => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = link.href;
        a.textContent = link.text;
        li.appendChild(a);
        navLinksEl.appendChild(li);
    });
    const navCta = document.getElementById('nav-cta');
    navCta.textContent = C.nav.cta.text;
    navCta.href = C.nav.cta.href;

    // --- Hero ---
    if (C.hero.badge) {
        document.getElementById('hero-badge-text').textContent = C.hero.badge;
    } else {
        document.querySelector('.hero-badge').style.display = 'none';
    }
    document.getElementById('hero-title').innerHTML =
        `${C.hero.titleLine1} <span class="gradient">${C.hero.titleLine2}</span>`;
    document.getElementById('hero-description').textContent = C.hero.description;

    const heroButtons = document.getElementById('hero-buttons');
    // Primary CTA
    const primaryBtn = document.createElement('a');
    primaryBtn.href = C.hero.ctaPrimary.href;
    primaryBtn.className = 'hero-btn-primary magnetic-btn';
    primaryBtn.innerHTML = `<span>${C.hero.ctaPrimary.text}</span><div class="overlay"></div>`;
    heroButtons.appendChild(primaryBtn);
    // Secondary CTA
    const secondaryBtn = document.createElement('a');
    secondaryBtn.href = C.hero.ctaSecondary.href;
    secondaryBtn.className = 'hero-btn-secondary';
    secondaryBtn.textContent = C.hero.ctaSecondary.text;
    heroButtons.appendChild(secondaryBtn);

    // Hero Card
    document.getElementById('hero-card-stat').textContent = C.hero.card.stat;
    document.getElementById('hero-card-label').textContent = C.hero.card.label;

    // --- Trust Bar ---
    document.getElementById('trust-title').textContent = C.trust.title;
    const trustLogos = document.getElementById('trust-logos');
    C.trust.logos.forEach(logo => {
        const span = document.createElement('span');
        span.textContent = logo;
        trustLogos.appendChild(span);
    });

    // --- Tech Partners Marquee ---
    document.getElementById('tech-partners-title').textContent = C.techPartners.title;
    const techScroll = document.getElementById('tech-partners-scroll');
    // Duplicate logos for seamless infinite scroll
    const allLogos = [...C.techPartners.logos, ...C.techPartners.logos];
    allLogos.forEach(logo => {
        const span = document.createElement('span');
        span.textContent = logo;
        techScroll.appendChild(span);
    });

    // --- Problem / Solution ---
    document.getElementById('problem-title').innerHTML = C.problem.title;
    const problemItems = document.getElementById('problem-items');
    C.problem.items.forEach(item => {
        const div = document.createElement('div');
        div.className = 'problem-item';
        div.innerHTML = `
            <div class="problem-item-icon">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                </svg>
            </div>
            <div>
                <h4>${item.title}</h4>
                <p>${item.description}</p>
            </div>`;
        problemItems.appendChild(div);
    });

    // Solution card
    document.getElementById('solution-title').innerHTML =
        `<span class="solution-check">✓</span> ${C.problem.solution.title}`;
    document.getElementById('solution-quote').textContent = C.problem.solution.quote;

    const solutionStats = document.getElementById('solution-stats');
    C.problem.solution.stats.forEach(stat => {
        const div = document.createElement('div');
        div.className = 'solution-stat';
        div.innerHTML = `
            <div class="solution-stat-value">${stat.value}</div>
            <div class="solution-stat-label">${stat.label}</div>`;
        solutionStats.appendChild(div);
    });

    // --- Services (Bento Grid) ---
    document.getElementById('services-title').innerHTML = C.services.title;
    document.getElementById('services-subtitle').textContent = C.services.subtitle;

    const servicesGrid = document.getElementById('services-grid');
    C.services.items.forEach((svc) => {
        const card = document.createElement('div');
        card.className = 'glass-card service-card service-simple';
        card.innerHTML = `
            <h3>${svc.title}</h3>
            <p>${svc.description}</p>`;

        servicesGrid.appendChild(card);
    });

    // --- Showcase: Counters + Projects ---
    const showcaseCounters = document.getElementById('showcase-counters');
    C.showcase.counters.forEach(counter => {
        const div = document.createElement('div');
        div.className = 'showcase-counter-item';
        const initialDisplay = counter.value === 0 ? counter.suffix : `0${counter.suffix}`;
        div.innerHTML = `
            <div class="counter-value text-gradient" data-target="${counter.value}" data-suffix="${counter.suffix}">${initialDisplay}</div>
            <p class="counter-label">${counter.label}</p>`;
        showcaseCounters.appendChild(div);
    });

    document.getElementById('showcase-title').innerHTML = C.showcase.title;

    const showcaseProjects = document.getElementById('showcase-projects');
    C.showcase.projects.forEach(project => {
        const div = document.createElement('div');
        div.className = 'glass-card showcase-project showcase-project-placeholder';
        div.innerHTML = `
            <div class="project-placeholder-icon">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5">
                    <path d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z"/>
                </svg>
            </div>
            <p class="project-placeholder-label">${project.label}</p>`;
        showcaseProjects.appendChild(div);
    });

    // --- Method ---
    const methodTitle = document.getElementById('method-title');
    methodTitle.innerHTML = `${C.method.title} <span class="highlight">${C.method.titleHighlight}</span>`;
    document.getElementById('method-subtitle').textContent = C.method.subtitle;

    const methodSteps = document.getElementById('method-steps');
    C.method.steps.forEach(step => {
        const div = document.createElement('div');
        div.className = 'method-step';
        div.innerHTML = `
            <div class="method-step-number border-${step.color}">${step.number}</div>
            <h4>${step.title}</h4>
            <p>${step.description}</p>`;
        methodSteps.appendChild(div);
    });

    // --- Results ---
    const resultsInner = document.getElementById('results-inner');
    C.results.forEach(r => {
        const div = document.createElement('div');
        div.className = 'result-item';
        div.innerHTML = `
            <div class="value text-gradient">${r.value}</div>
            <p class="label">${r.label}</p>`;
        resultsInner.appendChild(div);
    });

    // --- FAQ ---
    document.getElementById('faq-title').innerHTML = C.faq.title;
    const faqList = document.getElementById('faq-list');
    C.faq.items.forEach((item, idx) => {
        const div = document.createElement('div');
        div.className = 'glass-card faq-item';
        div.setAttribute('data-faq', idx);
        div.innerHTML = `
            <button class="faq-question">
                <span>${item.question}</span>
                <span class="faq-arrow">↓</span>
            </button>
            <div class="faq-answer">${item.answer}</div>`;
        faqList.appendChild(div);
    });

    // --- Testimonials ---
    if (C.testimonials) {
        document.getElementById('testimonials-title').innerHTML = C.testimonials.title;
        document.getElementById('testimonials-subtitle').textContent = C.testimonials.subtitle;
        const grid = document.getElementById('testimonials-grid');
        C.testimonials.slots.forEach(slot => {
            const wrapper = document.createElement('div');
            wrapper.className = 'testimonial-item';
            wrapper.innerHTML = `
                <div class="glass-card testimonial-slot">
                    <div class="testimonial-placeholder-icon">
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5">
                            <path d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z"/>
                        </svg>
                    </div>
                </div>
                <p class="testimonial-text">${slot.line1}</p>
                <p class="testimonial-text">${slot.line2}</p>`;
            grid.appendChild(wrapper);
        });
    }

    // --- Team ---
    if (C.team) {
        document.getElementById('team-title').innerHTML = C.team.title;
        document.getElementById('team-subtitle').textContent = C.team.subtitle;
        const teamGrid = document.getElementById('team-grid');
        C.team.members.forEach(member => {
            const card = document.createElement('div');
            card.className = 'team-member';
            card.innerHTML = `
                <div class="team-avatar">
                    <img src="${member.photo}" alt="${member.name}" loading="lazy">
                </div>
                <p class="team-name">${member.name}</p>
                <p class="team-role">${member.role}</p>`;
            teamGrid.appendChild(card);
        });
        const socialsEl = document.getElementById('team-socials');
        C.team.socials.forEach(s => {
            const a = document.createElement('a');
            a.href = s.url;
            a.className = 'team-social-link';
            a.target = '_blank';
            a.rel = 'noopener';
            if (s.platform === 'LinkedIn') {
                a.innerHTML = `<svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                <span>${s.label}</span>`;
            } else if (s.platform === 'Instagram') {
                a.innerHTML = `<svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                <span>${s.label}</span>`;
            }
            socialsEl.appendChild(a);
        });
    }

    // --- Contact ---
    document.getElementById('contact-title').innerHTML = C.contact.title;
    document.getElementById('contact-description').textContent = C.contact.description;

    const contactInfo = document.getElementById('contact-info');
    // Email
    const emailItem = document.createElement('div');
    emailItem.className = 'contact-info-item';
    emailItem.innerHTML = `
        <svg viewBox="0 0 20 20"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/></svg>
        <span>${C.contact.email}</span>`;
    contactInfo.appendChild(emailItem);
    // Location
    const locItem = document.createElement('div');
    locItem.className = 'contact-info-item';
    locItem.innerHTML = `
        <svg viewBox="0 0 20 20"><path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"/></svg>
        <span>${C.contact.location}</span>`;
    contactInfo.appendChild(locItem);

    // Contact form
    const form = document.getElementById('contact-form');
    form.setAttribute('data-endpoint', C.contact.form.apiEndpoint);

    const formRow = document.createElement('div');
    formRow.className = 'contact-form-row';
    formRow.innerHTML = `
        <input type="text" name="name" placeholder="${C.contact.form.namePlaceholder}" required>
        <input type="email" name="email" placeholder="${C.contact.form.emailPlaceholder}" required>`;
    form.appendChild(formRow);

    const select = document.createElement('select');
    select.name = 'service';
    const defaultOpt = document.createElement('option');
    defaultOpt.textContent = C.contact.form.selectDefault;
    defaultOpt.value = '';
    select.appendChild(defaultOpt);
    C.contact.form.selectOptions.forEach(opt => {
        const option = document.createElement('option');
        option.textContent = opt;
        option.value = opt;
        select.appendChild(option);
    });
    form.appendChild(select);

    const textarea = document.createElement('textarea');
    textarea.rows = 4;
    textarea.name = 'message';
    textarea.placeholder = C.contact.form.messagePlaceholder;
    form.appendChild(textarea);

    const submitBtn = document.createElement('button');
    submitBtn.type = 'submit';
    submitBtn.className = 'contact-form-submit';
    submitBtn.textContent = C.contact.form.submitText;
    form.appendChild(submitBtn);

    // Form status message
    const formStatus = document.createElement('div');
    formStatus.className = 'form-status';
    formStatus.id = 'form-status';
    form.appendChild(formStatus);

    // --- SEO Footer ---
    const seoContainer = document.getElementById('seo-footer-content');
    const seo = C.seoFooter;

    let seoHTML = `<p class="seo-footer-title">${seo.title}</p>`;
    seoHTML += `<div class="seo-footer-grid">`;
    seo.columns.forEach(col => {
        seoHTML += `<div class="seo-footer-column">`;
        seoHTML += `<h4>${col.heading}</h4>`;
        seoHTML += `<ul>`;
        col.items.forEach(item => {
            seoHTML += `<li>${item}</li>`;
        });
        seoHTML += `</ul></div>`;
    });
    seoHTML += `</div>`;
    seoHTML += `<p class="seo-footer-description">${seo.description}</p>`;
    seoContainer.innerHTML = seoHTML;

    // --- Footer ---
    document.getElementById('footer-brand-text').textContent = C.footer.brand;
    document.getElementById('footer-copyright').textContent = C.footer.copyright;
    document.getElementById('footer-tagline-text').textContent = C.footer.tagline;

    const footerLinks = document.getElementById('footer-links');
    C.footer.links.forEach(link => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = link.href;
        a.textContent = link.text;
        if (link.modal) {
            a.setAttribute('data-open-modal', link.modal);
            a.addEventListener('click', (e) => {
                e.preventDefault();
            });
        }
        li.appendChild(a);
        footerLinks.appendChild(li);
    });

    // --- Legal Modals Content ---
    injectLegalContent('modal-mentions-title', 'modal-mentions-body', C.mentionsLegales);
    injectLegalContent('modal-confidentialite-title', 'modal-confidentialite-body', C.confidentialite);
}

/* -----------------------------------------
   Stream Lines (Neural Background)
   ----------------------------------------- */

function initStreamLines() {
    const bg = document.getElementById('neural-bg');
    for (let i = 1; i <= 15; i++) {
        const line = document.createElement('div');
        line.className = 'stream-line';
        line.style.top = `${i * 7}%`;
        line.style.animationDelay = `${i * 0.5}s`;
        line.style.animationDuration = `${6 + i}s`;
        bg.insertBefore(line, bg.firstChild);
    }
}

/* -----------------------------------------
   Scroll-based Navigation Styling
   ----------------------------------------- */

function initScrollNav() {
    const nav = document.getElementById('nav');
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    }, { passive: true });

    // Mobile menu — separate overlay (not nav-links)
    const toggle = document.getElementById('nav-mobile-toggle');
    const overlay = document.getElementById('mobile-menu-overlay');
    const overlayClose = document.getElementById('mobile-menu-close');
    const overlayNav = document.getElementById('mobile-menu-nav');

    // Inject links into mobile overlay
    if (overlayNav && typeof CONTENT !== 'undefined') {
        CONTENT.nav.links.forEach(link => {
            const a = document.createElement('a');
            a.href = link.href;
            a.textContent = link.text;
            overlayNav.appendChild(a);
        });
    }

    function openMobileMenu() {
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeMobileMenu() {
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    if (toggle && overlay) {
        // Hamburger button toggles overlay
        toggle.addEventListener('click', () => {
            if (overlay.classList.contains('active')) {
                closeMobileMenu();
            } else {
                openMobileMenu();
            }
        });

        // X close button
        overlayClose.addEventListener('click', () => {
            closeMobileMenu();
        });

        // Link clicks — close & scroll
        overlayNav.addEventListener('click', (e) => {
            const link = e.target.closest('a');
            if (!link) return;
            e.preventDefault();
            const href = link.getAttribute('href');
            if (!href || !href.startsWith('#')) return;

            closeMobileMenu();

            const target = document.querySelector(href);
            if (target) {
                const y = target.getBoundingClientRect().top + window.pageYOffset - 80;
                window.scrollTo({ top: y, behavior: 'smooth' });
            }
        });

        // Block scroll bleed
        overlay.addEventListener('touchmove', (e) => {
            e.preventDefault();
        }, { passive: false });
    }
}

/* -----------------------------------------
   Reveal-on-Scroll Animations
   ----------------------------------------- */

function initRevealAnimations() {
    // Disable reveal animations entirely on mobile — compositing layers
    // created by transform/opacity break iOS Safari touch events
    if (window.innerWidth < 1024) return;

    const sections = document.querySelectorAll('main > section');
    const observerOptions = { threshold: 0.1 };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        section.classList.add('reveal');
        observer.observe(section);
    });
}

/* -----------------------------------------
   FAQ Accordion
   ----------------------------------------- */

function initFAQAccordion() {
    document.addEventListener('click', (e) => {
        const btn = e.target.closest('.faq-question');
        if (!btn) return;

        const item = btn.closest('.faq-item');
        const isOpen = item.classList.contains('open');

        // Close all
        document.querySelectorAll('.faq-item').forEach(el => {
            el.classList.remove('open');
        });

        // Toggle clicked
        if (!isOpen) {
            item.classList.add('open');
        }
    });
}

/* -----------------------------------------
   Magnetic Button Effect
   ----------------------------------------- */

function initMagneticButtons() {
    // Disable magnetic effect on touch devices — transform creates stacking
    // contexts that break touch event routing on iOS Safari
    if (window.innerWidth < 1024 || 'ontouchstart' in window) return;

    document.querySelectorAll('.magnetic-btn').forEach(btn => {
        btn.addEventListener('mousemove', (e) => {
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            btn.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
        });
        btn.addEventListener('mouseleave', () => {
            btn.style.transform = 'translate(0px, 0px)';
        });
    });
}

/* -----------------------------------------
   Counter Animation (Showcase Section)
   ----------------------------------------- */

function initCounterAnimation() {
    const countersSection = document.getElementById('showcase-counters');
    if (!countersSection) return;

    let animated = false;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !animated) {
                animated = true;
                const counters = countersSection.querySelectorAll('.counter-value');
                counters.forEach(counter => {
                    const target = parseInt(counter.getAttribute('data-target'));
                    const suffix = counter.getAttribute('data-suffix') || '';

                    // Skip animation for static values (target = 0)
                    if (target === 0) return;

                    const duration = 2000;
                    const start = performance.now();

                    function update(now) {
                        const elapsed = now - start;
                        const progress = Math.min(elapsed / duration, 1);
                        const eased = 1 - Math.pow(1 - progress, 3);
                        const current = Math.round(eased * target);
                        counter.textContent = current + suffix;
                        if (progress < 1) {
                            requestAnimationFrame(update);
                        }
                    }
                    requestAnimationFrame(update);
                });
            }
        });
    }, { threshold: 0.3 });

    observer.observe(countersSection);
}

/* -----------------------------------------
   Legal Content Injection Helper
   ----------------------------------------- */

function injectLegalContent(titleId, bodyId, data) {
    document.getElementById(titleId).textContent = data.title;
    const body = document.getElementById(bodyId);
    let html = '';
    data.sections.forEach(section => {
        html += `<div class="legal-section">`;
        html += `<h3>${section.heading}</h3>`;
        html += `<p>${section.content}</p>`;
        html += `</div>`;
    });
    body.innerHTML = html;
}

/* -----------------------------------------
   Legal Modals Open / Close
   ----------------------------------------- */

function initLegalModals() {
    // Open modals
    document.addEventListener('click', (e) => {
        const trigger = e.target.closest('[data-open-modal]');
        if (trigger) {
            e.preventDefault();
            const modalId = trigger.getAttribute('data-open-modal');
            const modal = document.getElementById(modalId);
            if (modal) {
                modal.classList.add('active');
                modal.setAttribute('aria-hidden', 'false');
                document.body.style.overflow = 'hidden';
            }
        }
    });

    // Close via X button
    document.addEventListener('click', (e) => {
        const closeBtn = e.target.closest('[data-close-modal]');
        if (closeBtn) {
            const modalId = closeBtn.getAttribute('data-close-modal');
            closeModal(modalId);
        }
    });

    // Close via overlay click
    document.querySelectorAll('.legal-modal-overlay').forEach(overlay => {
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) {
                closeModal(overlay.id);
            }
        });
    });

    // Close via Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            document.querySelectorAll('.legal-modal-overlay.active').forEach(modal => {
                closeModal(modal.id);
            });
        }
    });
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('active');
        modal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    }
}

/* -----------------------------------------
   Form Submission (Formspree)
   ----------------------------------------- */

function initFormSubmission() {
    const form = document.getElementById('contact-form');
    const status = document.getElementById('form-status');
    const C = CONTENT.contact.form;

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const submitBtn = form.querySelector('.contact-form-submit');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Envoi en cours...';
        submitBtn.disabled = true;
        status.className = 'form-status';
        status.textContent = '';

        try {
            const formData = {
                name: form.querySelector('[name="name"]').value,
                email: form.querySelector('[name="email"]').value,
                service: form.querySelector('[name="service"]').value,
                message: form.querySelector('[name="message"]').value
            };

            const response = await fetch(form.getAttribute('data-endpoint'), {
                method: 'POST',
                body: JSON.stringify(formData),
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                // Track Google Ads conversion
                if (typeof gtag_report_conversion === 'function') {
                    gtag_report_conversion();
                }
                status.textContent = C.successMessage;
                status.classList.add('form-status-success');
                form.reset();
            } else {
                status.textContent = C.errorMessage;
                status.classList.add('form-status-error');
            }
        } catch (err) {
            status.textContent = C.errorMessage;
            status.classList.add('form-status-error');
        }

        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    });
}

/* -----------------------------------------
   Mobile Sliders (Projects + Testimonials)
   ----------------------------------------- */

function initMobileSliders() {
    if (window.innerWidth >= 768) return;

    setupSlider(
        document.getElementById('showcase-projects'),
        document.getElementById('showcase-projects').parentElement
    );

    setupSlider(
        document.getElementById('testimonials-grid'),
        document.getElementById('testimonials-grid').parentElement
    );
}

function setupSlider(container, parent) {
    if (!container) return;

    const items = container.children;
    if (items.length < 2) return;

    container.classList.add('mobile-slider');

    // Create dots
    const dotsWrapper = document.createElement('div');
    dotsWrapper.className = 'slider-dots';
    for (let i = 0; i < items.length; i++) {
        const dot = document.createElement('button');
        dot.className = 'slider-dot' + (i === 0 ? ' active' : '');
        dot.setAttribute('aria-label', `Slide ${i + 1}`);
        dot.addEventListener('click', () => {
            items[i].scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
        });
        dotsWrapper.appendChild(dot);
    }
    container.after(dotsWrapper);

    // Update dots on scroll
    let scrollTimeout;
    container.addEventListener('scroll', () => {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
            const scrollLeft = container.scrollLeft;
            const itemWidth = container.offsetWidth;
            const activeIndex = Math.round(scrollLeft / itemWidth);
            dotsWrapper.querySelectorAll('.slider-dot').forEach((dot, i) => {
                dot.classList.toggle('active', i === activeIndex);
            });
        }, 50);
    }, { passive: true });
}
