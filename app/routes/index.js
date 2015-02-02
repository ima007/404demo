import Ember from 'ember';
import Blogpost from '../models/blogpost';

export default Ember.Route.extend({
  model: function(){
    return Blogpost.FIXTURES;
  }
});