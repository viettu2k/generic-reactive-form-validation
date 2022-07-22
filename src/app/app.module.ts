import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./modules/login/login.component";
import { SignUpComponent } from "./modules/sign-up/sign-up.component";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [AppComponent, LoginComponent, SignUpComponent],
  imports: [CommonModule, BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
