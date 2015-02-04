import EmberRadioButton from 'ember-radio-buttons';

var RadioButton = EmberRadioButton.extend({
  change: function(){
    EmberRadioButton.prototype.change.call(this);
    this.sendAction();
  }
});

export default RadioButton;