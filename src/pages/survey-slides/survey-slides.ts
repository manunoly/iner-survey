import { ViewChild, Component } from '@angular/core';
import { Slides, NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the SurveySlides page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-survey-slides',
  templateUrl: 'survey-slides.html'
})
export class SurveySlidesPage {
  @ViewChild(Slides) slides: Slides;

  constructor(public navCtrl: NavController, public navParams: NavParams) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SurveySlidesPage');
  }
  ngAfterViewInit() {
    this.slides.autoplay = true;
  }
  goToSlide() {
    this.slides.slideTo(2, 50);
  }
  slideChanged() {
    this.slides.slidePrev(0, false)
    let currentIndex = this.slides.getActiveIndex();
    console.log("Current index is", currentIndex);
    console.log(this.slides.length());
  }

}
