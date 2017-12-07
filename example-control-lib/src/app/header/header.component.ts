import { HeaderSandboxService } from './header-sandbox.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TranslateEmbeddedConfigurer } from '@ngx-translate/embedded-loader';

import { translations } from '../../i18n';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'example-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: TranslateEmbeddedConfigurer.forComponent(translations)
})
export class HeaderComponent implements OnInit {

  constructor( @Inject(HeaderSandboxService) private sandbox: HeaderSandboxService,
               private translator: TranslateService) {
    this.translator.setDefaultLang('en');
  }

  ngOnInit() {
    this.sandbox.lang$.subscribe((lang: string) => {
      this.translator.use(lang);
    });
  }

  public onClick(): void {
    this.sandbox.performOperation().then(() => {
      console.log('operation completed successfully !!!');
    });
  }
}
