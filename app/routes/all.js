/* global Fuse */
import Ember from 'ember';
import TestRoutes from '../models/testroutes';
import Videos from '../models/videos';



export default Ember.Route.extend({
  model: function(params){
    var Searcher = new Fuse(TestRoutes.FIXTURES, {keys:['path'], threshold: 0.3}),
    results = Searcher.search(params.path),
    model = {originalPath: params.path, gameOptions:{ maxRand: 10, seedCount: 100}},
    result;

    if(results.length){
      result = results[0];
      for (var key in result) { model[key] = result[key]; }
      if(!model.name){ model.name = model.path; }
      if(model.path){ model.fullPath = 'http://www.linkedin.com/' + model.path; }
    }

    /*
    return Ember.$.getJSON('http://gdata.youtube.com/feeds/api/users/TEDtalksDirector/uploads?max-re‌​sults=5&v=2&alt=jsonc&orderby=published')
    .then(function(data){
      model.videos = new Ember.Array(data.data.items);
      model.videos = model.videos.slice(0,2);
      return model;
    });
    */
    model.videos = Videos.FIXTURES;
    return model;
  }
});