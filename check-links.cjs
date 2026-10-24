const fs = require('fs');
const vm = require('vm');

const source = fs.readFileSync('dist/app.js', 'utf8')
  .split('document.body.innerHTML=shell();')[0];
const context = {
  URLSearchParams,
  location: { search: '' },
  console
};

vm.createContext(context);
vm.runInContext(`${source};globalThis.site={pages,inner,home,footer};`, context);

const { pages, inner, home, footer } = context.site;
const newsArticles = JSON.parse(fs.readFileSync('dist/news-data.json', 'utf8'));
const aliases = [
  'book-an-appointment-1',
  'analysis',
  'blog1',
  'dna-testing-center',
  'contacts',
  'faqs-1',
  'signin',
  'career'
];
const guideRoutes = [
  'news/preparing-for-a-test',
  'news/understanding-your-report'
];
const articleRoutes = newsArticles.map(article => `news/${article.slug}`);
const routes = [...Object.keys(pages), ...guideRoutes, ...articleRoutes, ...aliases];
const rendered = [
  home(),
  footer(),
  ...Object.keys(pages).map(inner),
  ...aliases.map(route => `<a href="/${route}/">Legacy page alias</a>`),
  ...newsArticles.map(article =>
    `<a href="/news/${article.slug}/">${article.title}</a>
      ${article.image ? `<img src="${article.image}">` : ''}`
  )
].join('');
let linkCount = 0;

for (const match of rendered.matchAll(/href="(\/[^"]*)"/g)) {
  const route = match[1].split(/[?#]/)[0];
  const target = route.endsWith('/') ? `dist${route}index.html` : `dist${route}/index.html`;
  if (!fs.existsSync(target)) {
    throw new Error(`Missing local route for ${match[1]}`);
  }
  linkCount++;
}

for (const match of rendered.matchAll(/(?:src)="(\/assets\/[^"]+)"/g)) {
  if (!fs.existsSync(`dist${match[1]}`)) {
    throw new Error(`Missing local asset ${match[1]}`);
  }
}

for (const route of routes) {
  const file = `dist/${route}/index.html`;
  if (!fs.existsSync(file)) {
    throw new Error(`Missing generated page ${file}`);
  }

  const html = fs.readFileSync(file, 'utf8');
  if (!/<title>[^<]+<\/title>/.test(html)) {
    throw new Error(`Missing page title in ${file}`);
  }
  if (!/<meta name="description" content="[^"]+">/.test(html)) {
    throw new Error(`Missing page description in ${file}`);
  }
  if (!html.includes('class="noscript-message"')) {
    throw new Error(`Missing no-JavaScript help in ${file}`);
  }
}

const notFound = fs.readFileSync('dist/404.html', 'utf8');
if (!notFound.includes('Page not found') || !notFound.includes('content="noindex"')) {
  throw new Error('404 page is missing its error message or noindex directive.');
}
if (/<script\b/i.test(notFound)) {
  throw new Error('404 page should work without JavaScript.');
}

console.log(`${linkCount} internal links resolve; rendered local assets and generated page metadata are valid.`);
