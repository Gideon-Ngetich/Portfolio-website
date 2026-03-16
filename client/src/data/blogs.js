export const blogs = [
  {
    slug: 'cisco-router-basic-configuration',
    title: "Basic Configuration of a Cisco Router: A Beginner's Guide",
    description:
      'Cisco routers are powerful devices that form the backbone of many networks. Configuring a Cisco router for the first time might seem intimidating, but this guide breaks it down step by step.',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnehkZRNAkreoME3BnCO7mINj7pn2wA6tgiw&s',
    date: 'Nov 21, 2024',
    tags: ['Configuration', 'Networks', 'Cisco'],
    content: {
      intro:
        'Cisco routers are central to modern networking. Once you understand the basic setup flow, deployment and troubleshooting become much easier.',
      sections: [
        {
          heading: 'Step 1: Access and Privileged Mode',
          paragraphs: [
            'Connect through console for initial setup. After login, move from user mode to privileged mode with enable.',
            'This gives access to verification commands and the path into global configuration mode.',
          ],
        },
        {
          heading: 'Step 2: Secure the Device',
          paragraphs: [
            'Set hostnames and secure access with strong passwords for console and vty lines.',
            'Disable unused services where possible and use secret passwords over plain text when supported.',
          ],
          bullets: [
            'hostname Branch-R1',
            'enable secret <strong-password>',
            'line console 0 + login local',
          ],
        },
        {
          heading: 'Step 3: Configure Interfaces',
          paragraphs: [
            'Assign IP addresses to active interfaces and bring them up using no shutdown.',
            'Validate with show ip interface brief and test connectivity using ping.',
          ],
        },
        {
          heading: 'Step 4: Save and Verify',
          paragraphs: [
            'Use copy running-config startup-config to persist changes.',
            'Always verify route tables, interface status, and management access before handing over.',
          ],
        },
      ],
    },
  },
  {
    slug: 'build-rest-api-node-express',
    title: 'How to Build a REST API with Node.js and Express',
    description:
      'A practical walkthrough for building clean REST APIs with routing, middleware, validation, and error handling best practices.',
    image:
      'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1200&q=80',
    date: 'Jan 08, 2025',
    tags: ['Node.js', 'Express', 'API'],
    content: {
      intro:
        'A good API is predictable, validated, and easy to maintain. Node.js with Express is a solid stack for this.',
      sections: [
        {
          heading: 'Project Structure First',
          paragraphs: [
            'Start with clear folders: routes, controllers, services, middlewares, and validators.',
            'Separation of concerns keeps your code easy to test and scale.',
          ],
        },
        {
          heading: 'Routing and Controllers',
          paragraphs: [
            'Keep routes thin and move business logic into controllers/services.',
            'Each endpoint should have a single responsibility and clear request/response shape.',
          ],
        },
        {
          heading: 'Validation and Error Handling',
          paragraphs: [
            'Validate incoming payloads before processing to prevent bad data entering your system.',
            'Use centralized error middleware so responses are consistent across endpoints.',
          ],
          bullets: [
            'Return 400 for validation errors',
            'Return 404 for missing resources',
            'Return 500 for unhandled server errors',
          ],
        },
        {
          heading: 'Security and Production Readiness',
          paragraphs: [
            'Add rate limiting, helmet, CORS policy, and environment-based configs.',
            'Log requests and errors, and set up health-check endpoints for monitoring.',
          ],
        },
      ],
    },
  },
  {
    slug: 'react-performance-tips-real-world',
    title: 'React Performance Tips for Real-World Projects',
    description:
      'Learn how to optimize rendering with memoization, code-splitting, lazy loading, and better state management patterns in React apps.',
    image:
      'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=1200&q=80',
    date: 'Feb 14, 2025',
    tags: ['React', 'Performance', 'Frontend'],
    content: {
      intro:
        'Performance problems in React are usually caused by unnecessary renders and oversized bundles.',
      sections: [
        {
          heading: 'Measure Before Optimizing',
          paragraphs: [
            'Use React DevTools Profiler to identify expensive re-renders.',
            'Optimize based on evidence, not assumptions.',
          ],
        },
        {
          heading: 'Memoization Patterns',
          paragraphs: [
            'Use React.memo for pure components and useMemo/useCallback for stable values and handlers.',
            'Avoid overusing memoization; apply it only where profiling shows gains.',
          ],
        },
        {
          heading: 'Bundle and Asset Optimization',
          paragraphs: [
            'Split routes with lazy loading and optimize large images before shipping.',
            'Prefer dynamic imports for heavy, rarely used features.',
          ],
        },
        {
          heading: 'State Management Discipline',
          paragraphs: [
            'Keep state close to where it is used. Avoid global state for local UI interactions.',
            'Normalize and derive state where possible to reduce complexity.',
          ],
        },
      ],
    },
  },
  {
    slug: 'typescript-for-javascript-developers',
    title: 'TypeScript for JavaScript Developers',
    description:
      'A friendly introduction to static typing, interfaces, generics, and how TypeScript improves code quality in modern web projects.',
    image:
      'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80',
    date: 'Mar 02, 2025',
    tags: ['TypeScript', 'JavaScript', 'Code Quality'],
    content: {
      intro:
        'TypeScript helps catch errors earlier and improves maintainability in growing codebases.',
      sections: [
        {
          heading: 'Start Small and Incremental',
          paragraphs: [
            'Rename one file at a time and enable strict mode gradually if needed.',
            'Use inferred types first before introducing advanced patterns.',
          ],
        },
        {
          heading: 'Interfaces and Types',
          paragraphs: [
            'Model API payloads and component props with interfaces/types for predictable contracts.',
            'This improves editor autocomplete and reduces runtime surprises.',
          ],
        },
        {
          heading: 'Generics in Practice',
          paragraphs: [
            'Generics make reusable utilities safer without sacrificing flexibility.',
            'They are especially useful in hooks, data utilities, and API helpers.',
          ],
        },
        {
          heading: 'Common Migration Pitfalls',
          paragraphs: [
            'Avoid any as a shortcut. Use unknown with proper narrowing when necessary.',
            'Treat compiler errors as guidance to improve contracts and data flow.',
          ],
        },
      ],
    },
  },
  {
    slug: 'git-github-workflow-developers',
    title: 'Git and GitHub Workflow Every Developer Should Know',
    description:
      'Master branching, pull requests, rebasing, and collaborative practices that make team development smoother and safer.',
    image:
      'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&w=1200&q=80',
    date: 'Apr 10, 2025',
    tags: ['Git', 'GitHub', 'Collaboration'],
    content: {
      intro:
        'A reliable Git workflow reduces merge conflicts and makes releases predictable.',
      sections: [
        {
          heading: 'Branching Strategy',
          paragraphs: [
            'Use short-lived feature branches named by scope or ticket ID.',
            'Rebase or merge from main regularly to reduce drift.',
          ],
        },
        {
          heading: 'Commit Hygiene',
          paragraphs: [
            'Write clear, scoped commit messages and avoid mixing unrelated changes.',
            'Small commits improve review quality and rollback confidence.',
          ],
        },
        {
          heading: 'Pull Request Best Practices',
          paragraphs: [
            'Include summary, test notes, and screenshots for UI changes.',
            'Request review early for architecture-heavy work to catch issues sooner.',
          ],
        },
        {
          heading: 'Safe Integration',
          paragraphs: [
            'Protect main branch with required checks and reviews.',
            'Squash merge when helpful to keep history clean and understandable.',
          ],
        },
      ],
    },
  },
  {
    slug: 'database-design-fundamentals-developers',
    title: 'Database Design Fundamentals for Developers',
    description:
      'Understand normalization, relationships, indexing, and query optimization to design scalable SQL and NoSQL databases.',
    image:
      'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=1200&q=80',
    date: 'May 06, 2025',
    tags: ['Database', 'SQL', 'NoSQL'],
    content: {
      intro:
        'Good database design prevents performance and data consistency issues later in the project lifecycle.',
      sections: [
        {
          heading: 'Model Around Access Patterns',
          paragraphs: [
            'Design tables/collections based on common queries, not only on theory.',
            'Understand read-heavy vs write-heavy operations before finalizing schema.',
          ],
        },
        {
          heading: 'Relationships and Constraints',
          paragraphs: [
            'Use foreign keys and constraints where consistency matters.',
            'Document cardinality clearly to avoid ambiguous joins and duplicated data.',
          ],
        },
        {
          heading: 'Indexing Strategy',
          paragraphs: [
            'Index frequently filtered and joined columns, but avoid excessive indexing.',
            'Use explain plans to validate query performance.',
          ],
        },
        {
          heading: 'Query and Maintenance Practices',
          paragraphs: [
            'Avoid SELECT * in production queries and paginate large datasets.',
            'Track slow queries and tune iteratively based on production metrics.',
          ],
        },
      ],
    },
  },
];

export const getBlogBySlug = (slug) => blogs.find((blog) => blog.slug === slug);
