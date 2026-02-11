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
    initChatbot();
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
    document.getElementById('hero-badge-text').textContent = C.hero.badge;
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
    C.services.items.forEach((svc, i) => {
        const card = document.createElement('div');
        card.className = 'glass-card service-card';

        if (i === 0) {
            // Email & Prospection — large
            card.classList.add('service-email');
            card.innerHTML = `
                <div class="service-email-icon">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                </div>
                <h3>${svc.title}</h3>
                <p>${svc.description}</p>
                <ul class="service-features">
                    ${svc.features.map(f => `<li><span>•</span> ${f}</li>`).join('')}
                </ul>
                <button class="service-cta">${svc.cta} <span class="arrow">→</span></button>`;
        } else if (i === 1) {
            // Scraping — small
            card.classList.add('service-scraping');
            card.innerHTML = `
                <h3>${svc.title}</h3>
                <p>${svc.description}</p>
                <div class="service-terminal">${svc.terminal.join('<br/>')}</div>`;
        } else if (i === 2) {
            // Gestion Sans API — small
            card.classList.add('service-api');
            card.innerHTML = `
                <h3>${svc.title}</h3>
                <p>${svc.description}</p>`;
        } else if (i === 3) {
            // Chatbots — large
            card.classList.add('service-chatbot');
            card.innerHTML = `
                <div class="service-chatbot-content">
                    <h3>${svc.title}</h3>
                    <p>${svc.description}</p>
                    <div class="service-tags">
                        ${svc.tags.map(t => `<span class="service-tag service-tag-${t.color}">${t.text}</span>`).join('')}
                    </div>
                </div>
                <div class="service-chat-demo">
                    ${svc.chat.map(c => `<div class="chat-bubble chat-${c.type === 'bot' ? 'bot' : 'user'}">${c.text}</div>`).join('')}
                </div>`;
        }

        servicesGrid.appendChild(card);
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

    // Mobile hamburger menu
    const toggle = document.getElementById('nav-mobile-toggle');
    const navLinks = document.getElementById('nav-links');
    let menuOpen = false;

    const hamburgerSVG = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" /></svg>';
    const closeSVG = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>';

    function openMenu() {
        menuOpen = true;
        navLinks.classList.add('mobile-open');
        document.body.style.overflow = 'hidden';
        document.documentElement.style.overflow = 'hidden';
        toggle.innerHTML = closeSVG;
    }

    function closeMenu() {
        menuOpen = false;
        // Kill transition so it closes INSTANTLY
        navLinks.style.transition = 'none';
        navLinks.classList.remove('mobile-open');
        // Force reflow then restore transition
        void navLinks.offsetHeight;
        navLinks.style.transition = '';
        document.body.style.overflow = '';
        document.documentElement.style.overflow = '';
        toggle.innerHTML = hamburgerSVG;
    }

    if (toggle && navLinks) {
        // Toggle button
        toggle.addEventListener('click', (e) => {
            e.stopPropagation();
            if (menuOpen) {
                closeMenu();
            } else {
                openMenu();
            }
        });

        // Handle link clicks via event delegation
        navLinks.addEventListener('click', (e) => {
            const link = e.target.closest('a');
            if (!link) return;
            e.preventDefault();
            e.stopPropagation();
            const href = link.getAttribute('href');
            if (!href || !href.startsWith('#')) return;

            // Close menu instantly
            closeMenu();

            // Scroll to section
            const target = document.querySelector(href);
            if (target) {
                const y = target.getBoundingClientRect().top + window.pageYOffset - 80;
                window.scrollTo({ top: y, behavior: 'smooth' });
            }
        });

        // Prevent scroll bleed when menu is open
        navLinks.addEventListener('touchmove', (e) => {
            if (menuOpen) {
                e.preventDefault();
            }
        }, { passive: false });
    }
}

/* -----------------------------------------
   Reveal-on-Scroll Animations
   ----------------------------------------- */

function initRevealAnimations() {
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
   Chatbot Widget
   ----------------------------------------- */

function initChatbot() {
    const C = CONTENT.chatbot;
    if (!C) return;

    // --- State ---
    const state = {
        isOpen: false,
        isLoading: false,
        sessionId: 'pulseo_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9),
        messages: []
    };

    // --- DOM References ---
    const widget = document.getElementById('chatbot-widget');
    const bubble = document.getElementById('chatbot-bubble');
    const messagesContainer = document.getElementById('chatbot-messages');
    const input = document.getElementById('chatbot-input');
    const sendBtn = document.getElementById('chatbot-send');
    const closeBtn = document.getElementById('chatbot-close');

    // --- Content injection ---
    document.getElementById('chatbot-header-title').textContent = C.headerTitle;
    document.getElementById('chatbot-header-subtitle').textContent = C.headerSubtitle;
    input.placeholder = C.inputPlaceholder;

    // --- Event listeners ---
    bubble.addEventListener('click', toggleChat);
    closeBtn.addEventListener('click', closeChat);
    sendBtn.addEventListener('click', handleSend);
    input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    });

    // --- Functions ---
    function toggleChat() {
        if (state.isOpen) {
            closeChat();
        } else {
            openChat();
        }
    }

    function openChat() {
        state.isOpen = true;
        widget.classList.add('chatbot-open');

        // Show welcome message on first open
        if (state.messages.length === 0) {
            addBotMessage(C.welcomeMessage);
        }

        setTimeout(() => input.focus(), 350);
    }

    function closeChat() {
        state.isOpen = false;
        widget.classList.remove('chatbot-open');
    }

    function handleSend() {
        const text = input.value.trim();
        if (!text || state.isLoading) return;

        addUserMessage(text);
        input.value = '';
        sendToBackend(text);
    }

    function addUserMessage(text) {
        state.messages.push({ role: 'user', text });
        const msgEl = document.createElement('div');
        msgEl.className = 'chatbot-msg chatbot-msg-user';
        msgEl.textContent = text;
        messagesContainer.appendChild(msgEl);
        scrollToBottom();
    }

    function addBotMessage(text) {
        state.messages.push({ role: 'bot', text });
        const msgEl = document.createElement('div');
        msgEl.className = 'chatbot-msg chatbot-msg-bot';
        msgEl.textContent = text;
        messagesContainer.appendChild(msgEl);
        scrollToBottom();
    }

    function showTypingIndicator() {
        const typing = document.createElement('div');
        typing.className = 'chatbot-typing';
        typing.id = 'chatbot-typing';
        typing.innerHTML = '<div class="chatbot-typing-dot"></div><div class="chatbot-typing-dot"></div><div class="chatbot-typing-dot"></div>';
        messagesContainer.appendChild(typing);
        scrollToBottom();
    }

    function removeTypingIndicator() {
        const typing = document.getElementById('chatbot-typing');
        if (typing) typing.remove();
    }

    function scrollToBottom() {
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    async function sendToBackend(text) {
        state.isLoading = true;
        sendBtn.disabled = true;
        showTypingIndicator();

        try {
            const response = await fetch(C.apiEndpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    sessionId: state.sessionId,
                    message: text
                })
            });

            removeTypingIndicator();

            if (response.ok) {
                const data = await response.json();
                addBotMessage(data.reply || C.errorMessage);
            } else {
                addBotMessage(C.errorMessage);
            }
        } catch (err) {
            removeTypingIndicator();
            addBotMessage(C.errorMessage);
        }

        state.isLoading = false;
        sendBtn.disabled = false;
        input.focus();
    }
}
