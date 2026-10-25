export type Lang = 'en' | 'de';
type T = Record<Lang, string>;

export interface Project {
  slug: string;
  kind: 'work' | 'study';
  title: string;
  period: string;
  label: T;
  team?: number;
  role: T;
  summary: T;
  points: Record<Lang, string[]>;
  stack: string[];
  repo?: string;
  privateRepo?: boolean;
  live?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    slug: 'jarvi',
    kind: 'work',
    featured: true,
    title: 'Jarvi the Orchestrator',
    period: '2025 –',
    label: { en: 'Personal project', de: 'Eigenes Projekt' },
    role: { en: 'Solo developer', de: 'Solo-Entwickler' },
    summary: {
      en: 'A multi-agent AI assistant that lives in your chats: it plans your calendar, chases your tasks and remembers what matters, on Telegram, WhatsApp, Instagram and Messenger.',
      de: 'Ein Multi-Agenten-KI-Assistent, der in deinen Chats lebt: Er plant deinen Kalender, verfolgt deine Aufgaben und merkt sich, was wichtig ist, auf Telegram, WhatsApp, Instagram und Messenger.',
    },
    points: {
      en: [
        'LangGraph state graph: a supervisor and plan router hand each request to specialised agents, and a synthesizer merges their answers. Graph state is checkpointed in MongoDB.',
        'Agents: Jarvi orchestrates, Grim handles the calendar and time blocking, Murphy the tasks, ForeverBrain is the long-term memory (RAG with embeddings and temporal recall), and Vex logs where Jarvi got stuck.',
        'An intent router and a validator check every request before any tool runs. Jarvi also exposes its tools as an MCP server.',
        'One adapter per channel: Telegram via webhooks, the WhatsApp Cloud API, and the Meta Graph API for Instagram DMs and Messenger, plus a web dashboard.',
        'OpenAI GPT-4o mini for reasoning, embeddings for memory and Whisper for voice messages. Google Calendar and Tasks, Stripe subscriptions, push notifications and proactive cron nudges.',
        'Self-hosted on my own VPS behind nginx with pm2 and Let\u2019s Encrypt, hardened with helmet, rate limiting and JWT, and covered by around 450 Jest test files.',
      ],
      de: [
        'LangGraph-Zustandsgraph: Ein Supervisor und ein Plan-Router geben jede Anfrage an spezialisierte Agenten weiter, ein Synthesizer führt die Antworten zusammen. Der Zustand wird in MongoDB gespeichert.',
        'Agenten: Jarvi orchestriert, Grim kümmert sich um Kalender und Zeitblöcke, Murphy um Aufgaben, ForeverBrain ist das Langzeitgedächtnis (RAG mit Embeddings und zeitlichem Abruf) und Vex protokolliert, wo Jarvi hängen geblieben ist.',
        'Ein Intent-Router und ein Validator prüfen jede Anfrage, bevor ein Tool läuft. Jarvi stellt seine Tools außerdem als MCP-Server bereit.',
        'Ein Adapter pro Kanal: Telegram über Webhooks, die WhatsApp Cloud API und die Meta Graph API für Instagram-DMs und Messenger, dazu ein Web-Dashboard.',
        'OpenAI GPT-4o mini fürs Denken, Embeddings fürs Gedächtnis und Whisper für Sprachnachrichten. Google Calendar und Tasks, Stripe-Abos, Push-Benachrichtigungen und proaktive Erinnerungen per Cron.',
        'Selbst gehostet auf meinem eigenen VPS hinter nginx mit pm2 und Let\u2019s Encrypt, abgesichert mit helmet, Rate Limiting und JWT und durch rund 450 Jest-Testdateien getestet.',
      ],
    },
    stack: ['Node.js', 'Express', 'LangGraph', 'OpenAI', 'MongoDB', 'Telegram', 'WhatsApp Cloud API', 'Meta Graph API', 'Google APIs', 'Stripe', 'nginx'],
    privateRepo: true,
    live: 'https://asifthatworks.com',
  },
  {
    slug: 'fatcat-pomodoro',
    kind: 'work',
    featured: true,
    title: 'FatCat Pomodoro',
    period: '2026',
    label: { en: 'Personal project', de: 'Eigenes Projekt' },
    role: { en: 'Solo developer', de: 'Solo-Entwickler' },
    summary: {
      en: 'A macOS focus timer that turns the MacBook notch into an animated “Dynamic Island”.',
      de: 'Ein Fokus-Timer für macOS, der die MacBook-Notch in eine animierte „Dynamic Island“ verwandelt.',
    },
    points: {
      en: [
        'Transparent window layering hides the timer behind the notch and expands it with spring animations on hover.',
        'Notch-aware: switches to a floating pill on external monitors without a notch.',
        'Break player with alpha-transparent video, so the cat walks across your desktop.',
        'Offline-first with native EventKit sync, and pairs with Jarvi through webhooks for analytics and break events.',
      ],
      de: [
        'Transparente Fenster-Ebenen verstecken den Timer hinter der Notch und klappen ihn beim Hovern mit Spring-Animationen auf.',
        'Notch-aware: Auf externen Monitoren ohne Notch wird daraus eine schwebende Pille.',
        'Pausen-Player mit transparentem Video, sodass die Katze über den Desktop läuft.',
        'Offline-first mit nativer EventKit-Synchronisierung und per Webhooks mit Jarvi gekoppelt.',
      ],
    },
    stack: ['Swift', 'SwiftUI', 'AppKit', 'AVFoundation', 'EventKit'],
    repo: 'https://github.com/GooseyGustav/FatCatPomodoro',
  },
  {
    slug: 'plp-gruppe',
    kind: 'work',
    title: 'plp-gruppe.de',
    period: '2026',
    label: { en: 'Client website', de: 'Kundenprojekt' },
    role: { en: 'Web developer & server admin', de: 'Webentwickler & Server-Admin' },
    summary: {
      en: 'A complete new WordPress website for a client, including the move to a new server.',
      de: 'Eine komplett neue WordPress-Website für einen Kunden, inklusive Umzug auf einen neuen Server.',
    },
    points: {
      en: [
        'Built and handed over a fully working new website in WordPress.',
        'Migrated the site and its data from one VPS to another.',
        'Set up email and contact forms so customer requests arrive reliably.',
      ],
      de: [
        'Eine voll funktionsfähige neue Website in WordPress gebaut und übergeben.',
        'Website und Daten von einem VPS auf einen anderen umgezogen.',
        'E-Mail- und Kontaktformulare eingerichtet, damit Kundenanfragen zuverlässig ankommen.',
      ],
    },
    stack: ['WordPress', 'PHP', 'VPS migration', 'Linux', 'Contact forms'],
    live: 'https://plp-gruppe.de',
  },
  {
    slug: 'gmbh-boerse',
    kind: 'work',
    title: 'gmbh-boerse.com',
    period: '2026',
    label: { en: 'Client website', de: 'Kundenprojekt' },
    role: { en: 'Design & development', de: 'Design & Entwicklung' },
    summary: {
      en: 'Company website designed and built for a client.',
      de: 'Unternehmenswebsite, gestaltet und umgesetzt für einen Kunden.',
    },
    points: {
      en: ['Concept, design and implementation from first draft to launch.', 'Responsive layout and fast static delivery.'],
      de: ['Konzept, Design und Umsetzung vom ersten Entwurf bis zum Launch.', 'Responsives Layout und schnelle statische Auslieferung.'],
    },
    stack: ['HTML', 'CSS', 'JavaScript'],
    live: 'https://gmbh-boerse.com',
  },
  {
    slug: 'linux-vms',
    kind: 'study',
    title: 'Virtual Machines & Linux',
    period: '2022',
    label: { en: 'Semester 1', de: '1. Semester' },
    role: { en: 'Coursework', de: 'Studienprojekt' },
    summary: {
      en: 'Set up virtual machines and read out server and system logs on Linux.',
      de: 'Virtuelle Maschinen aufgesetzt und Server- und Systemlogs unter Linux ausgewertet.',
    },
    points: { en: [], de: [] },
    stack: ['Linux', 'VMs', 'Shell', 'System logs'],
  },
  {
    slug: 'databases',
    kind: 'study',
    title: 'Relational Databases',
    period: '2023',
    label: { en: 'Databases', de: 'Datenbanken' },
    role: { en: 'Coursework', de: 'Studienprojekt' },
    summary: {
      en: 'Schema design, normalisation and SQL queries with SQLite.',
      de: 'Schemaentwurf, Normalisierung und SQL-Abfragen mit SQLite.',
    },
    points: { en: [], de: [] },
    stack: ['SQL', 'SQLite'],
  },
  {
    slug: 'bun-messenger',
    kind: 'study',
    title: 'BuN Messenger',
    period: '2024',
    team: 3,
    label: { en: 'Operating systems & networks', de: 'Betriebssysteme & Netzwerke' },
    role: { en: 'Co-developer & project lead', de: 'Co-Entwickler & Projektleitung' },
    summary: {
      en: 'A peer-to-peer messenger in Java that sends messages and files over TCP with its own protocol.',
      de: 'Ein Peer-to-Peer-Messenger in Java, der Nachrichten und Dateien über TCP mit eigenem Protokoll überträgt.',
    },
    points: {
      en: ['Designed the protocol engine and PDUs for messages and file transfer.', 'Led planning and structure for a team of three, from concept to working product.'],
      de: ['Protokoll-Engine und PDUs für Nachrichten und Dateiübertragung entworfen.', 'Planung und Struktur für ein Dreierteam geleitet, vom Konzept bis zum fertigen Produkt.'],
    },
    stack: ['Java', 'TCP', 'Sockets', 'CLI'],
    repo: 'https://github.com/elle3002/BuN-Messenger',
  },
  {
    slug: 'clarityhub',
    kind: 'study',
    title: 'ClarityHub',
    period: '2024',
    label: { en: 'Mobile operating systems', de: 'Mobile Betriebssysteme' },
    role: { en: 'Developer', de: 'Entwickler' },
    summary: {
      en: 'An Android productivity app with calendar, to-dos and a journal.',
      de: 'Eine Android-Produktivitäts-App mit Kalender, To-dos und Journal.',
    },
    points: {
      en: ['MVVM architecture with ViewModels and repositories.', 'Local SQLite storage, a REST API client and Bluetooth sync between devices.', 'Unit and integration tests for the data layer.'],
      de: ['MVVM-Architektur mit ViewModels und Repositories.', 'Lokale SQLite-Datenbank, REST-API-Client und Bluetooth-Synchronisierung zwischen Geräten.', 'Unit- und Integrationstests für die Datenschicht.'],
    },
    stack: ['Java', 'Android', 'SQLite', 'REST', 'Bluetooth'],
    repo: 'https://github.com/GooseyGustav/ClarityHub',
  },
  {
    slug: 'environment-spa',
    kind: 'study',
    title: 'BeKys-AEP Web App',
    period: '2025',
    team: 2,
    label: { en: 'Web applications', de: 'Webanwendungen' },
    role: { en: 'Full-stack co-developer', de: 'Full-Stack Co-Entwickler' },
    summary: {
      en: 'A single-page app for managing environmental locations on an interactive map.',
      de: 'Eine Single-Page-App zur Verwaltung von Umwelt-Standorten auf einer interaktiven Karte.',
    },
    points: {
      en: ['Login with role-based access for admins and regular users.', 'Mapbox map with address validation through OpenStreetMap, plus image uploads.', 'Node.js and Express REST API with MongoDB and Mongoose.'],
      de: ['Login mit rollenbasierten Rechten für Admins und normale Nutzer.', 'Mapbox-Karte mit Adressvalidierung über OpenStreetMap und Bild-Uploads.', 'REST-API mit Node.js und Express, MongoDB und Mongoose.'],
    },
    stack: ['JavaScript', 'Node.js', 'Express', 'MongoDB', 'Mapbox'],
    repo: 'https://github.com/GooseyGustav/WebApplication-FullStackDevelopment',
  },
  {
    slug: 'aws-cloud',
    kind: 'study',
    title: 'Cloud Computing on AWS',
    period: '2025',
    label: { en: 'Cloud computing', de: 'Cloud Computing' },
    role: { en: 'Coursework & certification', de: 'Studienprojekt & Zertifikat' },
    summary: {
      en: 'Cloud fundamentals on AWS, completed with an AWS certificate.',
      de: 'Cloud-Grundlagen auf AWS, abgeschlossen mit einem AWS-Zertifikat.',
    },
    points: { en: [], de: [] },
    stack: ['AWS', 'Cloud fundamentals'],
  },
  {
    slug: 'bank-system',
    kind: 'study',
    title: 'Bank System in Java',
    period: '2025',
    label: { en: 'Full semester', de: 'Ganzes Semester' },
    role: { en: 'Developer', de: 'Entwickler' },
    summary: {
      en: 'A banking application built across a whole semester, covering core Java and design patterns.',
      de: 'Eine Bankanwendung, über ein ganzes Semester entwickelt, mit Java-Grundlagen und Entwurfsmustern.',
    },
    points: {
      en: ['Giro, savings and stock accounts built with factories and the Observer pattern.', 'Generics, lambdas, threads, ExecutorService and Futures, in an MVC structure.', 'Tested with JUnit and Mockito.'],
      de: ['Giro-, Spar- und Aktienkonten mit Fabriken und dem Observer-Muster.', 'Generics, Lambdas, Threads, ExecutorService und Futures in einer MVC-Struktur.', 'Getestet mit JUnit und Mockito.'],
    },
    stack: ['Java', 'JUnit', 'Mockito', 'Concurrency', 'MVC'],
    repo: 'https://github.com/GooseyGustav/BankProject-Semester-2025-26',
  },
  {
    slug: 'used-car-ml',
    kind: 'study',
    title: 'DE Used Autos',
    period: '2025',
    team: 4,
    label: { en: 'Data science & machine learning', de: 'Data Science & Machine Learning' },
    role: { en: 'Co-developer, research & ML', de: 'Co-Entwickler, Recherche & ML' },
    summary: {
      en: 'A case study of the German used-car market with a machine-learning price prediction model.',
      de: 'Eine Fallstudie zum deutschen Gebrauchtwagenmarkt mit einem Machine-Learning-Modell zur Preisvorhersage.',
    },
    points: {
      en: ['Exploratory data analysis on real-world listings.', 'Compared several ML algorithms for price prediction.', 'Mostly research, then implementation, in a team of four.'],
      de: ['Explorative Datenanalyse auf echten Inseraten.', 'Mehrere ML-Algorithmen zur Preisvorhersage verglichen.', 'Vor allem Recherche, dann Umsetzung, im Viererteam.'],
    },
    stack: ['Python', 'Jupyter', 'pandas', 'scikit-learn'],
    repo: 'https://github.com/Abodx9/DE_Used_Autos',
  },
  {
    slug: 'supersuperhirn',
    kind: 'study',
    title: 'SuperSuperHirn',
    period: '2026',
    team: 5,
    label: { en: 'Software engineering 2', de: 'Software Engineering 2' },
    role: { en: 'Head of requirements engineering', de: 'Head of Requirements Engineering' },
    summary: {
      en: 'An extended Mastermind for desktop with 5 pins, 8 colours, a retro 80s look and a CPU player that cracks your code.',
      de: 'Ein erweitertes Mastermind für den Desktop mit 5 Pins, 8 Farben, Retro-Look der 80er und einem CPU-Spieler, der deinen Code knackt.',
    },
    points: {
      en: [
        'Led requirements engineering for a team of five: stakeholder rounds, user stories, sequence diagrams and the project wiki.',
        'Modes for player vs. bot, bot vs. bot and watching the CPU think, plus a timed mode from 5 to 60 seconds per move.',
        'CPU codebreaker based on a variant of Knuth\u2019s minimax algorithm, adapted to 32,768 possible codes.',
        'Hexagonal architecture with ports and adapters, a PyQt6 GUI in German and English, and online play over the network.',
        'Quality gates with 68 pytest test files, flake8 (PEP 8) and pre-commit hooks.',
      ],
      de: [
        'Requirements Engineering für ein Fünferteam geleitet: Stakeholder-Runden, User Stories, Sequenzdiagramme und das Projekt-Wiki.',
        'Modi für Spieler gegen Bot, Bot gegen Bot und CPU-Beobachtung, dazu ein Zeitmodus von 5 bis 60 Sekunden pro Zug.',
        'CPU-Codeknacker auf Basis einer Variante von Knuths Minimax-Algorithmus, angepasst auf 32.768 mögliche Codes.',
        'Hexagonale Architektur mit Ports und Adaptern, PyQt6-Oberfläche auf Deutsch und Englisch und Online-Spiel über das Netzwerk.',
        'Qualitätssicherung mit 68 pytest-Testdateien, flake8 (PEP 8) und pre-commit-Hooks.',
      ],
    },
    stack: ['Python', 'PyQt6', 'Hexagonal architecture', 'pytest', 'flake8', 'UML'],
    repo: 'https://github.com/GooseyGustav/SuperSuperHirn-Project',
  },
];
