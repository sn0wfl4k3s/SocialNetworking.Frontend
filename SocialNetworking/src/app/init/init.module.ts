import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PageLoginComponent } from './page-login/page-login.component';
import { BlocoLoginComponent } from './bloco-login/bloco-login.component';

const routes: Routes = [
  { path: '', component: PageLoginComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PageLoginComponent, BlocoLoginComponent],
})
export class InitModule { }
