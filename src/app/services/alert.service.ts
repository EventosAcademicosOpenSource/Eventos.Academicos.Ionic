import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
@Injectable({
  providedIn: 'root',
})
export class AlertService {
  constructor(private toastController: ToastController) {}
  async presentToastBottom(message: any) {
    const toast = await this.toastController.create({
      message,
      duration: 2000,
      position: 'bottom',
      color: 'dark',
    });
    toast.present();
  }
  async presentToastMiddle(message: any) {
    const toast = await this.toastController.create({
      message,
      duration: 2000,
      position: 'middle',
      color: 'dark',
    });
    toast.present();
  }
  async presentToastTop(message: any) {
    const toast = await this.toastController.create({
      message,
      duration: 2000,
      position: 'top',
      color: 'dark',
      cssClass: 'ion-margin-top',
    });
    toast.present();
  }
}
