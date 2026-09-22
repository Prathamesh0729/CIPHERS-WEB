/**
 * CIPHERS — central content file.
 *
 * Source: ciphers-website/js/main.js
 *
 * NOTE:
 * The supplied source README states that names, bios, room numbers,
 * and statistics are placeholders. They are preserved here as supplied
 * and should be verified before the site goes live.
 */

export type Person = {
  id: string
  initials: string
  name: string
  role: string
  color: string
  unit: string
  year: string
  email: string
  bio: string
  skills: string[]
  facts: [string, string][]
}

export type DepartmentMember = {
  initials: string
  name: string
  year: string
}

export type Department = {
  key: string
  name: string
  color: string
  tagline: string
  blurb: string
  points: string[]
  meta: [string, string][]
  head: Person
  cohead: Person
  members: DepartmentMember[]
}

export type ClubEvent = {
  type: string
  date: string
  by: string
  title: string
  description: string
  figs: [string, string][]
  status: "past" | "upcoming"
}

export type Member = {
  name: string
  role: string
  initials: string
  handle?: string
}

/* ================= club ================= */

export const club = {
  name: "CIPHERS",
  tagline: "Decode. Defend. Deploy.",
  college: "AISSMS College of Engineering, Pune",
  intro:
    'CIPHERS is a multidisciplinary student club where ideas turn into impact — bringing together programming, innovation, startups, higher education, and social media to build, create, collaborate, and grow.',
  email: "ciphers@aissmscoe.com",
  socials: [
    {
      label: "GitHub",
      href: "https://github.com",
      handle: "@ciphers-club",
    },
    {
      label: "Instagram",
      href: "https://instagram.com",
      handle: "@ciphers.club",
    },
    {
      label: "LinkedIn",
      href: "https://linkedin.com",
      handle: "CIPHERS Club",
    },
    {
      label: "Discord",
      href: "https://discord.com",
      handle: "CIPHERS Server",
    },
  ],
}

/* ================= about ================= */

export const about = {
  mission:
    "To build a community of curious, security-minded engineers who learn by doing — turning theory into hands-on skill through workshops, competitions, and real projects.",
  pillars: [
    {
      title: "Cybersecurity",
      body:
        "Hands-on labs in web security, network defense, and ethical hacking. We think like attackers so we can build like defenders.",
      tag: "sec",
    },
    {
      title: "Coding",
      body:
        "Peer-led sessions on algorithms, systems, and secure software development. Ship real projects, review real code.",
      tag: "dev",
    },
    {
      title: "Cryptography",
      body:
        "From classic ciphers to modern crypto — we explore the math and code behind keeping secrets secret.",
      tag: "crypto",
    },
  ],
}

/* ================= faculty ================= */

export const faculty: Person[] = [
  {
    id: "fc1",
    initials: "DR",
    name: "Dr. A. Kulkarni",
    role: "Faculty Coordinator",
    color: "#31E1D6",
    unit: "Department of Computer Engineering",
    year: "Faculty",
    email: "a.kulkarni@aissmscoe.com",
    bio:
      "Oversees the club's academic direction, approves event proposals and connects members with lab resources and industry contacts. Teaches network security and has guided several inter-college CTF teams.",
    skills: [
      "Network security",
      "Cryptography",
      "Research guidance",
    ],
    facts: [
      ["Since", "2023"],
      ["Office", "Main building, 2nd floor"],
      ["Best reached", "Email"],
    ],
  },
  {
    id: "fc2",
    initials: "PS",
    name: "Prof. S. Deshmukh",
    role: "Faculty Co-Coordinator",
    color: "#7A6CFF",
    unit: "Department of Information Technology",
    year: "Faculty",
    email: "s.deshmukh@aissmscoe.com",
    bio:
      "Handles approvals, budgets and venue bookings for club events, and mentors the higher-education group on research paper submissions.",
    skills: [
      "Event approvals",
      "Academic mentoring",
      "Paper reviews",
    ],
    facts: [
      ["Since", "2024"],
      ["Office", "IT block, lab 5"],
      ["Best reached", "Email"],
    ],
  },
]

