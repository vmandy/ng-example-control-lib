import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import { TranslateModule } from '@ngx-translate/core';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer.component';
import { FooterSandboxService } from './footer-sandbox.service';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule
  ],
  declarations: [FooterComponent],
  exports: [FooterComponent]
})
export class FooterModule {
  /**
   * This constructor is only present to validate at runtime that we only
   * import this module from the root (AppModule) module, and no other.
   */
  constructor( @Optional() @SkipSelf() parentModule: FooterModule) {
    if (parentModule) {
      throw new Error(
        'FooterModule is already loaded. Import it in the AppModule only');
    }
  }

  /**
   * Called by the root (AppModule) module to add our services to root injectors list
   * of providers.
   */
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: FooterModule,
      providers: [
        { provide: FooterSandboxService, useClass: FooterSandboxService },
      ]
    };
  }
}
