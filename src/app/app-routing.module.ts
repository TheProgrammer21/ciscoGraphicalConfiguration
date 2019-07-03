import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GeneralConfigurationComponent } from './general-configuration/general-configuration.component';
import { InterfaceConfigurationComponent } from './interface-configuration/interface-configuration.component';
import { InterfaceSettingsComponent } from './interface-settings/interface-settings.component';

const routes: Routes = [
  { path: 'general', component: GeneralConfigurationComponent },
  { path: 'interfaces', component: InterfaceConfigurationComponent },
  { path: 'interfaceSettings', component: InterfaceSettingsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
