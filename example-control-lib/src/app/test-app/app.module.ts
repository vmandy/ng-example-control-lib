import { FooterModule } from './../footer/footer.module';
import { TranslateModule } from '@ngx-translate/core';
import { HeaderModule } from './../header/header.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
