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
