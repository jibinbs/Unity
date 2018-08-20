webpackJsonp([1],{

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaListPageModule", function() { return MediaListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__media_list__ = __webpack_require__(296);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MediaListPageModule = /** @class */ (function () {
    function MediaListPageModule() {
    }
    MediaListPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__media_list__["a" /* MediaListPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__media_list__["a" /* MediaListPage */]),
            ],
        })
    ], MediaListPageModule);
    return MediaListPageModule;
}());

//# sourceMappingURL=media-list.module.js.map

/***/ }),

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MediaListPage; });
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
 * Generated class for the MediaListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MediaListPage = /** @class */ (function () {
    function MediaListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    MediaListPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MediaListPage');
    };
    MediaListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-media-list',template:/*ion-inline-start:"E:\Ajith\Unity\src\pages\media-list\media-list.html"*/'<!--\n  Generated template for the MediaListPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n<ion-content class="getbackground">\n    <ion-header>\n        <ion-navbar>\n        </ion-navbar>\n      </ion-header>\n      <ion-toolbar no-border-top>\n          <ion-segment [(ngModel)]="choose">\n            <ion-segment-button value="today" style="color: white;">\n              Sunday Services\n            </ion-segment-button>\n            <ion-segment-button value="week" style="color: white;">\n              Wednesday Services\n            </ion-segment-button>\n          </ion-segment>\n      </ion-toolbar>  \n\n      <div class="jb-list">\n      <ion-searchbar (ionInput)="getItems($event)"></ion-searchbar>\n      <ion-scroll  scrollY="true" scroll-avatar>\n      <ion-list>\n          <ion-item>\n            <h2>"We Are Unity"</h2>\n            <p style="font-family:bold">Rev.Michael Gott</p>\n            <p>SUNDAY, JUNE 24, 2018</p>\n            <ion-avatar item-end>\n                <img  src="assets/imgs/playerBlue.png"/>\n                <img  src="assets/imgs/audioBlue.png"/>\n              </ion-avatar>\n          </ion-item>\n          <ion-item>\n              <h2>The Blessing of the Father</h2>\n              <p style="font-family:bold">Rev.Michael Gott</p>\n              <p>SUNDAY, JUNE 24, 2018</p>\n              <ion-avatar item-end>\n                  <img  src="assets/imgs/playerBlue.png"/>\n                  <img  src="assets/imgs/audioBlue.png"/>\n                </ion-avatar>\n            </ion-item>\n            <ion-item>\n                <h2>On Holy Ground</h2>\n                <p style="font-family:bold">Rev.Michael Gott</p>\n                <p>SUNDAY, JUNE 24, 2018</p>\n                <ion-avatar item-end>\n                    <img  src="assets/imgs/playerBlue.png"/>\n                      <img  src="assets/imgs/audioBlue.png"/>\n                  </ion-avatar>\n              </ion-item>\n              <ion-item>\n                  <h2>The Ultimate Gift</h2>\n                  <p style="font-family:bold">Rev.Michael Gott</p>\n                  <p>SUNDAY, JUNE 24, 2018</p>\n                  <ion-avatar item-end>\n                      <img  src="assets/imgs/playerBlue.png"/>\n                      <img  src="assets/imgs/audioBlue.png"/>\n                  </ion-avatar>\n                </ion-item>\n                <ion-item>\n                    <h2>Generations: A Celebration of Our Community</h2>\n                    <p style="font-family:bold">Rev.Michael Gott</p>\n                    <p>SUNDAY, JUNE 24, 2018</p>\n                    <ion-avatar item-end>\n                        <img  src="assets/imgs/playerBlue.png"/>\n                        <img  src="assets/imgs/audioBlue.png"/>\n                    </ion-avatar>\n                  </ion-item>\n                  <ion-item>\n                    <h2>Holy Mother-Embracing the Drivine Feminine</h2>\n                    <p style="font-family:bold">Rev.Michael Gott</p>\n                    <p>SUNDAY, JUNE 24, 2018</p>\n                    <ion-avatar item-end>\n                        <img  src="assets/imgs/playerBlue.png"/>\n                        <img  src="assets/imgs/audioBlue.png"/>\n                    </ion-avatar>\n                  </ion-item>\n                  <ion-item>\n                        <h2>"We Are Unity"</h2>\n                        <p style="font-family:bold">Rev.Michael Gott</p>\n                        <p>SUNDAY, JUNE 24, 2018</p>\n                        <ion-avatar item-end>\n                            <img  src="assets/imgs/playerBlue.png"/>\n                            <img  src="assets/imgs/audioBlue.png"/>\n                          </ion-avatar>\n                      </ion-item>\n                      <ion-item>\n                          <h2>The Blessing of the Father</h2>\n                          <p style="font-family:bold">Rev.Michael Gott</p>\n                          <p>SUNDAY, JUNE 24, 2018</p>\n                          <ion-avatar item-end>\n                              <img  src="assets/imgs/playerBlue.png"/>\n                              <img  src="assets/imgs/audioBlue.png"/>\n                            </ion-avatar>\n                        </ion-item>\n        </ion-list>\n        </ion-scroll>\n      </div>\n</ion-content>\n'/*ion-inline-end:"E:\Ajith\Unity\src\pages\media-list\media-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], MediaListPage);
    return MediaListPage;
}());

//# sourceMappingURL=media-list.js.map

/***/ })

});
//# sourceMappingURL=1.js.map