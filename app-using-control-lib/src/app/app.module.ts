import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HeaderModule, FooterModule } from '@metrino/example-control-lib';
import { AppComponent } from './app.component';
import { TranslateModule } from '@ngx-translate/core';
import { SomethingService } from './something.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TranslateModule.forRoot(),
    HeaderModule.forRoot(),
    FooterModule.forRoot()
  ],
  providers: [SomethingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
