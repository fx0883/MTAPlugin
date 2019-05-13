var exec = require('cordova/exec');

exports.coolMethod = function (arg0, success, error) {
    exec(success, error, 'MTAPlugin', 'coolMethod', [arg0]);
};

exports.onPageStart = function (pageName, success, error) {
    exec(success, error, "MTAPlugin", "onPageStart", [pageName]);
};

exports.onPageEnd = function (pageName, success, error) {
    exec(success, error, "MTAPlugin", "onPageEnd", [pageName]);
};

exports.onEvent = function (eventId, eventLabel, success, error) {
    exec(success, error, "MTAPlugin", "onEvent", [eventId, eventLabel]);
};

exports.onEventBegin = function (eventId, eventLabel, success, error) {
    exec(success, error, "MTAPlugin", "onEventBegin", [eventId, eventLabel]);
};

exports.onEventEnd = function (eventId, eventLabel, success, error) {
    exec(success, error, "MTAPlugin", "onEventEnd", [eventId, eventLabel]);
};