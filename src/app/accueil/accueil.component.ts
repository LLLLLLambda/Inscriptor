import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDatepicker } from '@angular/material';
import Etudiant from '../etudiant';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
  etudiants: Etudiant[]
  prenom: string
  nom: string
  mail: string
  dateDeNaissance: Date

  ngOnInit() {
  }

  isGoodFormat() {
    return true;
  }

  addStudient(){
    if(this.isGoodFormat()) {
      console.log('prenom : ' + this.prenom,' nom : ' + this.nom, ' mail : ' + this.mail, ' datedenaisance : ' + this.dateDeNaissance)
      this.etudiants.push({
        prenom: this.prenom,
        nom: this.nom,
        mail: this.mail,
        dateDeNaissance: this.dateDeNaissance,
      })
    }
  }
}
