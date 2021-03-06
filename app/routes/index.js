import Ember from 'ember';



export default Ember.Route.extend({
  model() {
    return this.store.findAll('item');
  },

  actions: {

    goToCart() {
      this.transitionTo('my-cart');
    },

    saveItem(params) {
      var newItem = this.store.createRecord('item', params);
      newItem.save();
      this.transitionTo('index');
    },

    destroyItem(item) {
      item.destroyRecord();
      this.transitionTo('index');
    }
  }
});
