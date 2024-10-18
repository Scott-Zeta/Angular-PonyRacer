import { Component, Input } from '@angular/core';
import { Race } from '../models/race.model';

@Component({
  selector: 'pr-race',
  standalone: true,
  imports: [],
  templateUrl: './race.component.html',
  styleUrl: './race.component.css'
})
export class RaceComponent {
  @Input({ required: true }) raceModel!: Race;
}
