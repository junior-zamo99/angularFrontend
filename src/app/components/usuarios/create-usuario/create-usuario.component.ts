import { Component } from '@angular/core';
import { UsuarioService } from '../../../services/usuario.service';
import { Router } from '@angular/router';


declare var toastr:any
@Component({
  selector: 'app-create-usuario',
  templateUrl: './create-usuario.component.html',
  styleUrl: './create-usuario.component.css'
})
export class CreateUsuarioComponent {
  public usuario:any={}

  public token=localStorage.getItem('token')
  public btn_load=false
  constructor(
    private _usuarioService: UsuarioService,
    private _router:Router
  ){}

  ngOnIit(){}

  registrar(){
   
    if(!this.usuario.nombres){
      toastr.error("los nombre son requeridos")
    }else  if(!this.usuario.apellidos){
      toastr.error("los apellidos son requeridos")
    } else  if(!this.usuario.email){
      toastr.error("el correo electronico es requeridos")
    }else  if(!this.usuario.rol){
      toastr.error("el rol es requeridos")
    }else{
      this.btn_load=true
      this._usuarioService.createUsuario(this.usuario,this.token).subscribe(
        response=>{
          if(response.data != undefined){
            console.log(response)
            this.btn_load=false
            this._router.navigate(['/colaborador']) 
          }else{
            toastr.error(response.message)
          }
        },
        error=>{
          console.log(error)
          this.btn_load=false
        }
      )
    }
  }
}
