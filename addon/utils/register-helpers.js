import Ember from 'ember';
import times from '../helpers/times';

export default function () {
  Ember.Handlebars.registerHelper('times', times);
}
