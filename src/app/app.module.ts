import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// PRIMENG MODULES
import {CheckboxModule} from 'primeng/checkbox';
import {ChartModule} from 'primeng/chart';
import {InputTextareaModule} from 'primeng/inputtextarea';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/main/home/home.component';
import { MainComponent } from './components/main/main.component';
import { HeaderComponent } from './components/main/header/header.component';
import { StartSessionComponent } from './components/start-session/start-session.component';
import { LogInComponent } from './components/start-session/log-in/log-in.component';
import { SignUpComponent } from './components/start-session/sign-up/sign-up.component';
import { DialogComponent } from './components/dialog/dialog.component';

import { TokenInterceptor } from './services/token.interceptor';
import { VotationModule } from './components/votation/votation.module';

// ATOMS
import { AtomsModule } from './atoms/atoms.module'

// MOLECULES
import { MoleculesModule } from './molecules/molecules.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MainComponent,
    HeaderComponent,

    // MOLECULES
    StartSessionComponent,
    LogInComponent,
    SignUpComponent,
    DialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CheckboxModule,

    // SUBMODULES
    AtomsModule,
    MoleculesModule,
    VotationModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
