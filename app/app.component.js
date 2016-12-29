"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var AppComponent = (function () {
    function AppComponent() {
        this.appActive = false;
        this.activeApp = '';
        this.appUrl = 'http://www.google.com';
        this.activatedApps = [];
        this.apps = [
            { 'name': 'Facebook', 'icon': 'fb.png', 'url': 'https://www.facebook.com' },
            { 'name': 'Twitter', 'icon': 'twitter.png', 'url': 'https://www.twitter.com' },
            { 'name': 'Youtube', 'icon': 'youtube.png', 'url': 'https://www.youtube.com' },
            { 'name': 'Linkedin', 'icon': 'linkedin.png', 'url': 'https://www.linkedin.com' },
            { 'name': 'Pinterest', 'icon': 'pinterest.png', 'url': 'https://www.pinterest.com' },
            { 'name': 'Google-plus', 'icon': 'google-plus.png', 'url': 'https://plus.google.com' },
            { 'name': 'Tumblr', 'icon': 'tumblr.png', 'url': 'https://www.tumblr.com' },
            { 'name': 'Instagram', 'icon': 'instagram.png', 'url': 'https://www.instagram.com' },
            { 'name': 'Reddit', 'icon': 'reddit.png', 'url': 'https://www.reddit.com' },
            { 'name': 'VK', 'icon': 'vk.png', 'url': 'https://vk.com' },
            { 'name': 'flickr', 'icon': 'flickr.png', 'url': 'https://www.flickr.com' },
            { 'name': 'vine', 'icon': 'vine.png', 'url': 'https://vine.co' },
            { 'name': 'meetup', 'icon': 'meetup.png', 'url': 'https://www.meetup.com' },
            { 'name': 'ask-fm', 'icon': 'ask-fm.png', 'url': 'http://ask.fm' },
            { 'name': 'classmates', 'icon': 'classmates.png', 'url': 'http://www.classmates.com' },
        ];
    }
    AppComponent.prototype.openApp = function (app) {
        var webview = document.getElementById('app-view');
        if (this.appActive && this.activeApp != app.name) {
            localStorage.setItem(this.activeApp, webview.getURL());
            this.appUrl = (localStorage.getItem(app.name) === null) ? app.url : localStorage.getItem(app.name);
            this.activeApp = app.name;
            this.appActive = true;
            return true;
        }
        this.appUrl = (localStorage.getItem(app.name) === null) ? app.url : localStorage.getItem(app.name);
        this.activeApp = app.name;
        this.appActive = true;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'social-life',
            templateUrl: "./dist/template/application.html"
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map