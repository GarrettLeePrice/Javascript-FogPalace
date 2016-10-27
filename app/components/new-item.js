import Ember from 'ember';

export default Ember.Component.extend({
  addNewItem: false,
  actions: {
    itemFormShow() {
      this.set('addNewItem', true);
    },
    saveItem() {
      var params = {
        name: this.get('name') ? this.get('name') : "",
        type: this.get('type')? this.get('type') : "",
        price: this.get('price')? this.get('price') : "",
        image: this.get('image')? this.get('image') : "",
      };
      this.set('addNewItem', false);
      this.sendAction('saveItem', params);
    }
  }

});
