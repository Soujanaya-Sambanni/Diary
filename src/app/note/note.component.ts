import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service'; 
import { datamodel } from '../datamodel';


@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent  {
  noteform!: FormGroup;
  data!: datamodel[];

  constructor(private formbuilder: FormBuilder, private api: ApiService) { }

  ngOnInit(): void {
    this.noteform = this.formbuilder.group({
      id: ['', Validators.required],
      date: ['', Validators.required],
      subject: ['', Validators.required],
      description: ['', Validators.required],
      feeling: ['', Validators.required],
      

    })
    this.getnote();
  }

  addnote(data: datamodel) {
    //console.log(data)//
    this.api.addnote(data).subscribe((res => {
      this.noteform.reset();
      this.getnote();
    }))
    

  }

  getnote() {
    this.api.getnote().subscribe(res => {
      this.data = res;
    })
  }

  deletenote(dataid: number) {
    this.api.deletenote(dataid).subscribe(res => {
      this.deletenote(dataid);
    })
    this.getnote();
  }

  
  }


