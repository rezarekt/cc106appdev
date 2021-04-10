import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LinkService {

  apiLink: string = "https://cc106.rxmsolutions.com/";
  consumer_key: string  = "ck_a0474739d22e7300fdc8f283f2426847ef2a621c";
  consumer_secret: string  = "cs_0061f0c07aa91435148ed294877e1e46cd70454a";
  constructor() { }

  getAPILink() : string{
    return this.apiLink;
  }

  getConsumerKey(): string{
    return this.consumer_key;
  }

  getConsumerSecret(): string{
    return this.consumer_secret;
  }
}
