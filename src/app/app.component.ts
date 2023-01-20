import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  newMemberName: string = "";
  members: string[] = [];
  errMessage: string = '';
  numberOfTeams: number | "" = "";

  teams: string[][] = []

  onInput(member: string) {
    this.newMemberName = member;
  }

  onNumberOfTeamsInput(count: string) {
    this.numberOfTeams = Number(count);
  }

  addMember() {
    if (!this.newMemberName) {
      this.errMessage = "Name can't be empty!!"
      return;
    }
    this.errMessage = ""
    this.members.push(this.newMemberName);
    this.newMemberName = ""
    // console.log(this.members)
  }

  generateTeams() {
    if (!this.numberOfTeams || this.numberOfTeams <= 0) {
      this.errMessage = "Invalid number of teams"
      return;
    }
    if (this.members.length < this.numberOfTeams) {
      this.errMessage = "Not Enough teams"
      return;
    }
    this.errMessage = ""
    const allMembers = [...this.members]

    while (allMembers.length) {
      for (let i = 0; i < this.numberOfTeams; i++) {
        const randomIndex = Math.floor(Math.random() * allMembers.length);
        const member = allMembers.splice(randomIndex, 1)[0];

        if (!member) break;

        if (this.teams[i]) {
          this.teams[i].push(member);
        } else {
          this.teams[i] = [member];
        }
      }
    }
    this.members = [];
    this.numberOfTeams = "";
    console.log(this.teams)
  }
}
