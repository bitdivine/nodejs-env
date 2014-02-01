var find     = require('./find'),
    setPath  = require('./setPath');

module.exports = function(defaults) {
    // defaults.x.y.z can be overridden by an environament variable called x_y_z:
    find(defaults,function(path, val){
        var envVar = path.join('_');
        if (envVar in process.env) {
            setPath(defaults, path, process.env[envVar]);
        }
    });
    return defaults;
};
