import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GeneralConfigurationComponent } from './general-configuration/general-configuration.component';
import { InterfaceConfigurationComponent } from './interface-configuration/interface-configuration.component';
import { InterfaceSettingsComponent } from './interface-settings/interface-settings.component';
import { InterfaceSelectionComponent } from './interface-selection/interface-selection.component';
import { RoutingConfigurationComponent } from './routing-configuration/routing-configuration.component';
import { VlanConfigurationComponent } from './vlan-configuration/vlan-configuration.component';

const routes: Routes = [
  { path: 'general', component: GeneralConfigurationComponent },
  { path: 'interfaces', component: InterfaceConfigurationComponent },
  { path: 'interfaceSettings', component: InterfaceSettingsComponent },
  { path: 'interfaceSelection', component: InterfaceSelectionComponent },
  { path: 'routing', component: RoutingConfigurationComponent },
  { path: 'vlans', component: VlanConfigurationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
