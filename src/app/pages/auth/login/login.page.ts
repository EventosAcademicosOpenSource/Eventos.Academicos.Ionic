import { Component, OnInit } from '@angular/core';
import { ModalController, MenuController, NavController } from '@ionic/angular';
import { RegisterPage } from '../register/register.page';
import { NgForm } from '@angular/forms';
import { AlertService } from 'src/app/services/alert.service';
import { LaravelPassportService } from 'laravel-passport';
import { FCM } from '@ionic-native/fcm/ngx';
import { HttpService } from 'src/app/services/http.service';
@Component({
  templateUrl: './login.page.html',
})
export class LoginPage implements OnInit {
  isenabled = true;
  constructor(
    private modalController: ModalController,
    private menu: MenuController,
    private navCtrl: NavController,
    private alertService: AlertService,
    private laravelPassport: LaravelPassportService,
    private fcm: FCM,
    private api: HttpService
  ) {
    this.menu.enable(false);
  }
  ngOnInit() {}
  async registerModal() {
    const registerModal = await this.modalController.create({
      component: RegisterPage,
    });
    return await registerModal.present();
  }
  login(form: NgForm) {
    this.alertService.presentToastBottom('Logando...');
    this.isenabled = false;
    this.laravelPassport
      .loginWithEmailAndPassword(form.value.email, form.value.password)
      .subscribe(
        res => {
          this.setTokenFire();
        },
        () => {
          this.alertService.presentToastBottom('Erro ao logar');
          this.isenabled = true;
        },
        () => {
          this.navCtrl.navigateRoot('/');
        }
      );
  }
  setTokenFire() {
    this.fcm.getToken().then(tokenNotification => {
      this.api.postFirebaseBackend(tokenNotification).subscribe(
        s => {
          console.log(s);
        },
        err => {
          console.log(err);
        }
      );
    });
  }
}
