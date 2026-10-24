(() => {
  const esc = value => String(value ?? '').replace(/[&<>"']/g, char => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  })[char]);
  const local = (path, label, className = 'textlink') =>
    `<a class="${className}" href="/${path}/">${label}</a>`;
  const rows = (items, label) => `<div class="business">${items.map(item =>
    `<article><div class="eyebrow">${label}</div><h3>${item[0]}</h3><p>${item[1]}</p></article>`
  ).join('')}</div>`;
  const contentPhoto = (image, alt, caption) =>
    `<figure class="source-page-photo">
      <img src="/assets/${image}" alt="${esc(alt)}" width="1000" height="650" loading="lazy" decoding="async">
      <figcaption>${esc(caption)}</figcaption>
    </figure>`;
  const partnerMarks = items => `<div class="partner-mark-grid">${items.map(item => `<figure aria-label="${esc(item.name)}">
    <div class="partner-mark">${item.image
      ? `<img src="/assets/${item.image}" alt="${esc(item.name)}" width="${item.width}" height="${item.height}" loading="lazy" decoding="async">`
      : `<span role="img" aria-label="${esc(item.name)}">${esc(item.wordmark || item.name)}</span>`}</div>
  </figure>`).join('')}</div>`;
  const sourcePageMedia = {
    branches: 'mmalabs-workspace.jpg',
    contact: 'mmalabs-workspace.jpg',
    careers: 'about-hematology.jpg',
    'courses/practical-understanding-the-iso-standards-integrated-management-system-main': '132860.jpg',
    'courses/practical-understanding-the-iso-standards-integrated-management-system': '18086.jpg',
    'courses/practical-understanding-the-iso-standards-integrated-management-system/course/introduction-to-ims-ems-iso-14001-2015': '18070.jpg',
    'courses/masterclass-career-path-for-laboratory-professionals': '133598.jpg'
  };
  const pageAliases = {
    'book-an-appointment-1': 'book-appointment',
    '18758-2': 'branches',
    analysis: 'tests',
    blog1: 'news',
    'digital-x-ray': 'radiology',
    'dna-testing-center': 'dna-testing',
    contacts: 'contact',
    'faqs-1': 'faqs',
    signin: 'view-report',
    career: 'careers'
  };
  const coursePageMetadata = {
    'course-category/cpd-training': [
      'CPD Training.',
      'Browse MMALABS continuing professional development courses on integrated management systems and ISO standards.'
    ],
    'course-category/professional-training': [
      'Professional training.',
      'Explore the MMALABS career-path masterclass for laboratory professionals.'
    ],
    'courses/practical-understanding-the-iso-standards-integrated-management-system-main': [
      'PRACTICAL UNDERSTANDING THE ISO STANDARDS – INTEGRATED MANAGEMENT SYSTEM – MAIN',
      'Understand integrated management systems, environmental management and ISO standards through five recorded training sessions.'
    ],
    'courses/practical-understanding-the-iso-standards-integrated-management-system': [
      'PRACTICAL UNDERSTANDING THE ISO STANDARDS – INTEGRATED MANAGEMENT SYSTEM',
      'Explore the integrated management system course, its ISO 14001 and ISO 9001 curriculum, and the available introductory lesson.'
    ],
    'courses/practical-understanding-the-iso-standards-integrated-management-system/course/introduction-to-ims-ems-iso-14001-2015': [
      'Introduction to IMS & EMS – ISO 14001 2015',
      'Introduction to integrated management systems and environmental management systems under ISO 14001:2015.'
    ],
    'courses/masterclass-career-path-for-laboratory-professionals': [
      'MASTERCLASS – CAREER PATH FOR LABORATORY PROFESSIONALS',
      'A panel discussion sharing guidance and mentorship on career paths for laboratory professionals.'
    ]
  };
  Object.entries(coursePageMetadata).forEach(([path, metadata]) => {
    pages[path] = metadata;
  });
  const trainingCourses = [
    {
      path: 'courses/practical-understanding-the-iso-standards-integrated-management-system-main',
      title: 'PRACTICAL UNDERSTANDING THE ISO STANDARDS – INTEGRATED MANAGEMENT SYSTEM – MAIN',
      category: 'CPD Training',
      categoryPath: 'course-category/cpd-training',
      description: 'Explore the implementation and monitoring of integrated management systems, with five recorded training sessions.',
      image: 'course-iso-training.jpg'
    },
    {
      path: 'courses/practical-understanding-the-iso-standards-integrated-management-system',
      title: 'PRACTICAL UNDERSTANDING THE ISO STANDARDS – INTEGRATED MANAGEMENT SYSTEM',
      category: 'CPD Training',
      categoryPath: 'course-category/cpd-training',
      description: 'A practical course on integrated management systems in healthcare, with an ISO 14001 and ISO 9001 curriculum.',
      image: 'course-iso-training.jpg'
    },
    {
      path: 'courses/masterclass-career-path-for-laboratory-professionals',
      title: 'MASTERCLASS – CAREER PATH FOR LABORATORY PROFESSIONALS',
      category: 'Professional training',
      categoryPath: 'course-category/professional-training',
      description: 'A panel discussion offering guidance and mentorship on career paths for laboratory professionals.',
      image: 'course-career-path-masterclass.jpg'
    }
  ];
  const courseCards = courses => `<div class="course-grid">${courses.map(course => `<article class="course-card">
    <a class="course-card-image" href="/${course.path}/" aria-label="View ${esc(course.title)}">
      <img src="/assets/${course.image}" alt="${esc(course.title)}" width="370" height="260" loading="lazy" decoding="async">
    </a>
    <div class="course-card-body">
      <a class="eyebrow course-category-link" href="/${course.categoryPath}/">${esc(course.category)}</a>
      <h3><a href="/${course.path}/">${esc(course.title)}</a></h3>
      <p>${esc(course.description)}</p>
      <a class="course-card-link" href="/${course.path}/">Explore course <span aria-hidden="true">↗</span></a>
    </div>
  </article>`).join('')}</div>`;
  const pageAliasPresentation = {
    '18758-2': {
      title: 'Find a branch.',
      description: 'Find a MMALABS branch and confirm opening hours before your visit.',
      breadcrumb: 'Branches'
    },
    'digital-x-ray': {
      title: 'Digital X-ray.',
      description: 'Digital radiography for diagnostic imaging. Confirm availability and preparation with MMALABS.',
      breadcrumb: 'Digital X-ray'
    }
  };
  const articleAliases = {
    'vitamins-and-trace-elements-how-to-check-and-replenish-the-body':
      'vitamins-and-trace-elements-how-to-check-and-replenish-the'
  };
  const galleryCategories = [
    ['leaflet', 'Leaflet'],
    ['test-info', 'Test Info'],
    ['health-celebration', 'Health Celebration'],
    ['business-info', 'Business Info'],
    ['events', 'Events'],
    ['occasions', 'Occasions']
  ];
  const innerHeroImages = [
    '132860.jpg',
    '133598.jpg',
    '13783.jpg',
    '15218.jpg',
    '18070.jpg',
    '18086.jpg'
  ];
  const galleryImages = [
    ['7e2ef59f-3f78-474d-ab16-e6f9ab981589.jpg', 'leaflet'],
    ['5fd49a2e-1feb-4d15-8f5c-ef3d16e42358.jpg', 'leaflet'],
    ['3aff0486-4959-4bdc-b42d-1c99b7b8fdba.jpg', 'leaflet'],
    ['HYPERTENSION-PACKAGES.jpg', 'leaflet'],
    ['IMG_1210.jpg', 'test-info'],
    ['fd07919e-5082-409e-bc5f-a96e4cf40cd6.jpg', 'test-info'],
    ['f76c7ae2-161e-4a5d-ac34-98bb0d42b96c.jpg', 'health-celebration'],
    ['a8d11bf7-ae17-4b5b-815f-59f46d7ca79a.jpg', 'health-celebration'],
    ['97888c41-931c-4e3e-80f8-e90037522670.jpg', 'health-celebration'],
    ['77885df8-2d38-4d6e-90b0-f21f1b620033.jpg', 'health-celebration'],
    ['76850b42-05ee-402a-aa25-d47073ca085a.jpg', 'leaflet'],
    ['715a9838-46e2-473e-a448-cf06f942c126.jpg', 'health-celebration'],
    ['89ec4048-5dfc-444a-b9e1-6d1d63bdd66f.jpg', 'health-celebration'],
    ['41fc0b78-9311-438c-9223-05b9c94bf35d.jpg', 'health-celebration'],
    ['9cc68197-8165-4bcc-89d6-cc957df12a0d.jpg', 'health-celebration'],
    ['IMG_1542.jpg', 'test-info'],
    ['IMG_1321.jpg', 'test-info'],
    ['IMG_0699.jpg', 'business-info'],
    ['IMG_1354.jpg', 'business-info'],
    ['IMG_1352.jpg', 'business-info'],
    ['IMG_1325.jpg', 'business-info'],
    ['CPD-TRAINING.jpg', 'events'],
    ['Webinar-Parenting-Poster-Template.png', 'events'],
    ['IMG_1301.jpg', 'occasions'],
    ['IMG_1305.jpg', 'occasions'],
    ['IMG_1304.jpg', 'occasions'],
    ['IMG_1302.jpg', 'occasions'],
    ['mmalabs-workspace.jpg', 'occasions'],
    ['about-overview-poster.jpg', 'occasions'],
    ['IMG-20240819-WA0007-1.jpg', 'occasions'],
    ['news-mmalabs-inaugurate-a-new-office-in-kumasi.jpg', 'occasions'],
    ['IMG-20240819-WA0010-1.jpg', 'occasions'],
    ['IMG-20240819-WA0004-1.jpg', 'occasions'],
    ['IMG-20240819-WA0058.jpg', 'occasions']
  ];
  const teamMembers = [
    ['Gideon Kyeremeh', 'Business Development Consultant', 'team-gideon-kyeremeh.jpg'],
    ['Anita Boakye Yiadom', 'Clinical Receptionist', 'team-anita-boakye-yiadom.jpg'],
    ['Matthew Agyei', 'Physician Assistant', 'team-matthew-agyei.jpg'],
    ['Audrey Owusu', 'Registered General Nurse', 'team-audrey-owusu.jpg'],
    ['Mavis Nyarko Yankson', 'Registered Midwife', 'team-mavis-nyarko-yankson.jpg'],
    ['Linda Alori', 'House Keeper', 'team-linda-alori.jpg'],
    ['Selina Sackey', 'Laboratory Scientist', 'team-selina-sackey.jpg'],
    ['Portia Abrefi Debrah', 'Laboratory Technician', 'team-portia-abrefi-debrah.jpg'],
    ['Fred Aboagye', 'Laboratory Scientist', 'team-fred-aboagye.jpg'],
    ['Akwasi Attakora Appiagyei', 'Laboratory Scientist', 'team-akwasi-attakora-appiagyei.jpg'],
    ['Prince Kyei Korankye', 'Laboratory Scientist', 'team-prince-kyei-korankye.jpg'],
    ['Annor Kwaku Owusu', 'Sonographer', 'team-annor-kwaku-owusu.jpg']
  ];
  const specialPrograms = [
    {
      title: 'Nkwafit health screening',
      description: 'Explore men’s, women’s and hypertension screening packages, and confirm current availability with MMALABS.',
      image: 'nkwafit-program.png',
      alt: 'Nkwafit health screening program logo',
      path: 'nkwafit'
    },
    {
      title: 'Allergy testing',
      description: 'Explore allergy profiles and targeted testing options with guidance from a clinician.',
      image: 'allergy-home.png',
      alt: 'MMALABS Allergy Home special program',
      path: 'allergy'
    },
    {
      title: 'Medical imaging',
      description: 'Learn about diagnostic imaging, cardiac and respiratory services available through MMALABS.',
      image: 'medical-imaging.png',
      alt: 'MMALABS Medical Imaging special program',
      path: 'radiology'
    },
    {
      title: 'DNA testing center',
      description: 'Review the testing process, consent, sample collection and what to expect from a report.',
      image: 'dna-testing-center.png',
      alt: 'MMALABS DNA Testing Center special program',
      path: 'dna-testing'
    }
  ];
  const branchData = [
    {
      name: 'Korle-Bu branch',
      region: 'Accra',
      address: 'Adjacent Supreme Specialist, Lartebiokorshie Road, Accra.',
      phones: ['030 396 5110', '050 167 2749'],
      email: 'accra@mmalabs.com.gh',
      hours: 'Monday-Friday 8:00-17:00; Saturdays and holidays 8:00-15:30; Sundays by appointment.'
    },
    {
      name: 'Ofankor branch',
      region: 'Accra',
      address: 'Opposite SDA School, Asofa Road, Accra.',
      phones: ['030 396 2175', '050 167 2748'],
      hours: 'Monday-Friday 8:00-17:00; Saturdays and Sundays by appointment; holidays 8:00-14:30.'
    },
    {
      name: 'Kumasi Main',
      region: 'Kumasi',
      address: 'Block 53, 476 Melcom Road, Ahowo-Daban, Kumasi.',
      phones: ['050 167 2750', '050 167 2748'],
      email: 'mma@mmalabs.com.gh',
      hours: 'Monday-Sunday 8:00-20:00.'
    },
    {
      name: 'Asokwa branch',
      region: 'Kumasi',
      address: 'AK-186, Plot 1, Block B, opposite McKeown, Hudson, 8342 Stadium Road, Kumasi.',
      phones: ['050 167 2748'],
      email: 'mmaa@mmalabs.com.gh',
      hours: 'Monday-Sunday 8:00-20:00.'
    },
    {
      name: 'Dormaa branch',
      region: 'Dormaa Ahenkro',
      address: 'House DAD/A/015, opposite the New Post Office, Dormaa Ahenkro.',
      phones: ['035 202 2453', '020 644 2100'],
      email: 'dormaa@mmalabs.com.gh',
      hours: 'Monday-Friday 8:00-17:00; Saturdays and holidays 8:00-14:30; Sundays emergency calls only.'
    }
  ];
  const branchCards = branchData.map(branch => `<article class="test-row" data-branch="${esc(`${branch.name} ${branch.region} ${branch.address}`.toLowerCase())}">
    <div><div class="eyebrow">${esc(branch.region)}</div><h3>${esc(branch.name)}</h3>
    <p>${esc(branch.address)}</p><p>${branch.phones.map(phone => `<a href="tel:${phone.replace(/\s/g, '')}">${esc(phone)}</a>`).join(' · ')}</p>
    ${branch.email ? `<p><a href="mailto:${esc(branch.email)}">${esc(branch.email)}</a></p>` : ''}
    <p><strong>Opening hours</strong><br>${esc(branch.hours)}</p></div>
    ${local('book-appointment', 'Request an appointment', 'btn blue')}
  </article>`).join('');
  let newsDataPromise;
  const formatNewsDate = date => date
    ? new Intl.DateTimeFormat('en-GB', {day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC'})
      .format(new Date(`${date}T00:00:00Z`))
    : '';
  function loadNews() {
    if (!newsDataPromise) {
      newsDataPromise = fetch('/news-data.json')
        .then(response => {
          if (!response.ok) throw new Error(`News archive request failed (${response.status}).`);
          return response.json();
        })
        .then(articles => {
          if (!Array.isArray(articles) || articles.some(article =>
            !article || typeof article.slug !== 'string' || typeof article.title !== 'string' ||
            !Array.isArray(article.content)
          )) {
            throw new Error('The news archive data is incomplete.');
          }
          return articles;
        })
        .catch(error => {
          newsDataPromise = null;
          throw error;
        });
    }
    return newsDataPromise;
  }
  async function loadNewsFor(container) {
    try {
      return await loadNews();
    } catch (error) {
      console.error('Could not load the MMALABS news archive.', error);
      if (container) container.innerHTML = '<p role="alert">News stories could not be loaded. Please refresh the page to try again.</p>';
      return null;
    }
  }
  function labelNewsNavigation() {
    document.querySelectorAll('#site-menu a').forEach(anchor => {
      if (anchor.pathname.replace(/\/$/, '') !== '/news') return;
      const text = [...anchor.childNodes].find(node => node.nodeType === Node.TEXT_NODE);
      if (text) text.textContent = 'News ';
    });
  }
  function labelTestMenuNavigation() {
    const headerLink = document.querySelector('.site-header nav a[href="/tests"]');
    if (headerLink) headerLink.textContent = 'Test menu';
    document.querySelectorAll('#site-menu .menu-grid a[href="/tests"], footer a[href="/tests"]').forEach(anchor => {
      const text = [...anchor.childNodes].find(node => node.nodeType === Node.TEXT_NODE);
      if (text) text.textContent = 'Test menu ';
    });
  }
  function newsArchiveMarkup(articles) {
    return articles.map((article, index) => `<article class="source-news-card">
      ${article.image ? `<a class="news-card-image" href="/news/${esc(article.slug)}/" aria-label="Read ${esc(article.title)}"><img src="${esc(article.image)}" alt="${esc(article.title)}" loading="lazy" decoding="async"></a>` : ''}
      <div class="eyebrow">MMALABS update / ${String(index + 1).padStart(2, '0')}</div>
      ${article.published ? `<time datetime="${esc(article.published)}">${formatNewsDate(article.published)}</time>` : ''}
      <h3>${esc(article.title)}</h3>${article.summary ? `<p>${esc(article.summary)}</p>` : ''}
      <a class="textlink" href="/news/${esc(article.slug)}/">Read the full story <span aria-hidden="true">↗</span></a>
    </article>`).join('');
  }
  function newsArticleMarkup(article) {
    let inList = false;
    const content = [];
    article.content.forEach(block => {
      if (block.type === 'li') {
        if (!inList) content.push('<ul>');
        inList = true;
        content.push(`<li>${esc(block.text)}</li>`);
        return;
      }
      if (inList) content.push('</ul>');
      inList = false;
      if (block.type === 'image') {
        content.push(`<figure class="news-inline-image"><img src="${esc(block.image)}" alt="${esc(block.alt || '')}" loading="lazy" decoding="async">${block.caption ? `<figcaption>${esc(block.caption)}</figcaption>` : ''}</figure>`);
        return;
      }
      const tag = /^h[2-6]$/.test(block.type) ? block.type
        : block.type === 'blockquote' ? 'blockquote' : 'p';
      content.push(`<${tag}>${esc(block.text)}</${tag}>`);
    });
    if (inList) content.push('</ul>');
    return content.join('');
  }
  function renderNewsArticle(main, article) {
    const title = document.querySelector('.inner-hero h1');
    const description = document.querySelector('.inner-hero .wrap > p');
    const crumb = document.querySelector('.inner-hero .crumb');
    const innerLinks = document.querySelector('.inner-hero .inner-links');
    if (title) title.textContent = article.title;
    if (description) {
      description.textContent = article.summary;
      description.hidden = !article.summary;
    }
    if (crumb) crumb.innerHTML = `${link('news', 'MMALABS News')} / ${esc(article.title)}`;
    if (innerLinks) innerLinks.innerHTML = local('news', 'Back to all news <span aria-hidden="true">↗</span>');
    document.title = `${article.title} | MMALABS`;
    setMetaDescription(article.summary || article.title);
    const articleBody = newsArticleMarkup(article);
    main.innerHTML = `<article class="news-article">
      <div class="news-article-meta">${article.published ? `<time datetime="${esc(article.published)}">${formatNewsDate(article.published)}</time>` : ''}<span>MMALABS News</span></div>
      ${article.image ? `<figure class="news-article-featured"><img src="${esc(article.image)}" alt="${esc(article.title)}" width="1200" height="700"><figcaption>${esc(article.title)}</figcaption></figure>` : ''}
      ${articleBody ? `<div class="news-article-body">${articleBody}</div>` : ''}
      <div class="news-article-end">${local('news', 'Back to all news', 'textlink')}</div>
    </article>`;
  }
  const details = {
    privacy: {
      title: 'Privacy notice.',
      description: 'How this website handles information and how to contact MMALABS about privacy.',
      html: `<div class="section-head"><span class="eyebrow">Your information</span><h2>Privacy matters at every step.</h2>
        <p>This website does not ask you to submit health records, identity documents or report credentials.</p></div>
        ${rows([
          ['Search and filters', 'Search terms and branch filters are processed in your browser and are not sent to MMALABS.'],
          ['Appointments and reports', 'Arrange appointments and access patient reports through the secure channels provided by your branch.'],
          ['Fonts', 'The website loads Outfit and Inter font files from Google Fonts. Your browser connects to Google to retrieve these fonts; system fonts are used if they are unavailable.']
        ], 'Website information')}
        <p>For privacy enquiries, contact MMALABS by telephone at <a href="tel:+233501672748">+233 50 167 2748</a>.</p>`
    },
    terms: {
      title: 'Website terms.',
      description: 'Important information about using the MMALABS website.',
      html: `<div class="section-head"><span class="eyebrow">Using this website</span><h2>Information to help you plan your next step.</h2>
        <p>Website content is for general information and does not replace advice from a qualified healthcare professional.</p></div>
        ${rows([
          ['Clinical decisions', 'A qualified healthcare professional should guide test selection, preparation and interpretation. Follow the instructions provided for your specific test.'],
          ['Appointments and services', 'Contact a branch to confirm service availability, appointment times, prices and opening hours before visiting.'],
          ['Reports and personal information', 'Do not enter or share patient report credentials or sensitive health information through this website. Use the secure instructions provided by your branch.']
        ], 'Important information')}
        <p>For questions about MMALABS services, call <a href="tel:+233501672748">+233 50 167 2748</a>.</p>`
    },
    gallery: {
      title: 'MMALABS in practice.',
      description: 'Explore MMALABS leaflets, test information, health celebrations, business information, events and occasions.',
      html: ''
    },
    about: {
      title: 'Ghana’s Complete Diagnostic Center.',
      description: 'Routine Testing · DNA Testing · Pathology',
      html: `<div class="about-page">
        <section class="about-opening">
          <div class="about-opening-copy">
            <span class="eyebrow">About MMALABS</span>
            <h2>Complete diagnostic care, from routine testing to specialist answers.</h2>
            <div class="about-service-tags" aria-label="MMALABS service areas"><span>Routine testing</span><span>DNA testing</span><span>Pathology</span></div>
            <p>We provide diagnostic services across routine and specialist testing, supported by qualified laboratory and clinical professionals.</p>
            <p>Our teams work to make accurate testing, clear communication and a positive client experience part of every visit.</p>
          </div>
          <figure class="about-lead-image"><img src="/assets/about-phlebotomy.jpg" alt="MMALABS phlebotomy team collecting a patient sample" width="828" height="534" loading="lazy" decoding="async"><figcaption>Phlebotomy</figcaption></figure>
        </section>
        <section class="about-gallery" aria-label="MMALABS diagnostic work and patient care">
          ${[
            ['about-chemistry.jpg', 'MMALABS team member preparing a patient for sample collection', '512', '512'],
            ['about-hematology.jpg', 'MMALABS laboratory professional operating diagnostic equipment', '770', '460']
          ].map(([image, caption, width, height]) => `<figure><img src="/assets/${image}" alt="${esc(caption)}" width="${width}" height="${height}" loading="lazy" decoding="async"><figcaption>${esc(caption)}</figcaption></figure>`).join('')}
        </section>
        <section class="about-video-section" aria-labelledby="about-video-title">
          <div><span class="eyebrow">A look inside MMALABS</span><h2 id="about-video-title">The people and work behind the results.</h2>
            <p>Learn more about MMALABS and the people behind our diagnostic services.</p></div>
          <figure class="about-video">
            <video controls preload="metadata" poster="/assets/about-overview-poster.jpg" aria-label="MMALABS company overview video">
              <source src="/assets/about-overview.mp4" type="video/mp4">
              Your browser does not support embedded video. <a href="/assets/about-overview.mp4">Open the MMALABS overview video</a>.
            </video>
            <figcaption>MMALABS overview</figcaption>
          </figure>
        </section>
        <section class="about-story">
          <div class="about-story-heading"><span class="eyebrow">Why choose MMALABS?</span><h2>Specialist testing, supported by a connected diagnostic network.</h2></div>
          <div class="about-story-copy">
            <p>Our services span preventive health screening, routine and specialist laboratory investigations, reproductive health, oncology, genetics and diagnostic imaging.</p>
            <p>Our laboratory departments and specialist referral network support patients, healthcare professionals and organisations with a broad range of diagnostic needs.</p>
            <h3>Services that support better-informed care</h3>
            <ul class="about-highlights">
              <li>Routine and specialist laboratory testing.</li>
              <li>DNA, reproductive health and genetic investigations.</li>
              <li>Preventive screening and wellness programmes.</li>
              <li>Diagnostic imaging and clinical services.</li>
              <li>Sample collection support for patients and organisations.</li>
            </ul>
            <p>The downloaded MMALABS profile describes a quality policy focused on accurate, timely results, a broad test menu, and efficient partner networking and logistics. Its safety policy commits to maintaining a healthy environment for staff, patients, visitors and partners.</p>
            <p>Explore our services or contact the team to discuss the right next step for your needs.</p>
          </div>
        </section>
        <section class="about-quality">
          <div class="about-section-heading"><span class="eyebrow">Quality and safety</span><h2>Accuracy, privacy and care matter at every step.</h2></div>
          <div class="about-quality-grid">${[
            ['about-quality-icon.png', 'Quality of results', 'Our laboratory teams use established procedures and quality checks to support reliable testing.'],
            ['about-process-icon.png', 'Client information', 'We treat the confidentiality of client information and test results as an essential part of care.'],
            ['about-safety-icon.png', 'A safe environment', 'We work to provide a safe and respectful environment for patients, staff and visitors.']
          ].map(([image, title, text]) => `<article><img src="/assets/${image}" alt="" width="90" height="90" loading="lazy" decoding="async"><div><h3>${esc(title)}</h3><p>${esc(text)}</p></div></article>`).join('')}</div>
        </section>
        <section class="source-partners" aria-labelledby="about-reference-lab-title">
          <div><span class="eyebrow">Reference laboratory</span><h2 id="about-reference-lab-title">Connected expertise with Dr Lal PathLabs.</h2>
            <p>Our specialist reference laboratory network helps extend access to a wider range of diagnostic services.</p></div>
          ${partnerMarks([
            {name: 'Dr Lal PathLabs', image: 'partner-dr-lal-pathlabs.jpg', width: 270, height: 80}
          ])}
          <p class="source-partner-note">Accreditation applies to specific laboratories and service scopes. Contact MMALABS for current accreditation and referral information.</p>
        </section>
        <section class="about-departments">
          <div><span class="eyebrow">Departments</span><h2>Connected expertise across diagnostics.</h2><p>Our specialist teams support a broad range of laboratory and diagnostic services.</p></div>
          <ul>${['Hematology', 'Chemical Pathology', 'Molecular Medicine', 'Cytopathology', 'Radiology', 'Histopathology', 'Genetics', 'Microbiology'].map((name, index) => `<li><span>0${index + 1}</span>${esc(name)}</li>`).join('')}</ul>
        </section>
        <div class="about-actions">${local('tests', 'Explore tests and services', 'btn blue')} ${local('branches', 'Find a branch', 'btn outline')}</div>
      </div>`
    },
    branches: {
      title: 'Closer to you.',
      description: 'Find MMALABS branch addresses, phone numbers and opening hours.',
      html: `<div class="section-head"><span class="eyebrow">MMALABS offices</span><h2>Choose the location that works for you.</h2><p>Contact a branch to confirm test availability and opening hours before travelling.</p></div>
        <div class="searchbox"><input id="source-branch-filter" aria-label="Filter MMALABS offices" placeholder="Search by branch, town or address"></div>
        <div class="source-branches">${branchCards}</div>
        <h3 style="margin-top:55px">Affiliate offices</h3><p>Takoradi, Sunyani and Tamale. Call the MMALABS line to confirm address, services and hours: <a href="tel:+233501672748">+233 50 167 2748</a>.</p>`
    },
    contact: {
      title: 'Contact MMALABS.',
      description: 'Call the published MMALABS line or contact a branch directly.',
      html: `<div class="section-head"><span class="eyebrow">Talk to the team</span><h2>Start with the right branch.</h2><p>For current availability, test preparation and pricing, contact your preferred office directly.</p></div>
        <div class="formbox"><div class="eyebrow">General enquiries</div><h3><a href="tel:+233501672748">+233 50 167 2748</a></h3>
        <p>Call our team for general enquiries or help finding the right branch.</p>
        ${local('branches', 'View branch details', 'btn blue')}</div>
        <h2 style="margin-top:65px">Branch contacts.</h2><div class="source-branches">${branchCards}</div>`
    },
    'book-appointment': {
      title: 'Plan your appointment.',
      description: 'Contact your preferred MMALABS branch to arrange an appointment.',
      html: `<div class="formbox"><div class="eyebrow">Appointments</div><h2>We’re ready to help.</h2>
        <p>Call your preferred branch to arrange a visit and confirm service availability, preparation instructions and pricing.</p>
        <p><a class="btn blue" href="tel:+233501672748">Call MMALABS · +233 50 167 2748</a></p>
        ${local('branches', 'View branch contacts', 'btn outline')}</div>`
    },
    'view-report': {
      title: 'View your report.',
      description: 'Access your patient report through the MMALABS report portal.',
      html: `<div class="formbox"><div class="eyebrow">Report access</div><h2>Your results are personal.</h2>
        <p>Open the MMALABS report portal and use the access details provided by the branch that collected your sample. Do not share your report credentials.</p>
        <p><a class="btn blue" href="http://report.mmalabs.com.gh:81/" target="_blank" rel="noopener noreferrer">Open the report portal <span aria-hidden="true">↗</span></a></p>
        <p>If you need help, contact the branch that collected your sample. Discuss results with a qualified healthcare professional.</p>
        ${local('branches', 'Find branch contact details')}</div>`
    },
    'dna-testing': {
      title: 'DNA testing, with a clear next step.',
      description: 'Explore DNA testing options and understand the next steps before sample collection.',
      html: `<div class="section-head"><span class="eyebrow">DNA Testing Center</span><h2>Start with the purpose of the test.</h2>
        <p>DNA testing is used for a number of reasons, including child support, custody or visitation, finding biological families, identifying lost relatives, inheritance, immigration, relationships for organ transplants, criminal cases, and establishing blood lineage and ancestry.</p>
        <p>The original MMALABS page describes paternity and relationship testing, prenatal testing, forensic testing, ancestry testing and animal DNA testing. Contact the center to confirm current availability and requirements for the test you need.</p></div>
        <figure class="reference-art reference-art--square">
          <img src="/assets/dna-testing-flyer.jpg" alt="MMALABS DNA Testing Center flyer listing testing services and sample types" width="2560" height="2560" loading="lazy" decoding="async">
        </figure>
        <section class="course-section dna-service-details" aria-labelledby="dna-test-options">
          <h2 id="dna-test-options">DNA testing options in the reference menu</h2>
          <div class="dna-options-grid">
            <article><h3>Personal and informational</h3><ul><li>Father and child</li><li>Father, child and mother</li><li>Additional person</li></ul></article>
            <article><h3>Legal testing</h3><ul><li>Father and child (swab or blood)</li><li>Additional person (swab) or child (blood)</li><li>Legal testing options are listed separately from personal testing in the source menu</li></ul></article>
            <article><h3>Supplementary services</h3><ul><li>Archive retrieval (swab or blood)</li><li>Single-person profiling (swab or blood)</li><li>Express service, DNA kits (swabs) and DNA test sampling</li></ul></article>
            <article><h3>Relationship testing</h3><ul><li>Siblings and aunt/uncle with child</li><li>Grandparentage with mother and child</li><li>Both-grandparent combinations and additional sibling/child options</li></ul></article>
            <article><h3>Non-invasive prenatal testing</h3><ul><li>Maternal blood with mother and father</li><li>Amniotic fluid with father, mother and child</li><li>Additional father</li></ul></article>
            <article><h3>Forensic testing (single person)</h3><ul><li>Skin scraping/swab, bone marrow, blood on filter paper and semen</li><li>Fingernail clippings, non-embalmed tissue and ear swab</li></ul></article>
            <article><h3>Immigration testing</h3><ul><li>Swab testing for the UK and Europe</li><li>USA and Canada options with supporting documents or a request letter</li><li>Individual, additional-person and trio options are listed</li></ul></article>
            <article><h3>Ancestry testing</h3><ul><li>Ancestral origins map and report by email</li><li>Maternal or paternal lineage map, certificate and haplogroup description</li><li>Dual maternal and paternal lineage</li></ul></article>
            <article><h3>Other samples · “60% success rate” section in the reference copy</h3><ul><li>Hair with root, razor, cigarette butt, chewing gum and mucus</li><li>Condom, tissue, toothbrush, drinking glass/container and drinking straw</li><li>Tampon/sanitary pad and envelope flap</li></ul></article>
            <article><h3>Animal DNA testing</h3><ul><li>Animal DNA testing is named in the downloaded page</li><li>Contact the center to confirm current test availability and accepted samples</li></ul></article>
          </div>
          <p>The downloaded page advertises 21-loci testing, fast results and internationally accredited results.</p>
        </section>
        <section class="course-section dna-turnaround" aria-labelledby="dna-turnaround-title">
          <h2 id="dna-turnaround-title">Turnaround times listed in the downloaded copy</h2>
          <div class="table-scroll"><table><thead><tr><th scope="col">Sample type</th><th scope="col">Express</th><th scope="col">Normal</th></tr></thead>
            <tbody><tr><th scope="row">Swab</th><td>6 days</td><td>7–10 days</td></tr><tr><th scope="row">Blood</th><td>Not listed</td><td>14–21 days</td></tr>
            <tr><th scope="row">Forensics</th><td>Not listed</td><td>21–28 days</td></tr></tbody></table></div>
          <p>The downloaded page also displayed a starting price of GH₵1,800 and a 30% discount. Confirm current prices, offers and turnaround times with MMALABS before arranging a test.</p>
        </section>
        <section class="source-partners" aria-labelledby="dna-partners-title">
          <div><span class="eyebrow">Specialist testing network</span><h2 id="dna-partners-title">DNA testing and reference laboratories.</h2>
            <p>Our testing and reference laboratory partners support a range of specialist DNA services. Contact the team to confirm the laboratory and requirements for your test.</p></div>
          ${partnerMarks([
            {name: 'AABB', image: 'aabb-accredited-emblem.webp', width: 300, height: 82},
            {name: 'Dr Lal PathLabs', image: 'partner-dr-lal-pathlabs.jpg', width: 270, height: 80},
            {name: 'EasyDNA', image: 'partner-easydna.png', width: 270, height: 68},
            {name: 'Eurofins Scientific', image: 'partner-eurofins.png', width: 270, height: 80}
          ])}
        </section>
        <section class="dna-video-section" aria-labelledby="dna-video-title">
          <div><span class="eyebrow">DNA Testing Center</span><h2 id="dna-video-title">See the testing center introduction.</h2>
            <p>Learn about DNA testing and the services available through MMALABS.</p></div>
          <figure><video controls preload="metadata" playsinline poster="/assets/dna-testing-overview-poster.png" aria-label="MMALABS DNA Testing Center overview video">
            <source src="/assets/dna-testing-overview.mp4" type="video/mp4">
            Your browser does not support embedded video. <a href="/assets/dna-testing-overview.mp4">Open the DNA Testing Center overview video</a>.
          </video><figcaption>DNA Testing Center overview</figcaption></figure>
        </section>
        ${rows([
          ['Paternity and biological relationships', 'Relationship testing may require consent and identification from each participant. Contact the specialist team before arranging sample collection.'],
          ['Prenatal and forensic', 'Ask the specialist team about eligibility, timing, consent and how results may be used for non-invasive prenatal or forensic testing.'],
          ['Ancestry and single-person profiling', 'Ancestry and single-person profiling options are available. Contact the center for availability and sample collection instructions.']
        ], 'DNA services')}
        <div class="section-head" style="margin-top:70px"><span class="eyebrow">Before sample collection</span><h2>Personal and legal testing are not the same.</h2>
        <p>Personal testing and testing intended for legal use may involve different participants, identification and sample-handling procedures. Ask whether your purpose requires a documented chain of custody.</p></div>
        ${local('book-appointment', 'Plan an appointment', 'btn blue')}`
    },
    'dna-methylation': {
      title: 'DNA methylation health report.',
      description: 'Explore DNA methylation testing and ask the team about suitability and pricing.',
      html: `<div class="section-head"><span class="eyebrow">DNA Methylation Comprehensive Health Report</span><h2>Explore a detailed genetic health report.</h2>
        <p>The downloaded MMALABS page describes a non-invasive oral-swab test, a report within 10 days of sample submission, and expert support. It lists price on request and free delivery; confirm current availability, price and delivery terms with MMALABS.</p></div>
        <img class="service-program-art" src="/assets/dna-testing-center.png" alt="MMALABS DNA Testing Center special program" width="455" height="158" loading="lazy" decoding="async">
        <section class="course-section" aria-labelledby="methylation-profile">
          <h2 id="methylation-profile">What the source copy says is included</h2>
          <div class="dna-options-grid">
            <article><h3>Methylation profile</h3><p>Information about energy production, detoxification and genetic repair.</p></article>
            <article><h3>Nutrigenetic profile</h3><p>How genes may influence nutrient response and dietary recommendations.</p></article>
            <article><h3>Fitness performance report</h3><p>Genetic insights related to muscle recovery, endurance and strength.</p></article>
            <article><h3>Skin health report</h3><p>Genetic information related to ageing tendencies, hydration and sensitivity.</p></article>
            <article><h3>Additional resources</h3><ul><li>Personalized shopping list with nutrient recommendations</li><li>Suggested medical tests for further health insights</li><li>Expert support and an interactive health portal</li></ul></article>
            <article><h3>Pathways described</h3><ul><li>Folate and methionine cycles</li><li>Transsulfuration pathway</li><li>Neurotransmitter metabolism</li><li>Urea cycle</li></ul></article>
          </div>
        </section>
        <section class="course-section" aria-labelledby="methylation-claims">
          <h2 id="methylation-claims">Testing details displayed in the reference copy</h2>
          <p>The source page describes analysis of over 9,000 genetic locations, including COMT, MTHFR and MTR, and also describes a report examining 92 genes and 113 SNPs.</p>
          <p>The report description also includes recommendations related to nutrition, fitness and lifestyle.</p>
        </section>
        ${local('contact', 'Ask the team a question', 'btn blue')}`
    },
    allergy: {
      title: 'Allergy testing.',
      description: 'Explore allergy testing options and discuss the right test with a clinician.',
      html: `<div class="section-head"><span class="eyebrow">Immunoserology</span><h2>Testing begins with the right question.</h2>
        <p>The downloaded guide describes allergy symptoms, testing approaches and examples of profiles offered through the partner laboratory network.</p></div>
        <figure class="reference-art reference-art--wide">
          <img src="/assets/allergy-testing-flyer.jpg" alt="MMALABS allergy testing flyer describing common allergy triggers and serum IgE testing" width="1024" height="363" loading="lazy" decoding="async">
        </figure>
        ${rows([
          ['Allergy profiles', 'The reference menu includes the Allergy Comprehensive Profile and Allergy 107 Allergens test.'],
          ['Asthma and rhinitis panels', 'The reference menu includes adult and paediatric asthma/rhinitis screening panels.'],
          ['Other tests', 'Additional options include allergy screening and serum immunoglobulin E (IgE). Contact a branch for current pricing and availability.']
        ], 'Allergy testing options')}
        <section class="course-section" aria-labelledby="allergy-signs">
          <h2 id="allergy-signs">Symptoms and conditions listed in the source guide</h2>
          <ul class="course-objectives">
            <li>Incessant sneezing, nasal itching, or a runny or stuffy nose.</li>
            <li>Watery, red or swollen eyes; tingling in the mouth; or swelling of the lips, tongue, face or throat.</li>
            <li>Hives, cough, chest tightness, wheezing or shortness of breath.</li>
            <li>The guide also names anaphylaxis, asthma, sinusitis and infections of the ears and lungs.</li>
          </ul>
        </section>
        <section class="course-section" aria-labelledby="allergy-methods">
          <h2 id="allergy-methods">Testing approaches and examples in the downloaded copy</h2>
          <div class="dna-options-grid">
            <article><h3>Testing approaches</h3><ul><li>Blood testing</li><li>Skin prick or scratch tests</li><li>Intradermal tests</li><li>Patch tests</li><li>Oral food challenges</li></ul></article>
            <article><h3>Examples listed</h3><ul><li>Food intolerance and milk allergy</li><li>Mould and dust panels</li><li>Aspergillus fumigatus allergy</li><li>Food Panel 1</li><li>Allergy Comprehensive Profile</li><li>Gluten allergy</li></ul></article>
          </div>
          <p>The downloaded partner-laboratory page refers to more than 100 allergy tests. The examples above are not a complete list; confirm which tests MMALABS currently offers.</p>
        </section>
        ${local('tests', 'Explore tests and services', 'btn blue')}`
    },
    radiology: {
      title: 'Imaging and physiology.',
      description: 'Explore diagnostic imaging, cardiac and respiratory services, including referral options for advanced scans.',
      html: `<div class="section-head"><span class="eyebrow">Radiology and physiology</span><h2>Clear images. Connected care.</h2>
        <p>Our radiology and physiology services include diagnostic imaging and selected advanced scans by referral.</p></div>
        <img class="service-program-art" src="/assets/medical-imaging.png" alt="MMALABS Medical Imaging special program" width="455" height="158" loading="lazy" decoding="async">
        ${rows([
          ['Imaging', 'Digital X-rays and Doppler ultrasound.'],
          ['Cardiac and neurological tests', 'Services include echocardiography (ECHO), electrocardiography (ECG) and electroencephalography (EEG).'],
          ['Respiratory testing', 'Spirometry, also called a pulmonary function test.'],
          ['Referral services', 'CT and MRI scans, digital mammography and endoscopy may be arranged by referral. Contact the team to discuss the process and location.']
        ], 'Service areas')}
        ${local('spirometry', 'Learn about spirometry', 'btn blue')} ${local('book-appointment', 'Plan an appointment')}`
    },
    spirometry: {
      title: 'Spirometry and pulmonary function testing.',
      description: 'Learn about spirometry and pulmonary function testing.',
      html: `<div class="section-head"><span class="eyebrow">Respiratory testing</span><h2>A guided breathing test.</h2>
        <p>Spirometry is a non-invasive test that measures lung function, including the volume of air inhaled and exhaled and the speed of airflow. The downloaded MMALABS guide names asthma, chronic obstructive pulmonary disease (COPD) and bronchitis as conditions the test may help diagnose or monitor.</p></div>
        <figure class="reference-art reference-art--portrait">
          <img src="/assets/spirometry-flyer.jpg" alt="MMALABS Spirometry Testing flyer featuring pulmonary function tests and contact details" width="922" height="1024" loading="lazy" decoding="async">
        </figure>
        <section class="course-section" aria-labelledby="spirometry-process">
          <h2 id="spirometry-process">What happens during the test</h2>
          <ul class="course-objectives">
            <li>A specialist explains the procedure; the patient sits comfortably and may wear a nose clip.</li>
            <li>The patient takes a deep breath, seals their lips around a mouthpiece and exhales forcefully and completely as instructed.</li>
            <li>The source guide says a specialist or consultant interprets the results, provides a printed copy and explains the measurements for the referring clinician.</li>
          </ul>
        </section>
        <section class="course-section" aria-labelledby="spirometry-uses">
          <h2 id="spirometry-uses">Pulmonary function services</h2>
          <p>The MMALABS test menu also lists spirometry / pulmonary function testing. The radiology service page links this test with its imaging and physiology services.</p>
        </section>
        ${local('book-appointment', 'Plan an appointment', 'btn blue')}`
    },
    'corporate-health': {
      title: 'Corporate health services.',
      description: 'Coordinate employee screening and onsite or offsite health services for your organisation.',
      html: `<div class="section-head"><span class="eyebrow">For employers</span><h2>Health services shaped around your team.</h2>
        <p>The downloaded partnership page lists corporate tie-ups and describes tailored diagnostic services for organisations. It also highlights booking assistance, sample collection and report tracking.</p></div>
        <figure class="reference-art reference-art--wide">
          <img src="/assets/corporate-health-banner.png" alt="MMALABS Corporate Health partnership banner" width="1920" height="504" loading="lazy" decoding="async">
        </figure>
        ${rows([
          ['Employee health programmes', 'Discuss workforce testing and health screening options for your organisation.'],
          ['Corporate tie-up', 'The source page identifies corporate partnerships as a way to connect organisations with MMALABS services.'],
          ['Coordinated service support', 'The downloaded page describes booking assistance, sample collection and report tracking for partner organisations.']
        ], 'Corporate services')}
        ${local('contact', 'Discuss an organisational enquiry', 'btn blue')}`
    },
    'immigration-health': {
      title: 'DNA immigration testing.',
      description: 'Review the immigration DNA testing options listed in the downloaded MMALABS menu.',
      html: `<div class="section-head"><span class="eyebrow">DNA Testing Center</span><h2>Immigration relationship testing.</h2>
        <p>The downloaded DNA menu lists immigration swab testing for the UK, Europe, USA and Canada, with individual, additional-person and trio options.</p></div>
        <figure class="reference-art reference-art--wide">
          <img src="/assets/immigration-checkup-banner.png" alt="MMALABS immigration check-up banner" width="1920" height="504" loading="lazy" decoding="async">
        </figure>
        ${rows([
          ['UK and Europe', 'The source menu lists DNA immigration testing by swab for UK and Europe applications, including additional-person and trio options.'],
          ['USA and Canada', 'The source menu lists swab testing with supporting documents or with a request letter, for individual, additional-person and trio cases.'],
          ['Documentation options', 'The source menu lists USA and Canada testing with supporting documents or with a request letter.']
        ], 'Immigration DNA testing')}
        ${local('dna-testing', 'View all DNA testing options', 'btn blue')} ${local('contact', 'Contact MMALABS')}`
    },
    'business-partnership': {
      title: 'Partner with MMALABS.',
      description: 'Explore referral, collection, corporate, franchise and international partnership opportunities.',
      html: `<div class="section-head"><span class="eyebrow">Partnerships</span><h2>Build a stronger diagnostic network.</h2>
        <p>The downloaded MMALABS page invites healthcare providers, organisations and investors to explore partnerships that extend access to diagnostic services. It describes a reference-laboratory network and services spanning pathology, immunology, microbiology, oncology, genetics and research.</p></div>
        <figure class="reference-art reference-art--wide">
          <img src="/assets/partnership-banner.png" alt="MMALABS partnership banner" width="1024" height="269" loading="lazy" decoding="async">
        </figure>
        <section class="source-partners" aria-labelledby="reference-partners-title">
          <div><span class="eyebrow">International reference network</span><h2 id="reference-partners-title">Specialist testing partnerships.</h2>
            <p>Our reference laboratory network supports access to specialist testing services.</p></div>
          ${partnerMarks([
            {name: 'Dr Lal PathLabs', image: 'partner-dr-lal-pathlabs.jpg', width: 270, height: 80},
            {name: 'Eurofins Scientific', image: 'partner-eurofins.png', width: 270, height: 80},
            {name: 'EasyDNA', image: 'partner-easydna.png', width: 270, height: 68},
            {name: 'Endeavour DNA', wordmark: 'Endeavour DNA'},
            {name: 'EssayDNA', wordmark: 'EssayDNA'}
          ])}
          <p class="source-partner-note">Accreditation applies to specific laboratories and service scopes. Contact MMALABS for current accreditation and referral information.</p>
        </section>
        ${rows([
          ['Referral and sample collection', 'The source page invites doctors and facilities to refer clients, and lists DNA sample collectors and independent phlebotomy centres as partnership types.'],
          ['Corporate and international partners', 'The archived page lists corporate partners, international partners and investors among its partnership categories.'],
          ['Franchise and laboratory management', 'Options named in the reference copy include franchise, outsourcing, laboratory-management partnership and full laboratory management. It describes joint ventures and shared laboratory operations.'],
          ['Investment and collection centres', 'The downloaded page describes an exclusive MMALABS collection centre and lists an approximate GHS 50,000 minimum investment.'],
          ['Operational support', 'The reference copy describes technology, IT infrastructure, staffing, quality assurance, management, planning, booking assistance, and sample and report tracking as areas supported through partnerships.']
        ], 'Ways to partner')}
        <p>Use the contact page to discuss your organisation and the partnership type you are interested in.</p>
        ${local('contact', 'Discuss a partnership', 'btn blue')}`
    },
    clinic: {
      title: 'MMALABS clinic.',
      description: 'Explore youth health, diabetes and hypertension management, genetic counselling, women’s health and travel medicine.',
      html: `<div class="section-head"><span class="eyebrow">Clinical services</span><h2>Care connected to diagnostics.</h2>
        <p>Our clinic brings together youth health, diabetes and hypertension management, genetic counselling, women’s health, travel medicine and vaccination services.</p></div>
        <figure class="reference-art reference-art--mark">
          <img src="/assets/specialist-clinic-brand.png" alt="MMALABS Specialist Clinic" width="400" height="124" loading="lazy" decoding="async">
        </figure>
        ${rows([
          ['Clinic hours', 'The downloaded clinic page states that Sunday visits are by appointment. Contact the clinic to confirm its current schedule.'],
          ['Appointments and enquiries', 'Call 050 167 2748 for appointments and enquiries. For emergency cases, call 024 035 2524.'],
          ['Specialist services', 'Contact the clinic to confirm clinician availability and appointment times.']
        ], 'Clinic information')}
        <section class="course-section" aria-labelledby="clinic-specialists">
          <h2 id="clinic-specialists">Specialists named in the downloaded clinic page</h2>
          <div class="dna-options-grid">
            <article><h3>Matthew Agyei</h3><p>Physician Assistant</p></article>
            <article><h3>Dr. Abraham Amponsah</h3><p>Family Physician Specialist</p></article>
            <article><h3>Dr. Eric Ackom</h3><p>Obstetrics and Gynecology Specialist</p></article>
            <article><h3>Dr. Evans Kyeremeh</h3><p>Specialist Clinical Scientist</p></article>
          </div>
          <p class="source-partner-note">Names and roles are copied from the downloaded MMALABS clinic page.</p>
        </section>
        ${local('branches', 'Find an office', 'btn blue')}`
    },
    'nkwafit': {
      title: 'Nkwafit health screening.',
      description: 'Explore Nkwafit health-screening packages and client benefits.',
      html: `<div class="section-head"><span class="eyebrow">Preventive health</span><h2>Make room for regular check-ups.</h2>
        <p>Nkwafit offers annual screening for men and women, alongside focused hypertension screening. Contact MMALABS for current package contents and pricing.</p></div>
        <img class="service-program-art" src="/assets/nkwafit-program.png" alt="Nkwafit health screening program" width="625" height="223" loading="lazy" decoding="async">
        <figure class="reference-art reference-art--wide">
          <img src="/assets/HYPERTENSION-PACKAGES.jpg" alt="Nkwafit hypertension screening flyer showing Basic, Advance and Comprehensive packages" width="1920" height="1080" loading="lazy" decoding="async">
        </figure>
        <p class="source-partner-note">The package flyer is reproduced from the downloaded reference. Confirm current prices and availability with MMALABS.</p>
        <p class="source-partner-note">The package names, test lists and discounts below are transcribed from the downloaded reference page.</p>
        <section class="course-section" aria-labelledby="nkwafit-screening">
          <h2 id="nkwafit-screening">Annual screening packages shown in the reference copy</h2>
          <div class="dna-options-grid nkwafit-package-grid">
            <article><h3>Men’s annual screening · 25% discount</h3>
              <p><strong>Basic</strong></p><ul><li>Complete blood count (CBC)</li><li>Random glucose</li><li>Liver function test and kidney panel</li><li>Basic lipid profile and routine urine examination</li></ul>
              <p><strong>Basic+</strong></p><ul><li>Uric acid and serum calcium</li></ul>
              <p><strong>Gold+</strong></p><ul><li>Total PSA</li><li>HbA1c, phosphorus and vitamin B12</li></ul>
            </article>
            <article><h3>Women’s annual screening · 25% discount</h3>
              <p><strong>Basic</strong></p><ul><li>Complete blood count (CBC) and random glucose</li><li>Liver function test, kidney panel and basic lipid profile</li><li>Thyroid function test and routine urine examination</li></ul>
              <p><strong>Basic+</strong></p><ul><li>Uric acid, corrected calcium and phosphorus</li><li>Iron studies monitoring panel and liquid-based cervical Pap</li></ul>
              <p><strong>Gold+</strong></p><ul><li>C-reactive protein, HbA1c and vitamin D</li><li>Vitamin B12</li></ul>
            </article>
            <article><h3>Hypertension screening · 25% discount</h3>
              <p><strong>Basic</strong></p><ul><li>Complete blood count (CBC) and random glucose</li><li>Kidney panel, lipid profile and routine urine examination</li></ul>
              <p><strong>Basic+</strong></p><ul><li>C-reactive protein, HbA1c and liver function test</li><li>Aldosterone</li></ul>
              <p><strong>Advance+</strong></p><ul><li>Thyroid function test, vitamin D and vitamin B12</li><li>Microalbumin/creatinine ratio and hs-CRP</li></ul>
            </article>
          </div>
        </section>
        ${rows([
          ['Loyal Client card', 'The reference copy says home or office collection was free with a one-time service purchase above GHS 500 per person.'],
          ['Gold Client card', 'The reference copy says home or office collection was free with a one-time service purchase above GHS 1,000 per person.'],
          ['Home collection', 'The program page describes home-departure services from the independent laboratory. Confirm location coverage and current eligibility with a branch.']
        ], 'Discount programme')}
        ${local('book-appointment', 'Plan an appointment', 'btn blue')}`
    },
    training: {
      title: 'Training and courses.',
      description: 'Explore professional courses on ISO standards and career development for laboratory professionals.',
      html: `<div class="section-head"><span class="eyebrow">Professional learning</span><h2>Build practical expertise.</h2>
        <p>Develop your knowledge of integrated management systems, ISO standards and career pathways in laboratory practice.</p></div>
        ${courseCards(trainingCourses)}
        <div class="course-contact"><p>For course enquiries and availability, contact the MMALABS team.</p>${local('contact', 'Ask about training', 'btn blue')}</div>`
    },
    'course-category/cpd-training': {
      title: 'CPD Training.',
      description: 'Browse MMALABS continuing professional development courses on integrated management systems and ISO standards.',
      html: `<div class="section-head"><span class="eyebrow">Course category</span><h2>Continuing professional development.</h2>
        <p>Courses on integrated management systems and ISO standards for healthcare businesses and organisations.</p></div>
        ${courseCards(trainingCourses.filter(course => course.categoryPath === 'course-category/cpd-training'))}
        ${local('training', 'All training and courses')}`
    },
    'course-category/professional-training': {
      title: 'Professional training.',
      description: 'Explore the MMALABS career-path masterclass for laboratory professionals.',
      html: `<div class="section-head"><span class="eyebrow">Course category</span><h2>Professional learning for laboratory teams.</h2>
        <p>Discover the masterclass for laboratory professionals considering career paths beyond the laboratory ecosystem.</p></div>
        ${courseCards(trainingCourses.filter(course => course.categoryPath === 'course-category/professional-training'))}
        ${local('training', 'All training and courses')}`
    },
    'courses/practical-understanding-the-iso-standards-integrated-management-system-main': {
      title: 'PRACTICAL UNDERSTANDING THE ISO STANDARDS – INTEGRATED MANAGEMENT SYSTEM – MAIN',
      description: 'Understand integrated management systems, environmental management and ISO standards through five recorded training sessions.',
      html: `<div class="course-detail">
        <div class="course-detail-main">
          <div class="section-head"><span class="eyebrow">CPD Training</span><h2>The Integrated Management System.</h2>
            <p>The ability of a healthcare institution to use a single management-system structure can enhance quality, safety, customer satisfaction and business growth.</p>
            <p>The Integrated System Management approach enables businesses to meet management-system requirements, improve efficiency, reduce cost, and limit workplace redundancy and conflict.</p>
            <p>This training explores the components of successfully implementing, monitoring and applying an Integrated Management System in healthcare, focusing on ISO elements and their use in healthcare businesses and organisations.</p></div>
          <section class="course-section" aria-labelledby="iso-objectives">
            <h2 id="iso-objectives">Course content</h2>
            <p><strong>PRACTICAL UNDERSTANDING THE ISO STANDARDS – The Integrated Management System</strong></p>
            <ul class="course-objectives">
              <li>Explain the need for an Integrated Management System (IMS) for businesses.</li>
              <li>Why your organisation should have an EMS.</li>
              <li>Discuss key EMS concepts.</li>
              <li>Discuss environmental policy.</li>
              <li>Identify environmental aspects.</li>
              <li>Discuss legal and other requirements.</li>
              <li>Discuss objectives and targets.</li>
              <li>Discuss environmental management programmes.</li>
              <li>Discuss structure and responsibility.</li>
              <li>Discuss training, awareness and competency.</li>
            </ul>
          </section>
          <section class="course-section" aria-labelledby="iso-recordings">
            <h2 id="iso-recordings">Recorded sessions</h2>
            <ol class="course-resource-list">
              ${[
                ['Day 1', 'https://www.youtube.com/watch?v=BXF7dIY37mM'],
                ['Day 2', 'https://www.youtube.com/watch?v=jI3Jufqjb8o'],
                ['Day 3', 'https://www.youtube.com/watch?v=MNdwS3rLXYs'],
                ['Day 4', 'https://www.youtube.com/watch?v=DGVn20ZBrvA&t=1919s'],
                ['Day 5', 'https://youtu.be/hojhWZ8p7Y4']
              ].map(([day, url]) => `<li><span>${day}</span><a href="${url}" target="_blank" rel="noopener noreferrer">Watch the recording <span aria-hidden="true">↗</span></a></li>`).join('')}
            </ol>
          </section>
          <section class="course-section" aria-labelledby="iso-slides">
            <h2 id="iso-slides">Course slides</h2>
            <ul class="course-material-list">
              ${[
                ['Introduction to IMS & EMS – ISO 14001 2015', 'Introduction-to-IMS-EMS-ISO-14001-2015.pdf'],
                ['EMS requirements with guidance for use – ISO 14001 2015', 'EMS-requirements-with-guidance-for-use-ISO-14001-2015.pdf'],
                ['ISO 9001 – Planning and Support', 'ISO-9001-Planning-and-Support.pdf'],
                ['ISO 9001 – Organization and Leadership', 'ISO-9001-Organization-and-Leadership.pdf'],
                ['ISO 9001 2015 Product & Service Development, Marketing and Customer Experience Satisfaction', 'ISO-9001-2015-Product-Service-Development-Marketing-and-Customer-Experience-Satisfaction.pdf']
              ].map(([label, file]) => `<li><a href="/assets/training/${file}" target="_blank" rel="noopener">${label} <span aria-hidden="true">↗</span></a></li>`).join('')}
            </ul>
          </section>
        </div>
        <aside class="course-detail-aside">
          <img src="/assets/course-iso-training.jpg" alt="Practical understanding of ISO standards course" width="370" height="260" loading="lazy" decoding="async">
          <p class="eyebrow">CPD Training</p><p>Explore the recorded course and download its accompanying slides.</p>
          ${local('course-category/cpd-training', 'More CPD courses', 'btn outline')}
          ${local('training', 'All training and courses', 'textlink')}
        </aside>
      </div>`
    },
    'courses/practical-understanding-the-iso-standards-integrated-management-system': {
      title: 'PRACTICAL UNDERSTANDING THE ISO STANDARDS – INTEGRATED MANAGEMENT SYSTEM',
      description: 'Explore the integrated management system course, its ISO 14001 and ISO 9001 curriculum, and the available introductory lesson.',
      html: `<div class="course-detail">
        <div class="course-detail-main">
          <div class="section-head"><span class="eyebrow">CPD Training</span><h2>Integrated management systems in healthcare.</h2>
            <p>The ability of a healthcare institution to use a single management-system structure can enhance quality, safety, customer satisfaction and business growth.</p>
            <p>The Integrated System Management approach enables businesses to meet management-system requirements, improve efficiency, reduce cost, and limit redundancy and conflict in the workplace.</p>
            <p>This training explores the components of successful implementation, monitoring and application of the Integrated Management System in healthcare, focusing on ISO elements and how to apply them in healthcare businesses and organisations to improve patient outcomes, business growth and customer retention.</p></div>
          <section class="course-section" aria-labelledby="ims-curriculum">
            <h2 id="ims-curriculum">Course curriculum</h2>
            <ul class="course-curriculum">
              <li><a href="/courses/practical-understanding-the-iso-standards-integrated-management-system/course/introduction-to-ims-ems-iso-14001-2015/">Introduction to IMS & EMS – ISO 14001 2015 <span>01:21:05</span></a></li>
              <li><span>EMS requirements with guidance for use – ISO 14001 2015</span><span>02:10:06</span></li>
              <li><span>Requirements ISO 9001 2015 – Planning and Support</span><span>01:44:23</span></li>
              <li><span>ISO 9001 2015 – Organizational Leadership</span></li>
              <li><span>Quality management systems — Product and Services requirement – ISO 9001 2015</span></li>
            </ul>
          </section>
          <section class="course-section" aria-labelledby="ims-objectives">
            <h2 id="ims-objectives">What the course covers</h2>
            <ul class="course-objectives">
              <li>Explain the need for an Integrated Management System (IMS) for businesses.</li>
              <li>Why your organisation should have an EMS.</li>
              <li>Discuss key EMS concepts and environmental policy.</li>
              <li>Identify environmental aspects and discuss legal and other requirements.</li>
              <li>Discuss objectives, targets, management programmes, structure and responsibility.</li>
              <li>Discuss training, awareness and competency.</li>
            </ul>
          </section>
        </div>
        <aside class="course-detail-aside">
          <img src="/assets/course-iso-training.jpg" alt="Practical understanding of ISO standards course" width="370" height="260" loading="lazy" decoding="async">
          <p class="eyebrow">CPD Training</p><p>Open the available introductory lesson or explore the five-day recorded course.</p>
          ${local('courses/practical-understanding-the-iso-standards-integrated-management-system/course/introduction-to-ims-ems-iso-14001-2015', 'Start learning', 'btn blue')}
          ${local('courses/practical-understanding-the-iso-standards-integrated-management-system-main', 'Five-day course materials', 'textlink')}
          ${local('course-category/cpd-training', 'More CPD courses', 'textlink')}
        </aside>
      </div>`
    },
    'courses/practical-understanding-the-iso-standards-integrated-management-system/course/introduction-to-ims-ems-iso-14001-2015': {
      title: 'Introduction to IMS & EMS – ISO 14001 2015',
      description: 'Introduction to integrated management systems and environmental management systems under ISO 14001:2015.',
      html: `<div class="course-detail">
        <div class="course-detail-main">
          <p class="eyebrow">CPD Training / Course lesson</p>
          <h2>Introduction to IMS & EMS – ISO 14001 2015</h2>
          <div class="course-video">
            <iframe src="https://www.youtube.com/embed/BXF7dIY37mM" title="Introduction to IMS and EMS – ISO 14001 2015" loading="lazy" referrerpolicy="strict-origin-when-cross-origin" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
          <a class="course-card-link" href="https://www.youtube.com/watch?v=BXF7dIY37mM" target="_blank" rel="noopener noreferrer">Open the lesson on YouTube <span aria-hidden="true">↗</span></a>
          <section class="course-section" aria-labelledby="lesson-objectives">
            <h2 id="lesson-objectives">Learning objectives</h2>
            <ul class="course-objectives">
              <li>Explain the need for an Integrated Management System (IMS) for businesses.</li>
              <li>Understand why an organisation should have an environmental management system.</li>
              <li>Discuss key EMS concepts and environmental policy.</li>
              <li>Identify environmental aspects and discuss legal and other requirements.</li>
              <li>Discuss objectives and targets, environmental management programmes, structure and responsibility.</li>
              <li>Discuss training, awareness and competency.</li>
            </ul>
          </section>
        </div>
        <aside class="course-detail-aside">
          <p class="eyebrow">Course navigation</p>
          ${local('courses/practical-understanding-the-iso-standards-integrated-management-system', 'Back to course curriculum', 'btn outline')}
          ${local('courses/practical-understanding-the-iso-standards-integrated-management-system-main', 'View five-day recordings', 'textlink')}
          ${local('training', 'All training and courses', 'textlink')}
        </aside>
      </div>`
    },
    'courses/masterclass-career-path-for-laboratory-professionals': {
      title: 'MASTERCLASS – CAREER PATH FOR LABORATORY PROFESSIONALS',
      description: 'A panel discussion sharing guidance and mentorship on career paths for laboratory professionals.',
      html: `<div class="course-detail">
        <div class="course-detail-main">
          <div class="section-head"><span class="eyebrow">Professional training</span><h2>Career path for laboratory professionals.</h2>
            <p>Arguably, the rigorous training and skill set acquired by laboratory professionals position them to excel in many industries and fields, even beyond the laboratory ecosystem.</p>
            <p>The diversity in the laboratory and the numerous opportunities convince professionals to work assiduously and remain in the lab. However, the numerous uncertainties compounded with intolerance towards laboratory practice in the medical space make determining a career path after graduation a tough decision for many laboratory professionals.</p>
            <p>This panel discussion was intended to provide possible guidance and mentorship on career paths for laboratory professionals. It included young professionals who have chosen paths in laboratory practice, academia, law, entrepreneurship and consulting, among others, and are making a significant impact.</p></div>
          <section class="course-section" aria-labelledby="career-paths">
            <h2 id="career-paths">Career paths represented</h2>
            <ul class="course-objectives">
              <li>Laboratory practice.</li>
              <li>Academia.</li>
              <li>Law.</li>
              <li>Entrepreneurship.</li>
              <li>Consulting and other professional paths.</li>
            </ul>
          </section>
          ${local('contact', 'Enquire about this masterclass', 'btn blue')}
        </div>
        <aside class="course-detail-aside">
          <img src="/assets/course-career-path-masterclass.jpg" alt="Career path masterclass for laboratory professionals" width="370" height="260" loading="lazy" decoding="async">
          <p class="eyebrow">Professional training</p><p>Explore the course discussion and its career-path themes.</p>
          ${local('course-category/professional-training', 'More professional training', 'btn outline')}
          ${local('training', 'All training and courses', 'textlink')}
        </aside>
      </div>`
    },
    careers: {
      title: 'Careers at MMALABS.',
      description: 'Explore career paths across laboratory, clinical, operations and support teams.',
      html: `<div class="section-head"><span class="eyebrow">Join the team</span><h2>Bring your skills to diagnostic care.</h2>
        <p>The downloaded MMALABS career page invites qualified applicants to review openings and submit an application. It lists roles across laboratory science, clinical care, collection, operations and business development.</p></div>
        <figure class="reference-art reference-art--wide">
          <img src="/assets/careers-banner.jpg" alt="MMALABS Join Our Team banner" width="1024" height="125" loading="lazy" decoding="async">
        </figure>
        ${rows([
          ['Laboratory science', 'Medical Lab Scientist, Medical Lab Scientist – Low, and Intern Lab Associate.'],
          ['Clinical care and imaging', 'Registered General Nurse, Physician Assistant and Medical Sonographer.'],
          ['Operations and collection', 'Housekeeper, Security Personnel and Delivery Associate / Mobile Phlebotomist.'],
          ['Business development', 'Marketing and Sales Specialist.']
        ], 'Career paths')}
        <p>These job titles are reproduced from the downloaded MMALABS career page. Contact the team about applying.</p>
        ${local('contact', 'Ask about opportunities', 'btn blue')}`
    },
    staff: {
      title: 'The people behind MMALABS.',
      description: 'A selection of the names and professional roles displayed in the public MMALABS staff directory.',
      html: `<div class="section-head"><span class="eyebrow">Staff directory</span><h2>People across clinical, laboratory and support teams.</h2>
        <p>Meet team members working across business development, clinical care, laboratory services and imaging.</p></div>
        <div class="team-grid">${teamMembers.map(person => `<article class="team-card">
          <img src="/assets/${person[2]}" alt="${esc(`${person[0]}, ${person[1]}`)}" width="1080" height="1080" loading="lazy" decoding="async">
          <div><h3>${esc(person[0])}</h3><p>${esc(person[1])}</p></div>
        </article>`).join('')}</div>
        <p>Explore our career opportunities or contact the team to learn more about working at MMALABS.</p>`
    },
    events: {
      title: 'Events and updates.',
      description: 'Keep up with professional learning, community activities and MMALABS news.',
      html: `<div class="section-head"><span class="eyebrow">Connect and learn</span><h2>Event listings from MMALABS.</h2>
        <p>The downloaded events page lists professional learning and company activities.</p></div>
        ${rows([
          ['Career path for laboratory professionals', 'A masterclass for laboratory professionals, linked to the professional training listing.'],
          ['DNA test sampling and validation certificate', 'A certificate programme listed on the reference events page. Contact MMALABS for current availability.'],
          ['Business and Scientific Conference', 'The source page lists this conference as offering 20 CPD points; confirm current event details with MMALABS.']
        ], 'Explore')}
        <div class="about-actions">${local('news', 'Read MMALABS news', 'btn blue')} ${local('training', 'View training and courses', 'btn outline')}</div>`
    },
    news: {
      title: 'News from MMALABS.',
      description: 'Read complete MMALABS announcements, research updates, service news and stories from across our archive.',
      html: `<div class="section-head"><span class="eyebrow">News and announcements</span><h2>Updates from the diagnostic chain.</h2>
        <p>Explore the complete story behind each announcement, research partnership and service update.</p></div>
        <div class="guide-grid source-news" id="news-archive" aria-label="MMALABS news archive"></div>`
    },
    faqs: {
      title: 'Questions before your visit.',
      description: 'Practical answers to common questions about services, appointments and reports.',
      html: `<section class="faq-page" aria-labelledby="faq-page-title">
        <div class="faq-intro">
          <span class="eyebrow">Patient information / FAQ</span>
          <h2 id="faq-page-title">A clearer next step starts with a good question.</h2>
          <p>Find practical information about the test menu, preparing for a visit, getting your report and contacting MMALABS.</p>
          <div class="faq-search">
            <label for="faq-search-input">Search questions and answers</label>
            <input id="faq-search-input" type="search" placeholder="Try “sample”, “report” or “opening hours”">
            <span id="faq-result-count" aria-live="polite">10 answers</span>
          </div>
          <div class="faq-filters" role="group" aria-label="Filter frequently asked questions">
            <button type="button" data-faq-filter="all" aria-pressed="true">All questions</button>
            <button type="button" data-faq-filter="tests" aria-pressed="false">Tests</button>
            <button type="button" data-faq-filter="visits" aria-pressed="false">Appointments & visits</button>
            <button type="button" data-faq-filter="results" aria-pressed="false">Reports & results</button>
          </div>
        </div>
        <div class="faq-layout">
          <aside class="faq-shortcuts" aria-label="Helpful pages">
            <span class="eyebrow">Need to do something now?</span>
            <h3>Go straight to the right place.</h3>
            <a href="/tests/">Browse the test menu <span aria-hidden="true">↗</span></a>
            <a href="/book-appointment/">Plan an appointment <span aria-hidden="true">↗</span></a>
            <a href="/branches/">Find a branch <span aria-hidden="true">↗</span></a>
            <a href="/view-report/">Open report access <span aria-hidden="true">↗</span></a>
            <p>For a test-specific question, contact the branch before travelling.</p>
          </aside>
          <div class="faq-groups" id="faq-groups">
            <section class="faq-group" data-faq-group="tests" aria-labelledby="faq-tests-title">
              <div class="faq-group-heading"><span class="eyebrow">01 / Explore</span><h3 id="faq-tests-title">Finding the right test</h3></div>
              <details data-faq-item open>
                <summary>Where can I find the MMALABS test menu?</summary>
                <p>Browse and search the <a href="/tests/">downloaded MMALABS test menu</a>. It lists 1,712 tests and services from the reference copy. The list may not reflect current availability, so confirm with a branch before making plans.</p>
              </details>
              <details data-faq-item>
                <summary>Can I search by test name or department?</summary>
                <p>Yes. Use the search field on the <a href="/tests/">test menu</a> or choose a department from the filter. Each result links to the details available in the downloaded menu.</p>
              </details>
              <details data-faq-item>
                <summary>How do I check the sample required for a test?</summary>
                <p>Open the test details and look for a sample requirement. The downloaded menu includes this information for some tests only. Contact the branch or your referring clinician to confirm the exact sample and collection instructions.</p>
              </details>
              <details data-faq-item>
                <summary>Where can I find a test’s price?</summary>
                <p>Prices are not included in the downloaded test menu. Contact a <a href="/branches/">MMALABS branch</a> for a current price and to confirm whether the service is available there.</p>
              </details>
            </section>
            <section class="faq-group" data-faq-group="visits" aria-labelledby="faq-visits-title">
              <div class="faq-group-heading"><span class="eyebrow">02 / Prepare</span><h3 id="faq-visits-title">Appointments and visits</h3></div>
              <details data-faq-item>
                <summary>How should I prepare for my test?</summary>
                <p>Preparation depends on the specific test. Follow the instructions given by your clinician or MMALABS for your appointment. Do not stop prescribed medicines or change your routine unless your clinician tells you to.</p>
              </details>
              <details data-faq-item>
                <summary>How do I arrange an appointment?</summary>
                <p>Start at <a href="/book-appointment/">Book an appointment</a> or contact your preferred <a href="/branches/">branch</a> to confirm the service, timing and any preparation needed.</p>
              </details>
              <details data-faq-item>
                <summary>How can I check branch addresses and opening hours?</summary>
                <p>Use the <a href="/branches/">branch directory</a> for locations and listed hours. Call ahead to confirm current opening times and service availability before travelling.</p>
              </details>
            </section>
            <section class="faq-group" data-faq-group="results" aria-labelledby="faq-results-title">
              <div class="faq-group-heading"><span class="eyebrow">03 / Follow up</span><h3 id="faq-results-title">Reports and results</h3></div>
              <details data-faq-item>
                <summary>How do I view my laboratory report?</summary>
                <p>Open the <a href="/view-report/">MMALABS report access page</a> to continue to the report portal. Use the access details provided by the branch that collected your sample, and keep them private.</p>
              </details>
              <details data-faq-item>
                <summary>When will my result be ready?</summary>
                <p>Some entries in the downloaded menu show a turnaround estimate, but timing can depend on the test and sample. Confirm the expected reporting time with the collecting branch.</p>
              </details>
              <details data-faq-item>
                <summary>Who can explain what my result means?</summary>
                <p>Discuss your report with a qualified healthcare professional who can interpret it in the context of your symptoms and medical history. Contact the collecting branch if you need help accessing the report.</p>
              </details>
            </section>
            <p class="faq-no-results" id="faq-no-results" hidden>No questions match that search. Try a different term or choose another topic.</p>
          </div>
        </div>
        <div class="faq-contact"><div><span class="eyebrow">Still need help?</span><h3>Talk to the MMALABS team.</h3></div>
          <p>For advice about a particular service, sample or appointment, contact the branch you plan to visit.</p>
          ${local('contact', 'Contact MMALABS', 'btn blue')}
        </div>
      </section>`
    },
    'preparing-for-a-test': {
      title: 'Preparing for a test.',
      description: 'Test preparation depends on the specific service. Confirm your instructions with MMALABS before collection.',
      html: `<h2>Check the instructions for your exact test.</h2><p>Collection and preparation requirements vary by test. Follow the instructions provided by the laboratory and your clinician.</p>
        <p>Do not fast, change prescribed medicines or alter your care routine unless your clinician or laboratory gives you instructions to do so.</p>
        ${local('tests', 'Explore tests and services', 'btn blue')} ${local('branches', 'Contact a branch')}`
    },
    'understanding-your-report': {
      title: 'Accessing and discussing your report.',
      description: 'Keep your report details private and discuss results with a healthcare professional.',
      html: `<h2>Keep report access private.</h2><p>Use the report instructions and reference details supplied by your branch. If you cannot access your report, contact the branch that collected your sample.</p>
        <p>A laboratory result should be interpreted alongside your symptoms, history and clinical examination. Discuss it with your clinician before making health decisions.</p>
        ${local('branches', 'Contact the collecting branch', 'btn blue')}`
    }
  };

  const categoryAliases = {
    'departments/hematology': ['hematology', 'hematologic-studies'],
    'departments/chemical-pathology': ['chemical-pathology', 'biochemical-studies', 'hormonal-research'],
    'departments/immunoserology': ['immunoserology', 'immunological-studies'],
    'departments/microbiology': ['microbiology', 'diagnosis-of-infectious-diseases'],
    'departments/pathology': ['histopathology', 'cytopathology', 'cytologic-studies', 'microscopic-cytological-studies'],
    'departments/cytopathology': ['cytopathology', 'cytologic-studies', 'microscopic-cytological-studies'],
    'departments/histopathology': ['histopathology'],
    'departments/molecular-medicine': ['molecular-biology']
  };
  const catalogCategories = [
    {id: 1, name: 'Hematology', slug: 'hematology'},
    {id: 2, name: 'Chemical Pathology', slug: 'chemical-pathology'},
    {id: 3, name: 'Immunoserology', slug: 'immunoserology'},
    {id: 4, name: 'Microbiology', slug: 'microbiology'},
    {id: 5, name: 'Cytopathology', slug: 'cytopathology'},
    {id: 6, name: 'Histopathology', slug: 'histopathology'},
    {id: 7, name: 'Molecular Medicine', slug: 'molecular-biology'},
    {id: 8, name: 'Imaging and physiology', slug: 'imaging'}
  ];
  const curatedCatalogItems = [
    ['cytology-examination-body-fluids', 'Cytology examination, body fluids', 'Microscopic assessment of cells in a body-fluid sample.', 5],
    ['cytology-examination-sputum', 'Cytology examination, sputum', 'Cell assessment using a sputum specimen.', 5],
    ['cytology-examination-urine', 'Cytology examination, urine', 'Microscopic examination of cells in a urine specimen.', 5],
    ['cytology-cell-block-examination', 'Cytology, cell block examination', 'A cytology service that prepares collected cells for further laboratory assessment.', 5],
    ['cytology-fine-needle-aspiration-fnac', 'Cytology, fine needle aspiration (FNAC)', 'Cell examination following fine-needle aspiration; sample collection is arranged by a clinician.', 5],
    ['cytology-consultation-second-opinion', 'Cytology consultation, second opinion', 'A specialist review service for selected cytology material.', 5],
    ['cytology-pap-smear-genital-female-conventional', 'Cytology (Pap smear), conventional', 'A conventional cervical cytology service. Ask the clinic about preparation and collection.', 5],
    ['cytology-pap-smear-genital-female-liquid-based', 'Cytology (Pap smear), liquid-based', 'A liquid-based cervical cytology service. Confirm suitability and collection details with a clinician.', 5],
    ['sudan-iv-stain', 'Sudan IV stain', 'A special stain used in histopathology.', 6],
    ['immunohistochemistry-microsatellite-instability-panel', 'Immunohistochemistry, microsatellite instability panel', 'A specialist immunohistochemistry panel for tissue assessment.', 6],
    ['immunohistochemistry-synaptophysin', 'Immunohistochemistry, synaptophysin', 'A specialist immunohistochemistry stain.', 6],
    ['immunohistochemistry-tdt', 'Immunohistochemistry, TDT', 'A specialist immunohistochemistry stain.', 6],
    ['immunohistochemistry-thyroglobulin', 'Immunohistochemistry, thyroglobulin', 'A specialist immunohistochemistry stain.', 6],
    ['immunohistochemistry-ttf-1', 'Immunohistochemistry, TTF-1', 'A specialist immunohistochemistry stain.', 6],
    ['immunohistochemistry-vimentin', 'Immunohistochemistry, vimentin', 'A specialist immunohistochemistry stain.', 6],
    ['immunohistochemistry-wt-1', 'Immunohistochemistry, WT-1', 'A specialist immunohistochemistry stain.', 6],
    ['immunohistochemistry-progesterone-receptor-pr', 'Immunohistochemistry, progesterone receptor (PR)', 'A specialist immunohistochemistry stain.', 6],
    ['immunohistochemistry-prostate-specific-antigen-psa', 'Immunohistochemistry, prostate-specific antigen (PSA)', 'A specialist immunohistochemistry stain.', 6],
    ['spirometry', 'Spirometry / pulmonary function testing', 'A breathing test. Ask about medicines and preparation before attending.', 8],
    ['echocardiography', 'Echocardiography (ECHO)', 'Ultrasound imaging of the heart.', 8],
    ['electrocardiography', 'Electrocardiography (ECG)', 'A test that records the heart’s electrical activity.', 8],
    ['electroencephalography', 'Electroencephalography (EEG)', 'A test that records electrical activity in the brain.', 8],
    ['digital-x-ray', 'Digital X-ray', 'Digital radiography for diagnostic imaging.', 8],
    ['doppler-ultrasound', 'Doppler ultrasound', 'Ultrasound assessment of blood flow.', 8],
    ['allergy-comprehensive-profile', 'Allergy comprehensive profile', 'An allergy profile. A clinician should guide test selection.', 3],
    ['allergy-107-allergens', 'Allergy 107 allergens', 'A multi-allergen panel. Confirm panel contents and interpretation with a clinician.', 3],
    ['paternity-testing', 'Paternity testing', 'Relationship testing. Consent and identification requirements vary by test purpose.', 7],
    ['dna-methylation', 'DNA methylation testing', 'A genetic testing service with a report and non-invasive sample collection.', 7],
    ['absolute-eosinophil-count', 'Absolute eosinophil count; AEC', 'A blood cell count used in the assessment of eosinophils. Confirm sample and preparation requirements with the laboratory.', 1],
    ['absolute-lymphocyte-count', 'Absolute lymphocyte count', 'A blood cell count used in the assessment of lymphocytes. Confirm sample and preparation requirements with the laboratory.', 1],
    ['absolute-neutrophil-count', 'Absolute neutrophil count', 'A blood cell count used in the assessment of neutrophils. Confirm sample and preparation requirements with the laboratory.', 1],
    ['blood-group-abo-rh-factor', 'Blood group ABO & Rh factor', 'Blood-group and Rh-factor testing. Ask the laboratory about identification requirements.', 1],
    ['blood-picture-peripheral-smear', 'Blood picture; peripheral blood smear examination', 'Microscopic examination of blood cells on a peripheral smear.', 1],
    ['hydroxyprogesterone-17-ohp', '17-hydroxyprogesterone (17-OHP)', 'A hormone investigation used in the assessment of adrenal and reproductive health.', 2],
    ['hiaa-random-urine', '5-HIAA, random urine', 'Measurement of 5-HIAA in a random urine specimen. Confirm collection and preparation instructions with the laboratory.', 2],
    ['acid-phosphatase-total', 'Acid phosphatase, total', 'Measurement of total acid phosphatase in a laboratory sample.', 2],
    ['acth', 'ACTH', 'Measurement of adrenocorticotropic hormone. Confirm sample timing and preparation with the laboratory.', 2],
    ['allergy-animal-panel', 'Allergy animal panel', 'A panel assessing selected animal allergens. A clinician should guide test selection and interpretation.', 3],
    ['allergy-asthma-rhinitis-adult', 'Allergy asthma / rhinitis screening panel, adult', 'An adult screening panel for selected asthma- and rhinitis-related allergens.', 3],
    ['allergy-asthma-rhinitis-pediatric', 'Allergy asthma / rhinitis screening panel, pediatric', 'A paediatric screening panel for selected asthma- and rhinitis-related allergens.', 3],
    ['adenovirus-antigen-stool', 'Adenovirus antigen for gastroenteritis, stool', 'Detection of adenovirus antigen in a stool specimen.', 4],
    ['adenovirus-antigen-respiratory', 'Adenovirus antigen for respiratory infections', 'Detection of adenovirus in a respiratory specimen.', 4],
    ['afb-identification-rapid', 'AFB identification, rapid; PNB test', 'A rapid laboratory test used in acid-fast bacilli identification.', 4],
    ['c-difficile-toxin-stool', 'C. difficile toxin A & B, stool', 'Detection of Clostridioides difficile toxins in a stool specimen.', 4],
    ['actn3-sports-gene-genotyping', 'ACTN3 (sports gene), genotyping', 'Genotyping of the ACTN3 gene. Discuss the purpose and limitations of genetic testing with a qualified professional.', 7],
    ['adenovirus-qualitative-pcr', 'Adenovirus, qualitative PCR', 'Qualitative PCR testing for adenovirus.', 7],
    ['alpha-thalassemia-mutation-detection', 'Alpha thalassemia mutation detection', 'Molecular testing for selected alpha-thalassemia mutations.', 7],
    ['aneuploidy-detection-blood', 'Aneuploidy detection, blood', 'Blood-based aneuploidy testing. Confirm suitability and consent requirements with a specialist.', 7],
    ['histopathology-biopsy-second-opinion', 'Histopathology, biopsy – second opinion', 'Specialist review of selected biopsy material for a second opinion.', 6],
    ['histopathology-biopsy-bone', 'Histopathology, biopsy, bone', 'Histopathological assessment of a bone-biopsy specimen.', 6],
    ['histopathology-biopsy-large-specimen', 'Histopathology, biopsy, large specimen', 'Histopathological assessment of a large biopsy specimen.', 6],
    ['histopathology-dif-kidney-biopsy', 'Histopathology, direct immunofluorescence (DIF), kidney biopsy', 'Direct immunofluorescence assessment of a kidney-biopsy specimen.', 6]
  ].map(([slug, title, excerpt, category]) => ({
    slug,
    title: {rendered: title},
    excerpt: {rendered: excerpt},
    content: {rendered: `<p>${excerpt}</p>`},
    categories: [category]
  }));
  let catalogItems = curatedCatalogItems;
  let catalogItemsPromise;
  const departmentNames = {
    'departments/hematology': 'Hematology',
    'departments/chemical-pathology': 'Chemical Pathology',
    'departments/immunoserology': 'Immunoserology',
    'departments/microbiology': 'Microbiology',
    'departments/pathology': 'Histopathology and Cytopathology',
    'departments/cytopathology': 'Cytopathology',
    'departments/histopathology': 'Histopathology',
    'departments/molecular-medicine': 'Molecular Medicine'
  };
  const departmentDescriptions = {
    'departments/hematology': 'Browse blood-count and hematology services. Confirm the right test and preparation with your clinician or laboratory.',
    'departments/chemical-pathology': 'Explore chemistry tests, including glucose, lipid and liver-function testing. Preparation can differ by test.',
    'departments/immunoserology': 'Browse selected allergy, antibody and immunoserology tests. A clinician should guide test selection and interpretation.',
    'departments/microbiology': 'Explore microbiology and infectious-disease services. Sample collection and preparation depend on the test.',
    'departments/pathology': 'Browse selected histopathology and cytopathology services, including specialist tissue and cell assessment.',
    'departments/cytopathology': 'Explore selected cytology services. Collection and suitability should be discussed with the referring clinician.',
    'departments/histopathology': 'Browse tissue-assessment and immunohistochemistry services.',
    'departments/molecular-medicine': 'Explore selected DNA and molecular testing services. Confirm consent, sample requirements and the purpose of the test with the specialist team.'
  };
  const departmentProfiles = {
    'departments/hematology': {
      image: 'about-chemistry.jpg',
      imageAlt: 'MMALABS laboratory professional operating diagnostic equipment',
      imageCaption: 'MMALABS laboratory photograph',
      heading: 'Blood counts, blood films and marrow investigations.',
      summary: 'Hematology services include individual cell counts, blood grouping, blood-film assessment and bone-marrow investigations.',
      focus: ['Differential cell counts', 'Blood group and Rh factor', 'Peripheral blood smear examination', 'Bone-marrow studies'],
      examples: ['ABSOLUTE EOSINOPHIL COUNT; AEC', 'ABSOLUTE LYMPHOCYTE COUNT', 'BLOOD GROUP ABO & RH FACTOR', 'BLOOD PICTURE; PERIPHERAL BLOOD SMEAR EXAMINATION']
    },
    'departments/chemical-pathology': {
      image: 'about-chemistry.jpg',
      imageAlt: 'MMALABS laboratory professional operating diagnostic equipment',
      imageCaption: 'MMALABS laboratory photograph',
      heading: 'Biochemical, endocrine and metabolic investigations.',
      summary: 'Chemical Pathology services span urine chemistry, hormone and steroid assays, enzyme tests and other biochemical investigations.',
      focus: ['Hormone and steroid assays', 'Urine-based investigations', 'Enzyme analysis', 'Stimulation and functional testing'],
      examples: ['17 – HYDROXYPROGESTERONE (17-OHP)', '5 – HIAA (5-HYDROXY INDOLE ACETIC ACID), RANDOM URINE', 'ACID PHOSPHATASE, TOTAL', 'ACTH']
    },
    'departments/immunoserology': {
      image: 'allergy-home.png',
      imageAlt: 'MMALABS Allergy Home special program',
      imageCaption: 'Allergy Home programme',
      heading: 'Allergy panels, immune testing and serology.',
      summary: 'Immunoserology services include allergy profiles and specific allergen panels alongside antibody, immune and marker testing.',
      focus: ['Multi-allergen and allergy profiles', 'Asthma and rhinitis panels', 'Antibody and serology testing', 'Selected immune and clinical markers'],
      examples: ['ALLERGY 107 ALLERGENS, LIA', 'ALLERGY ANIMAL PANEL', 'ALLERGY ASTHMA / RHINITIS SCREENING PANEL ADULT', 'ALLERGY COMPREHENSIVE PROFILE']
    },
    'departments/molecular-medicine': {
      heading: 'Genetic testing, genotyping and molecular diagnostics.',
      summary: 'Molecular Medicine services include genotyping, mutation detection, PCR testing and aneuploidy investigations.',
      focus: ['Genotyping and genetic variants', 'Mutation detection', 'Qualitative and quantitative PCR', 'Prenatal and aneuploidy testing'],
      examples: ['ACTN3 (SPORTS GENE), GENOTYPING', 'ADENOVIRUS, QUALITATIVE PCR', 'ALPHA THALASSEMIA MUTATION DETECTION', 'ANEUPLOIDY DETECTION, BLOOD']
    },
    'departments/microbiology': {
      heading: 'Infectious-disease investigations and specimen testing.',
      summary: 'Microbiology services include antigen testing, organism stains and investigations using respiratory, stool, urine and other specimens.',
      focus: ['Antigen testing', 'Organism stains and identification', 'Respiratory and stool specimens', 'Urine screening'],
      examples: ['ADENOVIRUS ANTIGEN FOR GASTROENTERITIS. STOOL', 'ADENOVIRUS ANTIGEN FOR RESPIRATORY INFECTIONS', 'AFB IDENTIFICATION, RAPID; PNB TEST', 'C. DIFFICILE TOXIN A & B, STOOL']
    },
    'departments/pathology': {
      heading: 'Tissue assessment and cell examination.',
      summary: 'Pathology services include tissue and cell assessment, specialist stains, biopsy review and cytology.',
      focus: ['Biopsy assessment', 'Cytology and cell-block examination', 'Specialist tissue stains', 'Second-opinion review'],
      examples: ['HISTOPATHOLOGY, BIOPSY – SECOND OPINION', 'HISTOPATHOLOGY, BIOPSY, BONE', 'CYTOLOGY EXAMINATION, BODY FLUIDS', 'CYTOLOGY, FINE NEEDLE ASPIRATION; FNAC']
    },
    'departments/cytopathology': {
      heading: 'Cell examination across a range of specimen types.',
      summary: 'Cytopathology services include cervical cytology, cell-block examination and assessment of body-fluid, sputum and urine samples.',
      focus: ['Conventional and liquid-based Pap smears', 'Body-fluid, sputum and urine cytology', 'Fine-needle aspiration cytology', 'Cell-block examination and consultation'],
      examples: ['CYTOLOGY (PAP SMEAR), GENITAL, FEMALE, CONVENTIONAL', 'CYTOLOGY (PAP SMEAR), GENITAL, FEMALE, LIQUID BASED', 'CYTOLOGY EXAMINATION, BODY FLUIDS', 'CYTOLOGY, FINE NEEDLE ASPIRATION; FNAC']
    },
    'departments/histopathology': {
      heading: 'Tissue assessment, biopsy and specialist staining.',
      summary: 'Histopathology services include biopsy assessment, tissue review, immunohistochemistry and direct immunofluorescence.',
      focus: ['Biopsy assessment by specimen type', 'Second-opinion review', 'Immunohistochemistry', 'Direct immunofluorescence'],
      examples: ['HISTOPATHOLOGY, BIOPSY – SECOND OPINION', 'HISTOPATHOLOGY, BIOPSY, BONE', 'HISTOPATHOLOGY, BIOPSY, LARGE SPECIMEN', 'HISTOPATHOLOGY, DIRECT IMMUNOFLUORESCENCE (DIF), KIDNEY BIOPSY']
    }
  };
  function getCategories() {
    return Promise.resolve(catalogCategories);
  }

  function loadCatalogItems() {
    if (!catalogItemsPromise) {
      catalogItemsPromise = fetch('/test-menu.json')
        .then(response => {
          if (!response.ok) throw new Error(`Test menu request failed (${response.status}).`);
          return response.json();
        })
        .then(entries => {
          if (!Array.isArray(entries) || entries.some(entry =>
            !entry || typeof entry.slug !== 'string' || typeof entry.title !== 'string' ||
            typeof entry.department !== 'string'
          )) {
            throw new Error('The downloaded test menu data is incomplete.');
          }
          const categoryAliases = {
            'biochemical-studies': 'chemical-pathology',
            'hormonal-research': 'chemical-pathology',
            'immunological-studies': 'immunoserology',
            'diagnosis-of-infectious-diseases': 'microbiology',
            'cytologic-studies': 'cytopathology',
            'microscopic-cytological-studies': 'cytopathology',
            'molecular-medicine': 'molecular-biology'
          };
          const importedItems = entries.map(entry => {
            const categorySlug = categoryAliases[entry.departmentSlug] || entry.departmentSlug;
            let category = catalogCategories.find(item => item.slug === categorySlug);
            if (!category) {
              category = {
                id: Math.max(0, ...catalogCategories.map(item => item.id)) + 1,
                name: entry.department,
                slug: categorySlug
              };
              catalogCategories.push(category);
            }
            const details = [
              entry.sampleRequirement ? `Sample requirement in downloaded page: ${entry.sampleRequirement}` : '',
              entry.price ? `Price shown in downloaded page: ${entry.price}` : '',
              entry.referenceNumber ? `Menu reference: ${entry.referenceNumber}.` : '',
              entry.turnaround ? `Turnaround listed in the downloaded menu: ${entry.turnaround}.` : ''
            ].filter(Boolean);
            return {
              slug: entry.slug,
              title: {rendered: entry.title},
              excerpt: {rendered: details.join(' ')},
              content: {rendered: details.map(detail => `<p>${esc(detail)}</p>`).join('')},
              categories: category ? [category.id] : [],
              referenceNumber: entry.referenceNumber
            };
          });
          const curatedBySlug = new Map(curatedCatalogItems.map(item => [item.slug, item]));
          catalogItems = importedItems.map(item => {
            const curated = curatedBySlug.get(item.slug);
            if (!curated) return item;
            return {
              ...item,
              excerpt: {
                rendered: [curated.excerpt.rendered, item.excerpt.rendered].filter(Boolean).join(' ')
              },
              content: {
                rendered: `${curated.content.rendered}${item.content.rendered}`
              }
            };
          });
          return catalogItems;
        })
        .catch(error => {
          catalogItemsPromise = null;
          throw error;
        });
    }
    return catalogItemsPromise;
  }

  function plainText(html) {
    const doc = new DOMParser().parseFromString(html || '', 'text/html');
    return [...doc.body.children].map(node => node.textContent.trim()).filter(Boolean).join('\n\n')
      || doc.body.textContent.trim();
  }

  function plainParagraphs(html) {
    return plainText(html).split(/\n{2,}/).map(line => line.trim()).filter(Boolean)
      .map(line => `<p>${esc(line)}</p>`).join('');
  }

  function setMetaDescription(description) {
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.content = description;
  }

  async function requestProducts({query = '', page = 1, categoryIds = []} = {}) {
    const items = await loadCatalogItems();
    const terms = query.toLowerCase().match(/[a-z0-9]+/g) || [];
    const matchesTerm = text => {
      const words = text.toLowerCase().match(/[a-z0-9]+/g) || [];
      return terms.every(term => words.some(word => {
        if (word.includes(term)) return true;
        if (term.length < 7 || Math.abs(word.length - term.length) > 1) return false;
        let left = 0;
        let right = 0;
        let edits = 0;
        while (left < word.length && right < term.length) {
          if (word[left] === term[right]) {
            left++;
            right++;
            continue;
          }
          if (++edits > 1) return false;
          if (word.length > term.length) left++;
          else if (term.length > word.length) right++;
          else {
            left++;
            right++;
          }
        }
        return edits + (!edits && (left < word.length || right < term.length) ? 1 : 0) <= 1;
      }));
    };
    const matching = items.filter(item => {
      const matchesText = !terms.length || matchesTerm(`${item.title.rendered} ${item.excerpt.rendered}`);
      const matchesCategory = !categoryIds.length || item.categories.some(id => categoryIds.includes(id));
      return matchesText && matchesCategory;
    });
    const perPage = 12;
    const pages = Math.max(1, Math.ceil(matching.length / perPage));
    const start = (page - 1) * perPage;
    return {
      products: matching.slice(start, start + perPage),
      total: matching.length,
      pages
    };
  }

  function catalogMarkup(heading, description, value = '', departmentProfile = null) {
    const overview = departmentProfile ? `<section class="department-profile" aria-label="${esc(heading)} department overview">
      <div class="department-profile-copy"><span class="eyebrow">Laboratory department</span><h2>${esc(departmentProfile.heading)}</h2>
        <p>${esc(departmentProfile.summary)}</p><h3>Areas represented</h3>
        <ul>${departmentProfile.focus.map(item => `<li>${esc(item)}</li>`).join('')}</ul>
      </div>
      <aside class="department-profile-source"><span class="eyebrow">Selected services</span>
        ${departmentProfile.image ? `<figure class="department-profile-image${departmentProfile.image.endsWith('.png') ? ' department-profile-image--art' : ''}">
          <img src="/assets/${departmentProfile.image}" alt="${esc(departmentProfile.imageAlt)}" width="1000" height="650" loading="lazy" decoding="async">
          <figcaption>${esc(departmentProfile.imageCaption)}</figcaption>
        </figure>` : ''}
        <ul>${departmentProfile.examples.map(item => `<li>${esc(item)}</li>`).join('')}</ul>
        <a class="textlink" href="#source-catalog-status">Browse available tests <span aria-hidden="true">↓</span></a>
      </aside>
    </section>` : '';
    return `${overview}<div class="section-head"><span class="eyebrow">Tests and services</span><h2>${esc(heading)}</h2><p>${esc(description)}</p></div>
      <div class="catalog-controls"><div class="searchbox"><input id="source-test-search" aria-label="Search the MMALABS test catalogue" placeholder="Search tests and panels" value="${esc(value)}"></div>
      <label class="catalog-filter">Department or category<select id="source-test-category"><option value="">All test categories</option></select></label></div>
      <p id="source-catalog-status" class="asset-note" aria-live="polite">Loading tests and services...</p>
      <div id="source-test-results" class="rows"></div><nav id="source-catalog-pages" class="catalog-pages" aria-label="Catalogue pages"></nav>`;
  }

  async function initCatalog(main, path, initialQuery = '') {
    const isDepartment = path.startsWith('departments/');
    const aliases = categoryAliases[path] || [];
    const title = isDepartment ? departmentNames[path] || path.split('/').pop().replaceAll('-', ' ') : 'Test menu.';
    const profile = isDepartment ? departmentProfiles[path] : null;
    const intro = isDepartment
      ? departmentDescriptions[path] || profile?.summary || `Explore selected tests and panels associated with ${title}. Confirm suitability and availability with your clinician or laboratory.`
      : 'Search the test menu copied from the downloaded MMALABS website, with more than 1,700 listed tests and services.';
    const heroTitle = document.querySelector('.inner-hero h1');
    const heroDescription = document.querySelector('.inner-hero .wrap > p');
    if (heroTitle) heroTitle.textContent = title;
    if (heroDescription) heroDescription.textContent = intro;
    if (!isDepartment) {
      const crumb = document.querySelector('.inner-hero .crumb');
      if (crumb) crumb.innerHTML = '<a href="/">Home</a> / Test menu';
    }
    document.title = `${title} | MMALABS`;
    setMetaDescription(intro);
    const catalogDescription = isDepartment
      ? `Search the ${title} services listed in the downloaded MMALABS menu.`
      : intro;
    main.innerHTML = catalogMarkup(isDepartment ? `${title} tests.` : 'Search tests and panels.', catalogDescription, initialQuery, profile);

    const search = main.querySelector('#source-test-search');
    const filter = main.querySelector('#source-test-category');
    const status = main.querySelector('#source-catalog-status');
    const results = main.querySelector('#source-test-results');
    const pagination = main.querySelector('#source-catalog-pages');
    let categories = [];
    let currentPage = 1;
    let activeRequest = 0;
    let timer;

    try {
      await loadCatalogItems();
      categories = await getCategories();
      filter.innerHTML += categories.map(category =>
        `<option value="${category.id}">${esc(category.name)}</option>`
      ).join('');
    } catch (error) {
      status.textContent = `Could not load MMALABS test categories: ${error.message}`;
    }

    async function load(pageNumber = 1) {
      currentPage = pageNumber;
      const requestId = ++activeRequest;
      status.textContent = 'Loading matching tests and services...';
      results.innerHTML = '';
      pagination.innerHTML = '';
      try {
        let selectedIds = [];
        if (isDepartment && filter.value === '') {
          selectedIds = categories.filter(category => aliases.includes(category.slug)).map(category => category.id);
        } else if (filter.value) {
          selectedIds = [Number(filter.value)];
        }
        if (isDepartment && !selectedIds.length) {
          throw new Error(`No matching catalogue category was found for ${title}.`);
        }
        const data = await requestProducts({query: search.value.trim(), page: currentPage, categoryIds: selectedIds});
        if (requestId !== activeRequest) return;
        status.textContent = `${data.total.toLocaleString()} matching catalogue entries · Page ${currentPage} of ${data.pages}`;
        results.innerHTML = data.products.length ? data.products.map(product => {
          const title = product.title?.rendered || 'Untitled catalogue entry';
          const excerpt = plainText(product.excerpt?.rendered || product.content?.rendered || '');
          const query = new URLSearchParams({test: product.slug});
          return `<article class="test-row"><div><h3>${esc(title)}</h3><p>${esc(excerpt.slice(0, 360))}${excerpt.length > 360 ? '…' : ''}</p></div>
            <a class="btn blue" href="/tests/?${query.toString()}">View test <span class="arrow">↗</span></a></article>`;
        }).join('') : '<p>No matching catalogue entries were returned. Try another search or category.</p>';
        if (data.pages > 1) {
          pagination.innerHTML = `<button type="button" data-page="${Math.max(1, currentPage - 1)}" ${currentPage <= 1 ? 'disabled' : ''}>← Previous</button>
            <span>Page ${currentPage} / ${data.pages}</span>
            <button type="button" data-page="${Math.min(data.pages, currentPage + 1)}" ${currentPage >= data.pages ? 'disabled' : ''}>Next →</button>`;
          pagination.querySelectorAll('button').forEach(button =>
            button.addEventListener('click', () => load(Number(button.dataset.page)))
          );
        }
      } catch (error) {
        if (requestId !== activeRequest) return;
        status.textContent = `Could not load the test list: ${error.message}`;
        results.innerHTML = `<p>Try refreshing the page or contact a branch for assistance.</p>`;
      }
    }

    search.addEventListener('input', () => {
      clearTimeout(timer);
      timer = setTimeout(() => load(1), 300);
    });
    filter.addEventListener('change', () => load(1));
    await load(1);
  }

  async function initTestDetail(main, slug) {
    const heroTitle = document.querySelector('.inner-hero h1');
    const heroDescription = document.querySelector('.inner-hero .wrap > p');
    const items = await loadCatalogItems();
    const product = items.find(item => item.slug === slug);
    if (!product) {
      const title = 'Test information';
      if (heroTitle) heroTitle.textContent = title;
      if (heroDescription) heroDescription.textContent = 'Ask a branch about this test and its requirements.';
      main.innerHTML = `<div class="formbox"><h2>Contact us for information about this test.</h2>
        <p>Contact a branch to confirm whether it is offered and to receive current sample, preparation, price and turnaround details.</p>
        ${local('branches', 'Find a branch', 'btn blue')} ${local('tests', 'Browse selected tests')}</div>`;
      return;
    }
    const title = product.title.rendered;
    const description = plainParagraphs(product.content.rendered);
    const category = catalogCategories.find(item => product.categories.includes(item.id));
    if (heroTitle) heroTitle.textContent = title;
    if (heroDescription) heroDescription.textContent = 'Overview and planning information for this diagnostic service.';
    document.title = `${title} | MMALABS`;
    setMetaDescription('Overview and planning information for this diagnostic service.');
    main.innerHTML = `<div class="section-head"><span class="eyebrow">Test and service information</span><h2>About this service</h2></div>
      <div class="test-detail-meta">${category ? `<span>${esc(category.name)}</span>` : ''}${product.referenceNumber ? `<span>Menu reference: ${esc(product.referenceNumber)}</span>` : ''}</div>
      ${description}
      <div style="display:flex;gap:16px;flex-wrap:wrap;margin-top:25px">${local('book-appointment', 'Plan an appointment', 'btn blue')}${local('tests', 'Back to the test menu')}</div>`;
  }

  function applyStaticPage(path, main) {
    const page = details[path] || details[path.replace(/^news\//, '')];
    if (!page) return false;
    const title = document.querySelector('.inner-hero h1');
    const description = document.querySelector('.inner-hero .wrap > p');
    if (title) title.textContent = page.title;
    if (description) description.textContent = page.description;
    if (path.startsWith('courses/') || path.startsWith('course-category/')) {
      const crumb = document.querySelector('.inner-hero .crumb');
      if (crumb) {
        crumb.innerHTML = `<a href="/">Home</a> / <a href="/training/">Training</a> / ${esc(page.title)}`;
      }
    }
    document.title = `${page.title} | MMALABS`;
    setMetaDescription(page.description);
    if (path === 'gallery') {
      main.querySelector('.photo-gallery')?.remove();
      const categoryLabel = key => galleryCategories.find(([id]) => id === key)?.[1] || 'MMALABS';
      const categoryCounts = new Map();
      const cards = galleryImages.map(([image, category]) => {
        const index = (categoryCounts.get(category) || 0) + 1;
        categoryCounts.set(category, index);
        const label = categoryLabel(category);
        return `<figure data-gallery-category="${category}">
          <a class="source-gallery-image-link" href="/assets/${image}" aria-label="Open full-size ${esc(label.toLowerCase())} image ${index}">
            <img src="/assets/${image}" alt="MMALABS ${esc(label.toLowerCase())} image ${index}" loading="lazy" decoding="async">
          </a>
        </figure>`;
      }).join('');
      main.insertAdjacentHTML('afterbegin', `<div class="section-head"><span class="eyebrow">At MMALABS</span><h2>A gallery from our diagnostic community.</h2><p>Explore the original images and artwork from the MMALABS gallery.</p></div>`);
      main.insertAdjacentHTML('beforeend', `<section class="downloaded-source-gallery" aria-label="MMALABS image gallery">
        <div class="source-gallery-controls" role="group" aria-label="Filter gallery images">
          <button type="button" data-gallery-filter="all" aria-pressed="true">All</button>
          ${galleryCategories.map(([id, label]) => `<button type="button" data-gallery-filter="${id}" aria-pressed="false">${esc(label)}</button>`).join('')}
        </div>
        <p class="source-gallery-count" aria-live="polite">${galleryImages.length} images</p>
        <div class="downloaded-source-gallery-grid">${cards}</div>
      </section>`);
      const controls = main.querySelectorAll('[data-gallery-filter]');
      const count = main.querySelector('.source-gallery-count');
      const figures = main.querySelectorAll('[data-gallery-category]');
      controls.forEach(button => button.addEventListener('click', () => {
        const category = button.dataset.galleryFilter;
        let visibleCount = 0;
        figures.forEach(figure => {
          const visible = category === 'all' || figure.dataset.galleryCategory === category;
          figure.hidden = !visible;
          if (visible) visibleCount += 1;
        });
        controls.forEach(control => control.setAttribute(
          'aria-pressed',
          String(control === button)
        ));
        if (count) count.textContent = `${visibleCount} ${visibleCount === 1 ? 'image' : 'images'}`;
      }));
    } else {
      main.innerHTML = page.html;
    }
    if (path === 'branches' || path === 'contact') {
      const filter = main.querySelector('#source-branch-filter');
      filter?.addEventListener('input', () => main.querySelectorAll('[data-branch]').forEach(card => {
        card.hidden = !card.dataset.branch.includes(filter.value.trim().toLowerCase());
      }));
    }
    if (path === 'faqs') {
      const search = main.querySelector('#faq-search-input');
      const count = main.querySelector('#faq-result-count');
      const empty = main.querySelector('#faq-no-results');
      const groups = [...main.querySelectorAll('[data-faq-group]')];
      const filters = [...main.querySelectorAll('[data-faq-filter]')];
      let activeFilter = 'all';
      const updateFaqs = () => {
        const terms = search.value.toLowerCase().trim().split(/\s+/).filter(Boolean);
        let visibleCount = 0;
        groups.forEach(group => {
          let groupCount = 0;
          group.querySelectorAll('[data-faq-item]').forEach(item => {
            const matchesFilter = activeFilter === 'all' || activeFilter === group.dataset.faqGroup;
            const text = item.textContent.toLowerCase();
            const matchesSearch = terms.every(term => text.includes(term));
            item.hidden = !matchesFilter || !matchesSearch;
            if (!item.hidden) groupCount++;
          });
          group.hidden = groupCount === 0;
          visibleCount += groupCount;
        });
        count.textContent = `${visibleCount} ${visibleCount === 1 ? 'answer' : 'answers'}`;
        empty.hidden = visibleCount > 0;
      };
      search.addEventListener('input', updateFaqs);
      filters.forEach(button => button.addEventListener('click', () => {
        activeFilter = button.dataset.faqFilter;
        filters.forEach(filter => filter.setAttribute('aria-pressed', String(filter === button)));
        updateFaqs();
      }));
    }
    return true;
  }

  function updateHomeNews(articles) {
    const grid = document.querySelector('#main .patient-guides .guide-grid');
    if (grid) {
      grid.innerHTML = articles.slice(0, 2).map((article, index) => `<article class="home-news-card">
        ${article.image ? `<a class="news-card-image" href="/news/${esc(article.slug)}/" aria-label="Read ${esc(article.title)}"><img src="${esc(article.image)}" alt="${esc(article.title)}" loading="lazy" decoding="async"></a>` : ''}
        <div class="eyebrow">MMALABS update / 0${index + 1}</div>
        ${article.published ? `<time datetime="${esc(article.published)}">${formatNewsDate(article.published)}</time>` : ''}
        <h3>${esc(article.title)}</h3><p>${esc(article.summary)}</p>
        <a class="textlink" href="/news/${esc(article.slug)}/">Read the full story <span aria-hidden="true">↗</span></a>
      </article>`).join('');
    }
    const section = document.querySelector('#main .patient-guides');
    const heading = section?.querySelector('.section-head h2');
    const eyebrow = section?.querySelector('.section-head .eyebrow');
    const archiveLink = section?.querySelector('.section-head a');
    if (heading) heading.textContent = 'Latest news.';
    if (eyebrow) eyebrow.textContent = 'MMALABS updates';
    if (archiveLink) archiveLink.textContent = 'All news ↗';
  }

  function updateHomeBranches() {
    const list = document.querySelector('#main .branch-links');
    if (!list) return;
    list.innerHTML = branchData.map(branch => `<a href="/branches/"><div><strong>${esc(branch.name)}</strong><span>${esc(branch.region)} · ${esc(branch.address)}</span></div><span>↗</span></a>`).join('');
    const intro = document.querySelector('#main .branch-intro > p');
    if (intro) intro.textContent = 'Explore MMALABS offices in Accra, Kumasi and Dormaa. Contact your preferred branch to confirm test availability and opening hours.';
  }

  function updateHomeScreenings() {
    const list = document.querySelector('#main .screening-options');
    if (!list) return;
    const options = [
      ['Men’s annual screening', 'Explore the Basic, Basic+ and Gold+ tiers listed in the reference copy.'],
      ['Women’s annual screening', 'Explore the Basic, Basic+ and Gold+ tiers listed in the reference copy.'],
      ['Hypertension panels', 'Explore the Basic, Basic+ and Advance+ tiers listed in the reference copy.']
    ];
    list.innerHTML = options.map((item, index) => `<article><span class="option-number">0${index + 1}</span><div><h3>${item[0]}</h3><p>${item[1]}</p><p>Contact a branch for package details and pricing.</p></div>${local('nkwafit', 'Explore packages', 'btn outline')}</article>`).join('');
  }

  function updateHomeSpecialPrograms() {
    const screeningSection = document.querySelector('#main .screening-story');
    if (!screeningSection || document.querySelector('#main .special-programs')) return;
    screeningSection.insertAdjacentHTML('afterend', `<section class="special-programs section">
      <div class="wrap"><div class="section-head"><span class="eyebrow">Explore special programs</span><h2>Focused services.<br>Clear next steps.</h2>
        <p>Explore selected MMALABS programs and confirm availability, preparation and pricing with the team.</p></div>
        <div class="special-program-grid">${specialPrograms.map(program => `<article class="special-program-card">
          <img src="/assets/${program.image}" alt="${esc(program.alt)}" width="455" height="158" loading="lazy" decoding="async">
          <div><h3>${esc(program.title)}</h3><p>${esc(program.description)}</p>${local(program.path, 'Explore service', 'textlink')}</div>
        </article>`).join('')}</div>
      </div></section>`);
  }

  function updateHomeSearch() {
    const input = document.querySelector('#hero-search');
    const results = document.querySelector('#search-results');
    if (!input || !results) return;
    const replacement = input.cloneNode(true);
    input.replaceWith(replacement);
    let timer;
    let requestId = 0;
    replacement.addEventListener('input', () => {
      clearTimeout(timer);
      const query = replacement.value.trim();
      if (!query) {
        results.innerHTML = '';
        return;
      }
      timer = setTimeout(async () => {
        const currentRequest = ++requestId;
        results.innerHTML = '<p class="asset-note">Searching selected tests and services...</p>';
        try {
          const data = await requestProducts({query});
          if (currentRequest !== requestId) return;
          results.innerHTML = data.products.length ? data.products.slice(0, 4).map(product => {
            const title = product.title?.rendered || 'MMALABS test';
            const excerpt = plainText(product.excerpt?.rendered || '');
            return `<div class="result"><div><a href="/tests/?test=${encodeURIComponent(product.slug)}"><strong>${esc(title)}</strong></a><p>${esc(excerpt.slice(0, 220))}</p></div>${local('tests', 'View catalogue', 'textlink')}</div>`;
          }).join('') : '<p>No matching tests were found. Try another term or browse the selected catalogue.</p>';
        } catch (error) {
          if (currentRequest !== requestId) return;
          results.innerHTML = `<p>Could not search the selected test list: ${esc(error.message)}.</p>`;
        }
      }, 300);
    });
  }

  async function applySourceContent() {
    labelNewsNavigation();
    labelTestMenuNavigation();
    const path = location.pathname.replace(/^\/|\/$/g, '');
    const innerHero = document.querySelector('.inner-hero');
    if (innerHero) {
      const heroIndex = [...path].reduce((value, character) =>
        (value * 31 + character.charCodeAt(0)) >>> 0, 0) % innerHeroImages.length;
      const pageMedia = sourcePageMedia[pageAliases[path] || path];
      innerHero.style.setProperty(
        '--inner-hero-image',
        path === 'gallery'
          ? 'none'
          : `url("/assets/${pageMedia || innerHeroImages[heroIndex]}")`
      );
    }
    if (!path) {
      const grid = document.querySelector('#main .patient-guides .guide-grid');
      const articles = await loadNewsFor(grid);
      if (articles) updateHomeNews(articles);
      updateHomeBranches();
      updateHomeScreenings();
      updateHomeSpecialPrograms();
      updateHomeSearch();
      return;
    }
    const main = document.querySelector('#main .content .wrap');
    if (!main) return;
    if (path === 'news' || pageAliases[path] === 'news') {
      if (!applyStaticPage('news', main)) return;
      const archive = main.querySelector('#news-archive');
      const articles = await loadNewsFor(archive || main);
      if (articles && archive) archive.innerHTML = newsArchiveMarkup(articles);
      return;
    }
    const articleSlug = articleAliases[path] || (path.startsWith('news/')
      ? path.slice('news/'.length)
      : null);
    if (articleSlug) {
      const articles = await loadNewsFor(main);
      if (!articles) return;
      const article = articles.find(item => item.slug === articleSlug);
      if (article) {
        renderNewsArticle(main, article);
        return;
      }
    }
    if (pageAliases[path] === 'tests') {
      await initCatalog(main, 'tests');
      return;
    }
    if (pageAliases[path] && applyStaticPage(pageAliases[path], main)) {
      const presentation = pageAliasPresentation[path];
      if (presentation) {
        const title = document.querySelector('.inner-hero h1');
        const description = document.querySelector('.inner-hero .wrap > p');
        const crumb = document.querySelector('.inner-hero .crumb');
        if (title) title.textContent = presentation.title;
        if (description) description.textContent = presentation.description;
        if (crumb) crumb.innerHTML = `<a href="/">Home</a> / ${esc(presentation.breadcrumb)}`;
        document.title = `${presentation.title} | MMALABS`;
        setMetaDescription(presentation.description);
      }
      return;
    }
    if (path === 'tests') {
      const slug = new URLSearchParams(location.search).get('test');
      if (slug) await initTestDetail(main, slug);
      else await initCatalog(main, path, new URLSearchParams(location.search).get('q') || '');
      return;
    }
    if (path.startsWith('tests/')) {
      await initTestDetail(main, path.split('/')[1]);
      return;
    }
    if (path.startsWith('departments/')) {
      await initCatalog(main, path);
      return;
    }
    applyStaticPage(path, main);
  }

  document.addEventListener('keydown', event => {
    if (event.key !== 'Escape') return;
    const menu = document.querySelector('#site-menu');
    if (menu?.open) menu.close();
  });

  window.applySourceContent = applySourceContent;
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', applySourceContent, {once: true});
  else applySourceContent();
})();
