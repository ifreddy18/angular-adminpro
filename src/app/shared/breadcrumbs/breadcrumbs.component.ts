import { Component, OnDestroy } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: [
  ]
})
export class BreadcrumbsComponent implements OnDestroy {

  titulo: string;
  tituloSubs$: Subscription;

  constructor(private router: Router) {

    // this.getDataRuta();

    this.tituloSubs$ = this.getDataRutaOp().subscribe(({titulo}) => {
                          this.titulo = titulo;
                          document.title = `AdminPro | ${ titulo }`;
                        });

  }

  ngOnDestroy(): void {
    this.tituloSubs$.unsubscribe();
  }


  getDataRuta(): void {

    this.router.events
    .pipe(
      filter( event => event instanceof ActivationEnd ),
      filter( (event: ActivationEnd) =>  event.snapshot.firstChild === null ),
      map( (event: ActivationEnd) => event.snapshot.data )
    ).subscribe( ({titulo}) => {
      this.titulo = titulo;
      document.title = `AdminPro | ${ titulo }`;
    });

  }

  getDataRutaOp(): Observable<any> {

    return this.router.events
      .pipe(
        filter( event => event instanceof ActivationEnd ),
        filter( (event: ActivationEnd) =>  event.snapshot.firstChild === null ),
        map( (event: ActivationEnd) => event.snapshot.data )
      );
  }


}
