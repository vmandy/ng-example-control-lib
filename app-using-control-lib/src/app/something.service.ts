import { Injectable, Inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { FooterSandboxService, HeaderSandboxService } from '@metrino/example-control-lib';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SomethingService {
  private availableLanguages: Observable<string[]>;

  constructor( @Inject(TranslateService) private translator: TranslateService,
    @Inject(HeaderSandboxService) private headerSandbox: HeaderSandboxService,
    @Inject(FooterSandboxService) private footerSandbox: FooterSandboxService) {

    this.initAppTranslations();
    this.headerSandbox.addOperationImpl(() => new Promise<void>((resolve, reject) => {
      console.log('performing operation...');
      resolve();
    }));
  }

  public get availableLanguages$(): Observable<string[]> {
    return this.availableLanguages;
  }

  public setCurrentLang(lang: string) {
    this.translator.use(lang);
    this.headerSandbox.setLanguage(lang);
    this.footerSandbox.setLanguage(lang);
  }

  private initAppTranslations() {
    this.translator.setTranslation('en', {
      'random-text': 'Some random text...'
    });
    this.translator.setTranslation('fr', {
      'random-text': 'Du texte randome...'
    });

    this.availableLanguages = new BehaviorSubject<string[]>(this.translator.getLangs())
      .asObservable();

    this.translator.setDefaultLang('en');
  }
}
