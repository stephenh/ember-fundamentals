import Ember from 'ember';

// {{dasherize "Dasherize this TexT" numDashes=3}}
export function dasherize(params, hash) {
  let [toDasherize] = params;
  let dashCount = (hash || {}).numDashes || 1;
  let parts = toDasherize.toLowerCase().replace(/\_+/g," ").split(' ');
  let dashStr = '';
  for (let i = 0; i < dashCount; i++) {
    dashStr += '-';
  }
  return parts.join(dashStr);
}

export default Ember.Helper.helper(dasherize);
