import Ember from 'ember';

const { computed } = Ember;

export function ifThen(condition, v1, v2) {
  return condition ? v1 : v2;
}

export default function ifthen(conditionKey, trueValue, falseValue) {
  return computed(conditionKey, function() {
    return ifThen(this.get(conditionKey), trueValue, falseValue);
  });
}
