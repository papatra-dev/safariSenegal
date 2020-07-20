import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {IgxCardModule} from 'igniteui-angular';
import {IgxIconModule} from "igniteui-angular";
import {IgxDropDownModule} from "igniteui-angular";
import { FooterComponent } from './footer/footer.component';
import {ConnectionService} from "./connection.service";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
    IgxCardModule,
    IgxIconModule,
    IgxDropDownModule,
    ReactiveFormsModule,


  ],
  providers: [ConnectionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
