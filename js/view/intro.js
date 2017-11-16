import draw from '../utils/draw.js';
import Application from '../Application';
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
