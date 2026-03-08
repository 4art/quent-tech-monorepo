export type Locale = "en" | "de" | "fr" | "es" | "it" | "ru" | "uk" | "pt";

export interface LocaleInfo {
  code: Locale;
  name: string;
  flag: string;
  short: string;
}

export const locales: LocaleInfo[] = [
  { code: "en", name: "English", flag: "🇬🇧", short: "EN" },
  { code: "de", name: "Deutsch", flag: "🇩🇪", short: "DE" },
  { code: "fr", name: "Français", flag: "🇫🇷", short: "FR" },
  { code: "es", name: "Español", flag: "🇪🇸", short: "ES" },
  { code: "it", name: "Italiano", flag: "🇮🇹", short: "IT" },
  { code: "ru", name: "Русский", flag: "🇷🇺", short: "RU" },
  { code: "uk", name: "Українська", flag: "🇺🇦", short: "UK" },
  { code: "pt", name: "Português", flag: "🇵🇹", short: "PT" },
];

// Translation keys for the entire site
export type TranslationKeys = {
  // Navigation
  nav: {
    home: string;
    services: string;
    about: string;
    contact: string;
    getStarted: string;
  };
  // Home page
  home: {
    heroTitle: string;
    heroSubtitle: string;
    startProject: string;
    hireEngineers: string;
    industriesTitle: string;
    industries: string[];
    whatWeDo: string;
    whatWeDoSubtitle: string;
    viewAllServices: string;
    services: { title: string; description: string }[];
    scaleTeamTitle: string;
    scaleTeamSubtitle: string;
    steps: { title: string; description: string }[];
    availableRoles: string;
    roles: string[];
    expertiseTitle: string;
    expertiseSubtitle: string;
    expertisePoints: string[];
    learnMore: string;
    technologies: string;
    ctaTitle: string;
    ctaSubtitle: string;
  };
  // Services page
  servicesPage: {
    heroTitle: string;
    heroSubtitle: string;
    services: { title: string; description: string; features: string[] }[];
    howWeWork: string;
    howWeWorkSubtitle: string;
    workModels: { title: string; description: string }[];
    ctaTitle: string;
    ctaSubtitle: string;
  };
  // About page
  aboutPage: {
    heroTitle: string;
    heroSubtitle: string;
    ourStory: string;
    storyParagraphs: string[];
    companyDetails: string;
    companyName: string;
    registration: string;
    founded: string;
    headquarters: string;
    ourValues: string;
    ourValuesSubtitle: string;
    values: { title: string; description: string }[];
    leadership: string;
    leadershipSubtitle: string;
    founderName: string;
    founderTitle: string;
    founderBio: string;
    credentials: string;
    credentialsList: string[];
    ctaTitle: string;
    ctaSubtitle: string;
    getInTouch: string;
  };
  // Contact page
  contactPage: {
    heroTitle: string;
    heroSubtitle: string;
    sendMessage: string;
    messageSent: string;
    messageSentText: string;
    sendAnother: string;
    yourName: string;
    emailAddress: string;
    company: string;
    message: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    companyPlaceholder: string;
    messagePlaceholder: string;
    sendButton: string;
    sending: string;
    privacyNote: string;
    privacyPolicy: string;
    getInTouch: string;
    email: string;
    registeredOffice: string;
    workingHours: string;
    workingHoursText: string;
    responseTime: string;
    companyInfo: string;
    companyNameLabel: string;
    regNumber: string;
    country: string;
  };
  // Footer
  footer: {
    description: string;
    quickLinks: string;
    legal: string;
    impressum: string;
    privacyPolicy: string;
    allRightsReserved: string;
  };
  // Cookie consent
  cookie: {
    message: string;
    accept: string;
    learnMore: string;
  };
};

