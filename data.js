/* ============================================================
   ioniapara.com — single source of truth for all content
   ============================================================
   To add new content, prepend a new object to the relevant array.
   The site renders everything from here automatically.
   ============================================================ */

const SITE = {

  /* ----------------------------------------------------------
     LOG
     tags: any combination of 'ship' | 'start' | 'write' | 'join' | 'life' | 'side'
     link: URL — for write entries links the full title,
                 for side projects links the leading name (before ' — ')
     linkedPart: (optional) if only part of the title should be linked
  ---------------------------------------------------------- */
  log: [
    {
      date: '2026-06',
      tags: ['ship'],
      title: 'merging two core products into one platform · 9+ engineers'
    },
    {
      date: '2026-06',
      tags: ['ship'],
      title: 'launched personal site',
      desc: 'first version live — minimal monospace, no js frameworks. plain html + css.'
    },
    {
      date: '2026-04',
      tags: ['start', 'side'],
      title: 'began "last 100 meters of navigation" problem validation · 12 berlin studios'
    },
    {
      date: '2026-02',
      tags: ['ship'],
      title: 'llm-powered summarization, live at mrge'
    },
    {
      date: '2025-10',
      tags: ['start', 'side'],
      title: 'virtual scenic runs — youtube channel on immersive runs',
      link: 'https://www.youtube.com/@VirtualScenicRuns',
      linkedPart: 'virtual scenic runs'
    },
    {
      date: '2025-08',
      tags: ['write'],
      title: '"re-learning product discovery"',
      link: 'https://medium.com/design-bootcamp/re-learning-product-discovery-aac5aae0d14e'
    },
    {
      date: '2025-07',
      tags: ['ship'],
      title: 'shipped mvp for a strategic initiative · onboarded 20 new customers'
    },
    {
      date: '2025-04',
      tags: ['ship'],
      title: 'built customer-focused apis · enabled enterprise upsell'
    },
    {
      date: '2025-03',
      tags: ['write'],
      title: '"how to bring structure to a chaotic project in jira"',
      link: 'https://medium.com/@ion.iapara/how-to-bring-structure-to-a-chaotic-project-in-jira-676cf6e053c7'
    },
    {
      date: '2025-03',
      tags: ['write'],
      title: '"lovable vs v0 — prompting capabilities"',
      link: 'https://medium.com/design-bootcamp/lovable-vs-v0-prompting-capabilities-0a9e98250df5'
    },
    {
      date: '2025-02',
      tags: ['write'],
      title: '"build an mvp on replit under $10"',
      link: 'https://medium.com/@ion.iapara/build-an-mvp-on-replit-under-10-2644815b1207'
    },
    {
      date: '2025-01',
      tags: ['ship'],
      title: 'built internal tooling that cleared commercial bottlenecks'
    },
    {
      date: '2024-12',
      tags: ['ship'],
      title: 'billing migration unblocked · 60+ networks, shipped in 2 months'
    },
    {
      date: '2024-11',
      tags: ['join'],
      title: 'promoted to product manager at mrge'
    },
    {
      date: '2024-09',
      tags: ['ship'],
      title: 'shipped customer self-service · designed the mockups myself'
    },
    {
      date: '2024-08',
      tags: ['start', 'side'],
      title: 'artfully.ro — minimalist physical maps, ~20 sold via emag',
      linkedPart: 'artfully.ro'
    },
    {
      date: '2024-04',
      tags: ['ship'],
      title: 'commission coverage 20% → 90% across 60+ network apis'
    },
    {
      date: '2023-11',
      tags: ['join'],
      title: 'mrge group as a junior product manager'
    },
    {
      date: '2023-10',
      tags: ['write'],
      title: '"how i learned figma through a challenge"',
      link: 'https://medium.com/design-bootcamp/how-i-learned-figma-through-a-challenge-as-a-product-manager-9200ec261517'
    },
    {
      date: '2023-09',
      tags: ['start', 'side'],
      title: 'itinera — plan your trip in seconds',
      link: 'https://itinera.world/',
      linkedPart: 'itinera'
    },
    {
      date: '2023-07',
      tags: ['ship'],
      title: 'ga4 migration live across 8 markets'
    },
    {
      date: '2023-03',
      tags: ['ship'],
      title: 'rebuilt the questionnaire builder in 3 weeks'
    },
    {
      date: '2022-10',
      tags: ['join'],
      title: 'audibene as a product manager'
    },
    {
      date: '2022-06',
      tags: ['join'],
      title: 'le wagon — web development bootcamp in berlin'
    },
    {
      date: '2021-02',
      tags: ['join'],
      title: 'lemonone as a business development manager'
    },
    {
      date: '2020-09',
      tags: ['life'],
      title: 'moved to berlin for the startup scene'
    },
    {
      date: '~2013',
      tags: ['life'],
      title: 'medaled at the national junior championship · 1500m, 5k, 10k'
    },
    {
      date: '—',
      tags: ['life'],
      title: 'grew up in a small village in moldova'
    }
  ],

  /* ----------------------------------------------------------
     PROJECTS
     statusKey: 'active' | 'parked' | 'deprecated'
     link: URL for the project title, or null
     homeDesc: short version shown on homepage, or null to hide from homepage
  ---------------------------------------------------------- */
  projects: [
    {
      year: '2026',
      name: 'usha',
      type: 'web application',
      status: 'validation phase',
      statusKey: 'active',
      desc: 'solving the last 100 meters of navigation — helping people find businesses tucked away in berlin\'s hinterhöfe, where maps usually give up.',
      impact: 'working on v1',
      link: null,
      homeDesc: 'solving the last 100 meters of navigation in berlin\'s hinterhöfe.'
    },
    {
      year: '2025',
      name: 'virtual scenic runs',
      type: 'youtube channel',
      status: 'active',
      statusKey: 'active',
      desc: 'immersive running videos from places i travel to and explore on foot. a way to share the routes i run.',
      impact: '10+ videos · ~160 subscribers',
      link: 'https://www.youtube.com/@VirtualScenicRuns',
      homeDesc: 'immersive running videos from places i explore on foot.'
    },
    {
      year: '2024',
      name: 'artfully.ro',
      type: 'webflow website',
      status: 'deprecated',
      statusKey: 'deprecated',
      desc: 'a minimalist physical maps store in romania. validated demand on a local marketplace first, then built the shop in webflow.',
      impact: '~20 sales',
      link: null,
      homeDesc: null
    },
    {
      year: '2023',
      name: 'itinera',
      type: 'chrome extension',
      status: 'parked',
      statusKey: 'parked',
      desc: 'a chrome extension that helps travelers plan a trip in seconds, straight into google calendar, using llms.',
      impact: '~300 active users',
      link: 'https://itinera.world/',
      homeDesc: 'chrome extension to plan a trip in seconds using llms.'
    }
  ],

  /* ----------------------------------------------------------
     WRITING
     All articles, newest first.
  ---------------------------------------------------------- */
  writing: [
    {
      date: '2025-08',
      title: 're-learning product discovery',
      desc: 'I went back to first principles on product discovery, rebuilding my approach from scratch rather than relying on accumulated habits. A reset on how I find and validate the right problems to solve.',
      link: 'https://medium.com/design-bootcamp/re-learning-product-discovery-aac5aae0d14e'
    },
    {
      date: '2025-03',
      title: 'how to bring structure to a chaotic project in jira',
      desc: 'A practical playbook for the messy, cross-functional projects PMs often get pulled into beyond their core remit. How I turned scattered work into something organized and trackable in Jira.',
      link: 'https://medium.com/@ion.iapara/how-to-bring-structure-to-a-chaotic-project-in-jira-676cf6e053c7'
    },
    {
      date: '2025-03',
      title: 'lovable vs v0 — prompting capabilities',
      desc: 'A hands-on comparison of the two leading AI tools for building beautiful websites, focused specifically on how each handles prompting. Where each one shines and where it falls short.',
      link: 'https://medium.com/design-bootcamp/lovable-vs-v0-prompting-capabilities-0a9e98250df5'
    },
    {
      date: '2025-02',
      title: 'build an mvp on replit under $10',
      desc: 'Replit can get expensive fast, so I worked out how to stretch the monthly credits and ship a working MVP on a tight budget. A guide to making the most of what you\'ve got.',
      link: 'https://medium.com/@ion.iapara/build-an-mvp-on-replit-under-10-2644815b1207'
    },
    {
      date: '2023-10',
      title: 'how i learned figma through a challenge',
      desc: 'As a product manager, I set myself a challenge to replicate well-known apps and leveled up my Figma prototyping skills along the way. A practical route to better design chops without a formal course.',
      link: 'https://medium.com/design-bootcamp/how-i-learned-figma-through-a-challenge-as-a-product-manager-9200ec261517'
    }
  ]

};
