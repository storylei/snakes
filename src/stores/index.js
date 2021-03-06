const {createStore, compose} = require('redux');
const reducers = require('../reducers');

module.exports = function(initialState) {
  const store = createStore(
    reducers, 
    initialState,
    compose( window.devToolsExtension ? window.devToolsExtension() : f => f )   // chrome dubug tool
  )

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers')
      store.replaceReducer(nextReducer)
    })
  }

  return store
}
