document.addEventListener("DOMContentLoaded", function () {
    const roles = [
        { text: "Fullstack", color: "#FF5733" },
        { text: "BackEnd", color: "#33FF57" },
        { text: "FrontEnd", color: "#3357FF" }
    ];

    const roleText = document.querySelector('.role-text');
    const animatedRoleElement = document.getElementById('animated-role');
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typingSpeed = 100;
    const deletingSpeed = 50;
    const pauseDuration = 1000;

    function setRoleColor(color) {
        animatedRoleElement.style.color = color;
    }

    function typeWriter() {
        const currentRole = roles[roleIndex];
        const currentText = currentRole.text;

        setRoleColor(currentRole.color);

        if (isDeleting) {
            charIndex--;
            roleText.textContent = currentText.substring(0, charIndex);

            if (charIndex <= 0) {
                isDeleting = false;
                roleIndex = (roleIndex + 1) % roles.length;
                setTimeout(typeWriter, typingSpeed);
            } else {
                setTimeout(typeWriter, deletingSpeed);
            }
        } else {
            charIndex++;
            roleText.textContent = currentText.substring(0, charIndex);

            if (charIndex >= currentText.length) {
                isDeleting = true;
                setTimeout(typeWriter, pauseDuration);
            } else {
                setTimeout(typeWriter, typingSpeed);
            }
        }
    }

    // iniciar con texto vacío
    roleText.textContent = "";
    typeWriter();
});
