import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Mision } from '../../../data/interface/mision';

@Component({
  selector: 'app-list-mision',
  imports: [CommonModule],
  templateUrl: './list-mision.html',
  styleUrl: './list-mision.css',
})
export class ListMision {

  @Input() listaMisiones: Mision[] = [];

}
