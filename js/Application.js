import intro from './view/intro';
import greeting from './view/greeting';
import rules from './view/rules';
import stats from './view/stats';

import gamePresenter from './GamePresenter';

import {loaderQuestions} from './data/questsData';

const ControllerId = {
  INTRO: ``,
  GREETING: `greeting`,
  RULES: `rules`,
  GAME: `game`,
  STATS: `stats`
};

const saveState = (state) => {
  return JSON.stringify(state);
};

const loadState = (dataString) => {
  try {
    return JSON.parse(dataString);
  } catch (e) {
    return ``;
  }
};

const routes = {
  [ControllerId.INTRO]: intro,
  [ControllerId.GREETING]: greeting,
  [ControllerId.RULES]: rules,
  [ControllerId.GAME]: gamePresenter,
  [ControllerId.STATS]: stats
};

export default class Application {

  static init() {
    intro.init();
    const onHashChange = () => {
      const hashValue = location.hash.replace(`#`, ``);
      const [id, data] = hashValue.split(`?`);
      this.changeHash(id, data);
    };
    window.addEventListener(`hashchange`, onHashChange);

    loaderQuestions.then((response) => {
      if (response.ok) {
        return response.json();
      } else if (response.status === 404) {
        return [];
      }
      throw new Error(`Неизвестный статус: ${response.status} ${response.statusText}`);
    }).then((responseData) => {
      this.questionList = responseData;
      onHashChange();
    });
  }

  static changeHash(id, data) {
    const controller = routes[id];

    if (controller) {
      controller.init(loadState(data));
    }
  }

  static showWelcome() {
    location.hash = ControllerId.INTRO;
  }

  static showGreeting() {
    location.hash = ControllerId.GREETING;
  }

  static showRules() {
    location.hash = ControllerId.RULES;
  }

  static showGame() {
    location.hash = ControllerId.GAME;
  }

  static showStats(data) {
    location.hash = `${ControllerId.STATS}?${saveState(data)}`;
  }
}
