import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { IndexUsuarioComponent } from './components/usuarios/index-usuario/index-usuario.component';
import { CreateUsuarioComponent } from './components/usuarios/create-usuario/create-usuario.component';
import { EditUsuarioComponent } from './components/usuarios/edit-usuario/edit-usuario.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http'; // Importa HttpClient en lugar de provideHttpClient y withFetch
import { LoginComponent } from './components/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    TopbarComponent,
    DashboardComponent,
    IndexUsuarioComponent,
    CreateUsuarioComponent,
    EditUsuarioComponent,
    LoginComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbPaginationModule
  ],
  providers: [
    provideClientHydration(),
    { provide: HttpClient, useClass: HttpClient } // Usa HttpClient directamente y proporciona la clase HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
