"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        /**
         * check if any app is activated
         * @type {boolean}
         */
        this.appActive = false;
        /**
         * name of active app
         * @type {string}
         */
        this.activeApp = '';
        /**
         * Active app home url
         * @type {string}
         */
        this.activeAppHomeUrl = '';
        /**
         * address of app to load
         * @type {string}
         */
        this.appUrl = '';
        /**
         * activated apps
         * @type {Array}
         */
        this.activatedApps = [];
        /**
         * indicate that a request is in progress
         * @type {boolean}
         */
        this.loading = false;
        /**
         * all apps
         * @type {{name: string, icon: string, url: string}[]}
         */
        this.apps = [
            { 'name': 'Facebook', 'icon': 'fb.png', 'url': 'https://www.facebook.com' },
            { 'name': 'Twitter', 'icon': 'twitter.png', 'url': 'https://www.twitter.com' },
            { 'name': 'Instagram', 'icon': 'instagram.png', 'url': 'https://www.instagram.com' },
            { 'name': 'Linkedin', 'icon': 'linkedin.png', 'url': 'https://www.linkedin.com' },
            { 'name': 'Youtube', 'icon': 'youtube.png', 'url': 'https://www.youtube.com' },
        ];
    }
    /**
     * display app when clicked
     * @param app {object}
     * @returns {boolean}
     */
    AppComponent.prototype.openApp = function (app) {
        this.activeAppHomeUrl = app.url;
        this.appActive = true;
        if (this.activeApp === '') {
            this.activeApp = app.name;
        }
        var $this = this, webview = document.getElementById('app-view');
        // indicate request by displaying loading on top of the app icon
        // if (webview !== null) {
        //     webview.addEventListener('did-start-loading', function () {
        //         $this.loading = true;
        //     });
        //     webview.addEventListener('did-stop-loading', function () {
        //         $this.loading = false;
        //     });
        // }
        if (this.appActive && this.activeApp !== app.name) {
            console.log('here');
            // localStorage.setItem(this.activeApp, webview.getURL());
            // this.appUrl = (localStorage.getItem(app.name) === null) ? app.url : localStorage.getItem(app.name);
            // this.activeApp = app.name;
            // return true;
        }
        // this.appUrl = (localStorage.getItem(app.name) === null) ? app.url : localStorage.getItem(app.name);
        // console.log(webview);
        return;
    };
    ;
    AppComponent = __decorate([
        core_1.Component({
            selector: 'social-life',
            templateUrl: './dist/template/application.html'
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map