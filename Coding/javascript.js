window.addEventListener('scroll', () => {
    const projectsSection = document.querySelector('.projects');
    const sectionPos = projectsSection.getBoundingClientRect().top;
    const screenPos = window.innerHeight / 1.3;

    if (sectionPos < screenPos) {
        projectsSection.classList.add('visible');
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const projectsSection = document.querySelector('.projects');
    projectsSection.classList.add('hidden');
});
