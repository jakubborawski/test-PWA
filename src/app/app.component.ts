import { Component } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor( private swUpdate: SwUpdate) {}

  ngOnInit() {
    // if (this.swUpdate.isEnabled) {
    //   this.swUpdate.versionUpdates.subscribe(() => {
    //     if(confirm("You're using an old version of the control panel. Want to update?")) {
    //       window.location.reload();
    //     }
    //   });
    // }
  }

  title = 'test-application';
}
