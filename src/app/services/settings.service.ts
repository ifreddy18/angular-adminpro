import { renderFlagCheckIfStmt } from '@angular/compiler/src/render3/view/template';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  private linkTheme = document.getElementById('theme');

  constructor() {
    this.loadTheme();
  }

  loadTheme(): void {
    const themeUrl = localStorage.getItem('themeAdminPro') || './assets/css/colors/default-dark.css';
    this.linkTheme.setAttribute('href', themeUrl);
  }

  changeTheme(theme: string): void {

    const url = `./assets/css/colors/${ theme }.css`;
    this.linkTheme.setAttribute('href', url);
    localStorage.setItem('themeAdminPro', url);
    this.checkCurrentTheme();

  }

  checkCurrentTheme(): void {

    const links = document.querySelectorAll('.selector');

    links.forEach( element => {

      element.classList.remove('working');
      const btnTheme = element.getAttribute('data-theme');
      const btnThemeUrl = `./assets/css/colors/${ btnTheme }.css`;
      const currentTheme = this.linkTheme.getAttribute('href');

      if (btnThemeUrl === currentTheme){
        element.classList.add('working');
      }

    });
  }
}
