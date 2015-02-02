import DS from 'ember-data';

var Post = DS.Model.extend({
  title: DS.attr('string'),
  time: DS.attr('date'),
  content: DS.attr('string')
});

Post.reopenClass({
  FIXTURES: [
    {
      id: 1,
      title: 'Learn 1',
      time: new Date(),
      content: 'This is a brand new blog post. 1'
    },
    {
      id: 2,
      title: 'Learn 2',
      time: new Date(),
      content: 'This is a brand new blog post. 2'
    },
    {
      id: 3,
      title: 'Learn 3',
      time: new Date(),
      content: 'This is a brand new blog post. 3'
    }
  ]
});

export default Post;