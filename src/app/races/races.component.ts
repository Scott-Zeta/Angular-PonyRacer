import { Component } from '@angular/core';
import { Race } from '../models/race.model';

@Component({
  selector: 'pr-races',
  standalone: true,
  imports: [],
  templateUrl: './races.component.html',
  styleUrl: './races.component.css'
})
export class RacesComponent {
  races: Race[] = [
    { id: 1, name: 'Lyon' },
    { id: 2, name: 'London' }
  ];
}
