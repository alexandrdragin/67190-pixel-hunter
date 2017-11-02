import draw from '../utils/draw.js';
import Application from '../Application';
import MarkUp from './statsMarkup';

class Stats {
  init(data) {
    this.view = new MarkUp(data);
    draw(this.view);
    this.view.goBack = () => {
      Application.showGreeting();
    };
  }
}

export default new Stats();