/* ================= student council ================= */

export const council: Person[] = [
  {
    id: "pres",
    initials: "RS",
    name: "Rohan Shinde",
    role: "President",
    color: "#FFB25B",
    unit: "Student council",
    year: "Final year, Computer Engineering",
    email: "president@ciphers.club",
    bio:
      "Runs the club overall — sets the semester calendar, chairs the council meeting every fortnight, and is the point of contact for faculty, sponsors and other college clubs. Started in the Programming department as a first-year member.",
    skills: [
      "Team leadership",
      "CTF",
      "Backend development",
      "Public speaking",
    ],
    facts: [
      ["Term", "2026–27"],
      ["Came up through", "Programming"],
      ["Office hours", "Fridays, 4 PM, lab 304"],
    ],
  },
  {
    id: "vp",
    initials: "AN",
    name: "Aditi Nair",
    role: "Vice President",
    color: "#FF6B9A",
    unit: "Student council",
    year: "Third year, Information Technology",
    email: "vp@ciphers.club",
    bio:
      "Coordinates between the four departments so events don't collide, keeps the membership register, and steps in as organiser-in-charge for the flagship hackathon. Also mentors new members through their first project.",
    skills: [
      "Operations",
      "Event management",
      "Web development",
      "Mentoring",
    ],
    facts: [
      ["Term", "2026–27"],
      ["Came up through", "Start-up and Innovation"],
      ["Office hours", "Wednesdays, 5 PM"],
    ],
  },
]

/* ================= departments ================= */

