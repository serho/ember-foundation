ember-foundation
================

Ember Addon for Zurb Foundation 5 library and Ember components

***Warning*: This is an ember-addon library that is in heavy development! Use at your own risk.**

## Install & Setup

Within an ember-cli app, run:

```sh
npm install --save-dev ember-foundation
```

Next, run the blueprint for ember-foundation:

```sh
ember generate ember-foundation
```

Then you need to mixin FoundationEnabled with your ApplicationView:

```js
// app/views/application.js

import Ember from 'ember';
import FoundationEnabled from 'ember-foundation/mixins/foundation-enabled';

export default Ember.View.extend(FoundationEnabled);
```

## Using Foundation Components

*Coming soon*
