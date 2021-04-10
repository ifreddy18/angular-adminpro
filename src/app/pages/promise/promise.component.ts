import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styles: [
  ]
})
export class PromiseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    // this.ejemploPromesa();

    this.getUsuarios().then( users => console.log(users));

  }

  ejemploPromesa(): void {
    const promesa = new Promise((resolve, reject) => {

      if ( false ) {
        resolve('Hola mundo');
      } else {
        reject('Algo salio mal');
      }

    });

    promesa.then( mensaje => console.log(mensaje))
           .catch( error => console.warn('Este es el error en catch: ', error));


    console.log('Fin de ngOnInit');
  }

  getUsuarios(): Promise<any> {

    // fetch('https://reqres.in/api/users?page=2')
        // .then( resp => {
        //   resp.json().then( respJson => console.log(respJson));
        // });
          // Las 3 lineas superiores son iguales a las siguientes 2
        // .then( resp => resp.json())
        // .then( body => console.log(body.data));

    // Para que la funcion refrese una promesa hay que resolver de la siguiente manera

    return new Promise( resolve => {

      // Resulmen del fetch de arriba
      fetch('https://reqres.in/api/users?page=2')
          .then( resp => resp.json())
          .then( body => resolve(body.data));

    });

  }

}
