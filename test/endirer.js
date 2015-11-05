
var endirer = require('../src/endirer');
var win = require('win-ze-yes');

function faitUnTruc() {
    return 'foo';
}

describe('endirer', function() {
    it('doit faire un truc endirer celui du départ mais non', function() {
        const endirerFaitUnTruc = endirer(faitUnTruc);
        
        win(typeof endirerFaitUnTruc.tAsCru == 'function').needs.ze.yes.to.win.against.ze.no;
   
        endirerFaitUnTruc.tAsCru('bidule').return('baz');
        
        win(endirerFaitUnTruc('bidule') == 'baz').needs.ze.yes.to.win;
        
    })
});