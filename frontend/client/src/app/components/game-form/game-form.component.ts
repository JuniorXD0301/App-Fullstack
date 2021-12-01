import { Component, OnInit } from '@angular/core';
import { Game } from 'src/app/models/game';
import { GameServiceService } from 'src/app/services/game-service.service';

@Component({
  selector: 'app-game-form',
  templateUrl: './game-form.component.html',
  styleUrls: ['./game-form.component.css']
})
export class GameFormComponent implements OnInit {

  game: Game = {
    id: 0,
    title: "",
    description: "",
    image: "",
    created_at: new Date()
  };

  constructor(private gameService: GameServiceService) { }

  ngOnInit(): void {
  }

  saveNewGame(){
    delete this.game.created_at;
    delete this.game.id;
    this.gameService.saveGame(this.game)
    .subscribe(
      res =>{
        console.log(res);
      },
      err => console.error(err)
    )
  }

}
