import { Component, OnInit, Input } from '@angular/core';
import Etudiant from '../Etudiant';

@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrls: ['./etudiant.component.css']
})
export class EtudiantComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input()
  e: Etudiant;
}
