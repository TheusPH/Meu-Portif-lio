document.addEventListener('DOMContentLoaded', () => {
    const textElement = document.getElementById('typewriter-text');
    const texts = ["Front-End", "UI/UX", "Back-End"];
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typingSpeed = 100;
    const deletingSpeed = 50; 
    const delayBetweenTexts = 1500;

    function typeWriter() {
        const currentText = texts[textIndex];

        if (isDeleting) {
            textElement.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
        } else {
            textElement.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
        }

        let currentSpeed = isDeleting ? deletingSpeed : typingSpeed;

        if (!isDeleting && charIndex === currentText.length) {
            currentSpeed = delayBetweenTexts;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            currentSpeed = typingSpeed;
        }

        setTimeout(typeWriter, currentSpeed);
    }

    typeWriter();
});