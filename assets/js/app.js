

document.addEventListener("DOMContentLoaded", function () {
    const roles = [
        { text: "Fullstack", color: "#FF5733" },
        { text: "BackEnd", color: "#33FF57" },
        { text: "FrontEnd", color: "#3357FF" }
    ];

    const animatedRoleElement = document.getElementById('animated-role');
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typingSpeed = 100;
    const deletingSpeed = 50;
    const pauseDuration = 1000;
    function typeWriter() {
        const currentRole = roles[roleIndex];
        const currentText = currentRole.text;

        animatedRoleElement.style.color = currentRole.color;

        if (isDeleting) {
            animatedRoleElement.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;

            if (charIndex === 0) {
                isDeleting = false;
                roleIndex = (roleIndex + 1) % roles.length;

                setTimeout(typeWriter, typingSpeed);
            } else {
                setTimeout(typeWriter, deletingSpeed);
            }
        } else {
            animatedRoleElement.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;

            if (charIndex === currentText.length) {
                isDeleting = true;

                setTimeout(typeWriter, pauseDuration);
            } else {
                setTimeout(typeWriter, typingSpeed);
            }
        }
    }

    typeWriter();
});