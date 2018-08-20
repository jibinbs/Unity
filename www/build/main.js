webpackJsonp([6],{

/***/ 115:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 115;

/***/ }),

/***/ 156:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/account/account.module": [
		286,
		5
	],
	"../pages/audioplayer/audioplayer.module": [
		287,
		4
	],
	"../pages/eventinner/eventinner.module": [
		288,
		3
	],
	"../pages/events/events.module": [
		289,
		2
	],
	"../pages/media-list/media-list.module": [
		290,
		1
	],
	"../pages/more/more.module": [
		291,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 156;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(202);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab2Root = 'EventsPage';
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__contact_contact__["a" /* ContactPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_1__about_about__["a" /* AboutPage */];
        this.tab5Root = 'MorePage';
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"E:\Ajith\Unity\src\pages\tabs\tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Start"  tabIcon="start"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Events" tabIcon="recent"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Bulletin" tabIcon="bulletin"></ion-tab>\n  <ion-tab [root]="tab4Root" tabTitle="Give" tabIcon="give"></ion-tab>\n  <ion-tab [root]="tab5Root" tabTitle="More" tabIcon="more"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"E:\Ajith\Unity\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
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


var AboutPage = /** @class */ (function () {
    function AboutPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.choose = 'oneTime';
    }
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"E:\Ajith\Unity\src\pages\about\about.html"*/'\n\n<ion-content class="getbackground">\n        <div class="jb-logo">\n                <img src="assets/imgs/logo.png"/>\n        </div>\n     <div class="jb-head">\n         <p class="jb-text-first">GIVE</p>\n         <p class="jb-text-sec">We welcome and  appreciate your financial support.</p>\n     </div> \n     <div class="jb-inner">\n         <p class="jb-dollar">$</p>\n            <ion-item>\n                <ion-input type="number" value="" placeholder="0"></ion-input>\n            </ion-item>\n         <p>FREQUENCY</p>\n                        <ion-scroll  scrollX="true" scroll-avatar>\n                            <ion-avatar>\n                                    <ion-segment [(ngModel)]="choose">\n                                            <ion-segment-button class="scroll-item" value="oneTime">\n                                            One-Time\n                                            </ion-segment-button>\n                                            <ion-segment-button class="scroll-item" value="weekly" >\n                                            Weekly\n                                            </ion-segment-button>\n                                            <ion-segment-button class="scroll-item" value="monthly">\n                                            Monthly\n                                            </ion-segment-button>\n                                            <ion-segment-button class="scroll-item" value="Yearly" >\n                                            Yearly\n                                            </ion-segment-button>\n                                        </ion-segment>\n        \n                            </ion-avatar>\n                        </ion-scroll>\n            <!-- <ion-scroll scrollX="true" direction="x">\n                <ion-toolbar no-border-top>\n                 \n                </ion-toolbar>\n            </ion-scroll> -->\n            <p class="jb-center">Enter a dollar amounyt to make a gift.</p>\n            <button ion-button full>Give Online Today</button>\n\n        </div>\n</ion-content>\n'/*ion-inline-end:"E:\Ajith\Unity\src\pages\about\about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
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


var ContactPage = /** @class */ (function () {
    function ContactPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"E:\Ajith\Unity\src\pages\contact\contact.html"*/'\n\n<ion-content class="getbackground">\n  \n</ion-content>\n'/*ion-inline-end:"E:\Ajith\Unity\src\pages\contact\contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_ajaxcall_ajaxcall__ = __webpack_require__(203);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, httpCall) {
        this.navCtrl = navCtrl;
        this.httpCall = httpCall;
        var data = { title: 'pray',
            start_date: '12-04-2018',
            end_date: '09-08-2018'
        };
        this.httpCall.ajaxcall(data, 'tribe/events/v1/events')
            .then(function (data) {
            console.log(data);
            // this.navCtrl.setRoot('ZufLoginPage');
        }).catch(function (error) {
            console.log(error);
        });
    }
    HomePage.prototype.playaudio = function (page) {
        this.navCtrl.push(page);
    };
    HomePage.prototype.ngAfterViewInit = function () {
        this.slider.slidesPerView = 1;
        this.slider.centeredSlides = true;
        // this.slider.pager = true;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Slides */])
    ], HomePage.prototype, "slider", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"E:\Ajith\Unity\src\pages\home\home.html"*/'<!-- <ion-header>\n  <ion-navbar>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header> -->\n\n<ion-content  class="getbackground">\n<!--       \n    <ion-scroll scrollX="true" direction="x">\n        <ion-card>\n          <ion-card-content>\n            <ion-card-title>\n              hhdhdfhfiijf\n              </ion-card-title>\n            <button ion-item (click)="openDetailActivity(item)">            \n              More info\n              <ion-icon name="arrow-forward" item-right color="primary"></ion-icon>\n            </button>\n          </ion-card-content>\n        </ion-card>\n        <ion-card>\n            <ion-card-content>\n              <ion-card-title>\n                hhdhdfhfiijf\n                </ion-card-title>\n              <button ion-item (click)="openDetailActivity(item)">            \n                More info\n                <ion-icon name="arrow-forward" item-right color="primary"></ion-icon>\n              </button>\n            </ion-card-content>\n          </ion-card>\n          <ion-card>\n              <ion-card-content>\n                <ion-card-title>\n                  hhdhdfhfiijf\n                  </ion-card-title>\n                <button ion-item (click)="openDetailActivity(item)">            \n                  More info\n                  <ion-icon name="arrow-forward" item-right color="primary"></ion-icon>\n                </button>\n              </ion-card-content>\n            </ion-card>\n      </ion-scroll> -->\n      <div class="jb-logo">\n        <img src="assets/imgs/logo.png"/>\n      </div>\n      <ion-slides slidesPerView= 1 centeredSlides = true  loop  >\n          <ion-slide #slider>\n              <ion-card>\n                  <img src="assets/imgs/Layer5.png"/>\n                </ion-card>\n               \n          </ion-slide>\n          <ion-slide #slider>\n              <ion-card>\n                  <img src="assets/imgs/list2.png"/>\n                </ion-card>\n               \n          </ion-slide>\n          <ion-slide #slider>\n              <ion-card>\n                  <img src="assets/imgs/Layer12.png"/>\n                </ion-card>\n               \n          </ion-slide>\n          <ion-slide #slider >\n              <ion-card>\n                  <img src="assets/imgs/list1.jpg"/>\n                </ion-card>\n               \n          </ion-slide>\n          <ion-slide #slider>\n              <ion-card>\n                  <img src="assets/imgs/list3.jpg"/>\n                </ion-card>\n          </ion-slide>\n      </ion-slides>\n      <ion-row style="height: 10vh;\n      margin-top: 10px;">\n        <ion-col style="text-align:center" (click)="playaudio(\'AudioplayerPage\')">\n            <img style="height:100%;" src="assets/imgs/audio.png"/>\n           <p style="    margin: 0px;\n           font-size: 3.5vw;\n           color: white;\n           padding: 0px 35px;">Watch the Latest Service</p> \n        </ion-col>\n        <ion-col style="text-align:center">\n            <img style="height:100%;" src="assets/imgs/play.png"/>\n            <p style="    margin: 0px;\n            font-size: 3.5vw;\n            color: white;\n            padding: 0px 35px;">Listen to the Latest Service</p>\n        </ion-col>\n      </ion-row>\n</ion-content>\n'/*ion-inline-end:"E:\Ajith\Unity\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_ajaxcall_ajaxcall__["a" /* AjaxcallProvider */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AjaxcallProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the AjaxcallProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var AjaxcallProvider = /** @class */ (function () {
    function AjaxcallProvider(http) {
        this.http = http;
        this.baseurl = 'https://houston.lightspree.com/wp-json/';
        console.log('Hello AjaxcallProvider Provider');
    }
    AjaxcallProvider.prototype.ajaxcall = function (data, page) {
        var _this = this;
        var Params = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpParams */]();
        Object.keys(data).forEach(function (key) {
            Params = Params.append(key, data[key]);
        });
        var config = { headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, };
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.baseurl + page, config)
                .subscribe(function (res) {
                console.log(res);
                resolve(res);
            }, function (err) {
                console.log(err);
                reject(err);
            });
        });
    };
    AjaxcallProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], AjaxcallProvider);
    return AjaxcallProvider;
}());

