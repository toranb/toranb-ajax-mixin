var promise = function(url, type, hash) {
    return new Ember.RSVP.Promise(function(resolve, reject) {
      hash.success = function(json) {
        return Ember.run(null, resolve, json);
      };
      hash.error = function(json) {
        if (json && json.then) {
          json.then = null;
        }
        return Ember.run(null, reject, json);
      };
      $.ajax(hash);
    });
}

var AjaxMixin = Ember.Mixin.create({
    xhr: function(url, type, hash) {
        hash = hash || {};
        hash.url = url;
        hash.type = type;
        hash.dataType = "json";
        //return PromiseMixin.promise(url, type, hash);
        return promise(url, type, hash);
    }
});

export default AjaxMixin;
