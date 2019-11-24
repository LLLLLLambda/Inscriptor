import { Component, OnInit, ViewChild } from '@angular/core';
import Etudiant from '../etudiant';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { emailValidator } from '../email.validator';
import { ddnValidator } from './ddn.validator';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
  etudiants: Etudiant[]
  /*prenom: string
  nom: string
  mail: string
  dateDeNaissance: Date*/

  model: FormGroup

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.model = this.formBuilder.group({
      email: ['', [
        Validators.required,
        emailValidator()
      ]],
      datedenaisance: [null, [
        Validators.required,
        ddnValidator()
      ]],
      nom: ['', []],
      prenom: ['', []]
    })
  }

  get email() {
    return this.model.get('email')
  }
  get datedenaisance() {
    return this.model.get('datedenaisance')
  }

  isGoodFormat() {
    return true;
  }

  addStudient(){
    if(this.isGoodFormat()) {
      console.log('hop : ', this.model)
     /* console.log('prenom : ' + this.prenom,' nom : ' + this.nom, ' mail : ' + this.mail, ' datedenaisance : ' + this.dateDeNaissance)*/
      /*
      this.etudiants.push({
        prenom: this.prenom,
        nom: this.nom,
        mail: this.mail,
        dateDeNaissance: this.dateDeNaissance,
      })*/
    }
  }
}
