import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule } from '@angular/common/http';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { IonicImageLoader } from 'ionic-image-loader';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { LaravelPassportModule } from 'laravel-passport';
import { EnvService } from './services/env.service';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { AppUpdate } from '@ionic-native/app-update/ngx';
import { FCM } from '@ionic-native/fcm/ngx';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    IonicImageLoader.forRoot(),
    LaravelPassportModule.forRoot({
      apiRoot: EnvService.API_URL,
      clientId: EnvService.ClientId,
      clientSecret: EnvService.ClientSecret,
    }),
  ],
  providers: [
    StatusBar,
    SplashScreen,
    NativeStorage,
    WebView,
    InAppBrowser,
    AppUpdate,
    FCM,
    LocalNotifications,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
