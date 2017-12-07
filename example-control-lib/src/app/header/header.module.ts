import { TranslateModule } from '@ngx-translate/core';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { HeaderSandboxService } from './header-sandbox.service';
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import { HeaderButtonComponent } from '../header-button/header-button/header-button.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule
  ],
  declarations: [
    HeaderComponent,
    HeaderButtonComponent
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule {

  /**
   * This constructor is only present to validate at runtime that we only
   * import this module from the root (AppModule) module, and no other.
   */
  constructor( @Optional() @SkipSelf() parentModule: HeaderModule) {
    if (parentModule) {
      throw new Error(
        'HeaderModule is already loaded. Import it in the AppModule only');
    }
  }

  /**
   * Called by the root (AppModule) module to add our services to root injectors list
   * of providers.
   */
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: HeaderModule,
      providers: [
        { provide: HeaderSandboxService, useClass: HeaderSandboxService },
      ]
    };
  }
}
