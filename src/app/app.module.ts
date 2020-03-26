import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreRouterConnectingModule, routerReducer, RouterStateSerializer } from '@ngrx/router-store';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { AppMaterialModule } from './app.material.module';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './entities/dashboard/dashboard.component';

import { AuthenticationEffects } from './../store/effects/authentication.effects';
import { AuthenticationReducer } from '../store/reducers/authentication.reducer';
import { CustomSerializer } from 'src/store/reducers/routerCustomSerializer';
import { PortalquestionsComponent } from './entities/portalquestions/portalquestions.component';
import { HeaderComponent } from './components/header/header.component';
import { SidenavbarComponent } from './components/sidenavbar/sidenavbar.component';
import { PortalquestionsService } from 'src/services/portalquestions.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    PortalquestionsComponent,
    HeaderComponent,
    SidenavbarComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    AppMaterialModule,
    HttpClientModule,
    StoreModule.forRoot({
      router: routerReducer,
      authentication: AuthenticationReducer
    }),
    StoreRouterConnectingModule.forRoot(),
    // StoreRouterConnectingModule,
    EffectsModule.forRoot([AuthenticationEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  providers: [{ provide: RouterStateSerializer, useClass: CustomSerializer }, PortalquestionsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
