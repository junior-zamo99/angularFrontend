import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GLOBAL } from './GLOBAL';
import { JwtHelperService } from '@auth0/angular-jwt';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  public url=GLOBAL.url
  constructor(
    private  _http: HttpClient
  ) {}

  createUsuario(data:any):Observable<any>{
    
    
    return this._http.post(this.url+'/users',data)

  }

  getUsuarios(token:any):Observable<any>{
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}` 
    });
    return this._http.get(this.url+'/users/',{headers:headers})
  }

  getRols(token:any):Observable<any>{
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}` 
    });
    return this._http.get(this.url+'/rol/',{headers:headers})
  }

  login(data:any):Observable<any>{
    let headers= new HttpHeaders().set('Content-Type','application/json')
    console.log(this.url+'auth/login')
    return this._http.post(this.url+'/auth/login',data,{headers:headers})
  }

  
 
  
  
  EstaAutenticado(){
    try {
      if (typeof localStorage !== 'undefined') {
        const token:any = localStorage.getItem('token');
        const helper= new JwtHelperService();
        const decode=helper.decodeToken(token);
    
        console.log(decode);
        if(!token){
          localStorage.clear();
          return false;
        }
        if(!decode || decode ==undefined){
          localStorage.clear();
          return false;
        }
    
        if(helper.isTokenExpired(token)){
          localStorage.clear();
          return false;
        }
      } else {
        return false;
      }
    } catch (error) {
      localStorage.clear();
      return false;
    }
    return true;
  }
}
