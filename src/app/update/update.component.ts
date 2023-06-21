import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { datamodel } from '../datamodel'; 

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {
  public dataid!: number;
  public diary!: | datamodel;
  
  constructor(private activedroute: ActivatedRoute, private router: Router, private api: ApiService) { }

  ngOnInit(): void {
    this.activedroute.paramMap.subscribe((param: Params) => {
      this.dataid = param['get']("id");
      //console.log("data id is",this.dataid)

    })
    this.api.fetchdata(this.dataid).subscribe((data: datamodel) => {
      this.diary = data;
    })
  }

  update() {
    this.api.updatenote(this.diary, this.dataid).subscribe((res: datamodel) => {
      this.router.navigate(["/note"])
    })
  }
}
