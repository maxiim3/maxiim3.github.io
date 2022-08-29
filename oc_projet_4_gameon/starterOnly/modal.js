//region DOM Elements
/**
 * # DOM ELEMENTS
 * @type {HTMLElement}
 */

// DOM NavBar
const topNav = document.querySelector('#myTopnav')
const iconNavBar = document.getElementById("iconNavBar");

// DOM Modal
const modalBg = document.querySelector(".bground");
const modalBtn = [...document.querySelectorAll(".modal-btn")];
const closeBtn = [...document.querySelectorAll(".close-modal")];
const btnSubmit = document.querySelector(".btn-submit");
// DOM Hero
const hero = document.querySelector(".hero-section");

// DOM Footer
const footer = document.querySelector("footer");
//endregion

//region Event Listeners
/**
 * # Event Listener
 * ## IIFE (Immediately Invoked Function Expression)
 * @type {EventListener}
 */

(
    () => {
        // NavBar Burger Icon
        iconNavBar.addEventListener("click", editNav);
        // Open Modal
        modalBtn.forEach(btn => btn.addEventListener("click", launchModal));
        // Close Modal
        closeBtn.forEach(btn => btn.addEventListener("click", closeModal));
        // Check and Submit Form
        btnSubmit.addEventListener("click", validate);
        // Observe top Nav et appelle setModalStyle
        new ResizeObserver(setModalStyle).observe(topNav)
    }
)();
//endregion

//region Functions

//region Navbar
/**
 * # Function
 * ## editNav()
 * Ajoute ou supprime la classe **'responsive'** qui permet de dérouler le menu en vue mobile
 */
function editNav() {
    const topNav = document.getElementById("myTopnav");
    if (topNav.className === "topnav") {
        topNav.className += " responsive";
    } else {
        topNav.className = "topnav";
    }
}

//endregion

//region Modal
/**
 * # Function
 * ## launchModal()
 * Affiche la modal en modifiant la valeur de *display*
 */
function launchModal() {
    setModalStyle()
    modalBg.style.display = "flex";
    hero.style.visibility = "hidden";
    footer.style.display = "none";
}

/**
 * # Function
 * ## closeModal()
 * Ferme la modal en modifiant la valeur de *display*
 */
function closeModal() {
    modalBg.style.display = "none";
    hero.style.visibility = "visible";
    footer.style.display = "block";
}

/**
 * # Function
 * ## setModalStyle
 * Définis le marginTop appliqué à la modale:
 * - en fonction de la taille de fenêtre
 * - et de la taille de l'élément '.topnav'
 */
function setModalStyle() {
    // get nav
    const top = getTopNavHeight()
    // get screen
    const breakpoint = 800
    const screenW = screen.width
    if (screenW < breakpoint)
        return modalBg.style.marginTop = `${top}px`
    return modalBg.style.marginTop = `unset`
}

/**
 * # Function
 * ## getTopNavHeight
 * Calcule la hauteur totale de l'élément **.topnav**.
 * @returns {number}
 */
function getTopNavHeight() {
    // hauteur de '.topnav' (height et padding)
    let innerHeight = topNav.clientHeight

    // récupère les styles appliqués à '.topnav'
    let style = getComputedStyle(topNav);

    // extrait les margin top et bottom || renvoie 0 si nuls
    let marginTop = parseInt(style.marginTop) || 0
    let marginBottom = parseInt(style.marginBottom) || 0

    // calcul et retourne la hauteur totale
    return innerHeight + marginTop + marginBottom
}

//endregion

//region Formulaire

//region MAIN-Validate
/**
 * # Function
 * ## validate(e)
 * **Envoie le formulaire** si les saisies utilisateurs sont **valides**
 *
 * **Lève une Erreur** sur le formulaire est **invalide**
 * @param e [click]
 */
function validate(e) {
    e.preventDefault();
    try {
        (function () {
            if (checkUserInput()) {
                modalBg.dataset.formValid = "true";
            } else {
                modalBg.dataset.formValid = "false";
            }
        })();
    } catch (e) {
        return e;
    }
}
//endregion


//region Check all Inputs
/**
 * # Function
 * ## checkUserInput
 * Vérifie que les saisies utilisateurs soient valides
 * @returns {boolean}
 */
