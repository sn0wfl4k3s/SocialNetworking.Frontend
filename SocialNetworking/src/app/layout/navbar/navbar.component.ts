import { Component, OnInit } from '@angular/core';
import { opacityAnimation } from 'src/app/animations/opacidade.animation';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  animations: [opacityAnimation]
})
export class NavbarComponent implements OnInit {

  title = 'SocialNet';

  constructor() { }

  ngOnInit(): void {
  }

}
