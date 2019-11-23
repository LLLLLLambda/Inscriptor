import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDatepicker } from '@angular/material';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
  prenom: string
  nom: string
  mail: string
  dateDeNaissance: Date
  @ViewChild(MatDatepicker, {static: false}) dateDeNaissancee: MatDatepicker<Date>;

  ngOnInit() {
  }

  addStudient(){
    console.log('prenom : ' + this.prenom,' nom : ' + this.nom, ' mail : ' + this.mail, ' datedenaisance : ' + this.dateDeNaissance)
  }

}
