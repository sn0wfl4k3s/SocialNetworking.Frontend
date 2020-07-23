import { Component, OnInit } from '@angular/core';
import { LoginRequest } from '../models/login-request';
import { opacityAnimation } from 'src/app/animations/opacidade.animation';

@Component({
  selector: 'app-login-bloco',
  templateUrl: './login-bloco.component.html',
  styleUrls: ['./login-bloco.component.scss'],
  animations: [opacityAnimation]
})
export class LoginBlocoComponent implements OnInit {

  model = new LoginRequest();

  constructor() { }

  ngOnInit(): void {
  }

}
