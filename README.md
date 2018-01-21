# AppStore Carousel
I decided to play around with hacking the NG-Bootstrap Carousel component and try to make it look a bit more like the Apple AppStore desktop carousel and serve the data up from a little Angular service.

The idea was to use as much as the core ngb-carousel structure as possible, so with some component inheritance I was able to override the original template with my own, but still use the original directive layout (below).
```html
    <ngb-carousel>
        <ng-template ngbSlide>
             slide content here
        </ng-template ngbSlide>
    </ngb-carousel>
```

Styling for the most part is done with SCSS within the components with the exception of the animation (fade) styles which need to be outside the components on the main styles.css due to the way angular scopes styles within components.

While the Apple desktop AppStore isn't responsive (it is a desktop app after all), I had to make this one at least a bit responsive. So at the small breakpoints the layout will shift to a more vertical design.

A fun little bit of CSS are the control buttons which are entirely created with CSS without any images. It's always nice to be able to create things like that without images if possible. Sure, not a big data savings over an SVG or sprite, but why not save a little if you can.

Enjoy.
Live example: https://davidschutze.github.io/HackOnNgBootstrap/index.html

___



This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.


## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

