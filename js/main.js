let currentLanguage = 'en';

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

document.getElementById('download-pdf').addEventListener('click', () => {
    const pdfUrl = currentLanguage === 'es' ? 'PDF/AlejandroEscarpa_es.pdf' : 'PDF/AlejandroEscarpa_en.pdf';
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = currentLanguage === 'es' ? 'AlejandroEscarpa_es.pdf' : 'AlejandroEscarpa_en.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});

// Initial render
renderContent();
