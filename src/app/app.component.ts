import { Component } from '@angular/core';
import { FILES } from './const/files.const';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  readonly files = FILES;
}