export const departments: Department[] = [
  {
    key: "programming",
    name: "Programming",
    color: "#31E1D6",
    tagline: "Write it, break it, ship it.",
    blurb:
      "The build arm of the club. Members work through data structures and algorithms together, take on contests as a team, and put that practice into real projects — internal tools, CTF scripts and open-source contributions.",
    points: [
      "Weekly DSA and competitive programming practice sets",
      "Project squads building web, app and automation tools",
      "CTF tooling for crypto, forensics and web challenges",
      "Peer code reviews on a shared Git workflow",
      "Open-source contribution drives before Hacktoberfest",
    ],
    meta: [
      ["Meets", "Tuesdays, 5:30 PM"],
      ["Room", "Lab 304"],
      ["Best for", "1st & 2nd year builders"],
      ["Strength", "96 members"],
    ],
    head: {
      id: "pg-h",
      initials: "KP",
      name: "Karan Patil",
      role: "Head — Programming",
      color: "#31E1D6",
      unit: "Programming",
      year: "Final year, Computer Engineering",
      email: "programming@ciphers.club",
      bio:
        "Sets the practice syllabus, picks contest teams and reviews every project before it goes public. Maintains the club's internal tooling repo.",
      skills: [
        "C++",
        "Algorithms",
        "Reverse engineering",
        "Git",
      ],
      facts: [
        ["In club since", "2023"],
        ["Contests", "14 played"],
        ["Mentors", "12 juniors"],
      ],
    },
    cohead: {
      id: "pg-c",
      initials: "SJ",
      name: "Sneha Joshi",
      role: "Co-Head — Programming",
      color: "#31E1D6",
      unit: "Programming",
      year: "Third year, Computer Engineering",
      email: "programming@ciphers.club",
      bio:
        "Runs the weekly practice sessions for first and second years and keeps the problem archive organised by topic.",
      skills: [
        "Python",
        "Data structures",
        "Web backend",
        "Teaching",
      ],
      facts: [
        ["In club since", "2024"],
        ["Sessions run", "21"],
        ["Focus", "Beginner track"],
      ],
    },
    members: [
      { initials: "AM", name: "Ankit More", year: "SY · Web & automation" },
      { initials: "PR", name: "Priya Rane", year: "TY · CTF scripting" },
      { initials: "VD", name: "Vivek Dhage", year: "SY · Competitive programming" },
      { initials: "NK", name: "Neha Kale", year: "FY · Open source" },
      { initials: "HS", name: "Harsh Sawant", year: "TY · Reverse engineering" },
      { initials: "IB", name: "Isha Bhosale", year: "SY · App development" },
    ],
  },
  {
    key: "startup",
    name: "Start-up and Innovation",
    color: "#7A6CFF",
    tagline: "From notebook sketch to working demo.",
    blurb:
      "For members who want to turn a project into a product. The department runs idea clinics, helps teams validate with real users, and prepares them for pitch events, incubation cells and student grants.",
    points: [
      "Idea clinics: pressure-test a concept before you build it",
      "Prototype sprints that end with a working demo",
      "Pitch practice and deck reviews with founders and faculty",
      "Guidance on patents, IPR basics and student funding",
      "Links to the campus incubation cell and local startup meets",
    ],
    meta: [
      ["Meets", "Thursdays, 6:00 PM"],
      ["Room", "Seminar hall B"],
      ["Best for", "Anyone with a product itch"],
      ["Strength", "62 members"],
    ],
    head: {
      id: "su-h",
      initials: "MG",
      name: "Manas Gokhale",
      role: "Head — Start-up and Innovation",
      color: "#7A6CFF",
      unit: "Start-up and Innovation",
      year: "Final year, Mechanical Engineering",
      email: "startup@ciphers.club",
      bio:
        "Runs the idea clinic and pitch nights, and keeps the department's contacts at the campus incubation cell warm. Has taken two student projects to state-level pitch rounds.",
      skills: [
        "Product thinking",
        "Pitching",
        "User research",
        "Business models",
      ],
      facts: [
        ["In club since", "2023"],
        ["Pitches coached", "18"],
        ["Teams incubated", "3"],
      ],
    },
    cohead: {
      id: "su-c",
      initials: "TR",
      name: "Tanvi Rao",
      role: "Co-Head — Start-up and Innovation",
      color: "#7A6CFF",
      unit: "Start-up and Innovation",
      year: "Third year, E&TC",
      email: "startup@ciphers.club",
      bio:
        "Handles prototype sprints and helps teams scope a demo they can actually finish in a weekend.",
      skills: [
        "Prototyping",
        "Market research",
        "Figma",
        "Grant writing",
      ],
      facts: [
        ["In club since", "2024"],
        ["Sprints run", "6"],
        ["Focus", "Hardware ideas"],
      ],
    },
    members: [
      { initials: "RD", name: "Rutuja Desai", year: "SY · Market research" },
      { initials: "SK", name: "Siddharth Kamat", year: "TY · Business models" },
      { initials: "AA", name: "Aman Ansari", year: "SY · Prototyping" },
      { initials: "MJ", name: "Meera Jadhav", year: "FY · Pitch decks" },
      { initials: "OP", name: "Om Pawar", year: "TY · IPR & patents" },
    ],
  },
  {
    key: "social",
    name: "Social Media",
    color: "#FF6B9A",
    tagline: "If nobody saw it, it didn't happen.",
    blurb:
      "The department that makes the rest of the club visible. It handles design, writing, photography and video for every event, keeps the club's voice consistent, and grows reach across campus and beyond.",
    points: [
      "Poster, reel and carousel design for every event",
      "Live coverage: photography and video on event days",
      "Captions, recaps and the monthly club newsletter",
      "A brand kit — colours, type and tone kept consistent",
      "Analytics reviews to see what actually reached people",
    ],
    meta: [
      ["Meets", "Wednesdays, 5:00 PM"],
      ["Room", "Studio, library annexe"],
      ["Best for", "Designers, writers, shooters"],
      ["Strength", "74 members"],
    ],
    head: {
      id: "sm-h",
      initials: "ZQ",
      name: "Zoya Qureshi",
      role: "Head — Social Media",
      color: "#FF6B9A",
      unit: "Social Media",
      year: "Third year, Computer Engineering",
      email: "media@ciphers.club",
      bio:
        "Owns the club's public voice: approves every post, plans the content calendar around the event schedule, and rebuilt the brand kit last year.",
      skills: [
        "Graphic design",
        "Copywriting",
        "Figma",
        "Content strategy",
      ],
      facts: [
        ["In club since", "2024"],
        ["Posts shipped", "140+"],
        ["Reach growth", "4× in a year"],
      ],
    },
    cohead: {
      id: "sm-c",
      initials: "AB",
      name: "Arjun Bhide",
      role: "Co-Head — Social Media",
      color: "#FF6B9A",
      unit: "Social Media",
      year: "Second year, IT",
      email: "media@ciphers.club",
      bio:
        "Shoots and edits event coverage, and runs the reels pipeline from footage to publish.",
      skills: [
        "Photography",
        "Video editing",
        "Premiere Pro",
        "Reels",
      ],
      facts: [
        ["In club since", "2025"],
        ["Events covered", "9"],
        ["Focus", "Video"],
      ],
    },
    members: [
      { initials: "KS", name: "Kavya Sharma", year: "SY · Poster design" },
      { initials: "NT", name: "Nikhil Thorat", year: "TY · Photography" },
      { initials: "SM", name: "Simran Mehta", year: "FY · Captions & copy" },
      { initials: "DG", name: "Devang Gupta", year: "SY · Newsletter" },
      { initials: "AY", name: "Ayesha Shaikh", year: "TY · Analytics" },
    ],
  },
  {
    key: "higher-ed",
    name: "Higher Education",
    color: "#FFB25B",
    tagline: "Plan the next degree early.",
    blurb:
      "A study and guidance group for members aiming at GATE, GRE, CAT or a master's abroad. It runs prep circles, reviews application material line by line, and brings back alumni who have already been through it.",
    points: [
      "Prep circles for GATE, GRE, CAT and TOEFL/IELTS",
      "SOP, LOR and résumé reviews by seniors and faculty",
      "Research paper guidance and help finding a project guide",
      "Scholarship, funding and university shortlisting sessions",
      "Alumni AMAs with members studying and working abroad",
    ],
    meta: [
      ["Meets", "Saturdays, 11:00 AM"],
      ["Room", "Library discussion room"],
      ["Best for", "2nd year onward"],
      ["Strength", "68 members"],
    ],
    head: {
      id: "he-h",
      initials: "VI",
      name: "Varun Iyer",
      role: "Head — Higher Education",
      color: "#FFB25B",
      unit: "Higher Education",
      year: "Final year, Computer Engineering",
      email: "highered@ciphers.club",
      bio:
        "Coordinates the prep circles, keeps the shared resource drive current, and has reviewed dozens of SOPs for seniors applying abroad.",
      skills: [
        "GRE prep",
        "SOP editing",
        "Research writing",
        "University shortlisting",
      ],
      facts: [
        ["In club since", "2023"],
        ["SOPs reviewed", "30+"],
        ["Alumni sessions", "6"],
      ],
    },
    cohead: {
      id: "he-c",
      initials: "PB",
      name: "Pooja Bhat",
      role: "Co-Head — Higher Education",
      color: "#FFB25B",
      unit: "Higher Education",
      year: "Third year, E&TC",
      email: "highered@ciphers.club",
      bio:
        "Runs the GATE and CAT study groups and maintains the scholarship deadline calendar.",
      skills: [
        "GATE prep",
        "Aptitude",
        "Scholarship research",
        "Study planning",
      ],
      facts: [
        ["In club since", "2024"],
        ["Study groups", "4 running"],
        ["Focus", "Domestic exams"],
      ],
    },
    members: [
      { initials: "SN", name: "Saurabh Nikam", year: "TY · GATE circle" },
      { initials: "RV", name: "Riya Verma", year: "TY · GRE circle" },
      { initials: "AK", name: "Ajinkya Kadam", year: "SY · Research papers" },
      { initials: "FS", name: "Farhan Syed", year: "TY · Scholarships" },
      { initials: "MP", name: "Manasi Pandit", year: "SY · Alumni outreach" },
    ],
  },
]

