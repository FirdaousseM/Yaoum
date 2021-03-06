import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { Router, RouterModule, Routes } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


import { AppComponent } from './app.component';
import { ProgrammeComponent } from './programme/programme.component';
import { ModulesComponent } from './modules/modules.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AppRoutingModule } from './app-routing-module';
import { AccueilComponent } from './accueil/accueil.component';
import { SingleModuleComponent } from './single-module/single-module.component';
import { CreateModuleComponent } from './create-module/create-module.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditModuleComponent } from './edit-module/edit-module.component';
import { EditChapitreComponent } from './edit-chapitre/edit-chapitre.component';
import { CreateChapitreComponent } from './create-chapitre/create-chapitre.component';
import { SingleProgrammeComponent } from './single-programme/single-programme.component';
import { CreateProgrammeComponent } from './create-programme/create-programme.component';
import { EditProgrammeComponent } from './edit-programme/edit-programme.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { EditAccountComponent } from './edit-account/edit-account.component';
import { AccountComponent } from './account/account.component';
import { AuthInterceptor } from './authentication/auth.interceptor';
import { NavbarAccountComponent } from './navbar-account/navbar-account.component';




@NgModule({
  declarations: [
    AppComponent,
    ProgrammeComponent,
    ModulesComponent,
    NavbarComponent,
    AccueilComponent,
    SingleModuleComponent,
    CreateModuleComponent,
    EditModuleComponent,
    EditChapitreComponent,
    CreateChapitreComponent,
    SingleProgrammeComponent,
    CreateProgrammeComponent,
    EditProgrammeComponent,
    ConnexionComponent,
    InscriptionComponent,
    EditAccountComponent,
    AccountComponent,
    NavbarAccountComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,

  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
