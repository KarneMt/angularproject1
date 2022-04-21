import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { IndexComponent } from './index/index.component'
import { OrderByPipe } from './shared/pipes/order-by/order-by.pipe';
import { SimpleOrderByPipe } from './shared/pipes/simpleOrderBy/simple-order-by.pipe';
import { NavbarComponent } from './navbar/navbar.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ErfolgreichComponent } from './erfolgreich/erfolgreich.component';
import { LoginComponent } from './login/login.component';
import { CookieService } from 'ngx-cookie-service';
import { LogoutComponent } from './logout/logout.component';
import { MenueComponent } from './menue/menue.component';




const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "index", component: IndexComponent },
  { path: "nav", component: NavbarComponent },
  { path: "erfolreich", component: ErfolgreichComponent },
  { path: "login", component: LoginComponent },
  { path: "logout", component: LogoutComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    IndexComponent,
    OrderByPipe,
    SimpleOrderByPipe,
    NavbarComponent,
    ErfolgreichComponent,
    LoginComponent,
    LogoutComponent,
    MenueComponent,
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatSliderModule,
    MatSidenavModule,
    MatIconModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
