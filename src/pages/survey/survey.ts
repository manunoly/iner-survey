import { ViewChild, Component } from '@angular/core';
import { Slides, NavController, NavParams } from 'ionic-angular';
// import { SurveySlidesPage } from 'pages/survey-slides/survey-slides'
/*
  Generated class for the Survey page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-survey',
  templateUrl: 'survey.html'
})
export class SurveyPage {
  @ViewChild(Slides) slides: Slides;
  slideNumber: Number;
  slideLength: Number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
this.slideNumber = 1; 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SurveyPage');
  }

  ngAfterViewInit() {
    this.slides.lockSwipes(true);

  }
  goToSlide(slide: number) {
    this.slides.slideTo(slide, 500);
  }
  slideChanged() {
    let currentIndex = this.slides.getActiveIndex();
    console.log("Current index is", currentIndex);
    console.log(this.slides.length());
  }
  nextSlide() {
    this.slideLength = this.slides.length();
    this.slides.lockSwipes(false);
    this.slides.slideNext(500, false);
    this.slideNumber = this.slides.getActiveIndex() + 1;
    this.slides.lockSwipes(true);
    // let currentIndex = this.slides.getActiveIndex();
    // console.log("Current index is", currentIndex);    
    // this.goToSlide(currentIndex + 1)
  }
  previousSlide() {
    if (this.slides.isBeginning() == false) {
      this.slides.lockSwipes(false);
      this.slideNumber = this.slides.getActiveIndex()
      this.slides.slidePrev(500, false);
      this.slides.lockSwipes(true);
    }
  }
}
