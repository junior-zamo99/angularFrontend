import { Component } from '@angular/core';
import { UsuarioService } from '../../../services/usuario.service';
import { ActivatedRoute, Router,Params } from '@angular/router';



declare var $: any;
@Component({
  selector: 'app-index-usuario',
  templateUrl: './index-usuario.component.html',
  styleUrls: ['./index-usuario.component.css']
})
export class IndexUsuarioComponent  {


    public token = localStorage.getItem('token');
    public user = JSON.parse(localStorage.getItem('user') || '{}');
    public rolId =''

  public funcionalidades:any=[]
    public usuarios: Array<any> = [];
    public page=1
    public pageSize=3
    public btn_state_load=false
    public load_data=true

   constructor(private _usuarioService: UsuarioService,
    
    private _router:Router,
    private _route:ActivatedRoute
   ) {}

   ngOnInit(){
 
      this.init_data()   
  }

   

    
 

   init_data() {
    
    
    this.load_data=true
    console.log(this.token)
    this._usuarioService.getUsuarios( this.token).subscribe(
      ( response: any[]) => {
       console.log(response)
        this.usuarios = response;
        this.load_data=false
      }
    );
   }

  

}
