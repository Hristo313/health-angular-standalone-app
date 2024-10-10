import { Component } from '@angular/core';
import { IGX_DIALOG_DIRECTIVES, IGX_LIST_DIRECTIVES, IgxAvatarComponent, IgxButtonDirective, IgxIconButtonDirective, IgxIconComponent, IgxOverlayOutletDirective, IgxRippleDirective, IgxToggleActionDirective, IgxToggleDirective } from '@infragistics/igniteui-angular';

@Component({
  selector: 'app-appointments',
  standalone: true,
  imports: [IGX_DIALOG_DIRECTIVES, IGX_LIST_DIRECTIVES, IgxIconButtonDirective, IgxToggleActionDirective, IgxOverlayOutletDirective, IgxRippleDirective, IgxToggleDirective, IgxIconComponent, IgxAvatarComponent, IgxButtonDirective],
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.scss']
})
export class AppointmentsComponent {}
