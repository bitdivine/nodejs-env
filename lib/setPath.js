module.exports = function(dict, path, val){
    while(path.length > 1) {
        dict = dict[path.shift(1)];
    }
    dict[path[0]] = val;
};
