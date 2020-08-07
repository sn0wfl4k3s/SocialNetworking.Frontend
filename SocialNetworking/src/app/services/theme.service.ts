import { Injectable } from '@angular/core';
import { Theme } from '../models/theme';
import { isNullOrUndefined } from 'util';

@Injectable({
    providedIn: 'root'
})
export class ThemeService {

    constructor() { }

    setTheme(theme: Theme): void {
        const body = document.getElementById('application-content-app');
        body.classList.forEach(c => {
            if (c.endsWith('theme')) {
                body.classList.remove(c);
            }
        });
        body.classList.add(theme.toString());
        localStorage.setItem('theme', theme.toString());
    }

    getTheme(): Theme {
        const theme = localStorage.getItem('theme');
        // tslint:disable-next-line: deprecation
        if (isNullOrUndefined(theme)){
            this.setTheme(Theme.Light);
            return this.getTheme();
        }
        if (theme === Theme.Light.toString()){
            return Theme.Light;
        } else {
            return Theme.Dark;
        }
    }
}
