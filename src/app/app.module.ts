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
import { StoreModule } from '@ngrx/store';
import { CounterTestComponent } from './counter-test/counter-test.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment'; // Angular CLI environment
import { reducers, metaReducers } from '../app/store/hydration/';
import { ActionTypes } from './store/store.actions';
import { AnfragenComponent } from './anfragen/anfragen.component';
import { RegistrierungComponent } from './registrierung/registrierung.component';
import { UpdateComponent } from './update/update.component';
import { ListComponent } from './list/list.component';
import "reflect-metadata"



const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "index", component: IndexComponent },
  { path: "nav", component: NavbarComponent },
  { path: "erfolreich", component: ErfolgreichComponent },
  { path: "login", component: LoginComponent },
  { path: "logout", component: LogoutComponent },
  { path: "counter-test", component: CounterTestComponent },
  { path: "anfragen", component: AnfragenComponent },
  { path: "registrierung", component: RegistrierungComponent },
  { path: "liste", component: ListComponent },
  { path: "update", component: UpdateComponent },
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
    CounterTestComponent,
    AnfragenComponent,
    RegistrierungComponent,
    UpdateComponent,
    ListComponent,
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
    ReactiveFormsModule,
    BrowserModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: false, // Restrict extension to log-only mode
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
    }),

  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
