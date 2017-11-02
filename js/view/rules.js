import draw from '../utils/draw.js';
import Application from '../Application';
import MarkUp from './rulesMarkup';

class Rules {
  constructor() {
    this.view = new MarkUp();
  }

  init() {
    draw(this.view);

    const nextBtn = this.view.element.querySelector(`.rules__button`);
    this.view.onInput = (evt) => {
      nextBtn.disabled = evt.target.value === ``;
    };

    this.view.onClick = () => {
      Application.showGame();
    };

  }
}

export default new Rules();
