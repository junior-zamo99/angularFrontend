import { Component } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { Router } from '@angular/router';

declare var toastr:any
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {


  public usuario:any={
    username:'',
    pass:''
  }
  token: any;
  
  constructor(
    private _usuarioServices: UsuarioService,
    private _router: Router
  ){}

  ngOnInit(){

  }

  login() {
    if (!this.usuario.username) {
      toastr.error('El campo Registro es requerido');
    } else if (!this.usuario.pass) {
      toastr.error('El campo password es requerido');
    } else {
      console.log(this.usuario);
      this._usuarioServices.login(this.usuario).subscribe(
        response => {
          console.log(response);
          localStorage.setItem('token', response.access_token);
          localStorage.setItem('user', JSON.stringify(response.user));
     
          toastr.success('Inicio de sesión exitoso');
          this._router.navigate(['/dashboard']);
          
        },
        error => {
          toastr.error('Ocurrió un error al intentar iniciar sesión');
          console.error(error);
        }
      );
    }
  }
}
