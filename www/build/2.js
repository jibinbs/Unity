webpackJsonp([2],{

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsPageModule", function() { return EventsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__events__ = __webpack_require__(295);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EventsPageModule = /** @class */ (function () {
    function EventsPageModule() {
    }
    EventsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__events__["a" /* EventsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__events__["a" /* EventsPage */]),
            ],
        })
    ], EventsPageModule);
    return EventsPageModule;
}());

//# sourceMappingURL=events.module.js.map

/***/ }),

/***/ 295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the EventsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EventsPage = /** @class */ (function () {
    function EventsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.choose = "today";
    }
    EventsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EventsPage');
    };
    EventsPage.prototype.gotopage = function (page) {
        this.navCtrl.push(page);
    };
    EventsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-events',template:/*ion-inline-start:"E:\Ajith\Unity\src\pages\events\events.html"*/'<!--\n  Generated template for the EventsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n\n<ion-content class="getbackground">\n  <ion-toolbar no-border-top>\n    <ion-segment [(ngModel)]="choose">\n      <ion-segment-button value="today" style="color: white;">\n        Today\n      </ion-segment-button>\n      <ion-segment-button value="week" style="color: white;">\n        This Week\n      </ion-segment-button>\n      <ion-segment-button value="month" style="color: white;">\n        This Month\n      </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>\n\n  <div  class="jb-postion" [ngSwitch]="choose">\n      <ion-scroll  scrollY="true" scroll-avatar>\n    <ion-list *ngSwitchCase="\'today\'">\n        <ion-card (click)="gotopage(\'EventinnerPage\')">\n          <div class="jb-img-inner">\n            <img src="assets/imgs/Layer12.png"/></div>\n            <ion-card-content>\n              <ion-card-title>\n                  Yoga Therapy\n                </ion-card-title>\n              <p>\n               WEDNESDAY,MAY 16 @ 6:00 PM-715 PM\n              </p>\n            </ion-card-content>\n          </ion-card>\n           \n\n    </ion-list>\n\n    <ion-list *ngSwitchCase="\'week\'">\n        <ion-card (click)="gotopage(\'EventinnerPage\')">\n            <img src="assets/imgs/Layer15.png"/>\n            <ion-card-content>\n                <ion-card-title>\n                      Oneness Blessings\n                    </ion-card-title>\n                  <p>\n                   WEDNESDAY,MAY 16 @ 6:00 PM-715 PM\n                  </p>\n            </ion-card-content>\n          </ion-card>\n         \n            <ion-card (click)="gotopage(\'EventinnerPage\')">\n                <img src="assets/imgs/Layer17.png"/>\n                <ion-card-content>\n                    <ion-card-title>\n                        Experiences\n                        </ion-card-title>\n                      <p>\n                       WEDNESDAY,MAY 16 @ 6:00 PM-715 PM\n                      </p>\n                </ion-card-content>\n              </ion-card>\n    </ion-list>\n\n    <ion-list *ngSwitchCase="\'month\'">\n        <ion-card (click)="gotopage(\'EventinnerPage\')">\n            <img src="assets/imgs/Layer15.png"/>\n            <ion-card-content>\n                <ion-card-title>\n                     Oneness Blessings\n                    </ion-card-title>\n                  <p>\n                   WEDNESDAY,MAY 16 @ 6:00 PM-715 PM\n                  </p>\n            </ion-card-content>\n          </ion-card>\n          <ion-card (click)="gotopage(\'EventinnerPage\')">\n              <img src="assets/imgs/Layer12.png"/>\n              <ion-card-content>\n                  <ion-card-title>\n                        Yoga Therapy\n                      </ion-card-title>\n                    <p>\n                     WEDNESDAY,MAY 16 @ 6:00 PM-715 PM\n                    </p>\n              </ion-card-content>\n            </ion-card>\n            <ion-card (click)="gotopage(\'EventinnerPage\')">\n                <img src="assets/imgs/Layer17.png"/>\n                <ion-card-content>\n                    <ion-card-title>\n                         Experiences\n                        </ion-card-title>\n                      <p>\n                       WEDNESDAY,MAY 16 @ 6:00 PM-715 PM\n                      </p>\n                </ion-card-content>\n              </ion-card>\n    </ion-list>\n    </ion-scroll>\n  </div>\n</ion-content>\n'/*ion-inline-end:"E:\Ajith\Unity\src\pages\events\events.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], EventsPage);
    return EventsPage;
}());

//# sourceMappingURL=events.js.map

/***/ })

});
//# sourceMappingURL=2.js.map