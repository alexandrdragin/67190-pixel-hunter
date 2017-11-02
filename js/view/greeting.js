import draw from '../utils/draw';
import Application from '../Application';
import MarkUp from './greetingMarkup';

class Greeting {
  constructor() {
    this.view = new MarkUp();
  }

  init() {
    draw(this.view);
    this.view.onClick = () => {
      Application.showRules();
    };
  }
}

export default new Greeting();