/* ================= compatibility aliases ================= */

export const leads: Member[] = [
  ...council.map((person) => ({
    name: person.name,
    role: person.role,
    initials: person.initials,
    handle:
      person.role === "President"
        ? "@president"
        : person.role === "Vice President"
          ? "@vice-president"
          : undefined,
  })),
]

/* ================= events ================= */

export const events: ClubEvent[] = [
  {
    type: "Workshop",
    date: "Mar 15, 2026",
    by: "Programming",
    title: "Guest session: life in a SOC",
    description:
      "An industry security analyst walked members through real incident response and blue-team workflows, then ran a live triage exercise on sample logs.",
    figs: [
      ["Attendees", "120"],
      ["Duration", "3 hrs"],
      ["Speaker", "1 industry guest"],
    ],
    status: "past",
  },
  {
    type: "Hackathon",
    date: "Feb 08, 2026",
    by: "Programming",
    title: "CipherHack 2.0",
    description:
      "A 24-hour campus hackathon across four problem tracks, judged by faculty and two alumni working in product teams.",
    figs: [
      ["Teams", "38"],
      ["Projects shipped", "31"],
      ["Prize pool", "₹25,000"],
    ],
    status: "past",
  },
  {
    type: "Bootcamp",
    date: "Jan 20, 2026",
    by: "Programming",
    title: "DSA bootcamp for first years",
    description:
      "A five-day crash course on arrays, strings, recursion and complexity, ending with a timed in-house contest.",
    figs: [
      ["Attendees", "85"],
      ["Days", "5"],
      ["Contest entries", "62"],
    ],
    status: "past",
  },
  {
    type: "Pitch night",
    date: "Dec 05, 2025",
    by: "Start-up and Innovation",
    title: "Founders' table",
    description:
      "Six member teams pitched working prototypes to a panel of two founders and the incubation cell head; two were shortlisted for further mentoring.",
    figs: [
      ["Teams pitched", "6"],
      ["Panelists", "3"],
      ["Shortlisted", "2"],
    ],
    status: "past",
  },
  {
    type: "Workshop",
    date: "Nov 12, 2025",
    by: "Social Media",
    title: "Design for clubs: posters that get read",
    description:
      "A hands-on Figma session on layout, hierarchy and export settings, run for content teams across five campus clubs.",
    figs: [
      ["Attendees", "70"],
      ["Clubs joined", "5"],
      ["Posters made", "40+"],
    ],
    status: "past",
  },
  {
    type: "Guest session",
    date: "Oct 18, 2025",
    by: "Higher Education",
    title: "MS abroad: the honest timeline",
    description:
      "Three alumni currently studying overseas broke down application timelines, funding, and what they would do differently.",
    figs: [
      ["Attendees", "95"],
      ["Alumni", "3"],
      ["Q&A", "45 min"],
    ],
    status: "past",
  },
  {
    type: "CTF",
    date: "Sep 27, 2025",
    by: "Programming",
    title: "CryptoQuest — inter-year CTF",
    description:
      "An overnight capture-the-flag with cryptography, forensics and web exploitation challenges authored by the senior members.",
    figs: [
      ["Teams", "44"],
      ["Challenges", "26"],
      ["Hours", "12"],
    ],
    status: "past",
  },
  {
    type: "Orientation",
    date: "Aug 30, 2025",
    by: "All departments",
    title: "Induction & department fair",
    description:
      "Each department set up a table, demoed its work and signed up new members; the club crossed 300 members that week.",
    figs: [
      ["Sign-ups", "210"],
      ["Departments", "4"],
      ["Demos", "11"],
    ],
    status: "past",
  },
  {
    type: "Workshop",
    date: "Sep 26, 2026",
    by: "Programming",
    title: "Intro to ethical hacking",
    description:
      "A beginner-friendly walk through reconnaissance, common web vulnerabilities and responsible disclosure.",
    figs: [
      ["Seats", "80"],
      ["Level", "Beginner"],
      ["Bring", "Laptop"],
    ],
    status: "upcoming",
  },
  {
    type: "Hackathon",
    date: "Oct 11, 2026",
    by: "Programming",
    title: "CryptoQuest CTF",
    description:
      "An overnight capture-the-flag built around cryptography, forensics and web exploitation.",
    figs: [
      ["Team size", "2–4"],
      ["Hours", "12"],
      ["Entry", "Free"],
    ],
    status: "upcoming",
  },
  {
    type: "Pitch night",
    date: "Nov 02, 2026",
    by: "Start-up and Innovation",
    title: "Idea to prototype in 48 hours",
    description:
      "Teams build a working demo over a weekend and pitch to a panel of founders and faculty.",
    figs: [
      ["Team size", "3–5"],
      ["Hours", "48"],
      ["Panel", "4 judges"],
    ],
    status: "upcoming",
  },
  {
    type: "Guest session",
    date: "Nov 20, 2026",
    by: "Higher Education",
    title: "Applying abroad without an agent",
    description:
      "Alumni now at foreign universities break down timelines, funding and what actually goes into an SOP.",
    figs: [
      ["Seats", "100"],
      ["Alumni", "4"],
      ["Format", "Talk + Q&A"],
    ],
    status: "upcoming",
  },
]

