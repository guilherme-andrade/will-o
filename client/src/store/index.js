import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { clientMiddleware } from './middleware';
import reducer from './reducer';

const configureStore = (client, data) => {
  const middleware = [thunk, clientMiddleware(client)]
  const withDevTools = composeWithDevTools(applyMiddleware(...middleware));
  const store = createStore(reducer, withDevTools, data);
  return store;
};

export default configureStore;
