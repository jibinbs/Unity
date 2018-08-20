import { Component,ViewChild } from '@angular/core';
import { NavController,Slides } from 'ionic-angular';
import { AjaxcallProvider } from '../../providers/ajaxcall/ajaxcall';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild(Slides) slider: Slides;
  constructor(public navCtrl: NavController, public httpCall: AjaxcallProvider,) {
    let data={title:'pray',
    start_date:'12-04-2018',
    end_date:'09-08-2018'
  }
    this.httpCall.ajaxcall(data, 'tribe/events/v1/events')
    .then((data) => {
      console.log(data)
      // this.navCtrl.setRoot('ZufLoginPage');
    }).catch((error) => {
      console.log(error)
    })

  }
  playaudio(page)
  {
    this.navCtrl.push(page);
  }
  ngAfterViewInit(){
    this.slider.slidesPerView = 1;
    this.slider.centeredSlides = true;
    // this.slider.pager = true;
  }

}
