import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {CarouselComponent} from './carousel/carousel.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgbCarouselModifiedComponent} from './carousel/ngb-carousel-modified/ngb-carousel-modified.component';
import {CommonModule} from '@angular/common';
import {SlideService} from './slide.service';



@NgModule({
    declarations: [
        AppComponent,
        CarouselComponent,
        NgbCarouselModifiedComponent
    ],
    imports: [
        BrowserModule,
        CommonModule,
        NgbModule.forRoot()
    ],
    providers: [SlideService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
