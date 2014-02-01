// For the benefit of systems that like key/value pairs, convert a tree of dictionaries into a list of path/leaf pairs.

/**
 * callback(path as array, val)
 */
module.exports = function flatten(data, callback, prefix) {
    prefix = prefix ? prefix : [];
    var path, val;
    for (var key in data) {
        path = prefix.slice(0);
        path.push(key);
        val = data[key];
        if (typeof(val) === 'object') {
            flatten(val, callback, path);
        } else {
            callback(path, val);
        }
    }
};

