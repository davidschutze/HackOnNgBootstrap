webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n    <app-carousel></app-carousel>\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__carousel_carousel_component__ = __webpack_require__("../../../../../src/app/carousel/carousel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__carousel_ngb_carousel_modified_ngb_carousel_modified_component__ = __webpack_require__("../../../../../src/app/carousel/ngb-carousel-modified/ngb-carousel-modified.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__slide_service__ = __webpack_require__("../../../../../src/app/slide.service.ts");
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["G" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_3__carousel_carousel_component__["a" /* CarouselComponent */],
                __WEBPACK_IMPORTED_MODULE_5__carousel_ngb_carousel_modified_ngb_carousel_modified_component__["a" /* NgbCarouselModifiedComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_common__["a" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["c" /* NgbModule */].forRoot()
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_7__slide_service__["a" /* SlideService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/carousel/carousel.component.html":
/***/ (function(module, exports) {

module.exports = "<ngb-carousel-modified>\n    <ng-template ngbSlide\n                 *ngFor=\"let slide of slides\"\n                 let-active=\"active\" let-id=\"id\">\n        <img [src]=\"slide.mainImage\" alt=\"Random first slide\" class=\"largeImage\">\n        <img [src]=\"slide.smallImage\" alt=\"Random first slide\" class=\"smallImage\"\n             [class.inactiveImage]=\"active !== id\" *ngIf=\"active !== id\">\n        <div class=\"carousel-caption\" *ngIf=\"active === id\">\n            <div class=\"caption-content\">\n                <h3>{{slide.title}}</h3>\n                <p>{{slide.subtitle}}</p>\n            </div>\n        </div>\n    </ng-template>\n</ngb-carousel-modified>\n"

/***/ }),

/***/ "../../../../../src/app/carousel/carousel.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "img {\n  max-width: 100%; }\n\n.carousel {\n  outline: none; }\n\n.carousel-caption {\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(30, 30, 30, 0.4); }\n\n.carousel-caption .caption-content {\n    position: absolute;\n    top: 30px;\n    left: 0px;\n    padding-left: 30px;\n    width: 100%;\n    text-align: left; }\n\n@media (max-width: 575px) {\n      .carousel-caption .caption-content {\n        width: 80%;\n        line-height: 1.2;\n        top: 10px; }\n        .carousel-caption .caption-content h3 {\n          font-size: 1.2rem; }\n        .carousel-caption .caption-content p {\n          font-size: .8rem; } }\n\n@media (max-width: 767px) {\n      .carousel-caption .caption-content {\n        top: 20px; } }\n\n@media (max-width: 991px) {\n      .carousel-caption .caption-content h3 {\n        font-size: 1.4rem; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/carousel/carousel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarouselComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__slide_service__ = __webpack_require__("../../../../../src/app/slide.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CarouselComponent = /** @class */ (function () {
    function CarouselComponent(slideService) {
        this.slideService = slideService;
    }
    CarouselComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.slideService.getSlides().subscribe(function (slides) {
            _this.slides = slides;
        });
    };
    CarouselComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-carousel',
            template: __webpack_require__("../../../../../src/app/carousel/carousel.component.html"),
            styles: [__webpack_require__("../../../../../src/app/carousel/carousel.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__slide_service__["a" /* SlideService */]])
    ], CarouselComponent);
    return CarouselComponent;
}());



/***/ }),

/***/ "../../../../../src/app/carousel/ngb-carousel-modified/ngb-carousel-modified.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"row\">\n    <div class=\"col-12 col-md mainImage\">\n        <div *ngFor=\"let slide of slides\" class=\"carousel-item\" [class.active]=\"slide.id === activeId\">\n            <ng-template *ngTemplateOutlet=\"slide.tplRef; context: {active: activeId, id: slide.id}\"></ng-template>\n        </div>\n    </div>\n\n    <div class=\"col-12 col-md-2 indicator-wrapper\">\n        <ng-container *ngFor=\"let slide of slides\">\n            <div class=\"slide-indicator\"\n                 [id]=\"slide.id\"\n                 *ngIf=\"slide.id !== activeId\"\n                 (click)=\"cycleToSelected(slide.id, getSlideEventDirection(activeId, slide.id))\">\n                <ng-template *ngTemplateOutlet=\"slide.tplRef; context: {active: activeId, id: slide.id}\"></ng-template>\n            </div>\n        </ng-container>\n\n        <a class=\"control control-prev\" role=\"button\" (click)=\"cycleToPrev()\">\n            <span class=\"control-icon control-prev-icon\" aria-hidden=\"true\"></span>\n            <span class=\"sr-only\">Previous</span>\n        </a>\n\n        <a class=\"control control-next\" role=\"button\" (click)=\"cycleToNext()\">\n            <span class=\"control-icon control-next-icon\" aria-hidden=\"true\"></span>\n            <span class=\"sr-only\">Next</span>\n        </a>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/carousel/ngb-carousel-modified/ngb-carousel-modified.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mainImage {\n  padding: 0;\n  border-bottom-left-radius: 8px; }\n  @media (min-width: 768px) {\n    .mainImage {\n      overflow: hidden; } }\n  .mainImage img {\n    max-width: 100%; }\n  .indicator-wrapper {\n  padding: 0;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  overflow: hidden; }\n  @media (min-width: 768px) {\n    .indicator-wrapper {\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: reverse;\n          -ms-flex-flow: column-reverse;\n              flex-flow: column-reverse;\n      border-bottom-right-radius: 8px; } }\n  .indicator-wrapper .slide-indicator {\n    -webkit-box-flex: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1;\n    -webkit-transition: opacity, 0.3s;\n    transition: opacity, 0.3s; }\n  .indicator-wrapper .slide-indicator:hover {\n      opacity: .8;\n      -webkit-transition: opacity, 0.6s;\n      transition: opacity, 0.6s; }\n  .indicator-wrapper:hover .control {\n    opacity: 1;\n    -webkit-transition: opacity 0.6s;\n    transition: opacity 0.6s; }\n  .indicator-wrapper .control {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    margin: 3px 0;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -ms-flex-item-align: center;\n        align-self: center;\n    position: absolute;\n    opacity: 0;\n    -webkit-transition: opacity 0.6s;\n    transition: opacity 0.6s; }\n  @media (max-width: 768px) {\n      .indicator-wrapper .control {\n        display: none; } }\n  .indicator-wrapper .control .control-icon {\n      width: 30px;\n      height: 30px;\n      border: #6e6e6e 1px solid;\n      border-radius: 50%;\n      background-color: #141414;\n      position: relative;\n      opacity: 1;\n      -webkit-transition: opacity, background-color, 0.6s;\n      transition: opacity, background-color, 0.6s; }\n  .indicator-wrapper .control .control-icon:hover {\n        background-color: #3c3c3c;\n        -webkit-transition: background-color, 0.6s;\n        transition: background-color, 0.6s; }\n  .indicator-wrapper .control .control-icon:before {\n        content: '';\n        display: block;\n        background-color: #828282;\n        width: 10px;\n        height: 4px;\n        position: absolute;\n        left: 50%;\n        -webkit-transform: translateX(-5px);\n                transform: translateX(-5px); }\n  .indicator-wrapper .control .control-icon:after {\n        content: '';\n        border-left: 9px solid transparent;\n        border-right: 9px solid transparent;\n        position: absolute;\n        left: 50%;\n        -webkit-transform: translateX(-9px);\n                transform: translateX(-9px); }\n  .indicator-wrapper .control-prev {\n    top: 0; }\n  .indicator-wrapper .control-prev .control-prev-icon:before {\n      top: 16px; }\n  .indicator-wrapper .control-prev .control-prev-icon:after {\n      border-bottom: 11px solid #828282;\n      top: 5px; }\n  .indicator-wrapper .control-next {\n    bottom: 0; }\n  .indicator-wrapper .control-next .control-next-icon:before {\n      bottom: 16px; }\n  .indicator-wrapper .control-next .control-next-icon:after {\n      border-top: 11px solid #828282;\n      bottom: 5px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/carousel/ngb-carousel-modified/ngb-carousel-modified.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgbCarouselModifiedComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NgbCarouselModifiedComponent = /** @class */ (function (_super) {
    __extends(NgbCarouselModifiedComponent, _super);
    function NgbCarouselModifiedComponent(config) {
        var _this = _super.call(this, config) || this;
        _this.config = config;
        _this.interval = 10000;
        return _this;
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(),
        __metadata("design:type", Object)
    ], NgbCarouselModifiedComponent.prototype, "interval", void 0);
    NgbCarouselModifiedComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'ngb-carousel-modified',
            template: __webpack_require__("../../../../../src/app/carousel/ngb-carousel-modified/ngb-carousel-modified.component.html"),
            styles: [__webpack_require__("../../../../../src/app/carousel/ngb-carousel-modified/ngb-carousel-modified.component.scss")],
            host: {
                'class': 'carousel slide',
                '[style.display]': '"block"',
                'tabIndex': '0',
                '(mouseenter)': 'pause()',
                '(mouseleave)': 'cycle()'
            }
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbCarouselConfig */]])
    ], NgbCarouselModifiedComponent);
    return NgbCarouselModifiedComponent;
}(__WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["a" /* NgbCarousel */]));



