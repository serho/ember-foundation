ember-foundation
================

Ember Addon for Zurb Foundation 5 library and Ember components

***Warning*: This is an ember-addon library that is in heavy development! Use at your own risk.**

## Install & Setup

Within an ember-cli app, run:

```sh
npm install --save-dev ember-foundation
```

Then include the enable-foundation mixin with your application view:

```js
// app/views/application.js

import Ember from 'ember';
import EnableFoundation from 'ember-foundation/mixins/enable-foundation';

export default Ember.View.extend(EnableFoundation);
```
