import {Component} from '@angular/core';

@Component({
    selector: 'social-life',
    templateUrl: './dist/template/application.html'
})

export class AppComponent {
    /**
     * check if any app is activated
     * @type {boolean}
     */
    protected appActive = false;
    /**
     * name of active app
     * @type {string}
     */
    protected activeApp = '';
    /**
     * Active app home url
     * @type {string}
     */
    protected activeAppHomeUrl = '';
    /**
     * address of app to load
     * @type {string}
     */
    protected appUrl = '';
    /**
     * activated apps
     * @type {Array}
     */
    protected activatedApps = [];
    /**
     * indicate that a request is in progress
     * @type {boolean}
     */
    protected loading = false;
    /**
     * all apps
     * @type {{name: string, icon: string, url: string}[]}
     */
    protected apps = [
        {'name': 'Facebook', 'icon': 'fb.png', 'url': 'https://www.facebook.com'},
        {'name': 'Twitter', 'icon': 'twitter.png', 'url': 'https://www.twitter.com'},
        {'name': 'Instagram', 'icon': 'instagram.png', 'url': 'https://www.instagram.com'},
        {'name': 'Linkedin', 'icon': 'linkedin.png', 'url': 'https://www.linkedin.com'},
        {'name': 'Youtube', 'icon': 'youtube.png', 'url': 'https://www.youtube.com'},
    ];

    /**
     * display app when clicked
     * @param app {object}
     * @returns {boolean}
     */
    protected openApp(app)
    {
        this.activeAppHomeUrl = app.url;
        this.appActive = true;
        if (this.activeApp === '') {
            this.activeApp = app.name;
        }

        let $this = this,
            webview = document.getElementById('app-view');

        // indicate request by displaying loading on top of the app icon
        if (webview !== null) {
            webview.addEventListener('did-start-loading', function () {
                $this.loading = true;
                console.log('hi');
            });
            webview.addEventListener('did-stop-loading', function () {
                $this.loading = false;
            });
        }

        if (this.appActive && this.activeApp !== app.name) {
            localStorage.setItem(this.activeApp, webview.getURL());
            this.appUrl = (localStorage.getItem(app.name) === null) ? app.url : localStorage.getItem(app.name);
            this.activeApp = app.name;
            return true;
        }

        this.appUrl = (localStorage.getItem(app.name) === null) ? app.url : localStorage.getItem(app.name);

        console.log(webview);

        return;
    };
}