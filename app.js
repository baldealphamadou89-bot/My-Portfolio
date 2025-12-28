const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

/* =========================
   Year
========================= */
const yearEl = $("#year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

/* =========================
   Theme (default: dark)
========================= */
const themeBtn = $("#themeBtn");
const savedTheme = localStorage.getItem("theme");

if (savedTheme) {
  document.documentElement.setAttribute("data-theme", savedTheme);
} else {
  document.documentElement.setAttribute("data-theme", "dark");
  localStorage.setItem("theme", "dark");
}

function updateThemeIcon() {
  const isLight = document.documentElement.getAttribute("data-theme") === "light";
  if (themeBtn) themeBtn.textContent = isLight ? "☀️" : "🌙";
}
updateThemeIcon();

if (themeBtn) {
  themeBtn.addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme");
    const next = current === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
    updateThemeIcon();
  });
}

/* =========================
   i18n (FR/EN) — default: EN
========================= */
const translations = {
  fr: {
    nav_home: "Accueil",
    nav_projects: "Projets",
    nav_about: "À propos",
    nav_contact: "Contact",

    badge: "Full-Stack · AI-Native · Disponible",
    hero_title_a: "Je construis des produits",
    hero_title_b: "web & IA",
    hero_lead:
      "Développeur orienté produit : UI claire, APIs, et déploiement. Approche AI-Native pour accélérer la structuration, la doc, et l’itération.",

    profile_role: "Full-Stack Developer · AI-Native Builder",

    section_projects_title: "Projets",
    section_projects_sub: "3 projets “Pursuit-ready” avec Repo/Live.",

    card_port_title: "Portfolio Full-Stack / AI-Native",
    card_port_desc: "Multi-pages, responsive, dark mode, contact.",
    card_api_title: "API Dashboard (Weather)",
    card_api_desc: "Recherche ville + météo + favoris (localStorage).",
    card_bot_title: "AI Chatbot — Pursuit Assistant",
    card_bot_desc: "Coach portfolio/études + mode démo + mode API serveur.",

    section_github_title: "GitHub",
    section_github_sub: "Mon profil et mes repos.",
    github_profile_title: "Profil",
    github_repos_title: "Repos clés",
    github_username: "Username",
    github_email: "Email",
    btn_view_github: "Voir mon GitHub",
    btn_view_repos: "Mes repos",
    hint_links: "Après déploiement, remplace “Live/Demo” par tes liens GitHub Pages.",

    projects_page_title: "Mes Projets",
    projects_page_sub: "Filtre par catégorie.",
    filter_all: "Tous",
    filter_web: "Web",
    filter_api: "API",
    filter_ai: "AI",
    btn_repo: "Repo",
    btn_live: "Live",
    btn_demo: "Demo",

    about_title: "À propos",
    about_sub: "Full-Stack + AI-Native : livrer vite, bien, et utile.",
    about_profile_title: "Profil",
    about_profile_p1:
      "Je suis Alpha Balde, basé à New York. Je construis des projets web orientés produit (UI, API, déploiement).",
    about_profile_p2:
      "Approche AI-Native : j’utilise l’IA pour structurer (plans, checklists, docs) et accélérer l’itération, tout en gardant le contrôle qualité.",
    about_deliver_title: "Ce que je livre",
    about_li1: "Interfaces responsive",
    about_li2: "Apps JS avec APIs",
    about_li3: "Prototypes produits (MVP)",
    about_li4: "Docs propres (README)",
    about_cta: "Me contacter →",

    contact_title: "Contact",
    contact_sub: "Envoie-moi un message (via le formulaire).",
    contact_pitch:
      "Je suis ouvert aux opportunités Full-Stack (junior), stages, et projets freelance. Écris-moi — je réponds généralement sous 24h.",
    contact_quick_title: "Infos rapides",
    contact_role_label: "Rôle",
    contact_location_label: "Ville",
    contact_remote_label: "Remote",
    contact_remote_value: "Ouvert au remote",
    contact_reply_time: "Réponse habituelle : sous 24h.",
    contact_hint: "Astuce : indique le poste/entreprise et ce que tu veux construire.",

    contact_form_title: "Formulaire",
    label_name: "Nom",
    label_email: "Email",
    label_message: "Message",
    placeholder_name: "Votre nom",
    placeholder_email: "votreemail@email.com",
    placeholder_message: "Votre message...",
    send: "Envoyer",

    footer_tag: "Full-Stack · AI-Native",

    // ✅ Formspree messages
    form_sending: "Envoi en cours…",
    form_success: "✅ Message envoyé. Merci !",
    form_error: "❌ Erreur. Réessaie ou utilise Email/LinkedIn.",
    form_network: "❌ Problème réseau. Réessaie."
  },

  en: {
    nav_home: "Home",
    nav_projects: "Projects",
    nav_about: "About",
    nav_contact: "Contact",

    badge: "Full-Stack · AI-Native · Available",
    hero_title_a: "I build",
    hero_title_b: "web & AI products",
    hero_lead:
      "Product-minded developer: clean UI, APIs, and deployment. AI-Native approach to speed up structure, docs, and iteration.",

    profile_role: "Full-Stack Developer · AI-Native Builder",

    section_projects_title: "Projects",
    section_projects_sub: "3 “Pursuit-ready” projects with Repo/Live.",

    card_port_title: "Full-Stack / AI-Native Portfolio",
    card_port_desc: "Multi-page, responsive, dark mode, contact.",
    card_api_title: "API Dashboard (Weather)",
    card_api_desc: "City search + weather + favorites (localStorage).",
    card_bot_title: "AI Chatbot — Pursuit Assistant",
    card_bot_desc: "Portfolio/study coach + demo mode + server API mode.",

    section_github_title: "GitHub",
    section_github_sub: "My profile and repositories.",
    github_profile_title: "Profile",
    github_repos_title: "Key repos",
    github_username: "Username",
    github_email: "Email",
    btn_view_github: "View GitHub",
    btn_view_repos: "My repos",
    hint_links: "After deployment, replace “Live/Demo” with your GitHub Pages links.",

    projects_page_title: "My Projects",
    projects_page_sub: "Filter by category.",
    filter_all: "All",
    filter_web: "Web",
    filter_api: "API",
    filter_ai: "AI",
    btn_repo: "Repo",
    btn_live: "Live",
    btn_demo: "Demo",

    about_title: "About",
    about_sub: "Full-Stack + AI-Native: ship fast, clean, useful.",
    about_profile_title: "Profile",
    about_profile_p1:
      "I’m Alpha Balde, based in New York. I build product-focused web projects (UI, APIs, deployment).",
    about_profile_p2:
      "AI-Native approach: I use AI to structure (plans, checklists, docs) and iterate faster, while keeping quality control.",
    about_deliver_title: "What I deliver",
    about_li1: "Responsive interfaces",
    about_li2: "JS apps with APIs",
    about_li3: "Product prototypes (MVP)",
    about_li4: "Clean docs (README)",
    about_cta: "Contact me →",

    contact_title: "Contact",
    contact_sub: "Send me a message (via the form).",
    contact_pitch:
      "I’m open to junior full-stack roles, internships, and freelance projects. Reach out — I usually reply within 24 hours.",
    contact_quick_title: "Quick info",
    contact_role_label: "Role",
    contact_location_label: "Location",
    contact_remote_label: "Remote",
    contact_remote_value: "Open to remote",
    contact_reply_time: "Typical reply: within 24 hours.",
    contact_hint: "Tip: mention the role/company and what you want to build.",

    contact_form_title: "Form",
    label_name: "Name",
    label_email: "Email",
    label_message: "Message",
    placeholder_name: "Your name",
    placeholder_email: "you@email.com",
    placeholder_message: "Your message…",
    send: "Send",

    footer_tag: "Full-Stack · AI-Native",

    // ✅ Formspree messages
    form_sending: "Sending…",
    form_success: "✅ Message sent. Thank you!",
    form_error: "❌ Error. Try again or use Email/LinkedIn.",
    form_network: "❌ Network issue. Please try again."
  },
};

