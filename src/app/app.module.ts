import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CleanComponent } from './layout/clean/clean.component';
import { FooterComponent } from './layout/main/footer/footer.component';
import { HeaderComponent } from './layout/main/header/header.component';
import { MainComponent } from './layout/main/main.component';
import { MenuVerticalComponent } from './layout/main/menu/menu-vertical/menu-vertical.component';
import { MenuComponent } from './layout/main/menu/menu.component';
import { SideComponent } from './layout/main/side/side.component';
import { VerticalComponent } from './layout/main/vertical.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CleanComponent,
    VerticalComponent,
    MainComponent,
    FooterComponent,
    HeaderComponent,
    MenuComponent,
    MenuVerticalComponent,
    SideComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
