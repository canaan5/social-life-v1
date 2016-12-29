import {Component} from '@angular/core';

@Component({
    selector: 'social-life',
    templateUrl: `./dist/template/application.html`
})
export class AppComponent {

    appActive:boolean = false;

    activeApp:string = '';

    appUrl:string = 'http://www.google.com';

    activatedApps:any[] = [];


    apps:any[] = [
        {'name': 'Facebook', 'icon': 'fb.png', 'url': 'https://www.facebook.com'},
        {'name': 'Twitter', 'icon': 'twitter.png', 'url': 'https://www.twitter.com'},
        {'name': 'Youtube', 'icon': 'youtube.png', 'url': 'https://www.youtube.com'},
        {'name': 'Linkedin', 'icon': 'linkedin.png', 'url': 'https://www.linkedin.com'},
        {'name': 'Pinterest', 'icon': 'pinterest.png', 'url': 'https://www.pinterest.com'},
        {'name': 'Google-plus', 'icon': 'google-plus.png', 'url': 'https://plus.google.com'},
        {'name': 'Tumblr', 'icon': 'tumblr.png', 'url': 'https://www.tumblr.com'},
        {'name': 'Instagram', 'icon': 'instagram.png', 'url': 'https://www.instagram.com'},
        {'name': 'Reddit', 'icon': 'reddit.png', 'url': 'https://www.reddit.com'},
        {'name': 'VK', 'icon': 'vk.png', 'url': 'https://vk.com'},
        {'name': 'flickr', 'icon': 'flickr.png', 'url': 'https://www.flickr.com'},
        {'name': 'vine', 'icon': 'vine.png', 'url': 'https://vine.co'},
        {'name': 'meetup', 'icon': 'meetup.png', 'url': 'https://www.meetup.com'},
        {'name': 'ask-fm', 'icon': 'ask-fm.png', 'url': 'http://ask.fm'},
        {'name': 'classmates', 'icon': 'classmates.png', 'url': 'http://www.classmates.com'},
    ];

    openApp(app) {

        let webview = document.getElementById('app-view');

        if ( this.appActive && this.activeApp != app.name) {
            localStorage.setItem(this.activeApp, webview.getURL());

            this.appUrl = (localStorage.getItem(app.name) === null) ? app.url : localStorage.getItem(app.name);
            this.activeApp = app.name;
            this.appActive = true;
            return true;
        }

        this.appUrl = (localStorage.getItem(app.name) === null) ? app.url : localStorage.getItem(app.name);
        this.activeApp = app.name;
        this.appActive = true;
    }
}
