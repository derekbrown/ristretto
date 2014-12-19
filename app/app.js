import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';

Ember.MODEL_FACTORY_INJECTIONS = true;

var App = Ember.Application.extend({
  modulePrefix: 'ristretto',
  Resolver: Resolver
});

loadInitializers(App, 'ristretto');

export default App;
