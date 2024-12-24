import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Residence } from '../models/residence/residence.model';

@Injectable({
  providedIn: 'root'
})
export class ResidenceService {
  residenceUrl ='http://localhost:3000/residences'
  constructor(private http: HttpClient ) { }




  getResidences() {
    return this.http.get<Residence[]>(this.residenceUrl);
  }
  addResidence(residence: Residence) {
    return this.http.post(this.residenceUrl, residence);
  }
  deleteResidence(id: number) {
    return this.http.delete(`${this.residenceUrl}/${id}`);
  }
  updateResidence(residence: Residence) {
    return this.http.put(`${this.residenceUrl}/${residence.id}`, residence);
  }
  getResidenceById(id: number) {
    return this.http.get<Residence>(`${this.residenceUrl}/${id}`);
  }

}
