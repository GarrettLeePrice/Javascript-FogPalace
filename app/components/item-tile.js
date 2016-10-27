import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(item) {
      if(confirm('Really?')) {
        this.sendAction('destroyItem', item);
      }
    }
  }
});
