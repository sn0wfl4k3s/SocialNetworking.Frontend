import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '../layout/layout.module';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { HomeBlocoComponent } from './home-bloco/home-bloco.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
];


@NgModule({
  declarations: [HomePageComponent, HomeBlocoComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    LayoutModule,
  ]
})
export class HomeModule { }
