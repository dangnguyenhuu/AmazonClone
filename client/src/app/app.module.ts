import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import {FormsModule} from '@angular/forms';
import { RegistrationComponent } from './registration/registration.component';
import { MessageComponent } from './message/message.component';
import { LoginComponent } from './login/login.component';
import {RestApiService} from './rest-api.service';
import {DataService} from './data.service';
import {AuthGuardService} from './auth-guard.service';
import {HttpClientModule} from '@angular/common/http';
import { ProfileComponent } from './profile/profile.component';
import { SettingComponent } from './setting/setting.component';
import { AddressComponent } from './address/address.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegistrationComponent,
    MessageComponent,
    LoginComponent,
    ProfileComponent,
    SettingComponent,
    AddressComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    FormsModule,
    HttpClientModule
  ],
  providers: [RestApiService, DataService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
