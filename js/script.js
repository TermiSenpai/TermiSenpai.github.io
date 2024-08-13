// Cargar datos desde data.js
document.addEventListener('DOMContentLoaded', () => {
    showTab('home');
});

function showTab(tab) {
    const content = document.getElementById('content');
    content.innerHTML = '';
    switch(tab) {
        case 'home':
            displayHome();
            break;
        case 'about':
            displayAbout();
            break;
        case 'studies':
            displayEducation();
            break;
        case 'experience':
            displayExperience();
            break;
        case 'projects':
            displayProjects();
            break;
        case 'contact':
            displayContact();
            break;
        default:
            content.innerHTML = '';
    }
}

function displayEducation() {
    const content = document.getElementById('content');
    content.innerHTML = '<h2>Estudios</h2>';
    educationEntries.forEach(entry => {
        const educationItem = document.createElement('div');
        educationItem.classList.add('education-item');
        educationItem.innerHTML = `
            <h3>${entry.es.title}</h3>
            <p><strong>${entry.es.institution}</strong></p>
            <p>${entry.es.date}</p>
        `;
        content.appendChild(educationItem);
    });
}

function displayExperience() {
    const content = document.getElementById('content');
    content.innerHTML = '<h2>Experiencia Laboral</h2>';
    experienceEntries.forEach(entry => {
        const experienceItem = document.createElement('div');
        experienceItem.classList.add('experience-item');
        experienceItem.innerHTML = `
            <h3>${entry.title.es}</h3>
            <p>${entry.description.es}</p>
            <p><strong>${entry.date.es}</strong></p>
        `;
        content.appendChild(experienceItem);
    });
}

function displayHome() {
    const content = document.getElementById('content');
    content.innerHTML = `
        <h2>${homeContent.title}</h2>
        <p>${homeContent.description}</p>
    `;
}

function displayAbout() {
    const content = document.getElementById('content');
    content.innerHTML = `
        <h2>${aboutContent.title}</h2>
        <p>${aboutContent.description}</p>
    `;
}

function displayProjects() {
    const content = document.getElementById('content');
    content.innerHTML = '<h2>Proyectos</h2>';
    
    projectEntries.forEach(project => {
        const projectItem = document.createElement('div');
        projectItem.classList.add('project-item');

        projectItem.innerHTML = `
            <div class="project-image-wrapper">
                <img src="${project.image}" alt="${project.title}" class="project-image">
            </div>
            <div class="project-details">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <a href="${project.link}" target="_blank">Ver proyecto</a>
            </div>
        `;
        content.appendChild(projectItem);
    });
}
function displayContact() {
    const content = document.getElementById('content');
    content.innerHTML = `
        <h2>${contactContent.title}</h2>
        <p>${contactContent.description}</p>
    `;
}
