
let currentIndex = 0;

function updateCarousel() {
    const carousel = document.querySelector('.carousel');
    const totalItems = document.querySelectorAll('.carousel-item').length;
    const visibleItems = 3; // Number of visible items
    const offset = -currentIndex * (100 / visibleItems);
    carousel.style.transform = `translateX(${offset}%)`;
}

function prevSlide() {
    const totalItems = document.querySelectorAll('.carousel-item').length;
    const visibleItems = 3; // Number of visible items
    currentIndex = (currentIndex - 1 + totalItems) % totalItems;
    updateCarousel();
}

function nextSlide() {
    const totalItems = document.querySelectorAll('.carousel-item').length;
    const visibleItems = 3; // Number of visible items
    currentIndex = (currentIndex + 1) % totalItems;
    updateCarousel();
}

document.addEventListener('DOMContentLoaded', () => {
    updateCarousel();
});

function skiftHundKnap() {
    // Hent elementet med id "hundKnap"
    var hundKnap = document.getElementById("hundKnap");
    // Tjekker om billedkilden matcher "img/hund_knap.png"
    if (hundKnap.src.match("img/hund_knap.png")) {
        // Ændre billedkilden til det andet billede
        hundKnap.src = "img/hund_knap2.png"; 
    } else {
        // Skift tilbage til det første billede, hvis det allerede er det andet billede
        hundKnap.src = "img/hund_knap.png"; 
    }
}

function skiftKatKnap() {
    // Hent elementet med id "katKnap"
    var katKnap = document.getElementById("katKnap");
    // Tjek om billedkilden matcher "img/kat_knap.png"
    if (katKnap.src.match("img/kat_knap.png")) {
        // Ændre billedkilden til det andet billede
        katKnap.src = "img/kat_knap2.png"; 
    } else {
        // Skift tilbage til det første billede, hvis det allerede er det andet billede
        katKnap.src = "img/kat_knap.png"; 
    }
}

function skiftGnaverKnap() {
    // Hent elementet med id "gnaverKnap"
    var gnaverKnap = document.getElementById("gnaverKnap");
    // Tjek om billedkilden matcher "img/gnaver_knap.png"
    if (gnaverKnap.src.match("img/gnaver_knap.png")) {
        // Ændre billedkilden til det andet billede
        gnaverKnap.src = "img/gnaver_knap2.png"; 
    } else {
        // Skift tilbage til det første billede, hvis det allerede er det andet billede
        gnaverKnap.src = "img/gnaver_knap.png"; 
    }
}

function skiftKrybdyrKnap() {
    // Hent elementet med id "krybdyrKnap"
    var krybdyrKnap = document.getElementById("krybdyrKnap");
    // Tjek om billedkilden matcher "img/krybdyr_knap.png"
    if (krybdyrKnap.src.match("img/krybdyr_knap.png")) {
        // Ændre billedkilden til det andet billede
        krybdyrKnap.src = "img/krybdyr_knap2.png"; 
    } else {
        // Skift tilbage til det første billede, hvis det allerede er det andet billede
        krybdyrKnap.src = "img/krybdyr_knap.png"; 
    }
}

const quizWrappers = document.querySelectorAll('.quiz-wrapper');
const alleSpoergsmaal = quizWrappers.length - 1; 
let nuSpoergsmaal = 0;

const visSpoergsmaal = (index) => {
    quizWrappers.forEach((wrapper, i) => {
        wrapper.style.display = i === index ? 'block' : 'none';
    });
};

visSpoergsmaal(nuSpoergsmaal);

const klikAnsvarlig = (event) => {
    if (nuSpoergsmaal < alleSpoergsmaal) {
        nuSpoergsmaal++;
        visSpoergsmaal(nuSpoergsmaal);
    } else {
        visSpoergsmaal(alleSpoergsmaal + 1);
    }
};

document.querySelectorAll('.box').forEach((box) => {
    box.addEventListener('click', klikAnsvarlig);
});

/*
                                                                            dyrepleje
*/
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.knap-box button.dyre-knap');
    const infoContainer = document.getElementById('info-container');
    const infoBoxes = infoContainer.querySelectorAll('.info-box');

    let currentlyVisibleBoxId = null;

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const infoId = button.getAttribute('data-info');
            const infoBox = document.getElementById(infoId);

            // If the clicked button corresponds to the currently visible info box, hide it
            if (currentlyVisibleBoxId === infoId) {
                infoBox.style.display = 'none';
                currentlyVisibleBoxId = null;
            } else {
                // Hide all info boxes
                infoBoxes.forEach(box => box.style.display = 'none');

                // Show the selected info box
                if (infoBox) {
                    infoBox.style.display = 'block';
                    currentlyVisibleBoxId = infoId;
                }
            }
        });
    });
});

let slideIndex = 0;
showSlides(slideIndex);

function changeImage(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("hermanSlide");
    if (n >= slides.length) {
        slideIndex = 0;
    }
    if (n < 0) {
        slideIndex = slides.length - 1;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slides[slideIndex].style.display = "block";  
}

// Automatisk vis første slide når siden indlæses
window.onload = function() {
    showSlides(slideIndex);
}

document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.knap-wrapper');
    
    sections.forEach(section => {
        const buttons = section.querySelectorAll('.dyre-knap');
        const infoContainer = section.nextElementSibling;
        const infoBoxes = infoContainer.querySelectorAll('.info-box');
        
        let currentlyVisibleBoxId = null;

        buttons.forEach(button => {
            button.addEventListener('click', function() {
                const infoId = button.getAttribute('data-info');
                const infoBox = document.getElementById(infoId);

                
                if (currentlyVisibleBoxId === infoId) {
                    infoBox.style.display = 'none';
                    currentlyVisibleBoxId = null;
                } else {
                    
                    infoBoxes.forEach(box => box.style.display = 'none');

                    
                    if (infoBox) {
                        infoBox.style.display = 'block';
                        currentlyVisibleBoxId = infoId;
                    }
                }
            });
        });
    });
});
