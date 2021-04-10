import { Component, OnDestroy } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';
import { filter, map, retry, take } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ]
})
export class RxjsComponent implements OnDestroy {

  intervaloSubs: Subscription;

  constructor() {

    // // this.ejemploObservable();
    // this.retornaObservable().pipe(
    //         retry()
    //   // tslint:disable-next-line: deprecation
    // ).subscribe(
    //       resp => console.log({resp}),
    //       error => console.warn(error),
    //       () => console.log('Complete'));



    this.intervaloSubs = this.retornaIntervalo().subscribe( console.log );


  }
  ngOnDestroy(): void {
    this.intervaloSubs.unsubscribe();
  }

  retornaIntervalo(): Observable<number>  {

    const intervalo$ = interval(100)
                          .pipe(
                            map( valor => valor + 1),
                            filter( valor => ( valor % 3 === 0 ) ? true : false ),
                            // take(10),
                          );

    return intervalo$;
  }

  ejemploObservable(): void {

    let i = -1;

    const obs$ = new Observable( observer => {


      const interval = setInterval( () => {

        i++;
        observer.next(i);
        // console.log(i);

        if ( i === 4) {
          observer.complete();
          clearInterval(interval);
        }

        if ( i === 2 ) {
          observer.error('i llego a 2');
        }

      }, 1000);


    });

    obs$.pipe(
      retry()


      // tslint:disable-next-line: deprecation
    ).subscribe(
          resp => console.log({resp}),
          error => console.warn(error),
          () => console.log('Complete'));


  }

  retornaObservable(): Observable<number> {

    let i = -1;

    const obs$ = new Observable<number>( observer => {

      const interval = setInterval( () => {

        i++;
        observer.next(i);
        // console.log(i);

        if ( i === 4) {
          observer.complete();
          clearInterval(interval);
        }

        if ( i === 2 ) {
          observer.error('i llego a 2');
        }

      }, 1000);


    });

    return obs$;

  }

}
