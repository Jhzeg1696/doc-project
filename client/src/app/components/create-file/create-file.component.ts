import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
@Component({
  selector: 'app-create-file',
  templateUrl: './create-file.component.html',
  styleUrls: ['./create-file.component.scss']
})
export class CreateFileComponent implements OnInit {
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
   
  constructor
  (
    private _apiService: ApiService
  ) { }

  ngOnInit(): void {
  }

  createFile()
  {
      this._apiService.postTypeRequest('document', this.documentForm.value).subscribe(
        response => alert(response)
      )
  }

}
