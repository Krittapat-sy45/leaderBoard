import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AutoCompleteCompleteEvent, Players } from './players';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  users: Players[] = [];
  selectedOption: number = 0;
  name: string[] = [];


  constructor(private firestore: AngularFirestore) { }

  ngOnInit(): void {
    this.firestore.collection('users').valueChanges().subscribe(data => {
      this.users = data.map((player: any) => {
        let allScore =
          (player.score1 || 0) + (player.score2 || 0) + (player.score3 || 0) + (player.score4 || 0) + (player.score5 || 0); return {
            ...player,
            allScore: allScore
          } as Players;
      });
      this.users.sort((a, b) => b.allScore - a.allScore);
      this.name = this.users.map(user => user.name)

    });
  }

  showAllScore() {
    this.selectedOption = 0;
    this.users.sort((a, b) => b.allScore - a.allScore);
  }

  showScore1() {
    this.selectedOption = 1;
    this.users.sort((a, b) => {
      const scoreA = a.score1 ?? 0;
      const scoreB = b.score1 ?? 0;
      return scoreB - scoreA;
    });
  }

  showScore2() {
    this.selectedOption = 2;
    this.users.sort((a, b) => {
      const scoreA = a.score2 ?? 0;
      const scoreB = b.score2 ?? 0;
      return scoreB - scoreA;
    });
  }

  showScore3() {
    this.selectedOption = 3;
    this.users.sort((a, b) => {
      const scoreA = a.score3 ?? 0;
      const scoreB = b.score3 ?? 0;
      return scoreB - scoreA;
    });
  }

  showScore4() {
    this.selectedOption = 4;
    this.users.sort((a, b) => {
      const scoreA = a.score4 ?? 0;
      const scoreB = b.score4 ?? 0;
      return scoreB - scoreA;
    });
  }

  showScore5() {
    this.selectedOption = 5;
    this.users.sort((a, b) => {
      const scoreA = a.score5 ?? 0;
      const scoreB = b.score5 ?? 0;
      return scoreB - scoreA;
    });
  }

}
