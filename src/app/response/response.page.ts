import { Component, OnInit } from '@angular/core';
import { GoogleLocationService } from '../google-location.service';
import { PickUpLocation } from '../pickUpLocation.model';
import { ModalController } from '@ionic/angular';
import { MapModalComponent } from '../shared/map-modal/map-modal.component';

@Component({
  selector: 'app-response',
  templateUrl: './response.page.html',
  styleUrls: ['./response.page.scss'],
})
export class ResponsePage implements OnInit {

  pickLocation: PickUpLocation;

  constructor(private googleLocationService: GoogleLocationService,
              private modalCtrl: ModalController  ){ }

  ngOnInit() {
     this.pickLocation = this.googleLocationService.getLocation();

     console.log( this.pickLocation );

  }
  onShowFullMap() {
    this.modalCtrl.create({
                      component: MapModalComponent,
                      componentProps: {
                        center: {
                          lat: this.pickLocation.lat,
                          lng: this.pickLocation.lng
                        },
                        selectable: false,
                        closeButtonText: 'Close',
                        title: this.pickLocation.address
                      }
    }).then( modalEl => {
      modalEl.present();
    });
  }
}
