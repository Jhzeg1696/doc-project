import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
@Component({
  selector: 'app-edit-file',
  templateUrl: './edit-file.component.html',
  styleUrls: ['./edit-file.component.scss']
})
export class EditFileComponent implements OnInit {
  documentID : any;
  documentForm = new FormGroup({
    propertie1: new FormControl(''),
    propertie2: new FormControl(''),
    propertie3: new FormControl(''),
    propertie4: new FormControl(''),
    propertie5: new FormControl(''),
    propertie6: new FormControl(''),
    propertie7: new FormControl(''),
    propertie8: new FormControl(''),
    propertie9: new FormControl(''),
    propertie10: new FormControl(''),
    propertie11: new FormControl(''),
    propertie12: new FormControl(''),
    propertie13: new FormControl(''),
    propertie14: new FormControl(''),
    propertie15: new FormControl(''),
    propertie16: new FormControl(''),
    propertie17: new FormControl(''),
    propertie18: new FormControl(''),
    propertie19: new FormControl(''),
   });
  constructor(
    private router: Router,
    private _apiService: ApiService, 
    private activatedRoute: ActivatedRoute
    ) { }

  ngOnInit(): void 
  {
    this.documentID=this.activatedRoute.snapshot.paramMap.get("id");
    this.getDocumentData(this.documentID);
  }

  getDocumentData(documentID: any)
  {
    this._apiService.getTypeRequest('document/'+this.documentID).subscribe(
      (response: any) => {
        this.documentForm.patchValue(response)
      }
    )
  }

  updateFile()
  {
    this._apiService.putTypeRequest('document/'+this.documentID, this.documentForm.value).subscribe(
      response => {
        alert(response);
        this.router.navigate(['list-files'])
      }
    )
  }

}
