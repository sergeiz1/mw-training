import {Injectable} from '@angular/core';
import {AuthService, RoutingService} from '@spartacus/core';
import {SessionConfig} from './session.config';
import {debounceTime} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AutoLogoutService {

  constructor(
    private routingService: RoutingService,
    private authService: AuthService,
    private config: SessionConfig) {

    if (this.config.session.autoLogout.enabled) {
      this.routingService.isNavigating().pipe(
        debounceTime(this.config.session.autoLogout.timeout)
      ).subscribe(
        _ => this.authService.logout()
      );
    }
  }
}
