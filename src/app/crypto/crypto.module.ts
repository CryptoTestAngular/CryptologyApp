import {NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import { CryptoComponent } from './crypto.component';

@NgModule({
    imports : [BrowserModule,FormsModule],
    declarations:[CryptoComponent],
    exports:[CryptoComponent]
})

export class CryptoModule{

}