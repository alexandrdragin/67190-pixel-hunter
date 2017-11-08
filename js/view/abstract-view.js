import getElementFromTemplate from '../utils/getElementFromTemplate';

export default class AbstractView {
  constructor() {
    this._element = null;
  }

  getMarkup() {
    throw new Error(`Method getMarkup is not defined`);
  }

  bind() {

  }

  clearHandlers() {

  }

  get element() {
    if (!this._element) {
      this._element = getElementFromTemplate(this.getMarkup);
      this.bind();
    }

    return this._element;
  }
}
