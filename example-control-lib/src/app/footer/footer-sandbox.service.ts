import { ReplaySubject } from 'rxjs/ReplaySubject';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class FooterSandboxService {

  private currentLang: ReplaySubject<string>;

  constructor() {
    this.currentLang = new ReplaySubject<string>(1);
  }

  /*
   * The following Observable properties are meant to be used
   * internally by the HeaderComponent to know when data has changed.
   *
   */

  public get lang$(): Observable<string> {
    return this.currentLang.asObservable();
  }

  /*
   * The following methods are meant to be called by external
   * users of the 'HeaderModule'.
   *
   */

  public setLanguage(lang: string) {
    this.currentLang.next(lang);
  }

}
