import { Component, OnInit } from '@angular/core';
import { Login } from '../models/login';

@Component({
  selector: 'app-login-bloco',
  templateUrl: './login-bloco.component.html',
  styleUrls: ['./login-bloco.component.scss']
})
export class LoginBlocoComponent implements OnInit {

  model = new Login();

  constructor() { }

  ngOnInit(): void {
  }

}
