import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SurveySlidesPage } from 'pages/survey-slides/survey-slides'
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
  started: Boolean
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.started = false
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SurveyPage');
  }
  startSurvey(){
    this.started = true
  }
    logEvent(event) {
      this.started = true
  }

}
