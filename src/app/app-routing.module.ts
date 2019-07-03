import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GeneralConfigurationComponent } from './general-configuration/general-configuration.component';
import { InterfaceConfigurationComponent } from './interface-configuration/interface-configuration.component';

const routes: Routes = [
  {path: 'general', component: GeneralConfigurationComponent},
  {path: 'interfaces', component: InterfaceConfigurationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
