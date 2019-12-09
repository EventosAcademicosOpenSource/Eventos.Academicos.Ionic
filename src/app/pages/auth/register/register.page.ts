import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { HttpService } from 'src/app/services/http.service';
import { NgForm } from '@angular/forms';
import { AlertService } from 'src/app/services/alert.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  public errors: any = {
    email: '',
    confirmPassword: '',
  };
  isenabled = true;
  constructor(
    private modalController: ModalController,
    private authService: HttpService,
    private navCtrl: NavController,
    private alertService: AlertService
  ) {}
  ngOnInit() {}

  dismissRegister() {
    this.modalController.dismiss();
  }
  register(form: NgForm) {
    this.isenabled = false;
    this.alertService.presentToastBottom('Realizando registro...');
    this.errors = {
      email: '',
      confirmPassword: '',
    };
    this.authService
      .register(
        form.value.fName,
        form.value.confirmPassword,
        form.value.email,
        form.value.password
      )
      .subscribe(
        data => {
          this.dismissRegister();
          this.alertService.presentToastBottom('Cadastro ok!');
        },
        error => {
          this.isenabled = true;
          this.errors = error.error;
        },
        () => {}
      );
  }
  isEmptyObject(object) {
    if (typeof object === 'undefined') {
      return false;
    }
    return !(Object.keys(object).length === 0);
  }
}
