class Core {
  constructor(selector) {
    if (typeof selector === 'string') {
      this.element = document.querySelector(selector)
    } else {
      this.element = selector
    }
  }

}

export function native(selector) {
  return new Core(selector)
}

native.createElem = (tagName, classes = '') => {
  const el = document.createElement(tagName)

  if (classes) {
    el.classList.add(classes)
  }
  console.log(el);
  return native(el)
}