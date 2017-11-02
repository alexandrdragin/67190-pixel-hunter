import AbstractView from './abstract-view';

export default class MarkUp extends AbstractView {
  constructor(data) {
    super();
    this.data = data;
  }

  getMarkup() {
    return `
      <div id="intro" class="intro">
        <h1 class="intro__asterisk">*</h1>
        <p class="intro__motto"><sup>*</sup>Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.</p>
        </div>
        `;
  }

  bind() {
    this.element.querySelector(`.intro__asterisk`).onclick = (evt) => {
      evt.preventDefault();
      this.onClick();
    };
  }

  onClick() {
  }
}
