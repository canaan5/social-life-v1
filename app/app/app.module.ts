import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import {WebviewDirective} from './webview.directive';
import {ELECTRON_SCHEMA} from './electron-schema';

@NgModule({
    imports: [ BrowserModule ],
    declarations: [ AppComponent, WebviewDirective ],
    bootstrap: [ AppComponent ],
    schemas: [ ELECTRON_SCHEMA ]
})
export class AppModule {}