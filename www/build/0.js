webpackJsonp([0],{

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MorePageModule", function() { return MorePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__more__ = __webpack_require__(297);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MorePageModule = /** @class */ (function () {
    function MorePageModule() {
    }
    MorePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__more__["a" /* MorePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__more__["a" /* MorePage */]),
            ],
        })
    ], MorePageModule);
    return MorePageModule;
}());

//# sourceMappingURL=more.module.js.map

/***/ }),

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MorePage; });
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
 * Generated class for the MorePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MorePage = /** @class */ (function () {
    function MorePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    MorePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MorePage');
    };
    MorePage.prototype.gotopage = function (page) {
        this.navCtrl.push(page);
    };
    MorePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-more',template:/*ion-inline-start:"E:\Ajith\Unity\src\pages\more\more.html"*/'<!--\n  Generated template for the MorePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n\n<ion-content class="getbackground">\n    <ion-scroll scrollY="true" style="min-height: 400px;\n    max-height: 1000px;\n    height: 74vh;\n    top: 17vh;">\n    <ion-row>\n      <ion-col col-6 text-center (click)="gotopage(\'MediaListPage\')">\n          <button ion-button class="jb-button">\n            <ion-icon class="jb-icons" name="unity-media"></ion-icon>\n           <p class="jb-text">Media Libaray</p> \n          </button>\n      </ion-col>\n      <ion-col col-6 text-center (click)="gotopage(\'AccountPage\')">\n          <button ion-button class="jb-button">\n            <ion-icon class="jb-icons" name="unity-account"></ion-icon>\n            <p class="jb-text">My Account</p>\n\n          </button>\n        </ion-col>\n    </ion-row>\n    <ion-row>\n        <ion-col col-6 text-center (click)="gotopage(\'AccountPage\')">\n            <button ion-button class="jb-button">\n                <ion-icon class="jb-icons" name="unity-prayer"></ion-icon>\n                <p class="jb-text">prayer Request</p>\n            </button>\n        </ion-col>\n        <ion-col col-6 text-center (click)="gotopage(\'AccountPage\')">\n            <button ion-button class="jb-button">\n                <ion-icon class="jb-icons" name="unity-service"></ion-icon>\n            <p class="jb-text">Services</p>\n            </button>\n          </ion-col>\n      </ion-row>\n      <ion-row>\n          <ion-col col-6 text-center (click)="gotopage(\'AccountPage\')">\n              <button ion-button class="jb-button">\n                <ion-icon class="jb-icons" name="unity-word"></ion-icon>\n                <p class="jb-text">Daily Word</p>\n              </button>\n          </ion-col>\n          <ion-col col-6 text-center  (click)="gotopage(\'AccountPage\')">\n              <button ion-button class="jb-button">\n                <ion-icon class="jb-icons" name="unity-map"></ion-icon>\n                <p class="jb-text">Map / Contact</p>\n              </button>\n            </ion-col>\n        </ion-row>\n</ion-scroll>\n</ion-content>\n'/*ion-inline-end:"E:\Ajith\Unity\src\pages\more\more.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], MorePage);
    return MorePage;
}());

//# sourceMappingURL=more.js.map

/***/ })

});
//# sourceMappingURL=0.js.map