import draw from '../utils/draw.js';
import MarkUp from './introMarkup';

class Intro {
  constructor() {
    this.view = new MarkUp();
  }

  init() {
    draw(this.view);
    this.view.onClick();
  }
}

export default new Intro();
