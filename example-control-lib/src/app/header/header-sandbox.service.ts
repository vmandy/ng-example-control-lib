import { Injectable, InjectionToken } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ReplaySubject } from 'rxjs/ReplaySubject';

/*
 * This interface defines the properties and methods to be used
 * internally by the HeaderComponent to observe state and data changes
 * as well as perform operations.
 */
export interface HeaderSandbox {
  lang$: Observable<string>;
  performOperation(): Promise<void>;
}

/*
 * This interface defines the methods to be used externally by the
 * host application to provide state and data as well as implement
 * operations.
 */
export interface HeaderSandboxSource {
  setLanguage(lang: string): void;
  addOperationImpl(operation: () => Promise<void>): void;
}

export let HeaderSandboxToken: InjectionToken<HeaderSandboxService> = new InjectionToken<HeaderSandboxService>('HeaderSandboxService');

@Injectable()
export class HeaderSandboxService implements HeaderSandbox, HeaderSandboxSource {

  private currentLang: ReplaySubject<string>;
  private operationImpl: () => Promise<void>;

  constructor() {
    this.currentLang = new ReplaySubject<string>(1);
  }

  /*
   * The following Observable properties are meant to be used
   * internally by the HeaderComponent to know when state or data has changed.
   *
   */

  public get lang$(): Observable<string> {
    return this.currentLang.asObservable();
  }

  /*
   * The following methods are meant to be used
   * internally by the HeaderComponent to perform operations.
   *
   */

  public performOperation(): Promise<void> {
    if (this.operationImpl) {
      return this.operationImpl();
    }

    return Promise.reject('Not Implemented !!!');
  }

  /*
   * The following methods are meant to be called by external
   * users of the 'HeaderModule' to update state and data.
   *
   */

  public setLanguage(lang: string): void {
    this.currentLang.next(lang);
  }

  /*
   * The following methods are meant to be called by external
   * users of the 'HeaderModule' to provide operation implementations.
   *
   */

  public addOperationImpl(operation: () => Promise<void>): void {
    this.operationImpl = operation;
  }
}
