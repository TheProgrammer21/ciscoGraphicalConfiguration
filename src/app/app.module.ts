import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GeneralConfigurationComponent } from './general-configuration/general-configuration.component';
import { InterfaceConfigurationComponent } from './interface-configuration/interface-configuration.component';
import { CollapsableComponent } from './collapsable/collapsable.component';
import { InterfaceSettingsComponent } from './interface-settings/interface-settings.component';

@NgModule({
  declarations: [
    AppComponent,
    GeneralConfigurationComponent,
    InterfaceConfigurationComponent,
    CollapsableComponent,
    InterfaceSettingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
