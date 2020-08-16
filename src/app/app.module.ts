import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CryptoModule } from './crypto/crypto.module';
import { HttpClientModule } from '@angular/common/http';
import { RestService } from './crypto/rest.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,CryptoModule,HttpClientModule 
  ],
  providers: [RestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
