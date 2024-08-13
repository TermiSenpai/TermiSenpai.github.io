// Variable global para el idioma actual
let currentLanguage = 'en'; // Por defecto es inglés
let currentTab = 'home'; // Valor inicial


document.addEventListener('DOMContentLoaded', () => {
    showTab(currentTab);
    setupLanguageSelector(); // Configurar el selector de idioma
    updateMenuButtons(); // Actualizar los botones del menú
    updateProfile(); // Actualizar el perfil
    updateFooter(); // Actualizar el footer
});

// Función para cambiar el idioma
function changeLanguage(language) {
    currentLanguage = language;
    showTab(currentTab); // Re-renderiza la pestaña actual
    updateMenuButtons(); // Actualiza los botones del menú al cambiar el idioma
    updateProfile(); // Actualiza el perfil
    updateFooter(); // Actualiza el footer
    updateLanguageSelectorLabel();
}

// Configurar el selector de idioma
function setupLanguageSelector() {
    const languageSelector = document.getElementById('language-selector');
    languageSelector.addEventListener('change', (event) => {
        changeLanguage(event.target.value);
    });
}

function updateMenuButtons() {
    const menuButtons = document.querySelectorAll('.menu button');
    if (menuButtons.length > 0) {
        menuButtons.forEach(button => {
            const tab = button.getAttribute('onclick').match(/'(.*?)'/)[1];
            button.textContent = buttonTexts[currentLanguage][tab];
        });
    } else {
        console.error('No menu buttons found.');
    }
}

function updateProfile() {
    const profileSubtitle = document.querySelector('.profile-info p');             
    profileSubtitle.textContent = profileContent.subtitle[currentLanguage];    
}

function updateLanguageSelectorLabel() {
    const languageLabelElement = document.querySelector('.language-selector p');
    languageLabelElement.textContent = profileContent.language[currentLanguage];
}

function updateFooter() {
    const footerText = document.querySelector('.footer p');
    
    if (footerText) {
        footerText.innerHTML = footerContent.text[currentLanguage];
    } else {
        console.error('Footer element not found.');
    }
}


function showTab(tab) {
    currentTab = tab; // Guarda la pestaña actual para poder re-renderizarla al cambiar de idioma
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
    const title = currentLanguage === 'es' ? 'Estudios' : 'Education';
    const itemClass = 'education-item';
    const itemTemplate = entry => `
        <h3>${entry[currentLanguage].title}</h3>
        <p><strong>${entry[currentLanguage].institution}</strong></p>
        <p>${entry[currentLanguage].date}</p>
    `;
    createList(educationEntries, itemClass, itemTemplate, title);
}

function displayExperience() {
    const title = currentLanguage === 'es' ? 'Experiencia Laboral' : 'Work Experience';
    const itemClass = 'experience-item';
    const itemTemplate = entry => `
        <h3>${entry.title[currentLanguage]}</h3>
        <p>${entry.description[currentLanguage]}</p>
        <p><strong>${entry.date[currentLanguage]}</strong></p>
    `;
    createList(experienceEntries, itemClass, itemTemplate, title);
}

function displayCodingSkills() {
    const title = currentLanguage === 'es' ? 'Habilidades' : 'Coding Skills';
    const itemClass = 'skill-item';
    const itemTemplate = skill => `
        <p>${skill[currentLanguage]}</p>
    `;
    createList(codingSkills, itemClass, itemTemplate, title);
}

function displayProjects() {
    const title = currentLanguage === 'es' ? 'Proyectos' : 'Projects';
    const itemClass = 'project-item';
    const itemTemplate = project => `
        <div class="project-image-wrapper">
            <img src="${project.image}" alt="${project.title}" class="project-image">
        </div>
        <div class="project-details">
            <h3>${project.title[currentLanguage]}</h3>
            <p>${project.description[currentLanguage]}</p>
            <a href="${project.link}" target="_blank">${currentLanguage === 'es' ? 'Ver proyecto' : 'View Project'}</a>
        </div>
    `;
    createList(projectEntries, itemClass, itemTemplate, title);
}

function displayHome() {
    const content = getContentContainer();
    content.innerHTML = `
        <h2>${homeContent.title[currentLanguage]}</h2>
        <p>${homeContent.description[currentLanguage]}</p>
    `;
}

function displayAbout() {
    const content = getContentContainer();
    content.innerHTML = `
        <h2>${aboutContent.title[currentLanguage]}</h2>
        <p>${aboutContent.description[currentLanguage]}</p>
    `;
}

function displayContact() {
    const content = getContentContainer();
    content.innerHTML = `
        <h2>${contactContent.title[currentLanguage]}</h2>
        <p>${contactContent.description[currentLanguage]}</p>
        <p>${contactContent.phone[currentLanguage]}</p>
        <p>${contactContent.email[currentLanguage]}</p>
    `;
}
