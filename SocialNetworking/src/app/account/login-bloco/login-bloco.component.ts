import { Component, OnInit } from '@angular/core';
import { opacityAnimation } from 'src/app/animations/opacidade.animation';
import { LoginRequest } from 'src/app/models/login';
import { AccountService } from 'src/app/services/account.service';
import { NgBlockUI, BlockUI } from 'ng-block-ui';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-bloco',
  templateUrl: './login-bloco.component.html',
  styleUrls: ['./login-bloco.component.scss'],
  animations: [opacityAnimation]
})
export class LoginBlocoComponent implements OnInit {

  model = new LoginRequest();

  @BlockUI() blockUI: NgBlockUI;

  constructor(
    private accountService: AccountService,
    private snackBar: MatSnackBar,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  entrar() {
    this.blockUI.start('Loding...');
    this.accountService.login(this.model)
      .then(async (result) => {
        console.log(result);
        this.blockUI.stop();
        this.snackBar.open('logado com sucesso!', '', {
          duration: 2 * 1000,
          horizontalPosition: 'end',
          verticalPosition: 'bottom'
        });
        this.router.navigate(['/home']);
      })
      .catch(error => {
        this.blockUI.stop();
      });
  }
}
