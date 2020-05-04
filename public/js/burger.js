
// ToDo:  rewrite this in Vue component
document.addEventListener('DOMContentLoaded', () => {

    const $navbarBurgers = document.querySelectorAll('.navbar-burger');

    if ($navbarBurgers) {

        $navbarBurgers.forEach(el => {
            el.addEventListener('click', () => {
                console.log(el)
                // Get the target from the "data-target" attribute
                const target = el.dataset.burgerMenu;
                const $target = document.getElementById(target);

                // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
                el.classList.toggle('is-active');
                $target.classList.toggle('is-active');

            });
        });
    }

});