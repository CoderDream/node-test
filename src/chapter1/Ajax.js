var Ajax = {
    load: function (url, callback) {
        callback.call(this, url);
    }
};

module.exports = Ajax;