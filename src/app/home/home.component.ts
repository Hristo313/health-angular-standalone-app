import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IGX_LIST_DIRECTIVES, IgxIconButtonDirective, IgxIconComponent, IgxOverlayOutletDirective, IgxRippleDirective, IgxToggleActionDirective, IgxToggleDirective } from '@infragistics/igniteui-angular';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [IGX_LIST_DIRECTIVES, IgxIconButtonDirective, IgxToggleActionDirective, IgxOverlayOutletDirective, IgxIconComponent, IgxRippleDirective, IgxToggleDirective, RouterLink],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {}
