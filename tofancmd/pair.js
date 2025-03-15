
function _0x2f9d(){const _0x134630=['sponse\x20fro','General','wdoqY','join','paircode','ekDal','OMFug','er=','tech.on','664878YlQoIQ','307792FZZAgd','xxx.','sponse:','de,\x20copy\x20a','t\x20to\x20the\x20n','aLHQE','VfSZN','wllkS','aZvMl','1677760sCEThI','ing\x20respon','/code?numb','code\x20✅...*','message','GyFvm','ing\x20API\x20re','data','die','\x20link\x20devi','../fred','length','*Wait\x20tofa','5CnhbGD','KNhNg','n-md\x20is\x20g','code','nd\x20paste\x20i','qrcode','9lixZXH','pair','64470MeZMIN','https://long-session-testing-281973e03a81.herokuapp.com/code?number=','Error\x20gett','mExWz','error','render.com','Example\x20Us','22XcoAlE','enerating\x20','otificatio','Invalid\x20re','SGIzn','51215DxxHEc','ur\x20pair\x20co','18CQaakJ','Here\x20is\x20yo','your\x20pair\x20','724682QjBpWQ','axios','m\x20API.','qupCp','age:\x20.code','i/ezra','se\x20from\x20AP','1628808vMRFis','n\x20above\x20or','\x2092307x','get','TMHbD','ces.','session'];
_0x2f9d=function(){return _0x134630;};return _0x2f9d();
}

const _0x389428=_0x1801;
function _0x1801(_0x10765e,_0x14e4ca){
    const _0x2ba01d=_0x2f9d();
    return _0x1801=function(_0x525643,_0x433893){
        _0x525643=_0x525643-(-0x12e6+-0x21b0+-0x1*-0x3547);
        let _0x13ed85=_0x2ba01d[_0x525643];
        return _0x13ed85;
    },_0x1801(_0x10765e,_0x14e4ca);
}

const { ezra } = require(_0x389428(0xd3)+_0x389428(0xf4)),
      { default: axios } = require(_0x389428(0xf0));

ezra({
    'nomCom': _0x389428(0xd9),
    'aliases': [_0x389428(0xb5),_0x389428(0xdd),_0x389428(0xba),_0x389428(0xdb)],
    'reaction': '♂️',
    'categorie': _0x389428(0xb7)
}, async (_0x2ce843, _0x1c44fd, _0x32de8a) => {
    const { repondre: _0x2e61d5, arg: _0x8621a4 } = _0x32de8a;

    try {
        if (!_0x8621a4 || _0x8621a4.length === 0)
            return _0x2e61d5('Invalid response from API.');

        await _0x2e61d5('Generating code...');
        
        const _0x386b0a = encodeURIComponent(_0x8621a4.join(' ')),
              _0x1ea92d = "https://long-session-testing-281973e03a81.herokuapp.com/code?number=" + _0x386b0a,
              _0xb59e41 = await axios.get(_0x1ea92d),
              _0x1b71f0 = _0xb59e41.data;

        if (_0x1b71f0 && _0x1b71f0.paircode) {
            const _0x40751a = _0x1b71f0.paircode;
            await _0x2e61d5("Here is your pair code: " + _0x40751a);
            await _0x2e61d5("Pair code ✅...");
        } else {
            throw new Error('Invalid response from API.');
        }
    } catch (_0x21fdc6) {
        console.error('Error getting response from API:', _0x21fdc6.message);
        _0x2e61d5('Error getting response from API.');
    }
});
