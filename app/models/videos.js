import DS from 'ember-data';

var Videos = DS.Model.extend({});

Videos.reopenClass({
  FIXTURES: {
    'id': 'Oa82WNk0mis',
    'playerid': function(){
      return 'player'+this.get('id');
    }
  }
});

export default Videos;