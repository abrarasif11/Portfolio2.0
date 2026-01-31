const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Testimonials",
    link: "#testimonials",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 3, suffix: "+", label: "Years of Experience" },
  // { value: 200, suffix: "+", label: "Satisfied Clients" },
  { value: 10, suffix: "+", label: "Completed Projects" },
  // { value: 90, suffix: "%", label: "Client Retention Rate" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React ",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python ",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review:
      "Asif consistently follows standard operating procedures (SOPs) while providing services to vendors and continuously works to improve his performance on a daily basis.",
    imgPath: "/images/foodpanda.png",
    companyName: "FoodPanda",
    logoPath: "/images/foodpanda.png",
    title: "Partner Service Agent",
    date: "November 2023 - Present",
    responsibilities: [
      "Resolved vendor queries by providing solutions according to SOP.",
      "Handled and closed cases involving vendors.",
      "Coordinated with vendors and riders to resolve delivery, order and other vendor facing issues quickly.",
    ],
  },
  {
    review:
      "He contributed significantly to improving the frontend of our application, delivering clean and user-friendly interfaces. Although he occasionally works at a slower pace, the overall quality of his work and performance remains strong.",
    imgPath: "/images/cac.jpg",
    companyName: "Cool As Code",
    logoPath: "/images/cac.jpg",
    title: "Front-End Developer (Internship)",
    date: "January 2023 - March 2023",
    responsibilities: [
      "Contributed to the development of a Engine Expert.",
      "Improved user experience (UX) by designing and implementing responsive web interfaces.",
      "Collaborated with team members to design and implement web applications.",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "Arbin Zaman",
    mentions: "@Arbin Zaman",
    company: "Software Engineer of Zyxora Inc.",
    review:
      "Asif is a fast, reliable Full Stack Developer who delivers clean, scalable solutions for product teams.",
    imgPath: "/images/arbin.jpg",
  },
  {
    name: "Yasir Omar Fahim",
    mentions: "@Yasir Omar Fahim",
    company: "Jr. Software Engineer of AIO Tech Solutions.",
    review:
      "His frontend logic and implementation quality helped us launch the CRM module ahead of schedule.",
    imgPath: "/images/yasir.jpg",
  },
  {
    name: "Pranta Nayan",
    mentions: "@Pranto Nayon",
    company: "Jr. Software Engineer of Truck Lagbe.",
    review:
      "He reliably completes projects within deadlines, even in high-pressure, fast-paced environments.",
    imgPath: "/images/pranto.jpg",
  },
];

const socialImgs = [
  {
    name: "github",
    imgPath: "/images/GitHub-Icon-White-Logo.wine.png",
    url: "https://github.com/abrarasif11",
  },
  {
    name: "insta",
    imgPath: "/images/insta.png",
    url: "https://www.instagram.com/ig_reznov_?fbclid=IwY2xjawPqbt1leHRuA2FlbQIxMABicmlkETFJZE5hSkJFR3VhSG9KSlUyc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHkrMg8XMxlt47n58BFPfVOfPpsRxIQXhvESj1zQ9SY4EdvcA60GZqg2pPbJb_aem_IvarkpVglBEwyrDC-adO7Q",
  },
  {
    name: "fb",
    imgPath: "/images/fb.png",
    url: "https://www.facebook.com/md.fahim.abrar.asif/",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
    url: "https://www.linkedin.com/in/fahim-abrar-asif-2601a6244/",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
