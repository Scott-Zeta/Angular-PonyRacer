import { Component, Input } from '@angular/core';
import { PonyModel } from '../models/pony.model';

@Component({
  selector: 'pr-pony',
  standalone: true,
  imports: [],
  templateUrl: './pony.component.html',
  styleUrl: './pony.component.css'
})
export class PonyComponent {
  @Input({ required: true }) ponyModel!: PonyModel;
}
