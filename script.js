// ===============================
// ПЕРЕКЛЮЧЕНИЕ ЯЗЫКОВ
// ===============================

const languageButtons = document.querySelectorAll(".lang-btn");

function changeLanguage(language) {
    if (language !== "ru" && language !== "kz") {
        language = "ru";
    }

    document.documentElement.lang = language;

    const elements = document.querySelectorAll("[data-ru][data-kz]");

    elements.forEach(element => {
        element.innerHTML = element.dataset[language];
    });

    languageButtons.forEach(button => {
        button.classList.toggle(
            "active",
            button.dataset.lang === language
        );
    });

    localStorage.setItem("magicWorldLanguage", language);
}


// Обработка нажатий на кнопки языка

languageButtons.forEach(button => {
    button.addEventListener("click", () => {
        changeLanguage(button.dataset.lang);
    });
});


// Восстановление сохранённого языка

const savedLanguage =
    localStorage.getItem("magicWorldLanguage") || "ru";

changeLanguage(savedLanguage);


// ===============================
// ПЛАВНАЯ НАВИГАЦИЯ
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(event) {

        const href = this.getAttribute("href");

        if (!href || href.length <= 1) {
            return;
        }

        const target = document.querySelector(href);

        if (target) {
            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }

    });

});


// ===============================
// ТЕКУЩИЙ ГОД В FOOTER
// ===============================

const footer = document.querySelector(".footer p");

if (footer) {
    footer.textContent =
        `© ${new Date().getFullYear()} Magic World Almaty`;
}