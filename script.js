function showPage(pageId, clickedButton) {

            // hide all pages.
            const pages = document.querySelectorAll(".page");

            pages.forEach(function(page) {
                page.classList.remove("active");
            });

            // show only the selected page.
            document.getElementById(pageId).classList.add("active");

            // update the navigation buttons.
            const buttons = document.querySelectorAll("nav button");

            buttons.forEach(function(button) {
                button.classList.remove("active");
            });

            // highlight the selected navigation button.
            if (clickedButton) {
                clickedButton.classList.add("active");
            } else {
                buttons.forEach(function(button) {
                    if (
                        button.getAttribute("onclick") &&
                        button.getAttribute("onclick").includes(
                            "'" + pageId + "'"
                        )
                    ) {
                        button.classList.add("active");
                    }
                });
            }

            // return to the top when changing pages.
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        }