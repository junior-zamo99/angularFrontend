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
  public roles:any=[]
  constructor(
    private _usuarioService: UsuarioService,
    private _router:Router,
  ){}

  ngOnInit(){

    this._usuarioService.getRols(this.token).subscribe(
      response=>{
        console.log(response)
        this.roles=response
      },
      error=>{
        console.log(error)
      })

  }


 


  registrar(){
   
    this.usuario.contraseña=this.usuario.password
    console.log(this.usuario)

    if(!this.usuario.nombre){
      toastr.error("los nombre son requeridos")
    }else if(!this.usuario.username){
      toastr.error("el nombre de usuario es requeridos")
    } else  if(!this.usuario.email){
      toastr.error("el correo electronico es requeridos")
    }else  if(!this.usuario.id_Rol){
      toastr.error("el rol es requeridos")
    }
    else if(!this.usuario.contraseña){
      toastr.error("la contraseña es requerida")
    }
    else if(!this.usuario.fechaNacimiento){
      toastr.error("la fecha de nacimiento es requerida")
    }
    else{
      console.log(this.usuario)
      this.btn_load=true
      this._usuarioService.createUsuario(this.usuario).subscribe(
        response=>{
          if(response != undefined){
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
