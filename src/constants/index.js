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
    { value: 2, suffix: "+", label: "Years of Experience" },
    { value: 7, suffix: "", label: "Completed Projects" },
    { value: 9, suffix: "+", label: "Tech Stack Mastered" },
    { value: 80, suffix: "h/sem", label: "Logtime (Epitech vibe)" },
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
        title: "Commitment to Quality",
        desc: "I pay attention to the details others might overlook, because that’s where real quality makes the difference.",
    },
    {
        imgPath: "/images/chat.png",
        title: "Clear & Consistent Communication",
        desc: "I keep things simple and transparent, making sure everyone stays aligned at every stage of the project.",
    },
    {
        imgPath: "/images/time.png",
        title: "Driven to Deliver",
        desc: "Once I start something, I see it through. I stay proactive and focused to deliver results on time.",
    },
    {
        imgPath: "/images/team.png",
        title: "Team Player Mindset",
        desc: "I enjoy working with others, sharing ideas, and building solutions together to achieve better results.",
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
        name: "React Developer",
        modelPath: "/models/react_logo-transformed.glb",
        scale: 1,
        rotation: [0, 0, 0],
    },
    {
        name: "Java Developer",
        modelPath: "/models/java-transformed.glb",
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
        name: "Javascript Developer",
        modelPath: "/models/js-transformed.glb",
        scale: 40,
        rotation: [0, 0, 0],
        position: [0, -2, 0],
    },
];

const expCards = [
    {
        // OPENCLASSROOMS
        review: "Pursuing my State-certified Full Stack Application Developer degree (RNCP Level 6 / Bachelor level) through project-based learning, focusing on autonomous delivery, clean code, and advanced web architecture.",
        imgPath: "/images/openclassroom_bg.png",
        logoPath: "/images/openclassroom.png",
        title: "Full Stack Application Developer Student",
        date: "July 2026 - Present",
        responsibilities: [
            "Building production-ready Full Stack applications following professional software engineering standards.",
            "Implementing agile workflows, autonomous project management, and test-driven development.",
            "Preparing state-recognized RNCP degree certification through hands-on, evaluated technical projects.",
        ],
    },
    {
        // WEB@CADEMIE BY EPITECH
        review: "The Web@cademie by Epitech instilled in me a deep technical rigor and the 'learning how to learn' mindset. Through intensive sprints, I developed the autonomy to master complex web ecosystems and deliver high-quality code.",
        imgPath: "/images/epitech_bg.png",
        logoPath: "/images/webacademie_logo.png",
        title: "Full Stack Web Developer Student",
        date: "November 2025 - June 2026",
        responsibilities: [
            "Mastered Full Stack environments (PHP/Laravel, JavaScript/React/Java/Docker/, SQL stack) through fast-paced, project-driven learning.",
            "Developed high-quality, standardized code by following strict industry norms and peer-review processes.",
            "Successfully completed intensive 'Piscines', demonstrating high-pressure problem-solving and rapid technology adoption.",
        ],
    },
    {
        // ADA TECH SCHOOL
        review: "My time at Ada Tech School introduced me to collaborative development and agile methodologies in an inclusive and modern tech environment.",
        imgPath: "/images/ada_bg.png",
        logoPath: "/images/ada_logo.png",
        title: "Software Engineering Student",
        date: "2024-2025 (Short Term)",
        responsibilities: [
            "Participated in initial workshops focused on collaborative coding and team communication.",
            "Discovered the importance of diversity in tech and agile project management.",
            "Strengthened my adaptability by exploring different pedagogical approaches before joining Epitech.",
        ],
    },
    {
        // AUTODIDACTE
        review: "Before formal education, I dedicated a full year to mastering the web ecosystem independently. This period solidified my passion for 3D development and my ability to build complex projects from scratch.",
        imgPath: "/images/code_bg.png",
        logoPath: "/images/home_icon.png",
        title: "Self-Taught Developer",
        date: "2022-2023",
        responsibilities: [
            "Mastered the fundamentals of HTML, CSS, and Python to build logic-driven applications.",
            "Self-learned Three.js and React to create immersive 3D web experiences and modern interfaces.",
            "Developed strong research skills by diving into technical documentation and implementing advanced web features independently.",
        ],
    },
];

const socialImgs = [
    {
        name: "insta",
        url: "https://www.instagram.com/sh_yoriichi/?next=",
        imgPath: "/images/insta.png",
    },
    {
        name: "x",
        url: "https://x.com/Voetiii_",
        imgPath: "/images/x.png",
    },
    {
        name: "linkedin",
        url: "https://www.linkedin.com/in/hugo-munoz03/",
        imgPath: "/images/linkedin.png",
    },
];

export {
    words,
    abilities,
    logoIconsList,
    counterItems,
    expCards,
    socialImgs,
    techStackIcons,
    techStackImgs,
    navLinks,
};
