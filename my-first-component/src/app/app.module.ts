import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SuccessalertComponent } from './successalert/successalert.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { UsernameInpoutComponent } from './username-inpout/username-inpout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShowHideComponent } from './show-hide/show-hide.component';
import { DrivenFormComponent } from './driven-form/driven-form.component';
import { TemplateDrivenFormsComponent } from './template-driven-forms/template-driven-forms.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';

@NgModule({
  declarations: [
    AppComponent,
    SuccessalertComponent,
    WarningAlertComponent,
    UsernameInpoutComponent,
    ShowHideComponent,
    DrivenFormComponent,
    TemplateDrivenFormsComponent,
    ReactiveFormsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
