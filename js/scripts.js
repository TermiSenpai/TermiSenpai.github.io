let currentLanguage = 'en';

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
            en: "Worked remotely on software development tasks, focusing on Unity and problem-solving skills.",
            es: "Trabajó de forma remota en tareas de desarrollo de software, centrándose en Unity y habilidades de resolución de problemas."
        },
        date: {
            en: "January 2024 - March 2024",
            es: "Enero 2024 - Marzo 2024"
        }
    },
    {
        title: {
            en: "C# Developer at TALLERES PALACIO AROCA S.L.",
            es: "C# Developer en TALLERES PALACIO AROCA S.L."
        },
        description: {
            en: "Developed a desktop application with CRUD operations connected to a database.",
            es: "Desarrolló una aplicación de escritorio con operaciones CRUD conectadas a una base de datos."
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


function renderContent() {
    document.querySelector('h1').textContent = document.querySelector('h1').getAttribute(`data-${currentLanguage}`);
    document.querySelector('h2').textContent = document.querySelector('h2').getAttribute(`data-${currentLanguage}`);
    document.querySelectorAll('p').forEach(p => {
        p.textContent = p.getAttribute(`data-${currentLanguage}`);
    });
    document.querySelectorAll('button').forEach(button => {
        button.textContent = button.getAttribute(`data-${currentLanguage}`);
    });
    document.querySelector('footer p').textContent = document.querySelector('footer p').getAttribute(`data-${currentLanguage}`);
    renderSections();
}

function renderSections() {
    const educationContainer = document.getElementById('education');
    educationContainer.innerHTML = '<h3>' + (currentLanguage === 'es' ? 'Educación' : 'Education') + '</h3>';
    educationEntries.forEach(entry => {
        educationContainer.innerHTML += `
            <div>
                <h4>${entry[currentLanguage].title}</h4>
                <p>${entry[currentLanguage].institution}</p>
                <p>${entry[currentLanguage].date}</p>
            </div>
        `;
    });

    const experienceContainer = document.getElementById('experience');
    experienceContainer.innerHTML = '<h3>' + (currentLanguage === 'es' ? 'Experiencia' : 'Experience') + '</h3>';
    experienceEntries.forEach(entry => {
        experienceContainer.innerHTML += `
            <div>
                <h4>${entry.title[currentLanguage]}</h4>
                <p>${entry.description[currentLanguage]}</p>
                <p>${entry.date[currentLanguage]}</p>
            </div>
        `;
    });

    const codingSkillsContainer = document.getElementById('coding-skills');
    codingSkillsContainer.innerHTML = '<h3>' + (currentLanguage === 'es' ? 'Habilidades de Codificación' : 'Coding Skills') + '</h3>';
    codingSkills.forEach(skill => {
        codingSkillsContainer.innerHTML += '<div>' + skill[currentLanguage] + '</div>';
    });

    const professionalSkillsContainer = document.getElementById('professional-skills');
    professionalSkillsContainer.innerHTML = '<h3>' + (currentLanguage === 'es' ? 'Habilidades Profesionales' : 'Professional Skills') + '</h3>';
    professionalSkills.forEach(skill => {
        professionalSkillsContainer.innerHTML += '<div>' + skill[currentLanguage] + '</div>';
    });
}

document.getElementById('en-button').addEventListener('click', () => {
    currentLanguage = 'en';
    renderContent();
});

document.getElementById('es-button').addEventListener('click', () => {
    currentLanguage = 'es';
    renderContent();
});

document.querySelectorAll('.toggle-button').forEach(button => {
    button.addEventListener('click', (e) => {
        const section = e.target.closest('section');
        section.classList.toggle('collapsed');
        e.target.textContent = section.classList.contains('collapsed') ? 
            (currentLanguage === 'es' ? 'Expandir' : 'Expand') : 
            (currentLanguage === 'es' ? 'Colapsar' : 'Collapse');
    });
});

renderContent();

document.getElementById('download-pdf').addEventListener('click', () => {
    const pdfUrl = currentLanguage === 'es' ? 'PDF/AlejandroEscarpa_es.pdf' : 'PDF/AlejandroEscarpa_en.pdf';
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = currentLanguage === 'es' ? 'AlejandroEscarpa_es.pdf' : 'AlejandroEscarpa_en.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});

