import { EnvService } from './services/env.service';
import { Component } from '@angular/core';

import { Platform, NavController } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppUpdate } from '@ionic-native/app-update/ngx';
import { LaravelPassportService } from 'laravel-passport';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { FCM } from '@ionic-native/fcm/ngx';
import { Router, NavigationExtras } from '@angular/router';
import { HttpService } from './services/http.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/dashboard',
      icon: 'home',
    },
  ];

  constructor(
    private platform: Platform,
    private statusBar: StatusBar,
    private appUpdate: AppUpdate,
    private router: Router,
    private lpassport: LaravelPassportService,
    private nav: NavController,
    private localNotifications: LocalNotifications,
    private fcm: FCM,
    private api: HttpService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      const updateUrl = EnvService.API_URL_UPDATE_XML;
      this.appUpdate.checkAppUpdate(updateUrl).then(() => {
        console.log('Update available');
      });
      this.obterToken();
    });
  }
  logout() {
    this.api.postFirebaseBackend(null).subscribe(
      () => {},
      err => {
        console.log(err);
      },
      () => {}
    );
    this.lpassport.logout();
    this.nav.navigateRoot('/login');
  }
  obterToken() {
    this.fcm.onNotification().subscribe(
      data => {
        if (data.wasTapped) {
          this.router.navigate(['dashboard']);
        } else {
          this.msgm(data);
        }
      },
      err => {
        console.log(err);
      }
    );
  }

  msgm(data: any) {
    this.localNotifications.schedule({
      title: data.title,
      text: data.body,
    });
  }
}
