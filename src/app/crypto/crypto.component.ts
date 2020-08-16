import { Component } from '@angular/core';
import { RestService } from './rest.service';
import { Crypto } from './crypto.model';

@Component({
    selector: 'crypto',
    templateUrl: 'crypto.component.html'
})
export class CryptoComponent {
    cryptos: Crypto[];
    getStringText: string[];
    sendStringText: string = "";
    space: string = "9";
    spacex: string = " ";
    getStringText2: string[];
    sendStringText2: string = "";
    mod:number=29;
    constructor(private restService: RestService) {
    }
    ngOnInit() {
        this.getLetters();
    }
    getLetters() {
        this.restService.getCryptos().subscribe(cryptos => this.cryptos = cryptos)
    }
    sifrele(deger: string[], key: number) {
        this.sendStringText = "";
        this.getStringText = deger;
        for (let i = 0; i < this.getStringText.length; i++) {
            var ilkdeger = this.getStringText[i];
            if (ilkdeger == " ") {
                this.sendStringText += this.space;
            }
            else if (ilkdeger) {
                for (let item of this.cryptos) {
                    if (ilkdeger == item.name) {
                        let letnumber: number;
                        letnumber = ((Number(item.id) + Number(key))%this.mod);
                        for (let item of this.cryptos) {
                            if (letnumber == Number(item.id)) {
                                this.sendStringText += item.name;
                            }
                        }
                    }
                }
            }
        }
    }

    sifrecoz(deger2: string[], key2: number) {
        this.sendStringText2 = "";
        this.getStringText2 = deger2;
        for (let i = 0; i < this.getStringText2.length; i++) {
            var ilkdeger = this.getStringText2[i];
            if (ilkdeger == "9") {
                this.sendStringText2 += this.spacex;
            }
            else if (ilkdeger) {
                for (let item of this.cryptos) {
                    if (ilkdeger == item.name) {
                        let letnumber: number;
                        letnumber = Number(((Number(item.id) - Number(key2))%Number(this.mod)));
                        
                        for (let item of this.cryptos) {
                            if (letnumber == Number(item.id)) {
                                this.sendStringText2 += item.name;
                            }

                        }
                    }
                }
            }
        }
    }
}


