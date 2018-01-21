import {Component, OnInit} from '@angular/core';
import {SlideService} from '../slide.service';
import {ISlide} from '../slide.model';

@Component({
    selector: 'app-carousel',
    templateUrl: './carousel.component.html',
    styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
    slides: ISlide[];

    constructor(private slideService: SlideService) {
    }

    ngOnInit() {
       this.slideService.getSlides().subscribe(slides => {
           this.slides = slides;
       });
    }
}

