import { app } from 'hyperapp';
import actions from './actions';
import state from './state';
import view from './components/Counter';

const model = {
  state,
  actions,
};

const appArgs = {
  model,
  view,
};

const {
  actions: dispatch,
} = app(
  appArgs,
  document.body,
);

/**
 * hyperapp exposes its actions
 * i like to see it as a dispatch
 * this is just an example of calling the actions from outside of hyperapp!!
 * think of it as a hub to talk to other apps/frameworks/vanillaJS
 * here is an example on codepen: https://codepen.io/selfup/pen/jLMRjO
 */
setTimeout(dispatch.add, 1000);
setTimeout(dispatch.sub, 2000);
