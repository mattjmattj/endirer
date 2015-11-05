
var a = require('a')

module.exports = function endirer(obj) {
    var mocked = a.mock(obj);
    
    mocked.tAsCru = mocked.expect;
    
    return mocked;
}