import { Component } from '@angular/core';

import { TerminadosComponent } from './../terminados/terminados';
import { PendientesComponent } from './../pendientes/pendientes';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = PendientesComponent;
  tab2Root = TerminadosComponent;

  constructor() {

  }
}
