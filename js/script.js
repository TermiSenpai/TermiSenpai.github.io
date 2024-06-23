// Cargar datos desde data.js
document.addEventListener('DOMContentLoaded', () => {
    showTab('home');
});

function showTab(tab) {
    const content = document.getElementById('content');
    content.innerHTML = '';
    switch(tab) {
        case 'home':
            content.innerHTML = '<h2>Bienvenido a mi Portafolio</h2><p>Esta es la página de inicio.</p>';
            break;
        case 'about':
            content.innerHTML = '<h2>Acerca de</h2><p>Información sobre mí.</p>';
            break;
        case 'studies':
            displayEducation();
            break;
        case 'experience':
            displayExperience();
            break;
        case 'projects':
            content.innerHTML = '<h2>Proyectos</h2><p>Algunos de mis proyectos.</p>';
            break;
        case 'contact':
            content.innerHTML = '<h2>Contacto</h2><p>Información de contacto.</p>';
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
