import DS from 'ember-data';

var TestRoutes = DS.Model.extend({});

TestRoutes.reopenClass({
  FIXTURES: [
    {'path':'hp'              , 'name':'read about your network'},
    {'path':'home'            , 'name':'read about your network'},
    {'path':'profile/view'    , 'name':'view a profile'},
    {'path':'profile/edit'    , 'name':'edit your profile'},
    {'path':'edu'             , 'name':'take a look at some universities'},
    {'path':'edu/alumni'      , 'name': 'find alumni'},
    {'path':'connections'     , 'name': 'connect with some peeps'},
    {'path':'company'         , 'name':'find a company'},
    {'path':'myGroups'        , 'name':'participate in a group discussion'},
    {'path':'today'           , 'name':'read the latest news trending in your network'},
    {'path':'people/pymk/hub' , 'name':'find new connections'}
  ]
});

export default TestRoutes;