//# sourceMappingURL=ajaxcall.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(226);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_about_about__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_audio_player_audio_player__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_common_http__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_ajaxcall_ajaxcall__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_media__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_file__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_file_transfer__ = __webpack_require__(103);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_audio_player_audio_player__["a" /* AudioPlayerPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/account/account.module#AccountPageModule', name: 'AccountPage', segment: 'account', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/audioplayer/audioplayer.module#AudioplayerPageModule', name: 'AudioplayerPage', segment: 'audioplayer', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/eventinner/eventinner.module#EventinnerPageModule', name: 'EventinnerPage', segment: 'eventinner', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/events/events.module#EventsPageModule', name: 'EventsPage', segment: 'events', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/media-list/media-list.module#MediaListPageModule', name: 'MediaListPage', segment: 'media-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/more/more.module#MorePageModule', name: 'MorePage', segment: 'more', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_audio_player_audio_player__["a" /* AudioPlayerPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_file__["a" /* File */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_media__["a" /* Media */],
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_file_transfer__["a" /* FileTransfer */],
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_file_transfer__["b" /* FileTransferObject */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_12__providers_ajaxcall_ajaxcall__["a" /* AjaxcallProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(199);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"E:\Ajith\Unity\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"E:\Ajith\Unity\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AudioPlayerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_media__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_file__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_file_transfer__ = __webpack_require__(103);
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
 * Generated class for the AudioPlayerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AudioPlayerPage = /** @class */ (function () {
    function AudioPlayerPage(platform, navCtrl, navParams, loadingCtrl, file, transfer, media) {
        var _this = this;
        this.platform = platform;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.file = file;
        this.transfer = transfer;
        this.media = media;
        this.filename = "Hotel California";
        this.is_playing = false;
        this.is_in_play = false;
        this.is_ready = false;
        this.duration = -1;
        this.position = 0;
        // assign storage directory
        this.platform.ready().then(function () {
            if (_this.platform.is('ios')) {
                _this.storageDirectory = _this.file.dataDirectory;
            }
            else if (_this.platform.is('android')) {
                _this.storageDirectory = _this.file.externalDataDirectory;
            }
        });
    }
    AudioPlayerPage.prototype.ionViewWillEnter = function () {
        // comment out the following line when adjusting UI in browsers
        this.prepareAudioFile();
    };
    AudioPlayerPage.prototype.prepareAudioFile = function () {
        var _this = this;
        var url = "http://fabienne.sigonney.free.fr/tranquilit%E9/Eagles%20-%20Hotel%20California%20(Acoustic).mp3";
        this.platform.ready().then(function () {
            _this.file.resolveDirectoryUrl(_this.storageDirectory).then(function (resolvedDirectory) {
                // inspired by: https://github.com/ionic-team/ionic-native/issues/1711
                console.log("resolved  directory: " + resolvedDirectory.nativeURL);
                _this.file.checkFile(resolvedDirectory.nativeURL, "hotel_california.mp3").then(function (data) {
                    if (data == true) {
                        _this.getDurationAndSetToPlay();
                    }
                    else {
                        console.log("not found!");
                        throw { code: 1, message: "NOT_FOUND_ERR" };
                    }
                }).catch(function (err) {
                    console.log("Error occurred while checking local files:");
                    console.log(err);
                    if (err.code == 1) {
                        // not found! download!
                        console.log("not found! download!");
                        var loading_1 = _this.loadingCtrl.create({
                            content: 'Downloading the song from the web...'
                        });
                        loading_1.present();
                        var fileTransfer = _this.transfer.create();
                        fileTransfer.download(url, _this.storageDirectory + "hotel_california.mp3").then(function (entry) {
                            console.log('download complete' + entry.toURL());
                            loading_1.dismiss();
                            _this.getDurationAndSetToPlay();
                        }).catch(function (err_2) {
                            console.log("Download error!");
                            loading_1.dismiss();
                            console.log(err_2);
                        });
                    }
                });
            });
        });
    };
    AudioPlayerPage.prototype.createAudioFile = function (pathToDirectory, filename) {
        if (this.platform.is('ios')) {
            return this.media.create((pathToDirectory).replace(/^file:\/\//, '') + '/' + filename);
        }
        else {
            return this.media.create(pathToDirectory + filename);
        }
    };
    AudioPlayerPage.prototype.getDurationAndSetToPlay = function () {
        this.curr_playing_file = this.createAudioFile(this.storageDirectory, "hotel_california.mp3");
        this.curr_playing_file.play();
        this.curr_playing_file.setVolume(0.0); // you don't want users to notice that you are playing the file
        var self = this;
        this.get_duration_interval = setInterval(function () {
            if (self.duration == -1) {
                self.duration = ~~(self.curr_playing_file.getDuration()); // make it an integer
                // self.duration_string = self.fmtMSS(self.duration);   // replaced by the Angular DatePipe
            }
            else {
                self.curr_playing_file.stop();
                self.curr_playing_file.release();
                self.setRecordingToPlay();
                clearInterval(self.get_duration_interval);
            }
        }, 100);
    };
    AudioPlayerPage.prototype.getAndSetCurrentAudioPosition = function () {
        var diff = 1;
        var self = this;
        this.get_position_interval = setInterval(function () {
            var last_position = self.position;
            self.curr_playing_file.getCurrentPosition().then(function (position) {
                if (position >= 0 && position < self.duration) {
                    if (Math.abs(last_position - position) >= diff) {
                        // set position
                        self.curr_playing_file.seekTo(last_position * 1000);
                    }
                    else {
                        // update position for display
                        self.position = position;
                    }
                }
                else if (position >= self.duration) {
                    self.stopPlayRecording();
                    self.setRecordingToPlay();
                }
            });
        }, 100);
    };
    AudioPlayerPage.prototype.setRecordingToPlay = function () {
        var _this = this;
        this.curr_playing_file = this.createAudioFile(this.storageDirectory, "hotel_california.mp3");
        this.curr_playing_file.onStatusUpdate.subscribe(function (status) {
            // 2: playing
            // 3: pause
            // 4: stop
            _this.message = status;
            switch (status) {
                case 1:
                    _this.is_in_play = false;
                    break;
                case 2:// 2: playing
                    _this.is_in_play = true;
                    _this.is_playing = true;
                    break;
                case 3:// 3: pause
                    _this.is_in_play = true;
                    _this.is_playing = false;
                    break;
                case 4: // 4: stop
                default:
                    _this.is_in_play = false;
                    _this.is_playing = false;
                    break;
            }
        });
        console.log("audio file set");
        this.message = "audio file set";
        this.is_ready = true;
        this.getAndSetCurrentAudioPosition();
    };
    AudioPlayerPage.prototype.playRecording = function () {
        this.curr_playing_file.play();
    };
    AudioPlayerPage.prototype.pausePlayRecording = function () {
        this.curr_playing_file.pause();
    };
    AudioPlayerPage.prototype.stopPlayRecording = function () {
        this.curr_playing_file.stop();
        this.curr_playing_file.release();
        clearInterval(this.get_position_interval);
        this.position = 0;
    };
    AudioPlayerPage.prototype.controlSeconds = function (action) {
        var step = 15;
        var number = this.position;
        switch (action) {
            case 'back':
                this.position = number < step ? 0.001 : number - step;
                break;
            case 'forward':
                this.position = number + step < this.duration ? number + step : this.duration;
                break;
            default:
                break;
        }
    };
    /*** utility functions ***/
    // this is replaced by the angular DatePipe:
    // https://angular.io/api/common/DatePipe
    AudioPlayerPage.prototype.fmtMSS = function (s) {
        return (s - // take value s and subtract (will try to convert String to Number)
            (s %= 60) // the new value of s, now holding the remainder of s divided by 60 
        ) / 60 + (
        // (can never result in a fractional value = no need for rounding)
        // to which we concatenate a String (converts the Number to String)
        // who's reference is chosen by the conditional operator:
        9 < s // if    seconds is larger than 9
            ? ':' // then  we don't need to prepend a zero
            : ':0' // else  we do need to prepend a zero
        ) + s; // and we add Number s to the string (converting it to String as well)
    };
    AudioPlayerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-audio-player',template:/*ion-inline-start:"E:\Ajith\Unity\src\pages\audio-player\audio-player.html"*/'\n\n<ion-content padding>\n  <!-- Playback section -->\n  <div text-center>\n    <!-- File name -->\n    <br>\n    <h1>{{ filename }}</h1>\n    <br>\n\n    <!-- avatar -->\n    <div class="avatar"></div>\n    <br>\n\n    <!-- control bar -->\n    <div>\n      <ion-range min="0" max="{{duration}}" [(ngModel)]="position"> <!--  [disabled]="is_in_play && is_playing"  -->\n        <ion-label range-left>{{ position*1000 | date:\'mm:ss\' }}</ion-label>\n        <ion-label range-right *ngIf="duration == -1" >--:--</ion-label>\n        <ion-label range-right *ngIf="duration != -1">{{ duration*1000 | date:\'mm:ss\' }}</ion-label>\n      </ion-range>\n    </div>\n    <br>\n    \n    <ion-grid>\n      <ion-row justify-content-center align-items-center style="height: 100%">\n        <ion-col>\n          <!-- Backwards -->\n          <button ion-button class="skip-btn" color="primary" [disabled]="!is_ready || !is_in_play" (click)="controlSeconds(\'back\')">\n                  &nbsp;&nbsp;<ion-icon name="skip-backward"></ion-icon>&nbsp;&nbsp;\n          </button>\n        </ion-col>\n        <ion-col>\n          <!-- Play/Pause -->\n          <button ion-button class="play-pause-btn" (click)="playRecording()" color="primary" *ngIf="!is_playing" [disabled]="!is_ready">\n            <ion-icon name="play"></ion-icon>\n          </button>\n\n          <button ion-button class="play-pause-btn" (click)="pausePlayRecording()" color="secondary" *ngIf="is_playing" [disabled]="!is_ready">\n            <ion-icon name="pause"></ion-icon>\n          </button>\n        </ion-col>\n        <ion-col>\n          <!-- Forwards -->\n          <button ion-button class="skip-btn" color="primary" [disabled]="!is_ready || !is_in_play" (click)="controlSeconds(\'forward\')">\n                  &nbsp;&nbsp;<ion-icon name="skip-forward"></ion-icon>&nbsp;&nbsp;\n          </button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"E:\Ajith\Unity\src\pages\audio-player\audio-player.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_file_transfer__["a" /* FileTransfer */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_media__["a" /* Media */]])
    ], AudioPlayerPage);
    return AudioPlayerPage;
}());

//# sourceMappingURL=audio-player.js.map

/***/ })

},[205]);
//# sourceMappingURL=main.js.map