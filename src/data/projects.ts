export const projects = [
  {
    title: "Push / Pull",
    description:
      "Fullstack mobile fitness platform where users create workouts, track progress, and connect with friends for group training sessions.",
    role: "Founder & Lead Developer",
    timeline: "October 2024 \u2013 Present",
    metric: "500+",
    metricLabel: "users in the first two weeks",
    category: "Mobile / Full stack",
    links: [
      {
        label: "Visit push-pull.app",
        href: "https://push-pull.app",
      },
    ],
    slug: "pushpull",
    stack: [
      "React Native",
      "Express.js",
      "PostgreSQL",
      "OAuth",
      "iOS & Android",
    ],
    problem: [
      "Fitness apps lacked intuitive workout creation and real-time progress tracking.",
      "Users needed a platform to coordinate group training with friends.",
    ],
    build: [
      "Engineered fullstack mobile application from scratch for iOS and Android.",
      "Built backend infrastructure with Express.js and PostgreSQL for scalable data management.",
      "Implemented JWT-based OAuth authentication system for secure user management.",
      "Designed dynamic workout generation logic enabling custom exercise routines.",
      "Architected real-time progress tracking with persistent data synchronization.",
      "Developing social features for group training coordination and friend connectivity.",
    ],
    outcome: [
      "Launched publicly on the App Store and reached 500+ users within two weeks of launch.",
      "Built complete tech stack independently, demonstrating fullstack mobile expertise.",
      "Designed scalable architecture supporting cross-platform deployment.",
      "Iterating quickly based on real user feedback while expanding social training features.",
    ],
    status:
      "Live on the App Store. Reached 500+ users within two weeks of launch, and actively shipping updates based on user feedback.",
  },
  {
    title: "UD CIS Discord Bot",
    description:
      "Department-operated bot that sends class schedules, reminders, and quick actions to 4,000+ students.",
    role: "Maintainer",
    timeline: "2025",
    metric: "4,000+",
    metricLabel: "students and faculty connected",
    category: "Automation / Community",
    links: [
      {
        label: "GitHub",
        href: "https://github.com/CISC375/SageTeamX",
      },
    ],
    slug: "ud-cis-bot",
    stack: ["Node.js", "MongoDB", "Discord.js", "Google OAuth"],
    problem: [
      "Department announcements lived in email threads no one opened.",
      "Students wanted schedules and reminders in the place they already chat.",
    ],
    build: [
      "Discord bot with Google OAuth so only CIS students/faculty can use commands.",
      "Cron jobs that sync official course data and drop it into channel feeds.",
      "Calendar export plus on-demand reminders for exams, labs, and advising.",
    ],
    outcome: [
      "4,000+ students and faculty rely on the bot daily.",
      "New calendar feature cut follow-up questions in the department Slack by half.",
    ],
  },
  {
    title: "StudyGuider",
    description:
      "A side project I built to help me study for exams while I was at school. It turns lecture slides and PDFs into notes, flashcards, and quizzes.",
    role: "Developer",
    timeline: "2025",
    metric: "200",
    metricLabel: "slides into a study pack",
    category: "AI / Education",
    links: [
      {
        label: "Live demo",
        href: "https://study-guider-web-eta.vercel.app",
      },
      {
        label: "Request code",
        href: "mailto:btzlatin@gmail.com",
      },
    ],
    slug: "studyguider",
    stack: ["Next.js 14", "NestJS", "PostgreSQL + Prisma", "OpenAI API", "MUI"],
    problem: [
      "I wanted a faster way to review long lecture decks and PDFs before exams.",
    ],
    build: [
      "Uploads PDFs, chunks them, and streams summarized notes with references.",
      "Per-user libraries powered by Prisma/PostgreSQL so classmates can revisit packs.",
      "Usage dashboards that log token costs, latency, and retries for every request.",
    ],
    outcome: [
      "I used it to review course material and prepare for exams while I was at school.",
      "Notes can be exported as PDF or Markdown.",
    ],
  },
  {
    title: "StarterHelpi",
    description:
      "Campus career quiz that pairs quick personality questions with AI-generated suggestions.",
    role: "Full-stack + Scrum Master",
    timeline: "2023",
    metric: "6",
    metricLabel: "people shipping every week",
    category: "AI / Team leadership",
    links: [
      {
        label: "Demo",
        href: "https://bzlatin.github.io/starter_helpi/#/home",
      },
      {
        label: "GitHub",
        href: "https://github.com/bzlatin/starter_helpi",
      },
    ],
    slug: "starterhelpi",
    stack: ["React", "TypeScript", "OpenAI API", "Supabase", "Tailwind"],
    problem: [
      "Freshmen on campus needed direction on internships and clubs.",
      "Our team required a consistent sprint rhythm to keep momentum.",
    ],
    build: [
      "Quiz engine that captures interests and routes to AI-personalized feeds.",
      "Prompt templates plus logging so we could review outputs with mentors.",
      "Admin tools that let non-engineers tweak question weights without redeploys.",
    ],
    outcome: [
      "Six-person team shipped weekly; we demoed working features every Friday.",
      "Students received next-step suggestions with reason codes, not vague ideas.",
    ],
  },
  {
    title: "FoodHunt",
    description: "Tinder-style restaurant picker for friend groups.",
    role: "Full-stack builder",
    timeline: "2023\u20132024",
    metric: "< 2 min",
    metricLabel: "from group chat to dinner plans",
    category: "Web / Social",
    links: [
      {
        label: "Request code",
        href: "mailto:btzlatin@gmail.com",
      },
    ],
    slug: "foodhunt",
    stack: ["React", "Express", "MongoDB", "JWT", "Yelp API"],
    problem: [
      "Picking a restaurant in a group chat took forever and no one wanted to decide.",
      "Votes needed to sync in real time without over-building infra.",
    ],
    build: [
      "Swipe interface where each friend votes yea/nay on nearby spots.",
      "JWT-secured sessions so only invited friends can join the round.",
      "Yelp API integration that normalizes menus, price tiers, and hours for each card.",
    ],
    outcome: [
      "Groups make a decision in under two minutes; we surface the top choice plus backups.",
      "50+ personalized recommendations per session with photos and links.",
    ],
  },
];
export type Project = (typeof projects)[number];
