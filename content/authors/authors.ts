export type Author = {
  photo: string; // url of photo relative to content/authors/images/, EXCLUDING EXTENSION
  name: string;
  title: string;
  blurb: string;
  email?: string;
  facebook?: string;
  linkedin?: string;
  github?: string;
  website?: string;
  codeforces?: string;
};

export const Authors: Author[] = [
  {
    photo: 'benq',
    name: 'Benjamin Qi',
    title: 'Content Director',
    blurb: 'Benjamin Qi is a two-time IOI winner, USACO Problemsetter, and part of the MIT Class of 2023.',
    facebook: "bqi343",
    codeforces: "Benq",
    email: "bqi343@gmail.com",
    github: "bqi343"
  },
  {
    photo: 'briancdean',
    name: 'Brian C. Dean',
    title: 'Content Director',
    blurb: 'Brian Christopher Dean is the director of the USA Computing Olympiad.',
  },
  {
    photo: 'nathanw',
    name: 'Nathan Wang',
    title: 'Coordinator & Webmaster',
    blurb: 'Nathan Wang is a 2x USACO Finalist and does web development in his free time.',
    website: "https://thecodingwizard.me/",
    email: "nathan.r.wang@gmail.com",
    github: "thecodingwizard",
  },
  {
    photo: 'benq',
    name: 'Michael Cao',
    title: 'Content Author',
    blurb: 'Is a wizard.',
    facebook: "mike.lao.9400",
    codeforces: "caoash",
    email: "cao.michael14@gmail.com",
    github: "caoash",
  },
];
