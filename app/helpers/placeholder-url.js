import Ember from 'ember';

export function placeholderUrl(params, hash) {
  let height = hash ? Math.max(hash["h"] || 120, 10) : 120;
  let width = hash ? Math.max(hash["w"] || 100, 10) : 100;
  return "http://placekitten.com/" + width + "/" + height;
}

export default Ember.Helper.helper(placeholderUrl);
