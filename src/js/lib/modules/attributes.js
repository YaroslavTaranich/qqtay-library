import $ from '../core';

$.prototype.setAttribute = function(AttrName, AttrValue="") {
    for (let i = 0; i < this.length; i++){
        this[i].setAttribute(AttrName, AttrValue);
    }
    return this;
};

$.prototype.removeAttribute = function(AttrName) {
    for (let i = 0; i < this.length; i++){
        this[i].removeAttribute(AttrName);
    }
    return this;
};

