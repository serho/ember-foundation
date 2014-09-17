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

## Stylesheets

### Using SASS

In your app.scss, simply import "ember-foundation":

```scss
// app/styles/app.scss

@import "ember-foundation";
```

### Using CSS

In your app.css, import the needed CSS directly from Foundation:

```css
/* app/styles/app.css */

@import "bower_components/foundation/css/normalize.css";
@import "bower_components/foundation/css/foundation.css";
```

## Using Foundation Components

*Coming soon*