/***/ }),

/***/ "../../../../../src/app/slide.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SlideService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SlideService = /** @class */ (function () {
    function SlideService() {
    }
    SlideService.prototype.getSlides = function () {
        var subject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["a" /* Subject */]();
        setTimeout(function () {
            subject.next(SLIDES);
            subject.complete();
        }, 100);
        return subject;
    };
    SlideService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], SlideService);
    return SlideService;
}());

var SLIDES = [
    {
        id: 1,
        mainImage: '/assets/lorempixel-1.jpg',
        smallImage: '/assets/lorempixel-1sm.jpg',
        title: 'I can see you want that cheeseburger over there.',
        subtitle: "It's mine just as soon as I can get this camera out of my eye."
    },
    {
        id: 1,
        mainImage: '/assets/lorempixel-2.jpg',
        smallImage: '/assets/lorempixel-2sm.jpg',
        title: "Please don't make me cry.",
        subtitle: "I love cheeseburgers. I need that cheeseburger."
    },
    {
        id: 1,
        mainImage: '/assets/lorempixel-3.jpg',
        smallImage: '/assets/lorempixel-3sm.jpg',
        title: 'You want that cheeseburger?',
        subtitle: 'Ask yourself one question... "Do I feel lucky?" Well, do you ya?'
    },
    {
        id: 1,
        mainImage: '/assets/lorempixel-4.jpg',
        smallImage: '/assets/lorempixel-4sm.jpg',
        title: 'Mmmmm...Cheeseburger!',
        subtitle: 'Go ahead, have a cheeseburger.'
    }
];


/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map