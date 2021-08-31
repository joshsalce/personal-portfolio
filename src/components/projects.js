const projects = [ 
    {
        id: 1,
        title: "Personal Potfolio",
        img: "./portfolio.jpg",
        githubURL: "https://github.com/joshsalce/portfolio",
        youtube: "",
        description: "React application built as a personal portfolio to showcase my work. *Youtube demo not applicable*",
        technologies: [
            {name: "HTML & CSS"}, 
            {name: "ReactJS"},
            {name: "JavaScript"},
            {name: "NodeJS"}
        ]
    },
    {
        id: 2,
        title: "Nickels and Dimes Timer",
        img: "./Home.jpg",
        githubURL: "https://github.com/joshsalce/NickelsAndDimesTimer",
        youtube: "https://www.youtube.com/watch?v=xAYPi-6uOBo",
        description: "Timer for Nickels and Dimes Workout",
        technologies: [
            {name: "HTML & CSS"}, 
            {name: "JavaScript"}, 
            {name: "EJS"}, 
            {name: "ExpressJS"},
            {name: "NodeJS"}
        ]
    }, 
    {
        id: 3,
        title: "Google Maps Tour",
        img: "./map.jpg",
        githubURL: "https://github.com/joshsalce/Google-Maps-API",
        youtube: "https://www.youtube.com/watch?v=zIB8spHQ2eQ&feature=youtu.be",
        description: "Tour of my favorite locations around La Jolla, CA",
        technologies: [
            {name: "HTML & CSS"}, 
            {name: "JavaScript"},
            {name: "Google Maps API"}
        ]
    }, 
    {
        id: 4,
        title: "10,000 Dice Game",
        img: "./10000.jpg",
        githubURL: "https://github.com/joshsalce/10-000-Game",
        youtube: "https://www.youtube.com/watch?v=tF2pVQhvdSQ&feature=youtu.be",
        description: "10,000 dice game in single player mode",
        technologies: [
            {name: "HTML & CSS"},
            {name: "JavaScript"},
            {name: "jQuery"}
        ]
    }, 
    {
        id: 5,
        title: "Personal Bookkeeper",
        img: "./Book.jpg",
        githubURL: "https://github.com/joshsalce/Personal-Bookkeeper",
        youtube: "https://www.youtube.com/watch?v=P25WSXEetTQ&feature=youtu.be",
        description: "Web Application using DOM manipulation to tabulate books",
        technologies: [
            {name: "HTML & CSS"}, 
            {name: "JavaScript, DOM"}
        ]
    },
    {
        id: 6,
        title: "Personal Bookkeeper Remade",
        img: "./book.png",
        githubURL: "https://github.com/joshsalce/bookkeeper-fullstack",
        youtube: "",
        description: "Web Application attempted rebuild with MERN stack. *Youtube demo not applicable*",
        technologies: [
            {name: "MongoDB"}, 
            {name: "Express"},
            {name: "React & Redux"},
            {name: "NodeJS"},
        ]
    }
];

export default projects;