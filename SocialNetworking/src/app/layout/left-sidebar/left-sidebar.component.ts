import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-left-sidebar',
  templateUrl: './left-sidebar.component.html',
  styleUrls: ['./left-sidebar.component.scss']
})
export class LeftSidebarComponent implements OnInit {

  elements: Array<{ description: string, icon: string, link: string, selected: boolean }> = [
    { description: 'Página Inicial', icon: 'home', link: '/home', selected: false },
    { description: 'Explorar', icon: 'view_carousel', link: '/explore', selected: false },
    { description: 'Mensagens', icon: 'message', link: '/', selected: false },
  ];

  constructor(private router: Router) { }

  ngOnInit(): void {
    const rotaAtual = this.router.url;
    this.elements.map(e => {
      if (e.link === rotaAtual) {
        e.selected = true;
      }
      return e;
    });
  }

}
