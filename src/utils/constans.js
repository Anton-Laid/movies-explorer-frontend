const btnData = [
  {
    nameBtn: "О проекте",
    link: "project",
    id: "1",
    href: "#about-project",
  },
  {
    nameBtn: "Технологии",
    link: "technologies",
    id: "2",
    href: "#techs",
  },
  {
    nameBtn: "Студент",
    link: "student",
    id: "3",
    href: "#about-me",
  },
];

const dataTechnologie = [
  {
    id: 1,
    name: "HTML",
  },
  {
    id: 2,
    name: "CSS",
  },
  {
    id: 3,
    name: "JS",
  },
  {
    id: 4,
    name: "React",
  },
  {
    id: 5,
    name: "Git",
  },
  {
    id: 6,
    name: "Express.js",
  },
  {
    id: 7,
    name: "mongoDB",
  },
];

const dataPortfolio = [
  {
    title: "Статичный сайт",
    class: "portfolio__project",
    id: 1,
    path: "https://antonliad.github.io/Iearn-to-learn/",
  },
  {
    title: "Адаптивный сайт",
    class: "portfolio__project",
    id: 2,
    path: "https://antonliad.github.io/TREVER-Russian/",
  },
  {
    title: "Одностраничное приложение",
    class: "portfolio__project",
    id: 3,
    path: "https://github.com/AntonLiad/react-mesto-auth",
  },
];

const MAIN_URL = "https://api.project.mesto.nomoredomains.monster";
//const MAIN_URL = "http://localhost:3001";
const IMAGE_URL = "https://api.nomoreparties.co";

export { btnData, dataTechnologie, dataPortfolio, MAIN_URL, IMAGE_URL };
