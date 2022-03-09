import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { PickUpLocation } from './pickUpLocation.model';

@Injectable({
  providedIn: 'root'
})
export class GoogleLocationService {

  private pickupLocation: PickUpLocation;
  private isLocationValue = false;

  constructor() { }

addPickUpLocation(lat: number, lng: number, address: string, staticImageUrl: string) {
  this.pickupLocation = new PickUpLocation(lat, lng, address, staticImageUrl);
  console.log(this.pickupLocation);
  return;
}

getLocation() {
  return this.pickupLocation;
}
}
