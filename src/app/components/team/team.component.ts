import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent {

  @Input() team: string[] = []
  @Input() index: number = 0
  currentDate: Date = new Date();


}
