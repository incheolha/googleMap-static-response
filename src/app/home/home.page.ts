import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { GoogleLocationService } from '../google-location.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router, modalCrtl: ModalController) {
                      }




  onResponse() {
    return this.router.navigate(['/response'])
  }
  onCancel() {
     console.log('this is the first time..');
   return this.router.navigate(['/', 'home']);

  }
}
