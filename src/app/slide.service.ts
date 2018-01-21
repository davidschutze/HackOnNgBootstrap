import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {ISlide} from './slide.model';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class SlideService {

    constructor() {
    }

    getSlides(): Observable<ISlide[]> {
        let subject = new Subject<ISlide[]>();
        setTimeout(() => {
            subject.next(SLIDES); subject.complete();
        }, 100);
        return subject;
    }

}

const SLIDES: ISlide[] = [
    {
        id: 1,
        mainImage: 'assets/lorempixel-1.jpg',
        smallImage: 'assets/lorempixel-1sm.jpg',
        title: 'I can see you want that cheeseburger over there.',
        subtitle: "It's mine just as soon as I can get this camera out of my eye."
    },
    {
        id: 1,
        mainImage: 'assets/lorempixel-2.jpg',
        smallImage: 'assets/lorempixel-2sm.jpg',
        title: "Please don't make me cry.",
        subtitle: "I love cheeseburgers. I need that cheeseburger."
    },
    {
        id: 1,
        mainImage: 'assets/lorempixel-3.jpg',
        smallImage: 'assets/lorempixel-3sm.jpg',
        title: 'You want that cheeseburger?',
        subtitle: 'Ask yourself one question... "Do I feel lucky?" Well, do you ya?'
    },
    {
        id: 1,
        mainImage: 'assets/lorempixel-4.jpg',
        smallImage: 'assets/lorempixel-4sm.jpg',
        title: 'Mmmmm...Cheeseburger!',
        subtitle: 'Go ahead, have a cheeseburger.'
    }
];
