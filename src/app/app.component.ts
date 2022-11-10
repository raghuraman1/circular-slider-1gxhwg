import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <circular-slider [diameter]="diameter" [(angle)]="angle" ></circular-slider>
  `,
})
export class AppComponent  {
  diameter = 150;
  angle = 45;

}
