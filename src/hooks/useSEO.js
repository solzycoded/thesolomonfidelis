import { useEffect } from 'react';

// Default SEO values
const defaultSEO = {
  title: 'Solomon Fidelis | Agile Software Developer & Scrum Master',
  description: 'Portfolio of Solomon Fidelis - Professional Software Developer with 3+ years experience. PSM I certified Scrum Master specializing in React, Node.js, and modern web technologies.',
  keywords: 'Solomon Fidelis, software developer, React developer, Node.js, JavaScript, portfolio, web development, agile, scrum master, PSM I, Coventry, UK',
  image: '/imgs/dp 1.jpeg',
  url: 'https://solzycoded.github.io/thesolomonfidelis',
  type: 'website'
};

// Page-specific SEO data
const pageSEO = {
  '/': {
    title: 'Solomon Fidelis | Agile Software Developer & Scrum Master',
    description: 'Welcome to my portfolio. Discover my journey as a software developer, explore my projects, and learn about my skills in modern web technologies.',
    keywords: 'Solomon Fidelis, portfolio, software developer, home, introduction'
  },
  '/about': {
    title: 'About Solomon Fidelis | Professional Background & Experience',
    description: 'Learn about Solomon Fidelis - Professional Software Developer with 3+ years experience. PSM I certified Scrum Master passionate about creating exceptional user experiences.',
    keywords: 'Solomon Fidelis, about, background, experience, software developer, scrum master'
  },
  '/skills': {
    title: 'Technical Skills | Solomon Fidelis Portfolio',
    description: 'Explore Solomon Fidelis\' technical expertise in React, Node.js, JavaScript, and modern web development technologies. View proficiency levels and certifications.',
    keywords: 'Solomon Fidelis, skills, React, Node.js, JavaScript, technical skills, certifications'
  },
  '/portfolio': {
    title: 'Portfolio Projects | Solomon Fidelis Web Development',
    description: 'Browse Solomon Fidelis\' portfolio of web development projects. See real-world applications built with modern technologies and best practices.',
    keywords: 'Solomon Fidelis, portfolio, projects, web development, React applications, case studies'
  },
  '/interests': {
    title: 'Interests & Hobbies | Solomon Fidelis Personal Side',
    description: 'Discover what drives Solomon Fidelis beyond coding. Learn about interests in psychology, boxing, and continuous personal development.',
    keywords: 'Solomon Fidelis, interests, hobbies, psychology, boxing, personal development'
  },
  '/resume': {
    title: 'Resume & CV | Solomon Fidelis Professional Experience',
    description: 'Download Solomon Fidelis\' resume and explore professional experience, education, certifications, and career highlights.',
    keywords: 'Solomon Fidelis, resume, CV, experience, education, certifications'
  },
  '/contact': {
    title: 'Contact Solomon Fidelis | Get In Touch',
    description: 'Get in touch with Solomon Fidelis. Available for freelance projects, collaborations, and professional opportunities in software development.',
    keywords: 'Solomon Fidelis, contact, email, freelance, collaboration, opportunities'
  }
};

const useSEO = (pathname) => {
  useEffect(() => {
    const currentSEO = pageSEO[pathname] || defaultSEO;
    const fullTitle = currentSEO.title;
    const fullDescription = currentSEO.description;
    const imagePath = currentSEO.image || defaultSEO.image;
    const fullImage = imagePath.startsWith('http') ? imagePath : `${defaultSEO.url}${imagePath}`;
    const fullUrl = `${defaultSEO.url}${pathname}`;

    // Update title
    document.title = fullTitle;

    // Update or create meta tags
    updateMetaTag('name', 'description', fullDescription);
    updateMetaTag('name', 'keywords', currentSEO.keywords || defaultSEO.keywords);

    // Update Open Graph tags
    updateMetaTag('property', 'og:title', fullTitle);
    updateMetaTag('property', 'og:description', fullDescription);
    updateMetaTag('property', 'og:image', fullImage);
    updateMetaTag('property', 'og:url', fullUrl);
    updateMetaTag('property', 'og:type', currentSEO.type || defaultSEO.type);

    // Update Twitter tags
    updateMetaTag('property', 'twitter:title', fullTitle);
    updateMetaTag('property', 'twitter:description', fullDescription);
    updateMetaTag('property', 'twitter:image', fullImage);
    updateMetaTag('property', 'twitter:url', fullUrl);

    // Update canonical URL
    updateCanonicalUrl(fullUrl);

  }, [pathname]);
};

const updateMetaTag = (attribute, name, content) => {
  let element = document.querySelector(`meta[${attribute}="${name}"]`);

  if (element) {
    element.setAttribute('content', content);
  } else {
    element = document.createElement('meta');
    element.setAttribute(attribute, name);
    element.setAttribute('content', content);
    document.head.appendChild(element);
  }
};

const updateCanonicalUrl = (url) => {
  let canonical = document.querySelector('link[rel="canonical"]');

  if (canonical) {
    canonical.setAttribute('href', url);
  } else {
    canonical = document.createElement('link');
    canonical.setAttribute('rel', 'canonical');
    canonical.setAttribute('href', url);
    document.head.appendChild(canonical);
  }
};

export default useSEO;