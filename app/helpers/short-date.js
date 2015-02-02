/* global Intl */
import Ember from 'ember';

export default Ember.Handlebars.makeBoundHelper(function(value, options){
  console.log(options);
  return new Intl.DateTimeFormat(undefined, { weekday: 'short', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' }).format(value);
});