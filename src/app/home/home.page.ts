import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import * as CordovaSQLiteDriver from 'localforage-cordovasqlitedriver';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  constructor(private storage: Storage, private store2: Storage) {}
  anyValue: any;
  getVal: any;

  anyValue2: any;
  getVal2: any;
  async ngOnInit() {
    this.storage = new Storage({
      name: 'myDB',
      storeName: 'table1',
    });
    await this.storage.defineDriver(CordovaSQLiteDriver);
    await this.storage.create();

    this.store2 = new Storage({
      name: 'myDB',
      storeName: 'table2',
    });
    await this.store2.defineDriver(CordovaSQLiteDriver);
    await this.store2.create();

    const filePath = await this.storage.driver;

  }

  async saveValueTabl1() {
    await this.storage.set('testKey1', this.anyValue);
    await this.storage.set('testKey2', this.anyValue);
    await this.storage.set('testKey3', this.anyValue);
  }

  async getValue() {
    this.getVal = await this.storage.get('testKey1');
    let results = await this.storage.keys();
    console.log(results);
  }

  async saveValueTabl2() {
    await this.store2.set('testKey1', this.anyValue2);
  }

  async getValue2() {
    this.getVal2 = await this.store2.get('testKey1');
    let results = await this.store2.keys();
    console.log(results);
  }
}
