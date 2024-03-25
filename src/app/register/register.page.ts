import { Component, OnInit, importProvidersFrom } from '@angular/core';

import {
  FormGroup,
  Validator,
  FormBuilder,
  Form,
  Validators,
  FormControl,
} from '@angular/forms';


import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})

export class RegisterPage implements OnInit {
  formularioRegister: FormGroup;


  //Librerias
  constructor(public fb: FormBuilder, public alertController: AlertController, private router: Router) {
    //Constructor de las variables
    this.formularioRegister = this.fb.group({
      nombre: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
    });
  }


  ngOnInit() { }

  async guardar() {
    var A = this.formularioRegister.value;
    if (this.formularioRegister.invalid) {
      const alert = await this.alertController.create({
        header: 'Error',
        subHeader: 'Mensaje Importante',
        message: 'Debe de llenar los campos',
        buttons: ['Ok'],
      });

      await alert.present();
      return;

    } else {
      this.router.navigate(['/login'])
      const alert = await this.alertController.create({
        header: 'Registro Completado',
        subHeader: 'Ahora con los datos ingresados inicia Sesion',
        buttons: ['Ok']
      });

      var usuario = {
        nombre: A.nombre,
        password: A.password,
      };
      localStorage.setItem('usuario', JSON.stringify(usuario));

      await alert.present();
      return;
    }


  }

}


