import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { IGX_NAVBAR_DIRECTIVES, IGX_NAVIGATION_DRAWER_DIRECTIVES, IGX_STEPPER_DIRECTIVES, IgxAvatarComponent, IgxButtonDirective, IgxIconButtonDirective, IgxIconComponent, IgxOverlayOutletDirective, IgxRippleDirective, IgxToggleActionDirective, IgxToggleDirective } from '@infragistics/igniteui-angular';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [IGX_NAVIGATION_DRAWER_DIRECTIVES, IGX_STEPPER_DIRECTIVES, IGX_NAVBAR_DIRECTIVES, IgxIconButtonDirective, IgxToggleActionDirective, IgxOverlayOutletDirective, IgxAvatarComponent, IgxRippleDirective, IgxToggleDirective, IgxIconComponent, IgxButtonDirective, RouterLink, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {}
