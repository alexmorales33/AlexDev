module.exports = {
  siteTitle: 'Alex Morales',
  siteDescription:
    'Alex Morales is an incoming Software Developer, based in Argentina, who loves learning new things.',
  siteKeywords:
    'Alex Morales',
  siteUrl: 'https://alex-dev.vercel.app/',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-45666519-2',
  googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',
  name: 'Alex Morales',
  location: 'Argentina',
  email: 'alexmoraleess4@gmail.com',
  github: 'https://github.com/alexmorales33',
  twitterHandle: '@',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/alexmorales33',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/alex-oscar-morales-85b06a1a6/',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Technologies',
      url: '/#technologies',
    },
    {
      name: 'Projects',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
