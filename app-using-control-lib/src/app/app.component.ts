import { Component, Inject } from '@angular/core';
import { SomethingService } from './something.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor( @Inject(SomethingService) private something: SomethingService) { }

  public onLangChange(newLang: string) {
    this.something.setCurrentLang(newLang);
  }
}
