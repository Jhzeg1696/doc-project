import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
@Component({
  selector: 'app-list-files',
  templateUrl: './list-files.component.html',
  styleUrls: ['./list-files.component.scss']
})
export class ListFilesComponent implements OnInit {
  documentsType1: any[] = new Array();
  documentsType2: any[] = new Array();

  constructor(private _apiService: ApiService) { }

  ngOnInit(): void 
  {
    this.getDocuments()
  }

  getDocuments()
  {
    this._apiService.getTypeRequest('documents').subscribe(
      (response: any) => {
        this.documentsType1 = response.filter((prop: any) => prop.propertie12 == "ss")
        this.documentsType2 = response.filter((prop: any) => prop.propertie12 == "mm")
      }
    )
  }

  getPdf(id: any)
  {
    this._apiService.getPdfTypeRequest('pdf/'+id).subscribe(
      (response: any) => {
        const fileURL = URL.createObjectURL(response);
  window.open(fileURL, '_blank');
      }
    )
  }

}
