import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home-bloco',
  templateUrl: './home-bloco.component.html',
  styleUrls: ['./home-bloco.component.scss']
})
export class HomeBlocoComponent implements OnInit {

  constructor(private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle('Página Principal');
  }

}
