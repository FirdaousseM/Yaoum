import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Module } from '../models/module.model';
import { Chapitre } from '../models/chapitre.model';

@Injectable({
  providedIn: 'root'
})



export class DataService {

  adresse: string = 'http://127.0.0.1:8000/api/';

  constructor(private httpClient: HttpClient) { }

  /** MODULE **/
  // get all modules
  getAllModulesData() {
    return this.httpClient.get(this.adresse + 'modules');
  }
  // get 1 module par ID
  getModuleById(idMod: number) {
    return this.httpClient.get(this.adresse + 'modules/' + idMod);
  }

  // create module
  createModule(donneeModule: Module) {
    return this.httpClient.post(this.adresse + 'modules/create', donneeModule);
  }

  // update module
  updateModule(donneeModule: Module, idMod: number) {
    return this.httpClient.put(this.adresse + 'modules/' + idMod + '/edit', donneeModule);
  }

  // delete module
  deleteModule(idMod: number) {
    return this.httpClient.delete(this.adresse + 'modules/' + idMod + '/edit');
  }

  /** CHAPITRE **/

  // get all chapitres
  getChapitreEditable(idMod: number) {
    return this.httpClient.get(this.adresse + 'modules/' + idMod + '/edit/content');
  }
  // get 1 chapitre by id
  getChapitre(idMod: number, idChap: number) {
    return this.httpClient.get(this.adresse + 'modules/' + idMod + '/edit/content/' + idChap);
  }
  // create chapitre
  createChapitre(donneeChapitre: Chapitre, idMod: number) {
    return this.httpClient.post(this.adresse + 'modules/' + idMod + '/edit/content/create', donneeChapitre);
  }
  // update chapitre
  updateChapitre(donneeChapitre: Chapitre, idMod: number, idChap: number) { 
    return this.httpClient.put(this.adresse + 'modules/' + idMod + '/edit/content/' + idChap, donneeChapitre);
  }
  // delete chapitre
  deleteChapitre(idMod: number, idChap: number) {
    return this.httpClient.delete(this.adresse + 'modules/' + idMod + '/edit/content/' + idChap);
  }
  // get ordreDoc
  getOrdreDoc(idMod: number) {
    return this.httpClient.get(this.adresse + 'modules/' + idMod + '/edit/content/create');
  }
  
}
