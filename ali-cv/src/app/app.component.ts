import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ali-cv';
  value1: string;
  value2: string;

  redesSociales: [{
    nombre: string,
    url: string
  }];


}

