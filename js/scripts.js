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
            institution: "Universidad de Tecnología",
            date: "2022 - 2024"
        }
    },
    // Añade más entradas si es necesario
];

const experienceEntries = [
    {
        title: {
            en: "Game Developer at XYZ Studios",
            es: "Desarrollador de Videojuegos en XYZ Studios"
        },
        description: {
            en: "Worked on developing 3D games using Unity and C#. Led a team of developers in various projects.",
            es: "Trabajó en el desarrollo de juegos 3D utilizando Unity y C#. Lideró un equipo de desarrolladores en varios proyectos."
        },
        date: {
            en: "January 2020 - Present",
            es: "Enero 2020 - Presente"
        }
    },
    {
        title: {
            en: "Junior Developer at ABC Games",
            es: "Desarrollador Junior en ABC Games"
        },
        description: {
            en: "Assisted in the development of mobile games. Improved game performance and fixed bugs.",
            es: "Asistió en el desarrollo de juegos móviles. Mejoró el rendimiento del juego y corrigió errores."
        },
        date: {
            en: "June 2018 - December 2019",
            es: "Junio 2018 - Diciembre 2019"
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
    // Añade más habilidades si es necesario
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
    // Añade más habilidades si es necesario
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

