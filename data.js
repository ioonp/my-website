/* ============================================================
   ioniapara.com — single source of truth for all content
   ============================================================
   To add new content, prepend a new object to the relevant array.
   The site renders everything from here automatically.
   ============================================================ */

const SITE = {

  /* ----------------------------------------------------------
     LOG
     tags:  'ship' | 'write' | 'life'  (or empty [])
     track: 'mrge' | 'audibene' | 'lemonone' | 'le wagon' | 'side' | 'life' | null
            — shown as a label under the date; null = no label (write entries)
     link:  URL — links the full title (write) or linkedPart (side projects)
     linkedPart: (optional) only this portion of the title gets the link
  ---------------------------------------------------------- */
  log: [
    {
      date: '2026-06',
      tags: ['ship'],
      track: 'mrge',
      title: 'merging two core products into one platform · 9+ engineers',
      desc: 'leading a platform consolidation: owning the prd, design, and cross-team requirements to unify two b2b products into one.'
    },
    {
      date: '2026-06',
      tags: ['ship'],
      track: 'side',
      title: 'launched personal site',
      desc: 'first version live — minimal monospace, no js frameworks, plain html + css.'
    },
    {
      date: '2026-04',
      tags: [],
      track: 'side',
      title: 'began "last 100 meters of navigation" problem validation · 12 berlin studios',
      desc: 'validating wayfinding concept (usha) solving the final stretch of indoor/courtyard navigation.'
    },
    {
      date: '2026-02',
      tags: ['ship'],
      track: 'mrge',
      title: 'llm-powered summarization, live at mrge',
      desc: 'shipped an llm feature to production that auto-summarizes commission rates for users.'
    },
    {
      date: '2025-10',
      tags: [],
      track: 'side',
      title: 'started virtual scenic runs — youtube channel on immersive runs',
      link: 'https://www.youtube.com/@VirtualScenicRuns',
      linkedPart: 'virtual scenic runs',
      desc: 'launched a youtube channel pairing scenic footage with running — a personal product/content experiment.'
    },
    {
      date: '2025-08',
      tags: ['write'],
      track: null,
      title: '"re-learning product discovery"',
      link: 'https://medium.com/design-bootcamp/re-learning-product-discovery-aac5aae0d14e',
      desc: 'medium article reflecting on modern product discovery practice and a push to significantly improve the approach.'
    },
    {
      date: '2025-07',
      tags: ['ship'],
      track: 'mrge',
      title: 'shipped mvp for a strategic initiative · onboarded 20 new customers',
      desc: 'took a priority initiative from zero to launch and onboarded 20 new customers onto it.'
    },
    {
      date: '2025-04',
      tags: ['ship'],
      track: 'mrge',
      title: 'built customer-focused apis · enabled enterprise upsell',
      desc: 'designed and shipped customer-facing apis that opened up enterprise upsell revenue.'
    },
    {
      date: '2025-03',
      tags: ['write'],
      track: null,
      title: '"how to bring structure to a chaotic project in jira"',
      link: 'https://medium.com/@ion.iapara/how-to-bring-structure-to-a-chaotic-project-in-jira-676cf6e053c7',
      desc: 'medium article on organizing and running a messy, complex project in jira.'
    },
    {
      date: '2025-03',
      tags: ['write'],
      track: null,
      title: '"lovable vs v0 — prompting capabilities"',
      link: 'https://medium.com/design-bootcamp/lovable-vs-v0-prompting-capabilities-0a9e98250df5',
      desc: 'medium article comparing two ai prototyping tools (lovable and v0) on how well they handle prompting.'
    },
    {
      date: '2025-02',
      tags: ['write'],
      track: null,
      title: '"build an mvp on replit under $10"',
      link: 'https://medium.com/@ion.iapara/build-an-mvp-on-replit-under-10-2644815b1207',
      desc: 'medium article showing how to ship a working mvp cheaply using replit.'
    },
    {
      date: '2025-01',
      tags: ['ship'],
      track: 'mrge',
      title: 'built internal tooling that cleared commercial bottlenecks',
      desc: 'built internal tools that removed blockers slowing down the commercial side of the business.'
    },
    {
      date: '2024-12',
      tags: ['ship'],
      track: 'mrge',
      title: 'billing migration unblocked · 60+ networks, shipped in 2 months',
      desc: 'took over a stalled project and led migration across 60+ partner networks, delivered in two months.'
    },
    {
      date: '2024-11',
      tags: [],
      track: 'mrge',
      title: 'promoted to pm at mrge',
      desc: 'moved up from junior pm to product manager.'
    },
    {
      date: '2024-09',
      tags: ['ship'],
      track: 'mrge',
      title: 'shipped customer self-service · designed the mockups myself',
      desc: 'launched a customer self-service feature, doing the ux/design work (figma mockups) myself alongside the pm role.'
    },
    {
      date: '2024-08',
      tags: [],
      track: 'side',
      title: 'launched artfully.ro — minimalist physical maps, ~20 sold via emag',
      linkedPart: 'artfully.ro',
      desc: 'side venture selling minimalist physical map prints; sold ~20 units via emag (romania\'s main marketplace) and a webflow site i built. now archived.'
    },
    {
      date: '2024-04',
      tags: ['ship'],
      track: 'mrge',
      title: 'commission coverage 20% → 90% across 60+ network apis',
      desc: 'raised affiliate commission data coverage from 20% to 90% across 60+ partner network apis.'
    },
    {
      date: '2023-11',
      tags: [],
      track: 'mrge',
      title: 'joined mrge as junior pm',
      desc: 'started at mrge (b2b affiliate/adtech platform) as a junior product manager.'
    },
    {
      date: '2023-10',
      tags: ['write'],
      track: null,
      title: '"how i learned figma through a challenge"',
      link: 'https://medium.com/design-bootcamp/how-i-learned-figma-through-a-challenge-as-a-product-manager-9200ec261517',
      desc: 'medium article on teaching myself figma via a structured design challenge.'
    },
    {
      date: '2023-09',
      tags: [],
      track: 'side',
      title: 'built itinera — chrome extension for trip planning with llms',
      link: 'https://itinera.world/',
      linkedPart: 'itinera',
      desc: 'built and shipped a chrome extension that uses llms to plan trips — reached ~290 weekly users.'
    },
    {
      date: '2023-07',
      tags: ['ship'],
      track: 'mrge',
      title: 'ga4 migration live across 8 markets',
      desc: 'led the migration to google analytics 4 across 8 country markets.'
    },
    {
      date: '2023-03',
      tags: ['ship'],
      track: 'mrge',
      title: 'rebuilt the questionnaire builder in 3 weeks',
      desc: 'rebuilt a core questionnaire-builder product in three weeks.'
    },
    {
      date: '2022-10',
      tags: [],
      track: 'audibene',
      title: 'joined audibene as pm',
      desc: 'product manager at audibene, a consumer hearing-care company operating across 8 markets.'
    },
    {
      date: '2022-06',
      tags: [],
      track: 'le wagon',
      title: 'le wagon — web development bootcamp in berlin',
      desc: 'completed le wagon, an intensive full-stack web development bootcamp, and a product manager nanodegree with udacity.'
    },
    {
      date: '2021-02',
      tags: [],
      track: 'lemonone',
      title: 'joined lemonone as bdm',
      desc: 'business development manager at lemonone, a marketplace startup connecting photographers with brands.'
    },
    {
      date: '2020-09',
      tags: ['life'],
      track: 'life',
      title: 'moved to berlin for the startup scene',
      desc: 'relocated to berlin to be in its startup ecosystem.'
    },
    {
      date: '~2013',
      tags: ['life'],
      track: 'life',
      title: 'medaled at the national junior championship · 1500m, 5k, 10k',
      desc: 'competitive middle-distance runner — medaled at national junior level across 1500m, 5k, and 10k.'
    },
    {
      date: '—',
      tags: ['life'],
      track: 'life',
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
