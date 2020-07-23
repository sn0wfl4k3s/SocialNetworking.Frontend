import { Component, OnInit } from '@angular/core';
import { LoginRequest } from '../models/login-request';

@Component({
  selector: 'app-login-bloco',
  templateUrl: './login-bloco.component.html',
  styleUrls: ['./login-bloco.component.scss']
})
export class LoginBlocoComponent implements OnInit {

  model = new LoginRequest();

  constructor() { }

  ngOnInit(): void {
  }

}
