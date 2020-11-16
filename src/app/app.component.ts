import {Component} from '@angular/core';
import {AutoLogoutService} from './configs/session/auto-logout.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private autoLogoutService: AutoLogoutService) {}
}
