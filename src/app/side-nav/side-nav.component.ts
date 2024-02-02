import { Component } from '@angular/core';
import { faDashboard,faReorder } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.css'
})
export class SideNavComponent {
  faDashboard=faDashboard;
  faReorder=faReorder;

}
