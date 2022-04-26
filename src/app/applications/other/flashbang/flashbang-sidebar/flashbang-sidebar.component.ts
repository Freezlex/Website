import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flashbang-sidebar',
  templateUrl: './flashbang-sidebar.component.html',
  styleUrls: ['./flashbang-sidebar.component.sass']
})
export class FlashbangSidebarComponent implements OnInit {

  text: string[] = ["www.freezlex.com", "1199837265778 :: 828388 ? 38", "twitch.tv/Freezlex",  `${new Date().toDateString()}()`]
  characters: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!_-?;:$*ù^ "

  constructor() { }

  ngOnInit(): void {
  }

}
