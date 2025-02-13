function showPictures() {
    const mainContent = document.getElementById('main-content');
    const picturesContent = document.getElementById('pictures-content');
    
    mainContent.classList.add('hidden');
    setTimeout(() => {
        mainContent.style.display = 'none';
        picturesContent.style.display = 'flex';
        setTimeout(() => {
            picturesContent.classList.remove('hidden');
        }, 10);
    }, 500);
}

function showMainContent() {
    const mainContent = document.getElementById('main-content');
    const picturesContent = document.getElementById('pictures-content');
    const loveLettersContent = document.getElementById('love-letters-content');
    
    picturesContent.classList.add('hidden');
    loveLettersContent.classList.add('hidden');
    setTimeout(() => {
        picturesContent.style.display = 'none';
        loveLettersContent.style.display = 'none';
        mainContent.style.display = 'flex';
        setTimeout(() => {
            mainContent.classList.remove('hidden');
        }, 10);
    }, 500);
}

function showLoveLetters() {
    const mainContent = document.getElementById('main-content');
    const loveLettersContent = document.getElementById('love-letters-content');
    
    mainContent.classList.add('hidden');
    setTimeout(() => {
        mainContent.style.display = 'none';
        loveLettersContent.style.display = 'flex';
        setTimeout(() => {
            loveLettersContent.classList.remove('hidden');
        }, 10);
    }, 500);
}