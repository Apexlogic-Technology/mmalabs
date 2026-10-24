const fs = require('fs');
const vm = require('vm');
const path = require('path');

const source = fs.readFileSync('dist/app.js', 'utf8')
  .split('document.body.innerHTML=shell();')[0];
const context = {
  URLSearchParams,
  location: { search: '' },
  console
};

vm.createContext(context);
vm.runInContext(`${source};globalThis.site={pages,inner,home};`, context);

const { pages, inner, home } = context.site;
const newsArticles = JSON.parse(fs.readFileSync('dist/news-data.json', 'utf8'));
const aliasPages = {
  'book-an-appointment-1': {
    title: pages['book-appointment'][0],
    description: pages['book-appointment'][1]
  },
  '18758-2': {
    title: pages.branches[0],
    description: pages.branches[1]
  },
  analysis: { title: pages.tests[0], description: pages.tests[1] },
  blog1: { title: pages.news[0], description: pages.news[1] },
  'digital-x-ray': {
    title: 'Digital X-ray.',
    description: 'Explore digital X-ray imaging and other diagnostic services.'
  },
  'dna-testing-center': { title: pages['dna-testing'][0], description: pages['dna-testing'][1] },
  contacts: { title: pages.contact[0], description: pages.contact[1] },
  'faqs-1': { title: pages.faqs[0], description: pages.faqs[1] },
  signin: { title: pages['view-report'][0], description: pages['view-report'][1] },
  career: { title: pages.careers[0], description: pages.careers[1] }
};
const coursePages = {
  'course-category/cpd-training': {
    title: 'CPD Training.',
    description: 'Browse MMALABS continuing professional development courses on integrated management systems and ISO standards.'
  },
  'course-category/professional-training': {
    title: 'Professional training.',
    description: 'Explore the MMALABS career-path masterclass for laboratory professionals.'
  },
  'courses/practical-understanding-the-iso-standards-integrated-management-system-main': {
    title: 'PRACTICAL UNDERSTANDING THE ISO STANDARDS – INTEGRATED MANAGEMENT SYSTEM – MAIN',
    description: 'Understand integrated management systems, environmental management and ISO standards through five recorded training sessions.'
  },
  'courses/practical-understanding-the-iso-standards-integrated-management-system': {
    title: 'PRACTICAL UNDERSTANDING THE ISO STANDARDS – INTEGRATED MANAGEMENT SYSTEM',
    description: 'Explore the integrated management system course, its ISO 14001 and ISO 9001 curriculum, and the available introductory lesson.'
  },
  'courses/practical-understanding-the-iso-standards-integrated-management-system/course/introduction-to-ims-ems-iso-14001-2015': {
    title: 'Introduction to IMS & EMS – ISO 14001 2015',
    description: 'Introduction to integrated management systems and environmental management systems under ISO 14001:2015.'
  },
  'courses/masterclass-career-path-for-laboratory-professionals': {
    title: 'MASTERCLASS – CAREER PATH FOR LABORATORY PROFESSIONALS',
    description: 'A panel discussion sharing guidance and mentorship on career paths for laboratory professionals.'
  }
};
for (const [route, page] of Object.entries(coursePages)) {
  pages[route] = [page.title, page.description];
}
const guidePages = {
  'news/preparing-for-a-test': {
    title: 'Getting ready for your blood test.',
    description: 'Practical steps to prepare for a blood test and confirm instructions with your branch.'
  },
  'news/understanding-your-report': {
    title: 'Your report. Your next step.',
    description: 'Keep your report details private and discuss results with a healthcare professional.'
  }
};
const articlePages = Object.fromEntries(newsArticles.map(article => [
  `news/${article.slug}`,
  { title: article.title, description: article.summary || article.title }
]));
const articleAliases = {
  'vitamins-and-trace-elements-how-to-check-and-replenish-the-body':
    articlePages['news/vitamins-and-trace-elements-how-to-check-and-replenish-the']
};
const routes = [
  ...Object.keys(pages),
  ...Object.keys(guidePages),
  ...Object.keys(articlePages),
  ...Object.keys(articleAliases),
  ...Object.keys(aliasPages)
];
const escapeHtml = value => String(value).replace(/[&<>"']/g, character => ({
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;'
})[character]);
const fallback = `<noscript><main class="noscript-message">
  <h1>We can still help.</h1>
  <p>This website's interactive pages need JavaScript. For appointments, service availability, prices or report access, use contact details on your referral or official MMALABS materials.</p>
  <p>Do not share report credentials or health records through this website.</p>
</main></noscript>`;
const template = fs.readFileSync('dist/index.html', 'utf8')
  .replace(/<noscript>[\s\S]*?<\/noscript>/, fallback);

fs.writeFileSync('dist/index.html', template);

for (const route of routes) {
  const content = inner(route);
  if (!content.includes('<h1') || content.includes('undefined')) {
    throw new Error(`Invalid route template: ${route}`);
  }

  const page = guidePages[route] || articlePages[route] || articleAliases[route] || aliasPages[route];
  const title = page?.title || pages[route][0];
  const description = page?.description || pages[route][1];
  const html = template
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${escapeHtml(title)} | MMALABS</title>`)
    .replace(
      /<meta name="description" content="[^"]*">/,
      `<meta name="description" content="${escapeHtml(description)}">`
    );

  const output = path.join('dist', route, 'index.html');
  fs.mkdirSync(path.dirname(output), { recursive: true });
  fs.writeFileSync(output, html);
}

if (!home().includes('hero-search')) {
  throw new Error('Homepage is missing the test search.');
}

fs.writeFileSync('dist/404.html', `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Page not found | MMALABS</title>
  <meta name="description" content="The page you requested could not be found.">
  <meta name="robots" content="noindex">
  <meta name="theme-color" content="#063F8B">
  <link rel="icon" type="image/png" href="/assets/mmalabs-logo.png">
  <link rel="stylesheet" href="/style.css">
  <link rel="stylesheet" href="/people-programs.css">
</head>
<body>
  <main class="not-found">
    <p class="eyebrow">404 / Page not found</p>
    <h1>This page isn't here.</h1>
    <p>Check the address, or choose a page to continue.</p>
    <nav aria-label="Suggested pages">
      <a class="btn blue" href="/">Home</a>
      <a class="btn" href="/tests/">Explore tests</a>
      <a class="btn outline" href="/branches/">Find a branch</a>
      <a class="textlink" href="/contact/">Contact MMALABS</a>
    </nav>
  </main>
</body>
</html>`);

console.log(`Validated and generated ${routes.length} route pages and a standalone 404 page.`);
