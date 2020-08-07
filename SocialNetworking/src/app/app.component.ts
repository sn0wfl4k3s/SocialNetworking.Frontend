import { Component, OnInit } from '@angular/core';
import { ThemeService } from './services/theme.service';
import { Theme } from './models/theme';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'SocialNet';
  islight = false;

  constructor(private themeService: ThemeService) { }

  ngOnInit(): void {
    this.islight = this.themeService.getTheme() === Theme.Light;
  }


}
