const password = document.getElementById("password");
const icon = document.getElementById("icon");
const logos = document.querySelectorAll(".fab");

icon.addEventListener("click" , function () {
    if(password.type === "password") {
        password.type = "text";
        icon.classList.remove("fa-eye-slash");
        icon.classList.add("fa-eye")
        icon.style.cursor = "pointer";
        icon.style.color = "rgba(255, 255, 255, 0.53)";
    } else {
        password.type = "password";
        icon.classList.remove("fa-eye");
        icon.classList.add("fa-eye-slash");
        icon.style.color = "rgba(255, 255, 255, 0.53)";
    }
});

logos.forEach(logo => {
    logo.addEventListener("click", () => {
        alert("fitur ini belum tersedia");
    });
});