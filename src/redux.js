import { combineReducers, createStore } from 'redux';



export const ACTIVATE_GEOD = 'ACTIVATE_GEOD';
export const CLOSE_GEOD = 'CLOSE_GEOD';
export const CHANGE_COLOR = 'CHANGE_COLOR';
export const CHANGE_COLOR_TEXT = 'CHANGE_COLOR_TEXT';

// actions.js
export const actionActivateGeod = geod => ({
  type: ACTIVATE_GEOD,
  geod,
});

export const actionCloseGeod = () => ({
  type: CLOSE_GEOD,
});

export const actionChangeColorText = color => ({
  type: CHANGE_COLOR_TEXT,
  color
})

export const actionChangeColor = color => ({
  type: CHANGE_COLOR,
  color
})

// reducers.js
export const geodReducer = (state = {}, action) => {
  switch (action.type) {
    case ACTIVATE_GEOD:
      return action.geod;
    case CLOSE_GEOD:
      return {};
    case CHANGE_COLOR_TEXT:
      return action.color;
    default:
      return state;
  }
};

export const colorReducer = (state = {}, action) => {
  switch (action.type) {
    case CHANGE_COLOR:
        return action.color;
    default:
      return state;
  }
}

export const reducers = combineReducers({
  geodReducer,
  colorReducer
});

// store.js
export function configureStore(initialState = {}) {
  /* eslint-disable no-underscore-dangle */
  const store = createStore(reducers, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
  /* eslint-enable */
  return store;
}

export const store = configureStore();
