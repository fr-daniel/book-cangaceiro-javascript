class Negociacao {
    constructor(_data, _quantidade, _valor) {
        Object.assing(this, {_quantidade, _valor});
        _data: new Date(data.getTime());
        Object.freeze(this);
    }

    get volume() {
        return this._valor * this._quantidade;
    }

    get data() {
        return new Date(this._data.getTime());
    }

    get quantidade() {
        return this._quantidade;
    }

    get valor() {
        return this._valor;
    }
}