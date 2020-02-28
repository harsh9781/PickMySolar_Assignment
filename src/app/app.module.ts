import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{HttpClientModule} from  '@angular/common/http'
import{FormsModule,ReactiveFormsModule} from '@angular/forms';
import{RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import{Innerpage1Component} from './innerpage1/innerpage1.component';
import { Innerpage2Component } from './innerpage2/innerpage2.component';
import { SortPipe } from './sort.pipe';
import { SearchPipe } from './search.pipe';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component'
import {AbcdGuard}         from       './abcd.Guard';
import {PqrsGuard}  from './pqrs.Guard';

@NgModule({
  declarations: [
    AppComponent,
    Innerpage1Component,
    Innerpage2Component,
    SortPipe,
    SearchPipe,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([

      {
        path:'innerpage1',
        component:Innerpage1Component,
        canActivate:[PqrsGuard]
      },
      { 
        path:'innerpage2',
        component:Innerpage2Component,
        canActivate:[PqrsGuard]

      },
      { 
        path:'login',
        component:LoginComponent
      },
      { 
        path:'signup',
        component:SignupComponent
      },
    ])
  ],
  providers: [AbcdGuard,PqrsGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
