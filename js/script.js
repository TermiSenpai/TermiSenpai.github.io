document.addEventListener('DOMContentLoaded', () => {
    showTab('home');
});

function showTab(tab) {
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
        case 'codingSkills':
            displayCodingSkills();
            break;
        case 'projects':
            displayProjects();
            break;
        case 'contact':
            displayContact();
            break;
        default:
            getContentContainer().innerHTML = '';
    }
}

function getContentContainer() {
    const content = document.getElementById('content');
    content.innerHTML = ''; // Limpia el contenido anterior
    return content;
}

function renderTitle(title) {
    return `<h2>${title}</h2>`;
}

function createList(items, itemClass, itemTemplate, title) {
    const content = getContentContainer();
    content.innerHTML = renderTitle(title); // Agrega el título
    items.forEach(item => {
        const listItem = document.createElement('div');
        listItem.classList.add(itemClass);
        listItem.innerHTML = itemTemplate(item);
        content.appendChild(listItem);
    });
}

function displayEducation() {
    const title = 'Estudios';
    const itemClass = 'education-item';
    const itemTemplate = entry => `
        <h3>${entry.es.title}</h3>
        <p><strong>${entry.es.institution}</strong></p>
        <p>${entry.es.date}</p>
    `;
    createList(educationEntries, itemClass, itemTemplate, title);
}

function displayExperience() {
    const title = 'Experiencia Laboral';
    const itemClass = 'experience-item';
    const itemTemplate = entry => `
        <h3>${entry.title.es}</h3>
        <p>${entry.description.es}</p>
        <p><strong>${entry.date.es}</strong></p>
    `;
    createList(experienceEntries, itemClass, itemTemplate, title);
}


function displayCodingSkills() {
    const title = 'Coding skills';
    const itemClass = 'skill-item';
    const itemTemplate = skill => `
        <p>${skill.es}</p>
    `;
    createList(codingSkills, itemClass, itemTemplate, title);
}

function displayProjects() {
    const title = 'Proyectos';
    const itemClass = 'project-item';
    const itemTemplate = project => `
        <div class="project-image-wrapper">
            <img src="${project.image}" alt="${project.title}" class="project-image">
        </div>
        <div class="project-details">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <a href="${project.link}" target="_blank">Ver proyecto</a>
        </div>
    `;
    createList(projectEntries, itemClass, itemTemplate, title);
}

function displayHome() {
    const content = getContentContainer();
    content.innerHTML = `
        <h2>${homeContent.title}</h2>
        <p>${homeContent.description}</p>
    `;
}

function displayAbout() {
    const content = getContentContainer();
    content.innerHTML = `
        <h2>${aboutContent.title}</h2>
        <p>${aboutContent.description}</p>
    `;
}

function displayContact() {
    const content = getContentContainer();
    content.innerHTML = `
        <h2>${contactContent.title}</h2>
        <p>${contactContent.description}</p>
        <p>${contactContent.phone}</p>
        <p>${contactContent.email}</p>
    `;
}
