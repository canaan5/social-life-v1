import { Component } from '@angular/core';

@Component({
  selector: 'social-life',
  templateUrl: `./dist/template/application.html`,
})
export class AppComponent
{
  apps: any[] = [
      {'name': 'Facebook', 'icon': 'fb.png'},
      {'name': 'Twitter', 'icon': 'twitter.png'},
      {'name': 'Youtube', 'icon': 'youtube.png'},
      {'name': 'Linkedin', 'icon': 'linkedin.png'},
      {'name': 'Pinterest', 'icon': 'pinterest.png'},
      {'name': 'Google-plus', 'icon': 'google-plus.png'},
      {'name': 'Tumblr', 'icon': 'tumblr.png'},
      {'name': 'Instagram', 'icon': 'instagram.png'},
      {'name': 'Reddit', 'icon': 'reddit.png'},
      {'name': 'VK', 'icon': 'vk.png'},
      {'name': 'flickr', 'icon': 'flickr.png'},
      {'name': 'vine', 'icon': 'vine.png'},
      {'name': 'meetup', 'icon': 'meetup.png'},
      {'name': 'ask-fm', 'icon': 'ask-fm.png'},
      {'name': 'classmates', 'icon': 'classmates.png'},
  ];

    openApp(name)
    {
        switch (name)
        {
            case "Facebook":
                alert('hello facebook');
                break;

            default:
                break;
        }
    }
}
