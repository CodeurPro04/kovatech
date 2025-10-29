// menu data
const menu_data = [
  {
    title: "Accueil",
    link: "/",
  },
  {
    id: 2,
    title: "À propos",
    link: "/about",
    has_dropdown: false,
    sub_menus: [
      { link: "/team", title: "Notre équipe" },
    //{ link: "/team-details", title: "Détails de l'équipe" },
    //{ link: "/pricing", title: "Nos tarifs" },
      { link: "/faq", title: "FAQ" },
    //{ link: "/error", title: "Erreur 404" },
    ],
  },
  {
    id: 3,
    title: "Nos services",
    link: "/service",
    has_dropdown: false,
    sub_menus: [
    //{ link: "/service", title: "Nos services" },
    //{ link: "/service-details", title: "Détails du service" },
    ],
  },
  {
    id: 4,
    title: "Réalisations",
    link: "/portfolio",
    has_dropdown: false,
    sub_menus: [
      { link: "/portfolio", title: "Projets & Réalisations" },
      { link: "/portfolio-details", title: "Détails du projet" },
    ],
  },
  /*{
    id: 5,
    title: "Blog & Actualités",
    link: "/blog",
    has_dropdown: false,
    sub_menus: [
      { link: "/blog", title: "Notre blog" },
      { link: "/blog-2", title: "Blog standard" },
      { link: "/blog-details", title: "Détails de l'article" },
    ],
  },*/
  /*{
    id: 6,
    title: "Contact",
    link: "/contact",
    has_dropdown: false,
  }, */
];
export default menu_data;
