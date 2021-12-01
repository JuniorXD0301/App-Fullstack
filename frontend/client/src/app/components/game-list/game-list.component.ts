import { Component, OnInit } from '@angular/core';

import { GameServiceService } from 'src/app/services/game-service.service';
@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {

  games: any = []

  constructor(private gameService: GameServiceService ) { }

  ngOnInit(): void {
    this.gameService.getGames().subscribe(
      res => {
        this.games = res;
      },
      er => console.error(er),
    );
  }

}
