const educationEntries = [
    {
        en: {
            title: "Software development",
            institution: "Krono Ofimática S.L.",
            date: "2021 - 2022"
        },
        es: {
            title: "Programación de sistemas informáticos",
            institution: "Krono Ofimática S.L.",
            date: "2021 - 2022"
        }
    },
    {
        en: {
            title: "Master's in Game Development and virtual reality with Unity",
            institution: "Tokio School",
            date: "2022 - 2024"
        },
        es: {
            title: "Master en programación de videojuegos y realidad virtual con Unity",
            institution: "Tokio School",
            date: "2022 - 2024"
        }
    },
    {
        en: {
            title: "Master's in Game Development and Virtual Reality with Unreal Engine",
            institution: "Tokio School",
            date: "2023 - Present"
        },
        es: {
            title: "Master en desarrollo de videojuegos y realidad virtual con Unreal Engine",
            institution: "Tokio School",
            date: "2023 - Actualmente"
        }
    }
];

const experienceEntries = [
    {
        title: {
            en: "Software Developer at Austral-Robotics",
            es: "Desarrollador de software en Austral-Robotics"
        },
        description: {
            en: "Design and development of a robotics simulator in Unity, focusing on remote software development tasks and problem-solving.",
            es: "Planteamiento, diseño y desarrollo de simulador de robótica en Unity, centrado en tareas de desarrollo de software remoto y resolución de problemas."
        },
        date: {
            en: "January 2024 - March 2024",
            es: "Enero 2024 - Marzo 2024"
        }
    },
    {
        title: {
            en: "Software developer at TALLERES PALACIO AROCA S.L.",
            es: "Desarrollador de software en TALLERES PALACIO AROCA S.L."
        },
        description: {
            en: "Designed and developed a desktop application with CRUD operations connected to a database.",
            es: "Planteamiento y desarrollo de una aplicación de escritorio con un sistema CRUD relacionada con una base de datos."
        },
        date: {
            en: "October 2021 - November 2021",
            es: "Octubre 2021 - Noviembre 2021"
        }
    }
];

const codingSkills = [
    {
        en: "C# Programming",
        es: "Programación en C#"
    },
    {
        en: "Unity Development",
        es: "Desarrollo con Unity"
    },
    {
        en: "Software Design",
        es: "Diseño de software"
    },
    {
        en: "Software Documentation",
        es: "Documentación de programas informáticos"
    },
    {
        en: "Technical Documentation",
        es: "Documentación técnica"
    },
    {
        en: "Multithreading",
        es: "Desarrollo multihilo"
    },
    {
        en: "Optimization",
        es: "Optimización"
    },
    {
        en: "Object-Oriented Programming (OOP)",
        es: "Programación Orientada a Objetos (POO)"
    },
    {
        en: "SOLID Principles",
        es: "Principios SOLID"
    },
    {
        en: "Game Design",
        es: "Diseño de videojuegos"
    },
    {
        en: "C++ Programming",
        es: "Programación en C++"
    },
    {
        en: "JavaScript",
        es: "JavaScript"
    },
    {
        en: "Python Programming",
        es: "Programación en Python"
    },
    {
        en: "GIT Version Control",
        es: "Control de versiones con GIT"
    }
];

const professionalSkills = [
    {
        en: "Project Management",
        es: "Gestión de Proyectos"
    },
    {
        en: "Team Collaboration",
        es: "Colaboración en Equipo"
    },
    {
        en: "Problem Solving",
        es: "Resolución de Problemas"
    },
    {
        en: "Game Design",
        es: "Diseño de Videojuegos"
    },
    {
        en: "Self-Taught Learning",
        es: "Aprendizaje Autodidacta"
    }
];

// Datos de Inicio
const homeContent = {
    title: {
        en: "Welcome to my portfolio",
        es: "Bienvenido a mi porfolio"
    },
    description: {
        en: "Here you will find all the information about my skills and projects.",
        es: "Aquí encontrarás toda la información sobre mis habilidades y proyectos."
    }
};

// Datos de Sobre Mí
const aboutContent = {
    title: {
        en: "About Us",
        es: "Acerca de mi"
    },
    description: {
        en: "My name is Alejandro Escarpa, Im software developer what i want to improve my skills in development wanting to specialize in game development.",
        es: "Mi nombre es Alejandro Escarpa, soy un desarrollador de sofware que busca mejorar mis habilidades, especializandome en desarrollo de videojuegos"
    }
};

// Datos de Proyectos
const projectEntries = [
    {
        title: {
            en: "SniperRush",
            es: "SniperRush"
        },
        image: "images/SniperRush.png",
        description: {
            en: "Dive into an epic action experience with your friends with this thrilling first-person shooter. Get ready to embark on a limitless adventure in the skies and on the ground.",
            es: "Sumérgete en una experiencia épica de acción con tus amigos con este emocionante shooter en primera persona. Prepárate para vivir una aventura sin límites en el cielo y la tierra."
        },
        link: "https://termisenpai.itch.io/sniper-rush"
    },
    {
        title: {
            en: "Borealis",
            es: "Borealis"
        },
        image: "images/Borealis.gif",
        description: {
            en: "A narrative clicker where you improve your spaceship as fast as you can because you have a time limit to surpass.",
            es: "Un clicker narrativo que consiste en mejorar tu nave espacial lo más rápido que puedas porque tienes un límite de tiempo que tienes que superar."
        },
        link: "https://jije.itch.io/borealis"
    },
    {
        title: {
            en: "Lavinia",
            es: "Lavinia"
        },
        image: "images/Lavinia.png",
        description: {
            en: "Join Lavinia on her epic adventure to defeat evil and escape the forest where she is trapped!",
            es: "¡Acompaña a Lavinia en su épica aventura para destruir el mal y salir del bosque en el que se encuentra prisionera!"
        },
        link: "https://termisenpai.itch.io/lavinia"
    }
];

// Datos de Contacto
const contactContent = {
    title: {
        en: "Contact",
        es: "Contacto"
    },
    description: {
        en: "Get in touch with me",
        es: "Ponte en contacto conmigo"
    },
    phone: {
        en: "Phone: +34 648 27 69 02",
        es: "Tfno: +34 648 27 69 02"
    },
    email: {
        en: "Email: escarpaprieto@gmail.com",
        es: "Email: escarpaprieto@gmail.com"
    }
};

const buttonTexts = {
    en: {
        home: "Home",
        about: "About",
        studies: "Studies",
        experience: "Experience",
        codingSkills: "Skills",
        projects: "Projects",
        contact: "Contact"
    },
    es: {
        home: "Inicio",
        about: "Acerca de",
        studies: "Estudios",
        experience: "Experiencia Laboral",
        codingSkills: "Habilidades",
        projects: "Proyectos",
        contact: "Contacto"
    }
};

// Datos para el perfil
const profileContent = {
    subtitle: {
        en: "Game Developer",
        es: "Programador de Videojuegos"
    },
    language:{
        en: "Language",
        es: "Idioma"
    }
};

// Datos para el footer
const footerContent = {
    text: {
        en: "&copy; 2024 Alejandro Escarpa. All rights reserved.",
        es: "&copy; 2024 Alejandro Escarpa. Todos los derechos reservados."
    }
};

