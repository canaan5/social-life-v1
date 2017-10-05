"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var compiler_1 = require("@angular/compiler");
var tags = {
    webview: {
        src: true,
        autosize: true,
        nodeintegration: true,
        plugins: true,
        preload: true,
        httpreferrer: true,
        useragent: true,
        disablewebsecurity: true,
        partition: true,
        allowpopups: true,
        webpreferences: true,
        blinkfeatures: true,
        disableblinkfeatures: true,
        guestinstance: true,
        disableguestresize: true
    }
};
exports.ELECTRON_SCHEMA = {
    name: 'electron-schema'
};
compiler_1.DomElementSchemaRegistry.prototype.hasElement = new Proxy(compiler_1.DomElementSchemaRegistry.prototype.hasElement, {
    apply: function (target, thisArgument, argumentsList) {
        var tagName = argumentsList[0], schemaMetas = argumentsList[1];
        if (schemaMetas.some(function (schema) { return schema.name === exports.ELECTRON_SCHEMA.name; }) && tags[tagName]) {
            return true;
        }
        return Reflect.apply(target, thisArgument, argumentsList);
    }
});
compiler_1.DomElementSchemaRegistry.prototype.hasProperty = new Proxy(compiler_1.DomElementSchemaRegistry.prototype.hasProperty, {
    apply: function (target, thisArgument, argumentsList) {
        var tagName = argumentsList[0], propName = argumentsList[1], schemaMetas = argumentsList[2];
        if (schemaMetas.some(function (schema) { return schema.name === exports.ELECTRON_SCHEMA.name; }) && tags[tagName] && tags[tagName][propName]) {
            return true;
        }
        return Reflect.apply(target, thisArgument, argumentsList);
    }
});
//# sourceMappingURL=electron-schema.js.map