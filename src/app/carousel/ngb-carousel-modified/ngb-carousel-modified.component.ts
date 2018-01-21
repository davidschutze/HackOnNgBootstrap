import {Component, Input} from '@angular/core';
import {NgbCarousel, NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'ngb-carousel-modified',
    templateUrl: './ngb-carousel-modified.component.html',
    styleUrls: ['./ngb-carousel-modified.component.scss'],
    host: {
        'class': 'carousel slide',
        '[style.display]': '"block"',
        'tabIndex': '0',
        '(mouseenter)': 'pause()',
        '(mouseleave)': 'cycle()'
    }
})
export class NgbCarouselModifiedComponent extends NgbCarousel {
    constructor(private config: NgbCarouselConfig) {
        super(config);
    }

    @Input() interval = 10000;
}
