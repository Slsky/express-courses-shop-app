class InputValidator {
    constructor(validateObjID, debounceTime = 500) {
        this.element = document.getElementById(validateObjID)
        this.debounceTime = debounceTime
    }

    swap(el, first, second) {
        el.target.classList.remove(first)
        el.target.classList.add(second)
    }

    criate() {
        this.element.addEventListener('input',
            debounce((el) => {
                if (el.target.value.trim()) {
                    this.swap(el, "is-danger", "is-success")

                    if (!inValidTitle.hidden) inValidTitle.hidden = true
                    validTitle.hidden = false

                } else {
                    this.swap(el, "is-success", "is-danger")

                    if (!validTitle.hidden) validTitle.hidden = true
                    inValidTitle.hidden = false
                }
            }, this.debounceTime)

        )
    }

    static criateFromArray(elementsIdArray) {
        return elementsIdArray.map(elem => InputValidator(elem).criate())

    }
}


new InputValidator('title').criate()
new InputValidator('price').criate()
new InputValidator('url').criate()