function checkUserInput() {
    /**
     * Sera **incrémenter** après chaque **validation valide**
     * @type {number} || Retourne le **nombre de saisies valides**
     */
    let validInputs = 0;

    /**
     * Sera **incrémenter** après chaque **validation**
     * @type {number} || Retourne le nombre de **saisies totales devant être validés**
     */
    let requiredValid = 0;

    /**
     * Lance les vérifications pour chaque saisie obligatoires
     */
    (function () {
        // DOM Form Elements
        const firstname = document.getElementById("first");
        const lastname = document.getElementById("last");
        const email = document.getElementById("email");
        const birthdate = document.getElementById("birthdate");
        const quantity = document.getElementById("quantity");
        const radios = [...document.querySelectorAll("#radios .checkbox-input")];
        const checkboxCGU = document.querySelector("#checkboxes #checkbox1");

        requiredValid++;
        // validation prénom
        if (!isEmpty(firstname)) {
            if (!minLength(firstname)) {
                setValidTo(firstname);
                validInputs++;
            }
        }
        // validation nom
        requiredValid++;
        if (!isEmpty(lastname)) {
            if (!minLength(lastname)) {
                setValidTo(lastname);
                validInputs++;
            }
        }
        // validation mail
        requiredValid++;
        if (!isEmpty(email)) {
            if (isEmail(email)) {
                setValidTo(email);
                validInputs++;
            }
        }
        // validation date de naissance
        requiredValid++;
        if (!isEmpty(birthdate)) {
            setValidTo(birthdate);
            validInputs++;
        }
        // validation nombre de participation
        requiredValid++;
        if (!isEmpty(quantity)) {
            setValidTo(quantity);
            validInputs++;
        }
        // validation choix de la ville
        requiredValid++;
        if (!isSelected(radios)) {
            setValidTo(radios.at(0));
            validInputs++;
        }
        // validation CGU
        requiredValid++;
        if (!isChecked(checkboxCGU)) {
            setValidTo(checkboxCGU);
            validInputs++;
        }
    })();

    // output
    return validInputs === requiredValid;
}
//endregion

//region Individual validation
/**
 * # Function
 * ## isEMpty()
 * Vérifie que la valeur de l'input ne soit pas vide
 * @param input | DOM Element
 * @returns {boolean}
 */
function isEmpty(input) {
    if (input.value.trim() === "") {
        setErrorTo(input, `${input.ariaLabel || input.title} doit être renseigné`);
        return true;
    }
    return false;
}

/**
 * # Function
 * ## minLength()
 * Vérifie si la longueur des noms ou prénom sont valides
 * @param input | DOM Element
 * @param i | Valeure minimale
 * @returns {boolean}
 */
function minLength(input, i=2) {
    if (input.value.trim().length < i) {
        setErrorTo(input, `${input.ariaLabel} doit faire au moins 2 lettres`);
        return true;
    }
    return false;
}

/**
 * # Function
 * ## isEmail()
 * Vérifie si le format de mail est valide
 * @param email | [type String]
 * @returns {boolean}
 */
function isEmail(email) {
    const regex =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (regex.test(email.value.trim())) {
        return true;
    } else {
        setErrorTo(email, "Veuillez renseigner un email valid svp");
        return false;
    }
}

/**
 * # Function
 * ## isSelected()
 * Vérifie si une ville a été sélectionnée
 * @param radios | Liste des éléments du DOM de type radio
 * @returns {boolean}
 */
function isSelected(radios) {
    if (radios.every(radio => !radio.checked)) {
        setErrorTo(radios[0], "Vous devez choisir un tournois");
        return true;
    }
    return false;
}

/**
 * # Function
 * ## isChecked()
 * Vérifie que les CGU ont bien été acceptées
 * @param checkbox | Checkbox Dom Element
 * @returns {boolean}
 */
function isChecked(checkbox) {
    if (!checkbox.checked) {
        setErrorTo(checkbox, "Vous devez accepter les conditions d'utilisation");
        return true;
    }
    return false;
}
//endregion

//region Validation Response || Valid / Error
/**
 * # Function
 * ## setErrorTo()
 * Active les styles [data-error-visible] pour l'élément parent
 * Affiche le message d'erreur
 * @param input DOM Element
 * @param message Message d'erreur
 */
function setErrorTo(input, message) {
    const formData = input.parentElement;
    formData.dataset.error = message;
    formData.dataset.errorVisible = 'true';
    // throw new Error(message);
}

/**
 * # Function
 * ## setValidTo()
 * Désactive les styles [data-error-visible] pour l'élément parent
 * @param input, DOM Element
 */
function setValidTo(input) {
    const formData = input.parentElement;
    formData.dataset.error = "";
    formData.dataset.errorVisible = 'false';
}
//endregion

//endregion
//endregion
