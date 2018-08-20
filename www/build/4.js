webpackJsonp([4],{

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AudioplayerPageModule", function() { return AudioplayerPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__audioplayer__ = __webpack_require__(293);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AudioplayerPageModule = /** @class */ (function () {
    function AudioplayerPageModule() {
    }
    AudioplayerPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__audioplayer__["a" /* AudioplayerPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__audioplayer__["a" /* AudioplayerPage */]),
            ],
        })
    ], AudioplayerPageModule);
    return AudioplayerPageModule;
}());

//# sourceMappingURL=audioplayer.module.js.map

/***/ }),

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AudioplayerPage; });
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
 * Generated class for the AudioplayerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AudioplayerPage = /** @class */ (function () {
    function AudioplayerPage(platform, navCtrl, navParams, loadingCtrl, file, transfer, media) {
        var _this = this;
        this.platform = platform;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.file = file;
        this.transfer = transfer;
        this.media = media;
        this.filename = "Hotel California";
        this.choose = 'today';
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
    AudioplayerPage.prototype.ionViewWillEnter = function () {
        // comment out the following line when adjusting UI in browsers
        this.prepareAudioFile();
    };
    AudioplayerPage.prototype.prepareAudioFile = function () {
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
    AudioplayerPage.prototype.createAudioFile = function (pathToDirectory, filename) {
        if (this.platform.is('ios')) {
            return this.media.create((pathToDirectory).replace(/^file:\/\//, '') + '/' + filename);
        }
        else {
            return this.media.create(pathToDirectory + filename);
        }
    };
    AudioplayerPage.prototype.getDurationAndSetToPlay = function () {
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
    AudioplayerPage.prototype.getAndSetCurrentAudioPosition = function () {
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
    AudioplayerPage.prototype.setRecordingToPlay = function () {
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
    AudioplayerPage.prototype.playRecording = function () {
        this.curr_playing_file.play();
    };
    AudioplayerPage.prototype.pausePlayRecording = function () {
        this.curr_playing_file.pause();
    };
    AudioplayerPage.prototype.stopPlayRecording = function () {
        this.curr_playing_file.stop();
        this.curr_playing_file.release();
        clearInterval(this.get_position_interval);
        this.position = 0;
    };
    AudioplayerPage.prototype.controlSeconds = function (action) {
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
    AudioplayerPage.prototype.fmtMSS = function (s) {
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
    AudioplayerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-audioplayer',template:/*ion-inline-start:"E:\Ajith\Unity\src\pages\audioplayer\audioplayer.html"*/'\n\n<ion-content class="getbackground">\n  <!-- Playback section -->\n  <ion-header>\n      <ion-navbar>\n      </ion-navbar>\n  </ion-header>\n  <div class="jb-logo">\n      <img src="assets/imgs/logo.png"/>\n    </div>\n  \n      <ion-toolbar no-border-top>\n          <ion-segment [(ngModel)]="choose">\n            <ion-segment-button value="today" style="color: white;">\n              Sunday Services\n            </ion-segment-button>\n            <ion-segment-button value="week" style="color: white;">\n              Wednesday Services\n            </ion-segment-button>\n          </ion-segment>\n      </ion-toolbar>  \n  <div text-center class="jb-main">\n    <!-- File name -->\n   \n\n    <!-- avatar -->\n    <div class="jb-avathar">\n      <img src="assets/imgs/Layer5.png"/>\n    </div>\n    <br>\n\n    <!-- control bar -->\n    <div>\n      <ion-range min="0" max="{{duration}}" [(ngModel)]="position"> <!--  [disabled]="is_in_play && is_playing"  -->\n        <ion-label range-left>{{ position*1000 | date:\'mm:ss\' }}</ion-label>\n        <ion-label range-right *ngIf="duration == -1" >--:--</ion-label>\n        <ion-label range-right *ngIf="duration != -1">{{ duration*1000 | date:\'mm:ss\' }}</ion-label>\n      </ion-range>\n    </div>\n    <br>\n    <h1>We Are Unity</h1>\n    <p>Rev.Michael Gott</p>\n    <p>SUNDAY, JUNE, 2018</p>\n    <br>\n    <ion-grid>\n      <ion-row justify-content-center align-items-center style="height: 100%">\n        <ion-col>\n          <!-- Backwards -->\n          <button ion-button class="skip-btn"  [disabled]="!is_ready || !is_in_play" (click)="controlSeconds(\'back\')">\n                  &nbsp;&nbsp; <img src="assets/imgs/backward.png"/>&nbsp;&nbsp;\n          </button>\n        </ion-col>\n        <ion-col>\n          <!-- Play/Pause -->\n          <button ion-button class="play-pause-btn" (click)="playRecording()" *ngIf="!is_playing" [disabled]="!is_ready">\n              <img src="assets/imgs/play-arrow.png"/>\n          </button>\n\n          <button ion-button class="play-pause-btn" (click)="pausePlayRecording()"  *ngIf="is_playing" [disabled]="!is_ready">\n           <img src="assets/imgs/pause-button.png"/>\n          </button>\n        </ion-col>\n        <ion-col>\n          <!-- Forwards -->\n          <button ion-button class="skip-btn"  [disabled]="!is_ready || !is_in_play" (click)="controlSeconds(\'forward\')">\n                  &nbsp;&nbsp; <img src="assets/imgs/forward.png"/>&nbsp;&nbsp;\n          </button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"E:\Ajith\Unity\src\pages\audioplayer\audioplayer.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_file_transfer__["a" /* FileTransfer */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_media__["a" /* Media */]])
    ], AudioplayerPage);
    return AudioplayerPage;
}());

//# sourceMappingURL=audioplayer.js.map

/***/ })

});
//# sourceMappingURL=4.js.map