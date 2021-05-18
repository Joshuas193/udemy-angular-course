import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css']
  styles: [`
    h3 {
      color: dodgerblue;
      margin: 8px 0;
    }
  `]
})
export class AppComponent {
  name = 'Josh';
}
