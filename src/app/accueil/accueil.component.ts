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
  etudiants: Etudiant[] = []

  model: FormGroup

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.model = this.formBuilder.group({
      email: ['', [
        Validators.required,
        emailValidator()
      ]],
      datedenaissance: [null, [
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
  get datedenaissance() {
    return this.model.get('datedenaissance')
  }
  get prenom() {
    return this.model.get('prenom')
  }
  get nom() {
    return this.model.get('nom')
  }

  addStudient(){
    if(this.model.status === "VALID") {
      this.etudiants.push({
        prenom: this.model.value.prenom,
        nom: this.model.value.nom,
        mail: this.model.value.email,
        dateDeNaissance: this.model.value.datedenaissance,
      })
    }
    console.log('rrr', this.etudiants)
  }
}
