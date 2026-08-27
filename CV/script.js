/* =========================================================
   SULTAN CV - JAVASCRIPT
   ========================================================= */


/* =========================================================
   1. NAVIGATION
   ========================================================= */

const navButtons = document.querySelectorAll(".node-btn");

const sections = document.querySelectorAll("main section");


navButtons.forEach((button) => {

    button.addEventListener("click", () => {

        const targetId = button.dataset.target;

        const targetSection =
            document.getElementById(targetId);

        if (!targetSection) {
            return;
        }

        targetSection.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    });

});


/* Highlight the current section */

const sectionObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (!entry.isIntersecting) {
                return;
            }

            const currentId = entry.target.id;

            navButtons.forEach((button) => {

                button.classList.toggle(
                    "active",
                    button.dataset.target === currentId
                );

            });

        });

    },
    {
        threshold: 0.35
    }
);


sections.forEach((section) => {

    sectionObserver.observe(section);

});


/* =========================================================
   2. VIEW PROJECTS BUTTON
   ========================================================= */

const viewProjectsButton =
    document.querySelector(".hero-cta .btn.primary");


if (viewProjectsButton) {

    viewProjectsButton.addEventListener("click", () => {

        const projects =
            document.getElementById("projects");

        if (projects) {

            projects.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

}


/* =========================================================
   3. SAVE AS PDF
   ========================================================= */

const printButtons =
    document.querySelectorAll(".print-btn, .hero-cta .btn:not(.primary)");


printButtons.forEach((button) => {

    button.addEventListener("click", () => {

        window.print();

    });

});


/* =========================================================
   4. LANGUAGE CARDS
   ========================================================= */

const languageData = {

    ar: {
        phrase: "مرحباً",
        meaning: "Hello"
    },

    en: {
        phrase: "Hello",
        meaning: "مرحباً"
    },

    th: {
        phrase: "สวัสดี",
        meaning: "Hello"
    }

};


const languageCards =
    document.querySelectorAll(".lang-card");


languageCards.forEach((card) => {

    card.addEventListener("click", () => {

        const language =
            card.dataset.lang;

        const data =
            languageData[language];

        if (!data) {
            return;
        }


        /* Remove active state */

        languageCards.forEach((item) => {

            item.classList.remove("active");

        });


        /* Activate selected card */

        card.classList.add("active");


        /* Find text elements */

        const phrase =
            card.querySelector(".lang-phrase");

        const meaning =
            card.querySelector(".lang-meaning");


        if (!phrase || !meaning) {
            return;
        }


        /* Set phrase */

        phrase.textContent =
            data.phrase;

        meaning.textContent =
            data.meaning;


        /* Set language direction */

        if (language === "ar") {

            phrase.setAttribute(
                "lang",
                "ar"
            );

            phrase.style.direction = "rtl";

        } else {

            phrase.setAttribute(
                "lang",
                language
            );

            phrase.style.direction = "ltr";

        }


        /* Show animation */

        requestAnimationFrame(() => {

            phrase.classList.add("show");

            meaning.classList.add("show");

        });

    });

});


/* =========================================================
   5. PROJECT FILTER
   ========================================================= */

const filterButtons =
    document.querySelectorAll(".filter-btn");

const projectCards =
    document.querySelectorAll(".project-card");


filterButtons.forEach((button) => {

    button.addEventListener("click", () => {

        const selectedFilter =
            button.dataset.filter;


        /* Active filter */

        filterButtons.forEach((item) => {

            item.classList.remove("active");

        });

        button.classList.add("active");


        /* Filter cards */

        projectCards.forEach((card) => {

            const category =
                card.dataset.cat;


            if (
                selectedFilter === "all" ||
                category === selectedFilter
            ) {

                card.classList.remove("hidden");

                card.classList.remove(
                    "filtering-out"
                );

            } else {

                card.classList.add(
                    "filtering-out"
                );


                setTimeout(() => {

                    card.classList.add("hidden");

                }, 250);

            }

        });


        /* Re-show matching cards */

        projectCards.forEach((card) => {

            const category =
                card.dataset.cat;

            if (
                selectedFilter === "all" ||
                category === selectedFilter
            ) {

                card.classList.remove("hidden");

                setTimeout(() => {

                    card.classList.remove(
                        "filtering-out"
                    );

                }, 20);

            }

        });

    });

});


/* =========================================================
   6. SEARCH
   ========================================================= */

const searchInput =
    document.getElementById("siteSearch");

const searchCount =
    document.getElementById("searchCount");


const searchableElements =
    document.querySelectorAll(
        "main h1, main h2, main h3, main p, main .chip, main .activity-label, main .activity-detail"
    );


/*
   Store original text so we can restore it
   after clearing the search.
*/

const originalText =
    new Map();


searchableElements.forEach((element) => {

    originalText.set(
        element,
        element.textContent
    );

});


function clearSearchHighlights() {

    searchableElements.forEach((element) => {

        const original =
            originalText.get(element);

        if (original !== undefined) {

            element.textContent =
                original;

        }

    });

}
function escapeRegExp(value) {

    return value.replace(
        /[.*+?^${}()|[\]\\]/g,
        "\\$&"
    );
}
function performSearch() {

    if (!searchInput) {
        return;
    }
    const query =
        searchInput.value.trim();
    /* Empty search */
    if (!query) {
        clearSearchHighlights();
        if (searchCount) {
            searchCount.textContent = "";
            searchCount.classList.remove(
                "no-results"
            );
        }
        return;
    }
    clearSearchHighlights();
    const regex =
        new RegExp(
            escapeRegExp(query),
            "gi"
        );
    let totalMatches = 0;
    searchableElements.forEach((element) => {
        const text =
            originalText.get(element);
        if (!text) {
            return;
        }
        const matches =
            text.match(regex);
        if (!matches) {
            return;
        }
        totalMatches += matches.length;
        const highlighted =
            text.replace(
                regex,
                (match) => {
                    return `
                        <mark class="search-hit">
                            ${match}
                        </mark>
                    `;
                }
            );
        element.innerHTML =
            highlighted;
    });
    if (searchCount) {
        if (totalMatches === 0) {
            searchCount.textContent =
                "No results";
            searchCount.classList.add(
                "no-results"
            );
        } else {
            searchCount.textContent =
                `${totalMatches} result${totalMatches > 1 ? "s" : ""}`;
            searchCount.classList.remove(
                "no-results"
            );

        }

    }

}
if (searchInput) {

    searchInput.addEventListener(
        "input",
        performSearch
    );
}
/* =========================================================
   7. SEARCH - PRESS ESC TO CLEAR
   ========================================================= */
if (searchInput) {

    searchInput.addEventListener(
        "keydown",
        (event) => {
            if (event.key === "Escape") {
                searchInput.value = "";
                performSearch();
                searchInput.blur();

            }

        }
    );

}
/* =========================================================
   8. KEYBOARD NAVIGATION
   ========================================================= */

document.addEventListener(
    "keydown",
    (event) => {
        /*
           Press "/" to focus the search box.
        */
        if (
            event.key === "/" &&
            document.activeElement !== searchInput
        ) {
            event.preventDefault();

            if (searchInput) {
                searchInput.focus();
            }

        }

    }
);
/* =========================================================
   9. IMAGE FALLBACK
   ========================================================= */

const images =
    document.querySelectorAll("img");
images.forEach((image) => {

    image.addEventListener(
        "error",
        () => {
            image.style.display = "none";
        }
    );
});
/* =========================================================
   10. STARTUP
   ========================================================= */

console.log(
    "Sultan CV loaded successfully."
);