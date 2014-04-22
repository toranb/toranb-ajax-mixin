import PromiseMixin from 'bower/toranb-promise-mixin/main';

var AjaxMixin = Ember.Mixin.create({
    xhr: function(url, type, hash) {
        hash = hash || {};
        hash.url = url;
        hash.type = type;
        hash.dataType = "json";
        return PromiseMixin.promise(url, type, hash);
    }
});

export default AjaxMixin;
