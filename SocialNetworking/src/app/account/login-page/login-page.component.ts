import { Component, OnInit } from '@angular/core';
import { opacityAnimation } from 'src/app/animations/opacidade.animation';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
  animations: [opacityAnimation]
})
export class LoginPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
