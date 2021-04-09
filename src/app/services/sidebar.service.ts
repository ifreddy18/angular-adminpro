import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any[] = [
    {
      title: 'Dashboard',
      icon: 'mdi mdi-gauge',
      submenus: [
        { title: 'Main', url: ''},
        { title: 'ProgressBar', url: 'progress'},
        { title: 'Graphic', url: 'graphic1'}
      ]
    }
  ];

  constructor() { }
}
