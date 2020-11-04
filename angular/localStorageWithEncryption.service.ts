import { Injectable } from '@angular/core';
import CryptoJS from 'crypto-js';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
/**
 * local storage service class
 * can be swapped with other local storage options like Redis
 */
export class LocalStorageService {
  /**
   * @constructor
   */
  constructor() { }

  /**
   * store in in localstorage
   * encruption enabled
   * @param {JSON} data
   */
  public storeUserData(data:any):void {
    if (!data) return;
    localStorage.setItem('user', CryptoJS.AES.encrypt(JSON.stringify(data), environment.LOCAL_STORAGE_SECRET).toString());
  }

  /**
   * get stored used data from localstorage
   * @return {JSON} returns user data
   */
  public getUserData():any {
    if (!localStorage.getItem('user')) return {};
    return JSON.parse(CryptoJS.AES.decrypt(localStorage.getItem('user'), environment.LOCAL_STORAGE_SECRET).toString(CryptoJS.enc.Utf8));
  }
}
