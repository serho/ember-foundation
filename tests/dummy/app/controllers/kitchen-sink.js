import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    greet: function () {
      console.log('Hello!');
    }
  },

  breadCrumb: 'Kitchen Sink',

  clearingImages: [
    {
      alt: 'Comet image',
      caption: 'Nulla vitae elit libero, a pharetra augue. Cras mattis consectetur purus sit amet fermentum.',
      thumbnail: 'http://foundation.zurb.com/docs/assets/img/examples/comet-th-sm.jpg',
      url: 'http://foundation.zurb.com/docs/assets/img/examples/comet.jpg'
    }, {
      alt: 'Earth image',
      thumbnail: 'http://foundation.zurb.com/docs/assets/img/examples/earth-th-sm.jpg',
      url: 'http://foundation.zurb.com/docs/assets/img/examples/earth.jpg'
    }, {
      alt: 'Launch image',
      caption: 'Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.',
      thumbnail: 'http://foundation.zurb.com/docs/assets/img/examples/launch-th-sm.jpg',
      url: 'http://foundation.zurb.com/docs/assets/img/examples/launch.jpg'
    }, {
      alt: 'Satellite image',
      thumbnail: 'http://foundation.zurb.com/docs/assets/img/examples/satelite-th-sm.jpg',
      url: 'http://foundation.zurb.com/docs/assets/img/examples/satelite.jpg'
    }, {
      alt: 'Space image',
      caption: 'Integer posuere erat a ante venenatis dapibus posuere velit aliquet.',
      thumbnail: 'http://foundation.zurb.com/docs/assets/img/examples/space-th-sm.jpg',
      url: 'http://foundation.zurb.com/docs/assets/img/examples/space.jpg'
    }
  ],

  magellanArrivals: [
    {
      href: '#build',
      name: 'build',
      text: 'Build with HTML'
    }, {
      href: '#js',
      name: 'js',
      text: 'Using JavaScript'
    }
  ],

  switchAOptions: [
    {
      id: 'a',
      label: 'Off',
      value: 'off'
    }, {
      id: 'a1',
      label: 'On',
      value: 'on'
    }
  ],

  switchAValue: 'off',

  switchBOptions: [
    {
      id: 'b',
      label: 'Off',
      value: 'off'
    }, {
      id: 'b1',
      label: 'On',
      value: 'on'
    }
  ],

  switchBValue: 'off',

  switchCOptions: [
    {
      id: 'c',
      label: 'Off',
      value: 'off'
    }, {
      id: 'c1',
      label: 'On',
      value: 'on'
    }
  ],

  switchCValue: 'off',

  switchDOptions: [
    {
      id: 'd',
      label: 'Off',
      value: 'off'
    }, {
      id: 'd1',
      label: 'On',
      value: 'on'
    }
  ],

  switchDValue: 'off'
});
