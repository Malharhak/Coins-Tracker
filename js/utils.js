/** Helper functions used in various situations **/
define ([], function () {
    var utils = {};

    // Returns a single unique ID
    utils.guid = function () {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
            return v.toString(16);
        });
    };

    // Simple aabb collision detection
    utils.aabb = function (x1, x2, y1, y2, w1, w2, h1, h2) {
        if ( x1 + w1 < x2 || 
            x2 + w2 < x1 || 
            y1 + h1 < y2 || 
            y2 + h2 < y1 ) {

                return false;
            } else {
                return true;
            }
    };

    return utils;
});