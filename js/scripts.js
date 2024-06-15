// js/scripts.js

class Entry {
    constructor(year, title, description) {
        this.year = year;
        this.title = title;
        this.description = description;
    }

    render(language) {
        if (language === 'es') {
            return `
                <div>
                    <h4>${this.year}</h4>
                    <h5>${this.title.es}</h5>
                    <p>${this.description.es}</p>
                </div>
            `;
        } else {
            return `
                <div>
                    <h4>${this.year}</h4>
                    <h5>${this.title.en}</h5>
                    <p>${this.description.en}</p>
                </div>
            `;
        }
    }
}

const educationEntries = [
    new Entry(2022, { en: 'Bachelor of Science in Game Development', es: 'Master en Desarrollo de Videojuegos' }, 
              { en: 'Tokio Schooll', es: 'Tokio School' }),
    // Añadir más entradas según sea necesario
];

const experienceEntries = [
    new Entry(2024, { en: 'Game Developer at ABC Studios', es: 'Desarrollador de Videojuegos en ABC Studios' },
              { en: 'Worked on various AAA titles and indie games.', es: 'Trabajó en varios títulos AAA y juegos indie.' }),
    // Añadir más entradas según sea necesario
];

const codingSkills = [
    { en: 'C#', es: 'C#' },
    { en: 'Unity', es: 'Unity' },
    { en: 'C++', es: 'C++' },
    { en: 'Unreal Engine 5', es: 'Unreal Engine 4' },
    // Añadir más habilidades según sea necesario
];

const professionalSkills = [
    { en: 'Team Collaboration', es: 'Colaboración en Equipo' },
    { en: 'Project Management', es: 'Gestión de Proyectos' },
    // Añadir más habilidades según sea necesario
];

let currentLanguage = 'en';

function renderContent() {
    document.querySelector('h1').textContent = document.querySelector('h1').getAttribute(`data-${currentLanguage}`);
    document.querySelector('h2').textContent = document.querySelector('h2').getAttribute(`data-${currentLanguage}`);
    document.querySelectorAll('p').forEach(p => {
        p.textContent = p.getAttribute(`data-${currentLanguage}`);
    });
    document.querySelectorAll('button').forEach(button => {
        button.textContent = button.getAttribute(`data-${currentLanguage}`);
    });
    document.querySelectorAll('input').forEach(input => {
        input.placeholder = input.getAttribute(`data-${currentLanguage}`);
    });
    document.querySelector('textarea').placeholder = document.querySelector('textarea').getAttribute(`data-${currentLanguage}`);
    document.querySelector('footer p').textContent = document.querySelector('footer p').getAttribute(`data-${currentLanguage}`);
    renderSections();
}

function renderSections() {
    const educationContainer = document.getElementById('education');
    educationContainer.innerHTML = '<h3>' + (currentLanguage === 'es' ? 'Educación' : 'Education') + '</h3>';
    educationEntries.forEach(entry => {
        educationContainer.innerHTML += entry.render(currentLanguage);
    });

    const experienceContainer = document.getElementById('experience');
    experienceContainer.innerHTML = '<h3>' + (currentLanguage === 'es' ? 'Experiencia' : 'Experience') + '</h3>';
    experienceEntries.forEach(entry => {
        experienceContainer.innerHTML += entry.render(currentLanguage);
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

renderContent();

document.getElementById('download-pdf').addEventListener('click', () => {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    doc.text(20, 20, currentLanguage === 'es' ? 'Hola, soy Alejandro Escarpa' : "Hi, I'm Alejandro Escarpa");
    doc.save('AlejandroEscarpa.pdf');
});