// ✅ default EN if nothing saved / invalid
let currentLang = localStorage.getItem("lang");
if (!currentLang || !translations[currentLang]) currentLang = "en";

function applyTranslations(lang) {
  const t = translations[lang] || translations.en;

  $$("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (t[key] != null) el.textContent = t[key];
  });

  $$("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (t[key] != null) el.setAttribute("placeholder", t[key]);
  });

  document.documentElement.setAttribute("lang", lang);
  currentLang = lang;
  localStorage.setItem("lang", lang);
}

const langSelect = $("#langSelect");
if (langSelect) {
  langSelect.value = currentLang;
  langSelect.addEventListener("change", (e) => applyTranslations(e.target.value));
}

// Apply i18n
applyTranslations(currentLang);

/* =========================
   Mobile menu
========================= */
const burger = $("#burger");
const menu = $("#menu");

if (burger && menu) {
  burger.addEventListener("click", () => menu.classList.toggle("open"));

  menu.addEventListener("click", (e) => {
    if (e.target.tagName === "A") menu.classList.remove("open");
  });

  document.addEventListener("click", (e) => {
    const clickedInside =
      e.target === burger || burger.contains(e.target) ||
      e.target === menu || menu.contains(e.target);

    if (!clickedInside) menu.classList.remove("open");
  });
}

/* =========================
   Projects filter
========================= */
const filters = $$(".filter");
const grid = $("#projectsGrid");

if (filters.length && grid) {
  filters.forEach((btn) => {
    btn.addEventListener("click", () => {
      filters.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const cat = btn.dataset.filter;
      const cards = grid.querySelectorAll("[data-cat]");

      cards.forEach((card) => {
        const show = cat === "all" || card.dataset.cat === cat;
        card.style.display = show ? "" : "none";
      });
    });
  });
}

/* =========================
   Contact form (Formspree)
========================= */
const contactForm = $("#contactForm");
const formHint = $("#formHint");

if (contactForm) {
  contactForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const t = translations[currentLang] || translations.en;

    // button state
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalBtnText = submitBtn ? submitBtn.textContent : "";

    if (formHint) formHint.textContent = t.form_sending;

    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.style.opacity = "0.8";
      submitBtn.style.cursor = "not-allowed";
    }

    try {
      const res = await fetch(contactForm.action, {
        method: "POST",
        body: new FormData(contactForm),
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        if (formHint) formHint.textContent = t.form_success;
        contactForm.reset();
      } else {
        if (formHint) formHint.textContent = t.form_error;
      }
    } catch (err) {
      if (formHint) formHint.textContent = t.form_network;
    } finally {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.style.opacity = "";
        submitBtn.style.cursor = "";
        submitBtn.textContent = originalBtnText || t.send;
      }
    }
  });
}
