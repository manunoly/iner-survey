import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Geolocation } from 'ionic-native';

declare var google;
/*
  Generated class for the GeolocationPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-geolocation-page',
  templateUrl: 'geolocation-page.html'
})
export class GeolocationPagePage {
  @ViewChild('map') mapElement: ElementRef;
  map: any;
  latitud: number = -0.1862298
  longitud: number = -78.4937723
  zoom: number = 14

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GeolocationPagePage');
    this.loadMap();
  }

  loadMap() {

    let latLng = new google.maps.LatLng(this.latitud, this.longitud);
    let mapOptions = {
      center: latLng,
      zoom: this.zoom,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
  }
  locateMe() {
    Geolocation.getCurrentPosition().then(pos => {
      this.latitud = pos.coords.latitude
      this.longitud = pos.coords.longitude
      this.zoom = 16
      console.log('lat: ' + pos.coords.latitude + ', lon: ' + pos.coords.longitude);
      this.loadMap()
    });

    let watch = Geolocation.watchPosition().subscribe(pos => {
      console.log('lat: ' + pos.coords.latitude + ', lon: ' + pos.coords.longitude);
    });

    // to stop watching
    // watch.unsubscribe();
  }

}
