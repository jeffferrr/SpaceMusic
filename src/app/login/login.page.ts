import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  formularioLogin: FormGroup;

  constructor(public fb: FormBuilder, public alertController: AlertController, private router: Router) {
    this.formularioLogin = this.fb.group({
      nombre: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }


  async ingresar() {
    var fr = this.formularioLogin.value;
    var usuario = JSON.parse(localStorage.getItem('usuario')!);
    if (usuario.nombre == fr.nombre && usuario.password == fr.password) {
      this.router.navigate(['/home'])
      const alert = await this.alertController.create({
        header: 'Bienvenido',
        subHeader: 'Inicio de Sesion Exitosa',
        buttons: ['Ok'],



      });

      await alert.present();
      return;

    } else {

      const alert = await this.alertController.create({
        header: 'Error',
        subHeader: 'Los datos ingresados son erroneos',
        buttons: ['Ok']
      });

      await alert.present();
      return;

    }
  }

    loggedIn: boolean = false;
    userRegistered: boolean = false;
  
    ngOnInit(): void {
      // Verificar si el usuario ya ha iniciado sesión
      const isLoggedIn = sessionStorage.getItem('isLoggedIn');
      if (isLoggedIn) {
        this.loggedIn = true;
        // Verificar si el usuario ya se ha registrado
        const isRegistered = sessionStorage.getItem('isRegistered');
        if (isRegistered) {
          this.userRegistered = true;
        }
      }
    }
  
    login(): void {
      // Aquí se realizaría la lógica para el inicio de sesión
      // Si el inicio de sesión es exitoso, se establece la variable loggedIn a true
      // y se guarda en la sesión del navegador
      this.loggedIn = true;
      sessionStorage.setItem('isLoggedIn', 'true');
    }
  
    logout(): void {
      // Aquí se realizaría la lógica para cerrar sesión
      // Se restablecen las variables loggedIn y userRegistered a false
      // y se eliminan de la sesión del navegador
      this.loggedIn = false;
      this.userRegistered = false;
      sessionStorage.removeItem('isLoggedIn');
      sessionStorage.removeItem('isRegistered');
    }
  
    register(): void {
      // Aquí se realizaría la lógica para registrar al usuario
      // Si el registro es exitoso, se establece la variable userRegistered a true
      // y se guarda en la sesión del navegador
      this.userRegistered = true;
      sessionStorage.setItem('isRegistered', 'true');
    }
  }