const translations: Record<Locale, TranslationKeys> = {
  en: {
    nav: {
      home: "Home",
      services: "Services",
      about: "About",
      contact: "Contact",
      getStarted: "Get Started",
    },
    home: {
      heroTitle: "Technology Solutions That Deliver Results",
      heroSubtitle: "Boutique IT consultancy and staff augmentation with deep expertise in financial services, energy, and industrial sectors. We consult, we build, we staff, we deliver.",
      startProject: "Start a Project",
      hireEngineers: "Hire Engineers",
      industriesTitle: "Industries We Serve",
      industries: ["Financial Services", "Capital Markets", "Energy", "Industrial", "Technology"],
      whatWeDo: "What We Do",
      whatWeDoSubtitle: "From strategic consulting to hands-on development - we deliver complete solutions",
      viewAllServices: "View All Services",
      services: [
        { title: "Custom Software Development", description: "End-to-end development of tailored software solutions - from concept to production deployment." },
        { title: "Data & Analytics", description: "Modern data platforms, analytics solutions, and business intelligence that drive decisions." },
        { title: "Cloud & Infrastructure", description: "Scalable cloud solutions on AWS, Azure, and GCP. Infrastructure as Code with Terraform and Pulumi." },
        { title: "Quantitative Solutions", description: "Trading systems, financial analytics, and quantitative models for capital markets." },
      ],
      scaleTeamTitle: "Scale Your Team with Pre-Vetted Engineers",
      scaleTeamSubtitle: "Need senior talent fast? We match you with experienced engineers who integrate seamlessly into your existing workflows.",
      steps: [
        { title: "Brief", description: "Tell us what you need — role, tech stack, and timeline." },
        { title: "Match", description: "We find the right engineer from our vetted network quickly." },
        { title: "Deliver", description: "Seamless integration into your team — productive from day one." },
      ],
      availableRoles: "Available Roles",
      roles: ["Data Engineers", "Cloud Architects", "Databricks & Snowflake Specialists", "DevOps Engineers"],
      expertiseTitle: "Enterprise Expertise, Boutique Approach",
      expertiseSubtitle: "With years of experience at leading financial institutions and global enterprises, we bring the technical depth of large consultancies with the agility and personal attention of a specialist firm.",
      expertisePoints: [
        "Deep domain expertise in finance, trading, and industrial sectors",
        "Full-stack capabilities: from strategy to production systems",
        "Proven methodologies from enterprise environments",
        "Direct access to senior expertise on every project",
      ],
      learnMore: "Learn More",
      technologies: "Technologies",
      ctaTitle: "Let's Build Something Together",
      ctaSubtitle: "Whether you need strategic advice, a development team, or skilled engineers to augment your workforce — we're here to help.",
    },
    servicesPage: {
      heroTitle: "Our Services",
      heroSubtitle: "From strategy to implementation, from consulting to staff augmentation — complete technology solutions for your business",
      services: [
        { title: "Custom Software Development", description: "We build tailored software solutions that solve real business problems. From web applications and APIs to complex enterprise systems, we deliver production-ready software.", features: ["Full-stack Web Applications", "Backend Services & APIs", "Enterprise System Integration", "Legacy System Modernization", "DevOps & CI/CD Pipelines"] },
        { title: "Data & Analytics Platforms", description: "Modern data infrastructure that turns raw data into actionable insights. We design and build data lakes, warehouses, and analytics platforms at any scale.", features: ["Data Lake & Lakehouse Architecture", "ETL/ELT Pipeline Development", "Business Intelligence & Dashboards", "Real-time Analytics", "Data Governance & Quality"] },
        { title: "Cloud & Infrastructure", description: "Scalable, secure cloud solutions on AWS, Azure, and GCP. We architect, migrate, and optimize cloud infrastructure with Infrastructure as Code practices.", features: ["Cloud Architecture & Migration", "AWS, Azure, GCP Solutions", "Terraform & Pulumi (IaC)", "Kubernetes & Containerization", "Cost Optimization"] },
        { title: "Trading & Financial Systems", description: "Specialized solutions for capital markets and financial services. From trading platforms to risk analytics, we understand the unique requirements of the financial industry.", features: ["Trading System Development", "Market Data Processing", "Risk & Compliance Analytics", "Algorithmic Trading Support", "Regulatory Reporting Systems"] },
        { title: "Quantitative & Analytics", description: "Quantitative analysis, financial modeling, and advanced analytics. We combine domain expertise with technical skills to build sophisticated analytical solutions.", features: ["Quantitative Modeling", "Financial Analytics", "Machine Learning & AI", "Statistical Analysis", "Performance Attribution"] },
        { title: "Staff Augmentation", description: "Scale your engineering team with pre-vetted senior professionals. B2B contract model with Reverse Charge for EU clients — no employer taxes, no overhead. Rapid onboarding quickly.", features: ["Data Engineers & Architects", "Cloud & DevOps Specialists", "Databricks & Snowflake Experts", "B2B Contract Model (Reverse Charge)", "Rapid Onboarding — Days, Not Months"] },
        { title: "Industrial & Energy Solutions", description: "Technology solutions for energy, manufacturing, and industrial sectors. We understand the operational requirements of process industries.", features: ["Process Data Analytics", "IoT & Sensor Data Platforms", "Operational Intelligence", "Supply Chain Analytics", "Sustainability Reporting"] },
      ],
      howWeWork: "How We Work",
      howWeWorkSubtitle: "Flexible engagement models to match your needs",
      workModels: [
        { title: "Consulting", description: "Strategic advice, architecture reviews, and technical guidance" },
        { title: "Project Delivery", description: "End-to-end project execution with defined scope and deliverables" },
        { title: "Team Augmentation", description: "Pre-vetted senior engineers embedded into your team" },
        { title: "B2B Contracting", description: "EU Reverse Charge model — no employer taxes, clean invoicing" },
      ],
      ctaTitle: "Have a Project in Mind?",
      ctaSubtitle: "Let's discuss your requirements and find the right approach — whether that's a project engagement or scaling your team with our engineers.",
    },
    aboutPage: {
      heroTitle: "About Quent Tech",
      heroSubtitle: "Your trusted partner for technology consulting, software solutions, and engineering talent",
      ourStory: "Our Story",
      storyParagraphs: [
        "Quent Tech Ltd was founded in 2026 to bring enterprise-grade technology solutions and senior engineering talent to businesses of all sizes. With 10+ years of experience at leading financial institutions and global enterprises, we understand what it takes to build systems that scale and deliver real business value.",
        "Based in Europe with a global outlook, we deliver end-to-end technology solutions across cloud platforms (AWS, Azure, GCP), data engineering, and custom software development. We also connect companies with pre-vetted senior engineers through our staff augmentation practice.",
        "Backed by a curated network of senior engineers, we offer both project delivery and team augmentation — always with the same commitment to quality, reliability, and results.",
      ],
      companyDetails: "Company Details",
      companyName: "Quent Tech Ltd",
      registration: "HE 486705 (Cyprus)",
      founded: "January 2026",
      headquarters: "Paphos, Cyprus",
      ourValues: "Our Values",
      ourValuesSubtitle: "The principles that guide everything we do",
      values: [
        { title: "Excellence", description: "We strive for excellence in every project, delivering solutions that exceed expectations." },
        { title: "Integrity", description: "We operate with complete transparency and honesty in all our business relationships." },
        { title: "Innovation", description: "We embrace new technologies and approaches to deliver cutting-edge solutions." },
      ],
      leadership: "Leadership",
      leadershipSubtitle: "Meet the people behind Quent Tech",
      founderName: "Artem Firsov",
      founderTitle: "Founder & Principal Consultant",
      founderBio: "Technology leader with 10+ years of experience across cloud platforms, data engineering, and quantitative systems. Leads a curated network of senior engineers delivering consulting and staff augmentation services.",
      credentials: "Credentials",
      credentialsList: [
        "Certified Derivatives Trader",
        "Fixed Income Expert",
        "Oxford Algorithmic Trading Program",
        "Background at leading financial institutions",
      ],
      ctaTitle: "Let's Work Together",
      ctaSubtitle: "Ready to transform your business with technology? We'd love to hear from you.",
      getInTouch: "Get in Touch",
    },
    contactPage: {
      heroTitle: "Contact Us",
      heroSubtitle: "Ready to start your project? Get in touch and let's discuss how we can help.",
      sendMessage: "Send Us a Message",
      messageSent: "Message Sent!",
      messageSentText: "Thank you for reaching out. We'll get back to you soon.",
      sendAnother: "Send another message",
      yourName: "Your Name *",
      emailAddress: "Email Address *",
      company: "Company",
      message: "Message *",
      namePlaceholder: "John Doe",
      emailPlaceholder: "john@example.com",
      companyPlaceholder: "Your Company",
      messagePlaceholder: "Tell us about your project...",
      sendButton: "Send Message",
      sending: "Sending...",
      privacyNote: "By submitting this form, you agree to our",
      privacyPolicy: "Privacy Policy",
      getInTouch: "Get in Touch",
      email: "Email",
      registeredOffice: "Registered Office",
      workingHours: "Working Hours",
      workingHoursText: "Monday - Friday: 9:00 - 18:00 CET",
      responseTime: "We respond to all inquiries within 24 hours.",
      companyInfo: "Company Information",
      companyNameLabel: "Company Name",
      regNumber: "Registration Number",
      country: "Country",
    },
    footer: {
      description: "Professional IT consulting services helping businesses transform through technology. Based in Europe, serving clients worldwide.",
      quickLinks: "Quick Links",
      legal: "Legal",
      impressum: "Impressum",
      privacyPolicy: "Privacy Policy",
      allRightsReserved: "All rights reserved.",
    },
    cookie: {
      message: "We use cookies to improve your experience. By continuing to browse, you agree to our use of cookies.",
      accept: "Accept",
      learnMore: "Learn More",
    },
  },

  de: {
    nav: {
      home: "Startseite",
      services: "Leistungen",
      about: "Über uns",
      contact: "Kontakt",
      getStarted: "Loslegen",
    },
    home: {
      heroTitle: "Technologielösungen, die Ergebnisse liefern",
      heroSubtitle: "Spezialisierte IT-Beratung und Personalverstärkung mit tiefgreifender Expertise in den Bereichen Finanzdienstleistungen, Energie und Industrie. Wir beraten, entwickeln, besetzen und liefern.",
      startProject: "Projekt starten",
      hireEngineers: "Ingenieure einstellen",
      industriesTitle: "Branchen, die wir bedienen",
      industries: ["Finanzdienstleistungen", "Kapitalmärkte", "Energie", "Industrie", "Technologie"],
      whatWeDo: "Was wir tun",
      whatWeDoSubtitle: "Von strategischer Beratung bis zur praktischen Entwicklung – wir liefern komplette Lösungen",
      viewAllServices: "Alle Leistungen ansehen",
      services: [
        { title: "Individuelle Softwareentwicklung", description: "Ganzheitliche Entwicklung maßgeschneiderter Softwarelösungen – vom Konzept bis zur Produktionsbereitstellung." },
        { title: "Daten & Analytik", description: "Moderne Datenplattformen, Analyselösungen und Business Intelligence für fundierte Entscheidungen." },
        { title: "Cloud & Infrastruktur", description: "Skalierbare Cloud-Lösungen auf AWS, Azure und GCP. Infrastructure as Code mit Terraform und Pulumi." },
        { title: "Quantitative Lösungen", description: "Handelssysteme, Finanzanalysen und quantitative Modelle für Kapitalmärkte." },
      ],
      scaleTeamTitle: "Skalieren Sie Ihr Team mit geprüften Ingenieuren",
      scaleTeamSubtitle: "Brauchen Sie schnell Senior-Talente? Wir vermitteln Ihnen erfahrene Ingenieure, die sich nahtlos in Ihre bestehenden Arbeitsabläufe integrieren.",
      steps: [
        { title: "Briefing", description: "Teilen Sie uns Ihren Bedarf mit – Rolle, Tech-Stack und Zeitplan." },
        { title: "Matching", description: "Wir finden den richtigen Ingenieur aus unserem geprüften Netzwerk schnell." },
        { title: "Lieferung", description: "Nahtlose Integration in Ihr Team – produktiv ab dem ersten Tag." },
      ],
      availableRoles: "Verfügbare Rollen",
      roles: ["Data Engineers", "Cloud-Architekten", "Databricks- & Snowflake-Spezialisten", "DevOps-Ingenieure"],
      expertiseTitle: "Enterprise-Expertise, Boutique-Ansatz",
      expertiseSubtitle: "Mit jahrelanger Erfahrung bei führenden Finanzinstituten und globalen Unternehmen verbinden wir die technische Tiefe großer Beratungshäuser mit der Agilität und persönlichen Betreuung einer Spezialfirma.",
      expertisePoints: [
        "Tiefe Branchenexpertise in Finanz-, Handels- und Industriesektoren",
        "Full-Stack-Fähigkeiten: von der Strategie bis zu Produktionssystemen",
        "Bewährte Methoden aus Enterprise-Umgebungen",
        "Direkter Zugang zu Senior-Expertise bei jedem Projekt",
      ],
      learnMore: "Mehr erfahren",
      technologies: "Technologien",
      ctaTitle: "Lassen Sie uns gemeinsam etwas aufbauen",
      ctaSubtitle: "Ob Sie strategische Beratung, ein Entwicklungsteam oder qualifizierte Ingenieure zur Verstärkung Ihrer Belegschaft benötigen – wir sind für Sie da.",
    },
    servicesPage: {
      heroTitle: "Unsere Leistungen",
      heroSubtitle: "Von der Strategie bis zur Umsetzung, von der Beratung bis zur Personalverstärkung – komplette Technologielösungen für Ihr Unternehmen",
      services: [
        { title: "Individuelle Softwareentwicklung", description: "Wir entwickeln maßgeschneiderte Softwarelösungen, die echte Geschäftsprobleme lösen. Von Webanwendungen und APIs bis hin zu komplexen Enterprise-Systemen.", features: ["Full-Stack-Webanwendungen", "Backend-Services & APIs", "Enterprise-Systemintegration", "Legacy-Systemmodernisierung", "DevOps & CI/CD-Pipelines"] },
        { title: "Daten- & Analyseplattformen", description: "Moderne Dateninfrastruktur, die Rohdaten in umsetzbare Erkenntnisse verwandelt. Wir entwerfen und bauen Data Lakes, Warehouses und Analyseplattformen jeder Größe.", features: ["Data Lake & Lakehouse-Architektur", "ETL/ELT-Pipeline-Entwicklung", "Business Intelligence & Dashboards", "Echtzeit-Analytik", "Data Governance & Qualität"] },
        { title: "Cloud & Infrastruktur", description: "Skalierbare, sichere Cloud-Lösungen auf AWS, Azure und GCP. Wir entwerfen, migrieren und optimieren Cloud-Infrastruktur mit Infrastructure as Code.", features: ["Cloud-Architektur & Migration", "AWS-, Azure-, GCP-Lösungen", "Terraform & Pulumi (IaC)", "Kubernetes & Containerisierung", "Kostenoptimierung"] },
        { title: "Handels- & Finanzsysteme", description: "Spezialisierte Lösungen für Kapitalmärkte und Finanzdienstleistungen. Von Handelsplattformen bis zur Risikoanalyse.", features: ["Handelssystementwicklung", "Marktdatenverarbeitung", "Risiko- & Compliance-Analytik", "Algorithmischer Handelsupport", "Regulatorische Berichtssysteme"] },
        { title: "Quantitative Analyse & Analytik", description: "Quantitative Analyse, Finanzmodellierung und erweiterte Analytik. Wir verbinden Domänenexpertise mit technischen Fähigkeiten.", features: ["Quantitative Modellierung", "Finanzanalytik", "Machine Learning & KI", "Statistische Analyse", "Performance Attribution"] },
        { title: "Personalverstärkung", description: "Skalieren Sie Ihr Engineering-Team mit geprüften Senior-Fachkräften. B2B-Vertragsmodell mit Reverse Charge für EU-Kunden – keine Arbeitgebersteuern, kein Overhead.", features: ["Data Engineers & Architekten", "Cloud- & DevOps-Spezialisten", "Databricks- & Snowflake-Experten", "B2B-Vertragsmodell (Reverse Charge)", "Schnelles Onboarding — Tage, nicht Monate"] },
        { title: "Industrie- & Energielösungen", description: "Technologielösungen für Energie, Fertigung und Industrie. Wir verstehen die operativen Anforderungen der Prozessindustrie.", features: ["Prozessdatenanalytik", "IoT- & Sensordatenplattformen", "Operative Intelligenz", "Lieferkettenanalytik", "Nachhaltigkeitsberichterstattung"] },
      ],
      howWeWork: "Wie wir arbeiten",
      howWeWorkSubtitle: "Flexible Engagement-Modelle passend zu Ihren Bedürfnissen",
      workModels: [
        { title: "Beratung", description: "Strategische Beratung, Architektur-Reviews und technische Führung" },
        { title: "Projektlieferung", description: "End-to-End-Projektdurchführung mit definiertem Umfang und Ergebnissen" },
        { title: "Teamverstärkung", description: "Geprüfte Senior-Ingenieure eingebettet in Ihr Team" },
        { title: "B2B-Verträge", description: "EU-Reverse-Charge-Modell – keine Arbeitgebersteuern, saubere Rechnungsstellung" },
      ],
      ctaTitle: "Haben Sie ein Projekt im Sinn?",
      ctaSubtitle: "Besprechen wir Ihre Anforderungen und finden den richtigen Ansatz – ob Projektengagement oder Teamverstärkung.",
    },
    aboutPage: {
      heroTitle: "Über Quent Tech",
      heroSubtitle: "Ihr vertrauenswürdiger Partner für Technologieberatung, Softwarelösungen und Engineering-Talente",
      ourStory: "Unsere Geschichte",
      storyParagraphs: [
        "Quent Tech Ltd wurde 2026 gegründet, um Enterprise-Technologielösungen und Senior-Engineering-Talente für Unternehmen jeder Größe bereitzustellen. Mit über 10 Jahren Erfahrung bei führenden Finanzinstituten und globalen Unternehmen wissen wir, was nötig ist, um skalierbare Systeme zu bauen, die echten Geschäftswert liefern.",
        "Mit Sitz in Europa und globalem Ausblick liefern wir End-to-End-Technologielösungen über Cloud-Plattformen (AWS, Azure, GCP), Data Engineering und individuelle Softwareentwicklung. Wir verbinden Unternehmen auch mit geprüften Senior-Ingenieuren durch unsere Personalverstärkung.",
        "Unterstützt durch ein kuratiertes Netzwerk von Senior-Ingenieuren bieten wir sowohl Projektlieferung als auch Teamverstärkung – immer mit dem gleichen Engagement für Qualität, Zuverlässigkeit und Ergebnisse.",
      ],
      companyDetails: "Unternehmensdetails",
      companyName: "Quent Tech Ltd",
      registration: "HE 486705 (Zypern)",
      founded: "Januar 2026",
      headquarters: "Paphos, Zypern",
      ourValues: "Unsere Werte",
      ourValuesSubtitle: "Die Prinzipien, die alles leiten, was wir tun",
      values: [
        { title: "Exzellenz", description: "Wir streben nach Exzellenz in jedem Projekt und liefern Lösungen, die Erwartungen übertreffen." },
        { title: "Integrität", description: "Wir arbeiten mit vollständiger Transparenz und Ehrlichkeit in allen Geschäftsbeziehungen." },
        { title: "Innovation", description: "Wir setzen auf neue Technologien und Ansätze, um zukunftsweisende Lösungen zu liefern." },
      ],
      leadership: "Führung",
      leadershipSubtitle: "Lernen Sie die Menschen hinter Quent Tech kennen",
      founderName: "Artem Firsov",
      founderTitle: "Gründer & Leitender Berater",
      founderBio: "Technologieführer mit über 10 Jahren Erfahrung in Cloud-Plattformen, Data Engineering und quantitativen Systemen. Leitet ein kuratiertes Netzwerk von Senior-Ingenieuren für Beratung und Personalverstärkung.",
      credentials: "Qualifikationen",
      credentialsList: [
        "Zertifizierter Derivatehändler",
        "Experte für festverzinsliche Wertpapiere",
        "Oxford Algorithmic Trading Programm",
        "Erfahrung bei führenden Finanzinstituten",
      ],
      ctaTitle: "Lassen Sie uns zusammenarbeiten",
      ctaSubtitle: "Bereit, Ihr Unternehmen mit Technologie zu transformieren? Wir freuen uns auf Ihre Nachricht.",
      getInTouch: "Kontakt aufnehmen",
    },
    contactPage: {
      heroTitle: "Kontaktieren Sie uns",
      heroSubtitle: "Bereit, Ihr Projekt zu starten? Nehmen Sie Kontakt auf und besprechen wir, wie wir helfen können.",
      sendMessage: "Nachricht senden",
      messageSent: "Nachricht gesendet!",
      messageSentText: "Vielen Dank für Ihre Nachricht. Wir melden uns bald bei Ihnen.",
      sendAnother: "Weitere Nachricht senden",
      yourName: "Ihr Name *",
      emailAddress: "E-Mail-Adresse *",
      company: "Unternehmen",
      message: "Nachricht *",
      namePlaceholder: "Max Mustermann",
      emailPlaceholder: "max@beispiel.de",
      companyPlaceholder: "Ihr Unternehmen",
      messagePlaceholder: "Erzählen Sie uns von Ihrem Projekt...",
      sendButton: "Nachricht senden",
      sending: "Wird gesendet...",
      privacyNote: "Mit dem Absenden dieses Formulars stimmen Sie unserer",
      privacyPolicy: "Datenschutzerklärung",
      getInTouch: "Kontakt aufnehmen",
      email: "E-Mail",
      registeredOffice: "Firmensitz",
      workingHours: "Geschäftszeiten",
      workingHoursText: "Montag - Freitag: 9:00 - 18:00 MEZ",
      responseTime: "Wir antworten auf alle Anfragen innerhalb von 24 Stunden.",
      companyInfo: "Unternehmensinformationen",
      companyNameLabel: "Firmenname",
      regNumber: "Registrierungsnummer",
      country: "Land",
    },
    footer: {
      description: "Professionelle IT-Beratungsdienstleistungen, die Unternehmen bei der digitalen Transformation unterstützen. In Europa ansässig, weltweit tätig.",
      quickLinks: "Schnelllinks",
      legal: "Rechtliches",
      impressum: "Impressum",
      privacyPolicy: "Datenschutzerklärung",
      allRightsReserved: "Alle Rechte vorbehalten.",
    },
    cookie: {
      message: "Wir verwenden Cookies, um Ihre Erfahrung zu verbessern. Durch die weitere Nutzung stimmen Sie der Verwendung von Cookies zu.",
      accept: "Akzeptieren",
      learnMore: "Mehr erfahren",
    },
  },

  fr: {
    nav: {
      home: "Accueil",
      services: "Services",
      about: "À propos",
      contact: "Contact",
      getStarted: "Commencer",
    },
    home: {
      heroTitle: "Des solutions technologiques qui produisent des résultats",
      heroSubtitle: "Cabinet de conseil IT et renforcement d'équipe avec une expertise approfondie dans les services financiers, l'énergie et l'industrie. Nous conseillons, construisons, recrutons et livrons.",
      startProject: "Démarrer un projet",
      hireEngineers: "Recruter des ingénieurs",
      industriesTitle: "Secteurs que nous servons",
      industries: ["Services financiers", "Marchés des capitaux", "Énergie", "Industrie", "Technologie"],
      whatWeDo: "Ce que nous faisons",
      whatWeDoSubtitle: "Du conseil stratégique au développement pratique – nous livrons des solutions complètes",
      viewAllServices: "Voir tous les services",
      services: [
        { title: "Développement logiciel sur mesure", description: "Développement complet de solutions logicielles personnalisées – du concept au déploiement en production." },
        { title: "Données & Analytique", description: "Plateformes de données modernes, solutions analytiques et intelligence d'affaires pour des décisions éclairées." },
        { title: "Cloud & Infrastructure", description: "Solutions cloud évolutives sur AWS, Azure et GCP. Infrastructure as Code avec Terraform et Pulumi." },
        { title: "Solutions quantitatives", description: "Systèmes de trading, analyses financières et modèles quantitatifs pour les marchés des capitaux." },
      ],
      scaleTeamTitle: "Renforcez votre équipe avec des ingénieurs qualifiés",
      scaleTeamSubtitle: "Besoin de talents seniors rapidement ? Nous vous mettons en relation avec des ingénieurs expérimentés qui s'intègrent parfaitement à vos processus existants.",
      steps: [
        { title: "Brief", description: "Dites-nous ce dont vous avez besoin – rôle, stack technique et calendrier." },
        { title: "Matching", description: "Nous trouvons le bon ingénieur dans notre réseau vérifié rapidement." },
        { title: "Livraison", description: "Intégration transparente dans votre équipe – productif dès le premier jour." },
      ],
      availableRoles: "Rôles disponibles",
      roles: ["Data Engineers", "Architectes Cloud", "Spécialistes Databricks & Snowflake", "Ingénieurs DevOps"],
      expertiseTitle: "Expertise entreprise, approche boutique",
      expertiseSubtitle: "Avec des années d'expérience dans les grandes institutions financières et entreprises mondiales, nous apportons la profondeur technique des grands cabinets de conseil avec l'agilité d'une firme spécialisée.",
      expertisePoints: [
        "Expertise sectorielle approfondie en finance, trading et industrie",
        "Capacités full-stack : de la stratégie aux systèmes de production",
        "Méthodologies éprouvées issues d'environnements enterprise",
        "Accès direct à l'expertise senior sur chaque projet",
      ],
      learnMore: "En savoir plus",
      technologies: "Technologies",
      ctaTitle: "Construisons ensemble",
      ctaSubtitle: "Que vous ayez besoin de conseils stratégiques, d'une équipe de développement ou d'ingénieurs qualifiés – nous sommes là pour vous aider.",
    },
    servicesPage: {
      heroTitle: "Nos services",
      heroSubtitle: "De la stratégie à la mise en œuvre, du conseil au renforcement d'équipe – des solutions technologiques complètes pour votre entreprise",
      services: [
        { title: "Développement logiciel sur mesure", description: "Nous créons des solutions logicielles personnalisées qui résolvent de vrais problèmes métier.", features: ["Applications Web Full-Stack", "Services Backend & APIs", "Intégration de systèmes d'entreprise", "Modernisation de systèmes existants", "DevOps & Pipelines CI/CD"] },
        { title: "Plateformes de données & analytique", description: "Infrastructure de données moderne qui transforme les données brutes en informations exploitables.", features: ["Architecture Data Lake & Lakehouse", "Développement de pipelines ETL/ELT", "Business Intelligence & Tableaux de bord", "Analytique en temps réel", "Gouvernance & Qualité des données"] },
        { title: "Cloud & Infrastructure", description: "Solutions cloud évolutives et sécurisées sur AWS, Azure et GCP.", features: ["Architecture & Migration Cloud", "Solutions AWS, Azure, GCP", "Terraform & Pulumi (IaC)", "Kubernetes & Conteneurisation", "Optimisation des coûts"] },
        { title: "Systèmes de trading & financiers", description: "Solutions spécialisées pour les marchés des capitaux et les services financiers.", features: ["Développement de systèmes de trading", "Traitement des données de marché", "Analytique risque & conformité", "Support de trading algorithmique", "Systèmes de reporting réglementaire"] },
        { title: "Quantitatif & Analytique", description: "Analyse quantitative, modélisation financière et analytique avancée.", features: ["Modélisation quantitative", "Analytique financière", "Machine Learning & IA", "Analyse statistique", "Attribution de performance"] },
        { title: "Renforcement d'équipe", description: "Renforcez votre équipe d'ingénierie avec des professionnels seniors vérifiés. Modèle B2B avec autoliquidation pour les clients UE.", features: ["Data Engineers & Architectes", "Spécialistes Cloud & DevOps", "Experts Databricks & Snowflake", "Modèle B2B (Autoliquidation)", "Intégration rapide — en jours, pas en mois"] },
        { title: "Solutions industrielles & énergie", description: "Solutions technologiques pour l'énergie, la fabrication et l'industrie.", features: ["Analytique de données de processus", "Plateformes IoT & données de capteurs", "Intelligence opérationnelle", "Analytique de la chaîne d'approvisionnement", "Reporting de durabilité"] },
      ],
      howWeWork: "Comment nous travaillons",
      howWeWorkSubtitle: "Des modèles d'engagement flexibles adaptés à vos besoins",
      workModels: [
        { title: "Conseil", description: "Conseil stratégique, revues d'architecture et guidance technique" },
        { title: "Livraison de projet", description: "Exécution de projet de bout en bout avec périmètre et livrables définis" },
        { title: "Renforcement d'équipe", description: "Ingénieurs seniors vérifiés intégrés à votre équipe" },
        { title: "Contrats B2B", description: "Modèle d'autoliquidation UE – pas de charges patronales, facturation claire" },
      ],
      ctaTitle: "Vous avez un projet en tête ?",
      ctaSubtitle: "Discutons de vos besoins et trouvons la bonne approche – projet ou renforcement d'équipe.",
    },
    aboutPage: {
      heroTitle: "À propos de Quent Tech",
      heroSubtitle: "Votre partenaire de confiance pour le conseil technologique, les solutions logicielles et les talents en ingénierie",
      ourStory: "Notre histoire",
      storyParagraphs: [
        "Quent Tech Ltd a été fondée en 2026 pour apporter des solutions technologiques de niveau entreprise et des talents d'ingénierie senior aux entreprises de toutes tailles. Avec plus de 10 ans d'expérience dans les grandes institutions financières, nous savons ce qu'il faut pour construire des systèmes évolutifs.",
        "Basée en Europe avec une vision mondiale, nous livrons des solutions technologiques complètes sur les plateformes cloud (AWS, Azure, GCP), le data engineering et le développement logiciel sur mesure.",
        "Soutenue par un réseau sélectionné d'ingénieurs seniors, nous offrons à la fois la livraison de projets et le renforcement d'équipe — toujours avec le même engagement envers la qualité et les résultats.",
      ],
      companyDetails: "Détails de l'entreprise",
      companyName: "Quent Tech Ltd",
      registration: "HE 486705 (Chypre)",
      founded: "Janvier 2026",
      headquarters: "Paphos, Chypre",
      ourValues: "Nos valeurs",
      ourValuesSubtitle: "Les principes qui guident tout ce que nous faisons",
      values: [
        { title: "Excellence", description: "Nous visons l'excellence dans chaque projet, en livrant des solutions qui dépassent les attentes." },
        { title: "Intégrité", description: "Nous opérons avec une transparence et une honnêteté totales dans toutes nos relations d'affaires." },
        { title: "Innovation", description: "Nous adoptons les nouvelles technologies et approches pour livrer des solutions de pointe." },
      ],
      leadership: "Direction",
      leadershipSubtitle: "Découvrez les personnes derrière Quent Tech",
      founderName: "Artem Firsov",
      founderTitle: "Fondateur & Consultant principal",
      founderBio: "Leader technologique avec plus de 10 ans d'expérience dans les plateformes cloud, le data engineering et les systèmes quantitatifs.",
      credentials: "Qualifications",
      credentialsList: [
        "Trader en produits dérivés certifié",
        "Expert en titres à revenu fixe",
        "Programme Oxford Algorithmic Trading",
        "Expérience dans les grandes institutions financières",
      ],
      ctaTitle: "Travaillons ensemble",
      ctaSubtitle: "Prêt à transformer votre entreprise avec la technologie ? Nous serions ravis d'échanger avec vous.",
      getInTouch: "Nous contacter",
    },
    contactPage: {
      heroTitle: "Contactez-nous",
      heroSubtitle: "Prêt à démarrer votre projet ? Contactez-nous et discutons de la façon dont nous pouvons vous aider.",
      sendMessage: "Envoyez-nous un message",
      messageSent: "Message envoyé !",
      messageSentText: "Merci de nous avoir contactés. Nous vous répondrons bientôt.",
      sendAnother: "Envoyer un autre message",
      yourName: "Votre nom *",
      emailAddress: "Adresse e-mail *",
      company: "Entreprise",
      message: "Message *",
      namePlaceholder: "Jean Dupont",
      emailPlaceholder: "jean@exemple.fr",
      companyPlaceholder: "Votre entreprise",
      messagePlaceholder: "Parlez-nous de votre projet...",
      sendButton: "Envoyer le message",
      sending: "Envoi en cours...",
      privacyNote: "En soumettant ce formulaire, vous acceptez notre",
      privacyPolicy: "Politique de confidentialité",
      getInTouch: "Nous contacter",
      email: "E-mail",
      registeredOffice: "Siège social",
      workingHours: "Heures de travail",
      workingHoursText: "Lundi - Vendredi : 9h00 - 18h00 CET",
      responseTime: "Nous répondons à toutes les demandes sous 24 heures.",
      companyInfo: "Informations sur l'entreprise",
      companyNameLabel: "Nom de l'entreprise",
      regNumber: "Numéro d'enregistrement",
      country: "Pays",
    },
    footer: {
      description: "Services professionnels de conseil IT aidant les entreprises à se transformer grâce à la technologie. Basée en Europe, au service de clients dans le monde entier.",
      quickLinks: "Liens rapides",
      legal: "Mentions légales",
      impressum: "Mentions légales",
      privacyPolicy: "Politique de confidentialité",
      allRightsReserved: "Tous droits réservés.",
    },
    cookie: {
      message: "Nous utilisons des cookies pour améliorer votre expérience. En continuant à naviguer, vous acceptez notre utilisation des cookies.",
      accept: "Accepter",
      learnMore: "En savoir plus",
    },
  },

  es: {
    nav: {
      home: "Inicio",
      services: "Servicios",
      about: "Nosotros",
      contact: "Contacto",
      getStarted: "Empezar",
    },
    home: {
      heroTitle: "Soluciones tecnológicas que generan resultados",
      heroSubtitle: "Consultoría IT especializada y refuerzo de equipos con profunda experiencia en servicios financieros, energía e industria. Asesoramos, construimos, dotamos de personal y entregamos.",
      startProject: "Iniciar proyecto",
      hireEngineers: "Contratar ingenieros",
      industriesTitle: "Industrias que atendemos",
      industries: ["Servicios financieros", "Mercados de capitales", "Energía", "Industria", "Tecnología"],
      whatWeDo: "Lo que hacemos",
      whatWeDoSubtitle: "Desde consultoría estratégica hasta desarrollo práctico – entregamos soluciones completas",
      viewAllServices: "Ver todos los servicios",
      services: [
        { title: "Desarrollo de software a medida", description: "Desarrollo integral de soluciones de software personalizadas – desde el concepto hasta el despliegue en producción." },
        { title: "Datos y analítica", description: "Plataformas de datos modernas, soluciones analíticas e inteligencia empresarial para tomar mejores decisiones." },
        { title: "Cloud e infraestructura", description: "Soluciones cloud escalables en AWS, Azure y GCP. Infrastructure as Code con Terraform y Pulumi." },
        { title: "Soluciones cuantitativas", description: "Sistemas de trading, análisis financiero y modelos cuantitativos para mercados de capitales." },
      ],
      scaleTeamTitle: "Escale su equipo con ingenieros verificados",
      scaleTeamSubtitle: "¿Necesita talento senior rápidamente? Le conectamos con ingenieros experimentados que se integran perfectamente en sus flujos de trabajo existentes.",
      steps: [
        { title: "Brief", description: "Cuéntenos lo que necesita – rol, stack tecnológico y cronograma." },
        { title: "Match", description: "Encontramos al ingeniero adecuado de nuestra red verificada rápidamente." },
        { title: "Entrega", description: "Integración perfecta en su equipo – productivo desde el primer día." },
      ],
      availableRoles: "Roles disponibles",
      roles: ["Data Engineers", "Arquitectos Cloud", "Especialistas en Databricks y Snowflake", "Ingenieros DevOps"],
      expertiseTitle: "Experiencia empresarial, enfoque boutique",
      expertiseSubtitle: "Con años de experiencia en instituciones financieras líderes y empresas globales, aportamos la profundidad técnica de grandes consultoras con la agilidad de una firma especializada.",
      expertisePoints: [
        "Profunda experiencia sectorial en finanzas, trading e industria",
        "Capacidades full-stack: de la estrategia a los sistemas de producción",
        "Metodologías probadas de entornos empresariales",
        "Acceso directo a experiencia senior en cada proyecto",
      ],
      learnMore: "Más información",
      technologies: "Tecnologías",
      ctaTitle: "Construyamos algo juntos",
      ctaSubtitle: "Ya sea que necesite asesoramiento estratégico, un equipo de desarrollo o ingenieros cualificados – estamos aquí para ayudar.",
    },
    servicesPage: {
      heroTitle: "Nuestros servicios",
      heroSubtitle: "De la estrategia a la implementación, de la consultoría al refuerzo de equipos – soluciones tecnológicas completas para su empresa",
      services: [
        { title: "Desarrollo de software a medida", description: "Creamos soluciones de software personalizadas que resuelven problemas reales de negocio.", features: ["Aplicaciones web full-stack", "Servicios backend y APIs", "Integración de sistemas empresariales", "Modernización de sistemas legacy", "DevOps y pipelines CI/CD"] },
        { title: "Plataformas de datos y analítica", description: "Infraestructura de datos moderna que transforma datos brutos en información accionable.", features: ["Arquitectura Data Lake y Lakehouse", "Desarrollo de pipelines ETL/ELT", "Business Intelligence y dashboards", "Analítica en tiempo real", "Gobernanza y calidad de datos"] },
        { title: "Cloud e infraestructura", description: "Soluciones cloud escalables y seguras en AWS, Azure y GCP.", features: ["Arquitectura y migración cloud", "Soluciones AWS, Azure, GCP", "Terraform y Pulumi (IaC)", "Kubernetes y contenedores", "Optimización de costes"] },
        { title: "Sistemas de trading y financieros", description: "Soluciones especializadas para mercados de capitales y servicios financieros.", features: ["Desarrollo de sistemas de trading", "Procesamiento de datos de mercado", "Analítica de riesgo y cumplimiento", "Soporte de trading algorítmico", "Sistemas de reporting regulatorio"] },
        { title: "Cuantitativo y analítica", description: "Análisis cuantitativo, modelado financiero y analítica avanzada.", features: ["Modelado cuantitativo", "Analítica financiera", "Machine Learning e IA", "Análisis estadístico", "Atribución de rendimiento"] },
        { title: "Refuerzo de equipos", description: "Escale su equipo de ingeniería con profesionales senior verificados. Modelo B2B con inversión del sujeto pasivo para clientes UE.", features: ["Data Engineers y arquitectos", "Especialistas Cloud y DevOps", "Expertos en Databricks y Snowflake", "Modelo B2B (inversión del sujeto pasivo)", "Incorporación rápida — días, no meses"] },
        { title: "Soluciones industriales y energéticas", description: "Soluciones tecnológicas para energía, fabricación e industria.", features: ["Analítica de datos de procesos", "Plataformas IoT y datos de sensores", "Inteligencia operativa", "Analítica de cadena de suministro", "Reporting de sostenibilidad"] },
      ],
      howWeWork: "Cómo trabajamos",
      howWeWorkSubtitle: "Modelos de colaboración flexibles adaptados a sus necesidades",
      workModels: [
        { title: "Consultoría", description: "Asesoramiento estratégico, revisiones de arquitectura y orientación técnica" },
        { title: "Entrega de proyectos", description: "Ejecución de proyectos de principio a fin con alcance y entregables definidos" },
        { title: "Refuerzo de equipo", description: "Ingenieros senior verificados integrados en su equipo" },
        { title: "Contratos B2B", description: "Modelo de inversión del sujeto pasivo UE – sin impuestos patronales, facturación limpia" },
      ],
      ctaTitle: "¿Tiene un proyecto en mente?",
      ctaSubtitle: "Hablemos de sus necesidades y encontremos el enfoque adecuado – ya sea un proyecto o refuerzo de equipo.",
    },
    aboutPage: {
      heroTitle: "Sobre Quent Tech",
      heroSubtitle: "Su socio de confianza para consultoría tecnológica, soluciones de software y talento de ingeniería",
      ourStory: "Nuestra historia",
      storyParagraphs: [
        "Quent Tech Ltd fue fundada en 2026 para acercar soluciones tecnológicas de nivel empresarial y talento de ingeniería senior a empresas de todos los tamaños. Con más de 10 años de experiencia en instituciones financieras líderes, sabemos lo que se necesita para construir sistemas escalables.",
        "Con sede en Europa y visión global, ofrecemos soluciones tecnológicas completas en plataformas cloud (AWS, Azure, GCP), ingeniería de datos y desarrollo de software a medida.",
        "Respaldada por una red seleccionada de ingenieros senior, ofrecemos tanto entrega de proyectos como refuerzo de equipos – siempre con el mismo compromiso con la calidad y los resultados.",
      ],
      companyDetails: "Datos de la empresa",
      companyName: "Quent Tech Ltd",
      registration: "HE 486705 (Chipre)",
      founded: "Enero de 2026",
      headquarters: "Paphos, Chipre",
      ourValues: "Nuestros valores",
      ourValuesSubtitle: "Los principios que guían todo lo que hacemos",
      values: [
        { title: "Excelencia", description: "Buscamos la excelencia en cada proyecto, entregando soluciones que superan las expectativas." },
        { title: "Integridad", description: "Operamos con total transparencia y honestidad en todas nuestras relaciones comerciales." },
        { title: "Innovación", description: "Adoptamos nuevas tecnologías y enfoques para entregar soluciones de vanguardia." },
      ],
      leadership: "Liderazgo",
      leadershipSubtitle: "Conozca a las personas detrás de Quent Tech",
      founderName: "Artem Firsov",
      founderTitle: "Fundador y consultor principal",
      founderBio: "Líder tecnológico con más de 10 años de experiencia en plataformas cloud, ingeniería de datos y sistemas cuantitativos.",
      credentials: "Credenciales",
      credentialsList: [
        "Trader de derivados certificado",
        "Experto en renta fija",
        "Programa Oxford Algorithmic Trading",
        "Experiencia en instituciones financieras líderes",
      ],
      ctaTitle: "Trabajemos juntos",
      ctaSubtitle: "¿Listo para transformar su empresa con tecnología? Nos encantaría saber de usted.",
      getInTouch: "Contactar",
    },
    contactPage: {
      heroTitle: "Contáctenos",
      heroSubtitle: "¿Listo para iniciar su proyecto? Póngase en contacto y hablemos de cómo podemos ayudar.",
      sendMessage: "Envíenos un mensaje",
      messageSent: "¡Mensaje enviado!",
      messageSentText: "Gracias por contactarnos. Le responderemos pronto.",
      sendAnother: "Enviar otro mensaje",
      yourName: "Su nombre *",
      emailAddress: "Correo electrónico *",
      company: "Empresa",
      message: "Mensaje *",
      namePlaceholder: "Juan García",
      emailPlaceholder: "juan@ejemplo.es",
      companyPlaceholder: "Su empresa",
      messagePlaceholder: "Cuéntenos sobre su proyecto...",
      sendButton: "Enviar mensaje",
      sending: "Enviando...",
      privacyNote: "Al enviar este formulario, acepta nuestra",
      privacyPolicy: "Política de privacidad",
      getInTouch: "Contactar",
      email: "Correo electrónico",
      registeredOffice: "Domicilio social",
      workingHours: "Horario",
      workingHoursText: "Lunes - Viernes: 9:00 - 18:00 CET",
      responseTime: "Respondemos a todas las consultas en 24 horas.",
      companyInfo: "Información de la empresa",
      companyNameLabel: "Nombre de la empresa",
      regNumber: "Número de registro",
      country: "País",
    },
    footer: {
      description: "Servicios profesionales de consultoría IT que ayudan a las empresas a transformarse a través de la tecnología. Con sede en Europa, sirviendo a clientes en todo el mundo.",
      quickLinks: "Enlaces rápidos",
      legal: "Legal",
      impressum: "Aviso legal",
      privacyPolicy: "Política de privacidad",
      allRightsReserved: "Todos los derechos reservados.",
    },
    cookie: {
      message: "Utilizamos cookies para mejorar su experiencia. Al continuar navegando, acepta nuestro uso de cookies.",
      accept: "Aceptar",
      learnMore: "Más información",
    },
  },

  it: {
    nav: {
      home: "Home",
      services: "Servizi",
      about: "Chi siamo",
      contact: "Contatti",
      getStarted: "Inizia",
    },
    home: {
      heroTitle: "Soluzioni tecnologiche che producono risultati",
      heroSubtitle: "Consulenza IT specializzata e potenziamento del team con profonda competenza nei servizi finanziari, energia e industria. Consultiamo, costruiamo, forniamo personale e consegniamo.",
      startProject: "Avvia un progetto",
      hireEngineers: "Assumi ingegneri",
      industriesTitle: "Settori che serviamo",
      industries: ["Servizi finanziari", "Mercati dei capitali", "Energia", "Industria", "Tecnologia"],
      whatWeDo: "Cosa facciamo",
      whatWeDoSubtitle: "Dalla consulenza strategica allo sviluppo pratico – forniamo soluzioni complete",
      viewAllServices: "Vedi tutti i servizi",
      services: [
        { title: "Sviluppo software personalizzato", description: "Sviluppo completo di soluzioni software su misura – dal concetto al deployment in produzione." },
        { title: "Dati e analisi", description: "Piattaforme dati moderne, soluzioni analitiche e business intelligence per decisioni informate." },
        { title: "Cloud e infrastruttura", description: "Soluzioni cloud scalabili su AWS, Azure e GCP. Infrastructure as Code con Terraform e Pulumi." },
        { title: "Soluzioni quantitative", description: "Sistemi di trading, analisi finanziarie e modelli quantitativi per i mercati dei capitali." },
      ],
      scaleTeamTitle: "Potenzia il tuo team con ingegneri verificati",
      scaleTeamSubtitle: "Hai bisogno di talenti senior rapidamente? Ti mettiamo in contatto con ingegneri esperti che si integrano perfettamente nei tuoi flussi di lavoro.",
      steps: [
        { title: "Brief", description: "Dicci di cosa hai bisogno – ruolo, stack tecnologico e tempistiche." },
        { title: "Match", description: "Troviamo l'ingegnere giusto dalla nostra rete verificata rapidamente." },
        { title: "Consegna", description: "Integrazione perfetta nel tuo team – produttivo dal primo giorno." },
      ],
      availableRoles: "Ruoli disponibili",
      roles: ["Data Engineers", "Architetti Cloud", "Specialisti Databricks e Snowflake", "Ingegneri DevOps"],
      expertiseTitle: "Competenza enterprise, approccio boutique",
      expertiseSubtitle: "Con anni di esperienza nelle principali istituzioni finanziarie e imprese globali, portiamo la profondità tecnica delle grandi società di consulenza con l'agilità di una firma specializzata.",
      expertisePoints: [
        "Profonda competenza settoriale in finanza, trading e industria",
        "Capacità full-stack: dalla strategia ai sistemi di produzione",
        "Metodologie collaudate da ambienti enterprise",
        "Accesso diretto a competenze senior in ogni progetto",
      ],
      learnMore: "Scopri di più",
      technologies: "Tecnologie",
      ctaTitle: "Costruiamo qualcosa insieme",
      ctaSubtitle: "Che tu abbia bisogno di consulenza strategica, un team di sviluppo o ingegneri qualificati – siamo qui per aiutarti.",
    },
    servicesPage: {
      heroTitle: "I nostri servizi",
      heroSubtitle: "Dalla strategia all'implementazione, dalla consulenza al potenziamento del team – soluzioni tecnologiche complete per la tua azienda",
      services: [
        { title: "Sviluppo software personalizzato", description: "Creiamo soluzioni software su misura che risolvono problemi aziendali reali.", features: ["Applicazioni web full-stack", "Servizi backend e API", "Integrazione di sistemi aziendali", "Modernizzazione di sistemi legacy", "DevOps e pipeline CI/CD"] },
        { title: "Piattaforme dati e analisi", description: "Infrastruttura dati moderna che trasforma dati grezzi in informazioni utilizzabili.", features: ["Architettura Data Lake e Lakehouse", "Sviluppo pipeline ETL/ELT", "Business Intelligence e dashboard", "Analisi in tempo reale", "Governance e qualità dei dati"] },
        { title: "Cloud e infrastruttura", description: "Soluzioni cloud scalabili e sicure su AWS, Azure e GCP.", features: ["Architettura e migrazione cloud", "Soluzioni AWS, Azure, GCP", "Terraform e Pulumi (IaC)", "Kubernetes e containerizzazione", "Ottimizzazione dei costi"] },
        { title: "Sistemi di trading e finanziari", description: "Soluzioni specializzate per mercati dei capitali e servizi finanziari.", features: ["Sviluppo sistemi di trading", "Elaborazione dati di mercato", "Analisi rischio e conformità", "Supporto trading algoritmico", "Sistemi di reporting normativo"] },
        { title: "Quantitativo e analisi", description: "Analisi quantitativa, modellazione finanziaria e analisi avanzata.", features: ["Modellazione quantitativa", "Analisi finanziaria", "Machine Learning e IA", "Analisi statistica", "Attribuzione della performance"] },
        { title: "Potenziamento del team", description: "Potenzia il tuo team di ingegneria con professionisti senior verificati. Modello B2B con reverse charge per clienti UE.", features: ["Data Engineers e architetti", "Specialisti Cloud e DevOps", "Esperti Databricks e Snowflake", "Modello B2B (Reverse Charge)", "Onboarding rapido — giorni, non mesi"] },
        { title: "Soluzioni industriali ed energetiche", description: "Soluzioni tecnologiche per energia, manifattura e industria.", features: ["Analisi dati di processo", "Piattaforme IoT e dati sensori", "Intelligenza operativa", "Analisi della catena di fornitura", "Reporting di sostenibilità"] },
      ],
      howWeWork: "Come lavoriamo",
      howWeWorkSubtitle: "Modelli di collaborazione flessibili adattati alle tue esigenze",
      workModels: [
        { title: "Consulenza", description: "Consulenza strategica, revisioni architetturali e guida tecnica" },
        { title: "Consegna progetti", description: "Esecuzione di progetti end-to-end con ambito e deliverable definiti" },
        { title: "Potenziamento team", description: "Ingegneri senior verificati integrati nel tuo team" },
        { title: "Contratti B2B", description: "Modello reverse charge UE – nessuna tassa sul datore di lavoro, fatturazione pulita" },
      ],
      ctaTitle: "Hai un progetto in mente?",
      ctaSubtitle: "Discutiamo le tue esigenze e troviamo l'approccio giusto – progetto o potenziamento del team.",
    },
    aboutPage: {
      heroTitle: "Chi è Quent Tech",
      heroSubtitle: "Il tuo partner di fiducia per consulenza tecnologica, soluzioni software e talenti di ingegneria",
      ourStory: "La nostra storia",
      storyParagraphs: [
        "Quent Tech Ltd è stata fondata nel 2026 per portare soluzioni tecnologiche di livello enterprise e talenti di ingegneria senior ad aziende di ogni dimensione. Con oltre 10 anni di esperienza nelle principali istituzioni finanziarie, sappiamo cosa serve per costruire sistemi scalabili.",
        "Con sede in Europa e visione globale, forniamo soluzioni tecnologiche complete su piattaforme cloud (AWS, Azure, GCP), data engineering e sviluppo software personalizzato.",
        "Supportata da una rete selezionata di ingegneri senior, offriamo sia la consegna di progetti che il potenziamento del team – sempre con lo stesso impegno per qualità e risultati.",
      ],
      companyDetails: "Dettagli aziendali",
      companyName: "Quent Tech Ltd",
      registration: "HE 486705 (Cipro)",
      founded: "Gennaio 2026",
      headquarters: "Paphos, Cipro",
      ourValues: "I nostri valori",
      ourValuesSubtitle: "I principi che guidano tutto ciò che facciamo",
      values: [
        { title: "Eccellenza", description: "Puntiamo all'eccellenza in ogni progetto, fornendo soluzioni che superano le aspettative." },
        { title: "Integrità", description: "Operiamo con completa trasparenza e onestà in tutte le nostre relazioni d'affari." },
        { title: "Innovazione", description: "Abbracciamo nuove tecnologie e approcci per fornire soluzioni all'avanguardia." },
      ],
      leadership: "Leadership",
      leadershipSubtitle: "Scopri le persone dietro Quent Tech",
      founderName: "Artem Firsov",
      founderTitle: "Fondatore e consulente principale",
      founderBio: "Leader tecnologico con oltre 10 anni di esperienza in piattaforme cloud, data engineering e sistemi quantitativi.",
      credentials: "Credenziali",
      credentialsList: [
        "Trader di derivati certificato",
        "Esperto in reddito fisso",
        "Programma Oxford Algorithmic Trading",
        "Esperienza nelle principali istituzioni finanziarie",
      ],
      ctaTitle: "Lavoriamo insieme",
      ctaSubtitle: "Pronto a trasformare la tua azienda con la tecnologia? Ci piacerebbe sentirti.",
      getInTouch: "Contattaci",
    },
    contactPage: {
      heroTitle: "Contattaci",
      heroSubtitle: "Pronto a iniziare il tuo progetto? Contattaci e discutiamo di come possiamo aiutarti.",
      sendMessage: "Inviaci un messaggio",
      messageSent: "Messaggio inviato!",
      messageSentText: "Grazie per averci contattato. Ti risponderemo presto.",
      sendAnother: "Invia un altro messaggio",
      yourName: "Il tuo nome *",
      emailAddress: "Indirizzo email *",
      company: "Azienda",
      message: "Messaggio *",
      namePlaceholder: "Mario Rossi",
      emailPlaceholder: "mario@esempio.it",
      companyPlaceholder: "La tua azienda",
      messagePlaceholder: "Parlaci del tuo progetto...",
      sendButton: "Invia messaggio",
      sending: "Invio in corso...",
      privacyNote: "Inviando questo modulo, accetti la nostra",
      privacyPolicy: "Informativa sulla privacy",
      getInTouch: "Contattaci",
      email: "Email",
      registeredOffice: "Sede legale",
      workingHours: "Orari di lavoro",
      workingHoursText: "Lunedì - Venerdì: 9:00 - 18:00 CET",
      responseTime: "Rispondiamo a tutte le richieste entro 24 ore.",
      companyInfo: "Informazioni aziendali",
      companyNameLabel: "Nome azienda",
      regNumber: "Numero di registrazione",
      country: "Paese",
    },
    footer: {
      description: "Servizi professionali di consulenza IT che aiutano le aziende a trasformarsi attraverso la tecnologia. Con sede in Europa, al servizio di clienti in tutto il mondo.",
      quickLinks: "Link rapidi",
      legal: "Legale",
      impressum: "Note legali",
      privacyPolicy: "Informativa sulla privacy",
      allRightsReserved: "Tutti i diritti riservati.",
    },
    cookie: {
      message: "Utilizziamo i cookie per migliorare la tua esperienza. Continuando a navigare, accetti il nostro utilizzo dei cookie.",
      accept: "Accetta",
      learnMore: "Scopri di più",
    },
  },

  ru: {
    nav: {
      home: "Главная",
      services: "Услуги",
      about: "О нас",
      contact: "Контакты",
      getStarted: "Начать",
    },
    home: {
      heroTitle: "Технологические решения, которые приносят результат",
      heroSubtitle: "Специализированный IT-консалтинг и усиление команд с глубокой экспертизой в финансовых услугах, энергетике и промышленности. Консультируем, строим, подбираем специалистов и поставляем решения.",
      startProject: "Начать проект",
      hireEngineers: "Нанять инженеров",
      industriesTitle: "Отрасли, которые мы обслуживаем",
      industries: ["Финансовые услуги", "Рынки капитала", "Энергетика", "Промышленность", "Технологии"],
      whatWeDo: "Что мы делаем",
      whatWeDoSubtitle: "От стратегического консалтинга до практической разработки – мы поставляем комплексные решения",
      viewAllServices: "Все услуги",
      services: [
        { title: "Разработка ПО на заказ", description: "Полный цикл разработки индивидуальных программных решений – от концепции до развёртывания в продакшене." },
        { title: "Данные и аналитика", description: "Современные платформы данных, аналитические решения и бизнес-аналитика для принятия решений." },
        { title: "Облако и инфраструктура", description: "Масштабируемые облачные решения на AWS, Azure и GCP. Infrastructure as Code с Terraform и Pulumi." },
        { title: "Количественные решения", description: "Торговые системы, финансовая аналитика и количественные модели для рынков капитала." },
      ],
      scaleTeamTitle: "Усильте команду проверенными инженерами",
      scaleTeamSubtitle: "Нужны опытные специалисты быстро? Мы подберём инженеров, которые органично встроятся в ваши рабочие процессы.",
      steps: [
        { title: "Бриф", description: "Расскажите, что вам нужно – роль, стек технологий и сроки." },
        { title: "Подбор", description: "Мы найдём подходящего инженера из нашей проверенной сети быстро." },
        { title: "Поставка", description: "Бесшовная интеграция в вашу команду – продуктивность с первого дня." },
      ],
      availableRoles: "Доступные роли",
      roles: ["Data Engineers", "Cloud-архитекторы", "Специалисты Databricks и Snowflake", "DevOps-инженеры"],
      expertiseTitle: "Корпоративная экспертиза, бутиковый подход",
      expertiseSubtitle: "С многолетним опытом работы в ведущих финансовых институтах и глобальных компаниях мы сочетаем техническую глубину крупных консалтинговых компаний с гибкостью специализированной фирмы.",
      expertisePoints: [
        "Глубокая отраслевая экспертиза в финансах, трейдинге и промышленности",
        "Full-stack возможности: от стратегии до продакшен-систем",
        "Проверенные методологии из корпоративной среды",
        "Прямой доступ к senior-экспертизе в каждом проекте",
      ],
      learnMore: "Узнать больше",
      technologies: "Технологии",
      ctaTitle: "Давайте создадим что-то вместе",
      ctaSubtitle: "Нужна стратегическая консультация, команда разработки или квалифицированные инженеры для усиления штата – мы готовы помочь.",
    },
    servicesPage: {
      heroTitle: "Наши услуги",
      heroSubtitle: "От стратегии до реализации, от консалтинга до усиления команд – комплексные технологические решения для вашего бизнеса",
      services: [
        { title: "Разработка ПО на заказ", description: "Мы создаём индивидуальные программные решения, которые решают реальные бизнес-задачи.", features: ["Full-stack веб-приложения", "Backend-сервисы и API", "Интеграция корпоративных систем", "Модернизация legacy-систем", "DevOps и CI/CD-пайплайны"] },
        { title: "Платформы данных и аналитики", description: "Современная инфраструктура данных, превращающая сырые данные в полезные инсайты.", features: ["Архитектура Data Lake и Lakehouse", "Разработка ETL/ELT-пайплайнов", "Бизнес-аналитика и дашборды", "Аналитика в реальном времени", "Управление данными и качество"] },
        { title: "Облако и инфраструктура", description: "Масштабируемые и безопасные облачные решения на AWS, Azure и GCP.", features: ["Облачная архитектура и миграция", "Решения AWS, Azure, GCP", "Terraform и Pulumi (IaC)", "Kubernetes и контейнеризация", "Оптимизация затрат"] },
        { title: "Торговые и финансовые системы", description: "Специализированные решения для рынков капитала и финансовых услуг.", features: ["Разработка торговых систем", "Обработка рыночных данных", "Аналитика рисков и комплаенса", "Поддержка алгоритмического трейдинга", "Системы регуляторной отчётности"] },
        { title: "Количественный анализ и аналитика", description: "Количественный анализ, финансовое моделирование и продвинутая аналитика.", features: ["Количественное моделирование", "Финансовая аналитика", "Machine Learning и ИИ", "Статистический анализ", "Атрибуция доходности"] },
        { title: "Усиление команд", description: "Усильте инженерную команду проверенными senior-специалистами. B2B-модель с reverse charge для клиентов из ЕС.", features: ["Data Engineers и архитекторы", "Cloud- и DevOps-специалисты", "Эксперты Databricks и Snowflake", "B2B-модель (Reverse Charge)", "Быстрый онбординг — дни, не месяцы"] },
        { title: "Промышленные и энергетические решения", description: "Технологические решения для энергетики, производства и промышленности.", features: ["Аналитика производственных данных", "Платформы IoT и данных датчиков", "Операционная аналитика", "Аналитика цепочки поставок", "Отчётность по устойчивому развитию"] },
      ],
      howWeWork: "Как мы работаем",
      howWeWorkSubtitle: "Гибкие модели сотрудничества под ваши потребности",
      workModels: [
        { title: "Консалтинг", description: "Стратегические консультации, архитектурные ревью и техническое руководство" },
        { title: "Поставка проектов", description: "Полный цикл реализации проектов с определённым объёмом и результатами" },
        { title: "Усиление команды", description: "Проверенные senior-инженеры, встроенные в вашу команду" },
        { title: "B2B-контракты", description: "Модель reverse charge ЕС – без налогов работодателя, чистое выставление счетов" },
      ],
      ctaTitle: "Есть проект?",
      ctaSubtitle: "Обсудим ваши требования и найдём правильный подход – проектное сотрудничество или усиление команды.",
    },
    aboutPage: {
      heroTitle: "О Quent Tech",
      heroSubtitle: "Ваш надёжный партнёр в технологическом консалтинге, программных решениях и подборе инженерных кадров",
      ourStory: "Наша история",
      storyParagraphs: [
        "Quent Tech Ltd была основана в 2026 году для предоставления технологических решений корпоративного уровня и senior-инженерных кадров компаниям любого масштаба. С более чем 10-летним опытом в ведущих финансовых институтах мы знаем, что нужно для создания масштабируемых систем.",
        "Располагаясь в Европе с глобальным охватом, мы поставляем комплексные технологические решения на облачных платформах (AWS, Azure, GCP), в data engineering и разработке ПО на заказ.",
        "Опираясь на тщательно подобранную сеть senior-инженеров, мы предлагаем как поставку проектов, так и усиление команд – всегда с одинаковой приверженностью качеству и результатам.",
      ],
      companyDetails: "Реквизиты компании",
      companyName: "Quent Tech Ltd",
      registration: "HE 486705 (Кипр)",
      founded: "Январь 2026",
      headquarters: "Пафос, Кипр",
      ourValues: "Наши ценности",
      ourValuesSubtitle: "Принципы, которые направляют всё, что мы делаем",
      values: [
        { title: "Превосходство", description: "Мы стремимся к совершенству в каждом проекте, предоставляя решения, превосходящие ожидания." },
        { title: "Честность", description: "Мы работаем с полной прозрачностью и честностью во всех деловых отношениях." },
        { title: "Инновации", description: "Мы внедряем новые технологии и подходы для создания передовых решений." },
      ],
      leadership: "Руководство",
      leadershipSubtitle: "Познакомьтесь с людьми, стоящими за Quent Tech",
      founderName: "Артём Фирсов",
      founderTitle: "Основатель и главный консультант",
      founderBio: "Технологический лидер с более чем 10-летним опытом работы с облачными платформами, data engineering и количественными системами.",
      credentials: "Квалификации",
      credentialsList: [
        "Сертифицированный трейдер деривативов",
        "Эксперт по инструментам с фиксированным доходом",
        "Программа Oxford Algorithmic Trading",
        "Опыт работы в ведущих финансовых институтах",
      ],
      ctaTitle: "Давайте работать вместе",
      ctaSubtitle: "Готовы трансформировать ваш бизнес с помощью технологий? Мы будем рады услышать вас.",
      getInTouch: "Связаться с нами",
    },
    contactPage: {
      heroTitle: "Свяжитесь с нами",
      heroSubtitle: "Готовы начать проект? Свяжитесь с нами, и мы обсудим, как можем помочь.",
      sendMessage: "Отправьте нам сообщение",
      messageSent: "Сообщение отправлено!",
      messageSentText: "Спасибо за обращение. Мы скоро свяжемся с вами.",
      sendAnother: "Отправить ещё сообщение",
      yourName: "Ваше имя *",
      emailAddress: "Email *",
      company: "Компания",
      message: "Сообщение *",
      namePlaceholder: "Иван Петров",
      emailPlaceholder: "ivan@example.com",
      companyPlaceholder: "Ваша компания",
      messagePlaceholder: "Расскажите о вашем проекте...",
      sendButton: "Отправить сообщение",
      sending: "Отправка...",
      privacyNote: "Отправляя форму, вы соглашаетесь с нашей",
      privacyPolicy: "Политикой конфиденциальности",
      getInTouch: "Связаться с нами",
      email: "Email",
      registeredOffice: "Юридический адрес",
      workingHours: "Часы работы",
      workingHoursText: "Понедельник - Пятница: 9:00 - 18:00 CET",
      responseTime: "Мы отвечаем на все запросы в течение 24 часов.",
      companyInfo: "Информация о компании",
      companyNameLabel: "Название компании",
      regNumber: "Регистрационный номер",
      country: "Страна",
    },
    footer: {
      description: "Профессиональные IT-консалтинговые услуги, помогающие бизнесу трансформироваться с помощью технологий. Расположение в Европе, обслуживание клиентов по всему миру.",
      quickLinks: "Быстрые ссылки",
      legal: "Правовая информация",
      impressum: "Импрессум",
      privacyPolicy: "Политика конфиденциальности",
      allRightsReserved: "Все права защищены.",
    },
    cookie: {
      message: "Мы используем cookies для улучшения вашего опыта. Продолжая просмотр, вы соглашаетесь с использованием cookies.",
      accept: "Принять",
      learnMore: "Подробнее",
    },
  },

  uk: {
    nav: {
      home: "Головна",
      services: "Послуги",
      about: "Про нас",
      contact: "Контакти",
      getStarted: "Почати",
    },
    home: {
      heroTitle: "Технологічні рішення, що приносять результат",
      heroSubtitle: "Спеціалізований IT-консалтинг та підсилення команд з глибокою експертизою у фінансових послугах, енергетиці та промисловості. Консультуємо, будуємо, підбираємо фахівців та постачаємо рішення.",
      startProject: "Розпочати проєкт",
      hireEngineers: "Найняти інженерів",
      industriesTitle: "Галузі, які ми обслуговуємо",
      industries: ["Фінансові послуги", "Ринки капіталу", "Енергетика", "Промисловість", "Технології"],
      whatWeDo: "Що ми робимо",
      whatWeDoSubtitle: "Від стратегічного консалтингу до практичної розробки – ми постачаємо комплексні рішення",
      viewAllServices: "Усі послуги",
      services: [
        { title: "Розробка ПЗ на замовлення", description: "Повний цикл розробки індивідуальних програмних рішень – від концепції до розгортання у продакшені." },
        { title: "Дані та аналітика", description: "Сучасні платформи даних, аналітичні рішення та бізнес-аналітика для прийняття рішень." },
        { title: "Хмара та інфраструктура", description: "Масштабовані хмарні рішення на AWS, Azure та GCP. Infrastructure as Code з Terraform та Pulumi." },
        { title: "Кількісні рішення", description: "Торгові системи, фінансова аналітика та кількісні моделі для ринків капіталу." },
      ],
      scaleTeamTitle: "Підсильте команду перевіреними інженерами",
      scaleTeamSubtitle: "Потрібні досвідчені фахівці швидко? Ми підберемо інженерів, що органічно вбудуються у ваші робочі процеси.",
      steps: [
        { title: "Бриф", description: "Розкажіть, що вам потрібно – роль, стек технологій та терміни." },
        { title: "Підбір", description: "Ми знайдемо відповідного інженера з нашої перевіреної мережі швидко." },
        { title: "Поставка", description: "Безшовна інтеграція у вашу команду – продуктивність з першого дня." },
      ],
      availableRoles: "Доступні ролі",
      roles: ["Data Engineers", "Cloud-архітектори", "Спеціалісти Databricks та Snowflake", "DevOps-інженери"],
      expertiseTitle: "Корпоративна експертиза, бутиковий підхід",
      expertiseSubtitle: "З багаторічним досвідом роботи у провідних фінансових інститутах та глобальних компаніях ми поєднуємо технічну глибину великих консалтингових компаній з гнучкістю спеціалізованої фірми.",
      expertisePoints: [
        "Глибока галузева експертиза у фінансах, трейдингу та промисловості",
        "Full-stack можливості: від стратегії до продакшен-систем",
        "Перевірені методології з корпоративного середовища",
        "Прямий доступ до senior-експертизи в кожному проєкті",
      ],
      learnMore: "Дізнатися більше",
      technologies: "Технології",
      ctaTitle: "Давайте створимо щось разом",
      ctaSubtitle: "Потрібна стратегічна консультація, команда розробки чи кваліфіковані інженери для підсилення штату – ми готові допомогти.",
    },
    servicesPage: {
      heroTitle: "Наші послуги",
      heroSubtitle: "Від стратегії до реалізації, від консалтингу до підсилення команд – комплексні технологічні рішення для вашого бізнесу",
      services: [
        { title: "Розробка ПЗ на замовлення", description: "Ми створюємо індивідуальні програмні рішення, що вирішують реальні бізнес-задачі.", features: ["Full-stack веб-додатки", "Backend-сервіси та API", "Інтеграція корпоративних систем", "Модернізація legacy-систем", "DevOps та CI/CD-пайплайни"] },
        { title: "Платформи даних та аналітики", description: "Сучасна інфраструктура даних, що перетворює сирі дані на корисні інсайти.", features: ["Архітектура Data Lake та Lakehouse", "Розробка ETL/ELT-пайплайнів", "Бізнес-аналітика та дашборди", "Аналітика в реальному часі", "Управління даними та якість"] },
        { title: "Хмара та інфраструктура", description: "Масштабовані та безпечні хмарні рішення на AWS, Azure та GCP.", features: ["Хмарна архітектура та міграція", "Рішення AWS, Azure, GCP", "Terraform та Pulumi (IaC)", "Kubernetes та контейнеризація", "Оптимізація витрат"] },
        { title: "Торгові та фінансові системи", description: "Спеціалізовані рішення для ринків капіталу та фінансових послуг.", features: ["Розробка торгових систем", "Обробка ринкових даних", "Аналітика ризиків та комплаєнсу", "Підтримка алгоритмічного трейдингу", "Системи регуляторної звітності"] },
        { title: "Кількісний аналіз та аналітика", description: "Кількісний аналіз, фінансове моделювання та просунута аналітика.", features: ["Кількісне моделювання", "Фінансова аналітика", "Machine Learning та ШІ", "Статистичний аналіз", "Атрибуція дохідності"] },
        { title: "Підсилення команд", description: "Підсильте інженерну команду перевіреними senior-фахівцями. B2B-модель з reverse charge для клієнтів з ЄС.", features: ["Data Engineers та архітектори", "Cloud- та DevOps-спеціалісти", "Експерти Databricks та Snowflake", "B2B-модель (Reverse Charge)", "Швидкий онбординг — дні, не місяці"] },
        { title: "Промислові та енергетичні рішення", description: "Технологічні рішення для енергетики, виробництва та промисловості.", features: ["Аналітика виробничих даних", "Платформи IoT та даних датчиків", "Операційна аналітика", "Аналітика ланцюга постачання", "Звітність зі сталого розвитку"] },
      ],
      howWeWork: "Як ми працюємо",
      howWeWorkSubtitle: "Гнучкі моделі співпраці під ваші потреби",
      workModels: [
        { title: "Консалтинг", description: "Стратегічні консультації, архітектурні ревʼю та технічне керівництво" },
        { title: "Поставка проєктів", description: "Повний цикл реалізації проєктів з визначеним обсягом та результатами" },
        { title: "Підсилення команди", description: "Перевірені senior-інженери, вбудовані у вашу команду" },
        { title: "B2B-контракти", description: "Модель reverse charge ЄС – без податків роботодавця, чисте виставлення рахунків" },
      ],
      ctaTitle: "Маєте проєкт?",
      ctaSubtitle: "Обговоримо ваші вимоги та знайдемо правильний підхід – проєктна співпраця чи підсилення команди.",
    },
    aboutPage: {
      heroTitle: "Про Quent Tech",
      heroSubtitle: "Ваш надійний партнер у технологічному консалтингу, програмних рішеннях та підборі інженерних кадрів",
      ourStory: "Наша історія",
      storyParagraphs: [
        "Quent Tech Ltd була заснована у 2026 році для надання технологічних рішень корпоративного рівня та senior-інженерних кадрів компаніям будь-якого масштабу. З понад 10-річним досвідом у провідних фінансових інститутах ми знаємо, що потрібно для створення масштабованих систем.",
        "Розташовуючись у Європі з глобальним охопленням, ми постачаємо комплексні технологічні рішення на хмарних платформах (AWS, Azure, GCP), у data engineering та розробці ПЗ на замовлення.",
        "Спираючись на ретельно підібрану мережу senior-інженерів, ми пропонуємо як поставку проєктів, так і підсилення команд – завжди з однаковою відданістю якості та результатам.",
      ],
      companyDetails: "Реквізити компанії",
      companyName: "Quent Tech Ltd",
      registration: "HE 486705 (Кіпр)",
      founded: "Січень 2026",
      headquarters: "Пафос, Кіпр",
      ourValues: "Наші цінності",
      ourValuesSubtitle: "Принципи, що направляють усе, що ми робимо",
      values: [
        { title: "Досконалість", description: "Ми прагнемо до досконалості в кожному проєкті, надаючи рішення, що перевершують очікування." },
        { title: "Чесність", description: "Ми працюємо з повною прозорістю та чесністю в усіх ділових відносинах." },
        { title: "Інновації", description: "Ми впроваджуємо нові технології та підходи для створення передових рішень." },
      ],
      leadership: "Керівництво",
      leadershipSubtitle: "Познайомтеся з людьми за Quent Tech",
      founderName: "Артем Фірсов",
      founderTitle: "Засновник та головний консультант",
      founderBio: "Технологічний лідер з понад 10-річним досвідом роботи з хмарними платформами, data engineering та кількісними системами.",
      credentials: "Кваліфікації",
      credentialsList: [
        "Сертифікований трейдер деривативів",
        "Експерт з інструментів з фіксованим доходом",
        "Програма Oxford Algorithmic Trading",
        "Досвід роботи у провідних фінансових інститутах",
      ],
      ctaTitle: "Давайте працювати разом",
      ctaSubtitle: "Готові трансформувати ваш бізнес за допомогою технологій? Ми будемо раді почути вас.",
      getInTouch: "Звʼязатися з нами",
    },
    contactPage: {
      heroTitle: "Звʼяжіться з нами",
      heroSubtitle: "Готові розпочати проєкт? Звʼяжіться з нами, і ми обговоримо, як можемо допомогти.",
      sendMessage: "Надішліть нам повідомлення",
      messageSent: "Повідомлення надіслано!",
      messageSentText: "Дякуємо за звернення. Ми скоро звʼяжемося з вами.",
      sendAnother: "Надіслати ще повідомлення",
      yourName: "Ваше імʼя *",
      emailAddress: "Email *",
      company: "Компанія",
      message: "Повідомлення *",
      namePlaceholder: "Іван Петренко",
      emailPlaceholder: "ivan@example.com",
      companyPlaceholder: "Ваша компанія",
      messagePlaceholder: "Розкажіть про ваш проєкт...",
      sendButton: "Надіслати повідомлення",
      sending: "Надсилання...",
      privacyNote: "Надсилаючи форму, ви погоджуєтеся з нашою",
      privacyPolicy: "Політикою конфіденційності",
      getInTouch: "Звʼязатися з нами",
      email: "Email",
      registeredOffice: "Юридична адреса",
      workingHours: "Години роботи",
      workingHoursText: "Понеділок - Пʼятниця: 9:00 - 18:00 CET",
      responseTime: "Ми відповідаємо на всі запити протягом 24 годин.",
      companyInfo: "Інформація про компанію",
      companyNameLabel: "Назва компанії",
      regNumber: "Реєстраційний номер",
      country: "Країна",
    },
    footer: {
      description: "Професійні IT-консалтингові послуги, що допомагають бізнесу трансформуватися за допомогою технологій. Розташування в Європі, обслуговування клієнтів по всьому світу.",
      quickLinks: "Швидкі посилання",
      legal: "Правова інформація",
      impressum: "Імпресум",
      privacyPolicy: "Політика конфіденційності",
      allRightsReserved: "Всі права захищені.",
    },
    cookie: {
      message: "Ми використовуємо cookies для покращення вашого досвіду. Продовжуючи перегляд, ви погоджуєтеся з використанням cookies.",
      accept: "Прийняти",
      learnMore: "Детальніше",
    },
  },

  pt: {
    nav: {
      home: "Início",
      services: "Serviços",
      about: "Sobre nós",
      contact: "Contacto",
      getStarted: "Começar",
    },
    home: {
      heroTitle: "Soluções tecnológicas que geram resultados",
      heroSubtitle: "Consultoria IT especializada e reforço de equipas com profunda experiência em serviços financeiros, energia e indústria. Aconselhamos, construímos, recrutamos e entregamos.",
      startProject: "Iniciar projeto",
      hireEngineers: "Contratar engenheiros",
      industriesTitle: "Indústrias que servimos",
      industries: ["Serviços financeiros", "Mercados de capitais", "Energia", "Indústria", "Tecnologia"],
      whatWeDo: "O que fazemos",
      whatWeDoSubtitle: "Da consultoria estratégica ao desenvolvimento prático – entregamos soluções completas",
      viewAllServices: "Ver todos os serviços",
      services: [
        { title: "Desenvolvimento de software personalizado", description: "Desenvolvimento completo de soluções de software à medida – do conceito à implementação em produção." },
        { title: "Dados e análise", description: "Plataformas de dados modernas, soluções analíticas e business intelligence para decisões informadas." },
        { title: "Cloud e infraestrutura", description: "Soluções cloud escaláveis em AWS, Azure e GCP. Infrastructure as Code com Terraform e Pulumi." },
        { title: "Soluções quantitativas", description: "Sistemas de trading, análise financeira e modelos quantitativos para mercados de capitais." },
      ],
      scaleTeamTitle: "Reforce a sua equipa com engenheiros verificados",
      scaleTeamSubtitle: "Precisa de talento sénior rapidamente? Conectamo-lo com engenheiros experientes que se integram perfeitamente nos seus fluxos de trabalho.",
      steps: [
        { title: "Brief", description: "Diga-nos o que precisa – função, stack tecnológico e cronograma." },
        { title: "Match", description: "Encontramos o engenheiro certo na nossa rede verificada rapidamente." },
        { title: "Entrega", description: "Integração perfeita na sua equipa – produtivo desde o primeiro dia." },
      ],
      availableRoles: "Funções disponíveis",
      roles: ["Data Engineers", "Arquitetos Cloud", "Especialistas Databricks e Snowflake", "Engenheiros DevOps"],
      expertiseTitle: "Experiência empresarial, abordagem boutique",
      expertiseSubtitle: "Com anos de experiência em instituições financeiras líderes e empresas globais, trazemos a profundidade técnica das grandes consultoras com a agilidade de uma firma especializada.",
      expertisePoints: [
        "Profunda experiência setorial em finanças, trading e indústria",
        "Capacidades full-stack: da estratégia aos sistemas de produção",
        "Metodologias comprovadas de ambientes empresariais",
        "Acesso direto a experiência sénior em cada projeto",
      ],
      learnMore: "Saber mais",
      technologies: "Tecnologias",
      ctaTitle: "Vamos construir algo juntos",
      ctaSubtitle: "Precisa de consultoria estratégica, uma equipa de desenvolvimento ou engenheiros qualificados – estamos aqui para ajudar.",
    },
    servicesPage: {
      heroTitle: "Os nossos serviços",
      heroSubtitle: "Da estratégia à implementação, da consultoria ao reforço de equipas – soluções tecnológicas completas para o seu negócio",
      services: [
        { title: "Desenvolvimento de software personalizado", description: "Criamos soluções de software à medida que resolvem problemas reais de negócio.", features: ["Aplicações web full-stack", "Serviços backend e APIs", "Integração de sistemas empresariais", "Modernização de sistemas legados", "DevOps e pipelines CI/CD"] },
        { title: "Plataformas de dados e análise", description: "Infraestrutura de dados moderna que transforma dados brutos em informações acionáveis.", features: ["Arquitetura Data Lake e Lakehouse", "Desenvolvimento de pipelines ETL/ELT", "Business Intelligence e dashboards", "Análise em tempo real", "Governança e qualidade de dados"] },
        { title: "Cloud e infraestrutura", description: "Soluções cloud escaláveis e seguras em AWS, Azure e GCP.", features: ["Arquitetura e migração cloud", "Soluções AWS, Azure, GCP", "Terraform e Pulumi (IaC)", "Kubernetes e contentorização", "Otimização de custos"] },
        { title: "Sistemas de trading e financeiros", description: "Soluções especializadas para mercados de capitais e serviços financeiros.", features: ["Desenvolvimento de sistemas de trading", "Processamento de dados de mercado", "Análise de risco e conformidade", "Suporte de trading algorítmico", "Sistemas de reporting regulatório"] },
        { title: "Quantitativo e análise", description: "Análise quantitativa, modelação financeira e análise avançada.", features: ["Modelação quantitativa", "Análise financeira", "Machine Learning e IA", "Análise estatística", "Atribuição de performance"] },
        { title: "Reforço de equipas", description: "Reforce a sua equipa de engenharia com profissionais sénior verificados. Modelo B2B com autoliquidação para clientes UE.", features: ["Data Engineers e arquitetos", "Especialistas Cloud e DevOps", "Especialistas Databricks e Snowflake", "Modelo B2B (Autoliquidação)", "Integração rápida — dias, não meses"] },
        { title: "Soluções industriais e de energia", description: "Soluções tecnológicas para energia, fabricação e indústria.", features: ["Análise de dados de processo", "Plataformas IoT e dados de sensores", "Inteligência operacional", "Análise da cadeia de fornecimento", "Reporting de sustentabilidade"] },
      ],
      howWeWork: "Como trabalhamos",
      howWeWorkSubtitle: "Modelos de colaboração flexíveis adaptados às suas necessidades",
      workModels: [
        { title: "Consultoria", description: "Consultoria estratégica, revisões de arquitetura e orientação técnica" },
        { title: "Entrega de projetos", description: "Execução de projetos de ponta a ponta com âmbito e entregáveis definidos" },
        { title: "Reforço de equipa", description: "Engenheiros sénior verificados integrados na sua equipa" },
        { title: "Contratos B2B", description: "Modelo de autoliquidação UE – sem impostos patronais, faturação limpa" },
      ],
      ctaTitle: "Tem um projeto em mente?",
      ctaSubtitle: "Vamos discutir as suas necessidades e encontrar a abordagem certa – projeto ou reforço de equipa.",
    },
    aboutPage: {
      heroTitle: "Sobre a Quent Tech",
      heroSubtitle: "O seu parceiro de confiança para consultoria tecnológica, soluções de software e talento de engenharia",
      ourStory: "A nossa história",
      storyParagraphs: [
        "A Quent Tech Ltd foi fundada em 2026 para oferecer soluções tecnológicas de nível empresarial e talento de engenharia sénior a empresas de todas as dimensões. Com mais de 10 anos de experiência em instituições financeiras líderes, sabemos o que é necessário para construir sistemas escaláveis.",
        "Com sede na Europa e visão global, oferecemos soluções tecnológicas completas em plataformas cloud (AWS, Azure, GCP), engenharia de dados e desenvolvimento de software personalizado.",
        "Apoiada por uma rede selecionada de engenheiros sénior, oferecemos tanto entrega de projetos como reforço de equipas – sempre com o mesmo compromisso com qualidade e resultados.",
      ],
      companyDetails: "Dados da empresa",
      companyName: "Quent Tech Ltd",
      registration: "HE 486705 (Chipre)",
      founded: "Janeiro de 2026",
      headquarters: "Pafos, Chipre",
      ourValues: "Os nossos valores",
      ourValuesSubtitle: "Os princípios que guiam tudo o que fazemos",
      values: [
        { title: "Excelência", description: "Procuramos a excelência em cada projeto, entregando soluções que superam as expectativas." },
        { title: "Integridade", description: "Operamos com total transparência e honestidade em todas as nossas relações comerciais." },
        { title: "Inovação", description: "Adotamos novas tecnologias e abordagens para entregar soluções de ponta." },
      ],
      leadership: "Liderança",
      leadershipSubtitle: "Conheça as pessoas por trás da Quent Tech",
      founderName: "Artem Firsov",
      founderTitle: "Fundador e consultor principal",
      founderBio: "Líder tecnológico com mais de 10 anos de experiência em plataformas cloud, engenharia de dados e sistemas quantitativos.",
      credentials: "Credenciais",
      credentialsList: [
        "Trader de derivados certificado",
        "Especialista em rendimento fixo",
        "Programa Oxford Algorithmic Trading",
        "Experiência em instituições financeiras líderes",
      ],
      ctaTitle: "Vamos trabalhar juntos",
      ctaSubtitle: "Pronto para transformar o seu negócio com tecnologia? Gostaríamos de ouvir de si.",
      getInTouch: "Contactar",
    },
    contactPage: {
      heroTitle: "Contacte-nos",
      heroSubtitle: "Pronto para iniciar o seu projeto? Entre em contacto e vamos discutir como podemos ajudar.",
      sendMessage: "Envie-nos uma mensagem",
      messageSent: "Mensagem enviada!",
      messageSentText: "Obrigado por nos contactar. Responderemos em breve.",
      sendAnother: "Enviar outra mensagem",
      yourName: "O seu nome *",
      emailAddress: "Endereço de email *",
      company: "Empresa",
      message: "Mensagem *",
      namePlaceholder: "João Silva",
      emailPlaceholder: "joao@exemplo.pt",
      companyPlaceholder: "A sua empresa",
      messagePlaceholder: "Fale-nos sobre o seu projeto...",
      sendButton: "Enviar mensagem",
      sending: "A enviar...",
      privacyNote: "Ao submeter este formulário, concorda com a nossa",
      privacyPolicy: "Política de Privacidade",
      getInTouch: "Contactar",
      email: "Email",
      registeredOffice: "Sede social",
      workingHours: "Horário de trabalho",
      workingHoursText: "Segunda - Sexta: 9:00 - 18:00 CET",
      responseTime: "Respondemos a todas as consultas em 24 horas.",
      companyInfo: "Informações da empresa",
      companyNameLabel: "Nome da empresa",
      regNumber: "Número de registo",
      country: "País",
    },
    footer: {
      description: "Serviços profissionais de consultoria IT que ajudam as empresas a transformarem-se através da tecnologia. Com sede na Europa, ao serviço de clientes em todo o mundo.",
      quickLinks: "Links rápidos",
      legal: "Legal",
      impressum: "Aviso legal",
      privacyPolicy: "Política de Privacidade",
      allRightsReserved: "Todos os direitos reservados.",
    },
    cookie: {
      message: "Utilizamos cookies para melhorar a sua experiência. Ao continuar a navegar, concorda com a utilização de cookies.",
      accept: "Aceitar",
      learnMore: "Saber mais",
    },
  },
};

export default translations;
