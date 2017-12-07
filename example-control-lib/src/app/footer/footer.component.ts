import { FooterSandboxService } from './footer-sandbox.service';
import { TranslateService } from '@ngx-translate/core';
import { TranslateEmbeddedConfigurer } from '@ngx-translate/embedded-loader';
import { Component, OnInit, Inject } from '@angular/core';
import { translations } from '../../i18n';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'example-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  providers: TranslateEmbeddedConfigurer.forComponent(translations)
})
export class FooterComponent implements OnInit {

  constructor( @Inject(FooterSandboxService) private sandbox: FooterSandboxService,
               private translator: TranslateService) {
    translator.setDefaultLang('en');
  }

  ngOnInit() {
    this.sandbox.lang$.subscribe((lang: string) => {
      this.translator.use(lang);
    });
  }

}
