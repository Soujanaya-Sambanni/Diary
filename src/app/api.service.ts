import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { datamodel } from './datamodel';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url = "http://localhost:3000/note";

  constructor(private http: HttpClient) { }

  //add note
  addnote(data: datamodel) {
    return this.http.post<datamodel>("http://localhost:3000/note", data);
  }

  //get note
  getnote() {
    return this.http.get<datamodel[]>("http://localhost:3000/note");
  }

  //fetch data
  fetchdata(id: number) {
    return this.http.get<datamodel>("http://localhost:3000/note/" + id);
  }

  //delete
  deletenote(id: number) {
    return this.http.delete<datamodel>("http://localhost:3000/note/" + id)
  }

  //update
  updatenote(data: datamodel, id: number) {
    return this.http.put<datamodel>("http://localhost:3000/note/" + id, data);
  }

  //search
  searchnote(name: string) {
    return this.http.get<any>(`${this.url}?name=${name}`);
  }
}