import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.sass']
})
export class HomepageComponent implements OnInit {

  smallText = {top: "Merci pour les 500 follows", bottom: "Vous êtes incroyables ❤️"}
  actualYear = 0

  constructor() { }

  ngOnInit(): void {
    this.actualYear = new Date().getFullYear()
  }

}