export const pastEvents = events.filter((event) => event.status === "past")
export const upcomingEvents = events.filter((event) => event.status === "upcoming")

/* ================= achievements ================= */

export const achievements = [
  {
    value: "12+",
    label: "Events hosted",
    detail: "Workshops, CTFs & sessions",
  },
  {
    value: "300+",
    label: "Active members",
    detail: "Across all engineering years",
  },
  {
    value: "Top 10",
    label: "Inter-college CTF finish",
    detail: "Regional security contest",
  },
  {
    value: "6",
    label: "Expert sessions",
    detail: "With industry & alumni",
  },
]

export const highlights = [
  "Placed in the top 10 at a regional inter-college CTF competition.",
  "Grew from a handful of enthusiasts to 300+ active members in a year.",
  "Hosted 6 expert sessions with security professionals and alumni.",
  "Ran a semester-long secure coding mentorship for first-year students.",
]

/* ================= gallery ================= */

export const gallery = [
  {
    src: "/gallery/ctf-hackathon.png",
    alt: "Students competing at a capture-the-flag hackathon",
  },
  {
    src: "/gallery/workshop.png",
    alt: "Cybersecurity workshop in a seminar hall",
  },
  {
    src: "/gallery/expert-session.png",
    alt: "Expert guest lecture on ethical hacking",
  },
  {
    src: "/gallery/team-collab.png",
    alt: "Student team collaborating on a project",
  },
  {
    src: "/gallery/award.png",
    alt: "Members receiving an award on stage",
  },
  {
    src: "/gallery/network-lab.png",
    alt: "Close-up of a networking and security lab setup",
  },
]

/* ================= footer ================= */

export const footer = {
  bigText: "CIPHERS",
  heading: "Ready to join the club?",
  subheading:
    "Whether you break ciphers, ship code, or just got curious — there's a seat for you. No experience required, all branches welcome.",
  marquee: [
    "Cryptography Workshops",
    "Cybersecurity Sessions",
    "Hackathons & CTFs",
    "Coding Culture",
    "Open to All Branches",
  ],
  ctas: [
    {
      label: "Join the Club",
      href: "#contact",
      variant: "primary" as const,
    },
    {
      label: "View Events",
      href: "#events",
      variant: "secondary" as const,
    },
  ],
  links: [
    {
      label: "Instagram",
      href: "https://instagram.com",
    },
    {
      label: "GitHub",
      href: "https://github.com",
    },
    {
      label: "Contact",
      href: "#contact",
    },
  ],
  credit: {
    label: "Crafted by the CIPHERS core team",
    href: "#home",
  },
}

/* ================= navigation ================= */

export const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Events", href: "#events" },
  { label: "Team", href: "#team" },
  { label: "Wins", href: "#achievements" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
]
