import Ember from 'ember';

var AllController = Ember.ObjectController.extend({
  selectedAction: '',
  isFun: function(){
    return this.get('selectedAction') === 'fun';
  }.property('selectedAction'),
  isProductive: function(){
    return this.get('selectedAction') === 'productive';
  }.property('selectedAction'),
  selectedThingy: function(){
    return this.get('selectedAction') !== '';
  }.property('selectedAction'),
  actions:{
    onChangedDesire: function(){
      if(this.get('isProductive')){

      }
    }.observes('selectedAction')
  }
});

export default AllController;