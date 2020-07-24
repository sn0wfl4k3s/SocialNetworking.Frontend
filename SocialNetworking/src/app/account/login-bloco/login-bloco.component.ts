import { Component, OnInit } from '@angular/core';
import { opacityAnimation } from 'src/app/animations/opacidade.animation';
import { LoginRequest } from 'src/app/models/login';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-login-bloco',
  templateUrl: './login-bloco.component.html',
  styleUrls: ['./login-bloco.component.scss'],
  animations: [opacityAnimation]
})
export class LoginBlocoComponent implements OnInit {

  model = new LoginRequest();

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
  }

  entrar() {
    this.accountService.login(this.model)
      .then(result => {
        console.log(result);
      });
  }
}
