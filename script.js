function toggleDarkMode() {
    var element = document.body;
    var modeIcon = document.getElementById("modeIcon").querySelector("i");

    element.classList.toggle("dark-mode");

    if (element.classList.contains("dark-mode")) {
        modeIcon.classList.remove("fa-moon");
        modeIcon.classList.add("fa-sun");
    } else {
        modeIcon.classList.remove("fa-sun");
        modeIcon.classList.add("fa-moon");
    }
}