import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-list-trck-documents',
  templateUrl: './list-trck-documents.component.html',
  styleUrls: ['./list-trck-documents.component.scss']
})
export class ListTrckDocumentsComponent implements OnInit {
  trcksData: any[] = new Array();

  constructor(private router: Router, private _apiService: ApiService) { }

  ngOnInit(): void 
  {
    this.getTrcksData();
  }

  getTrcksData()
  {
    this._apiService.getTypeRequest('markers').subscribe(
      (response: any) => {
        this.trcksData = response
      }
    )
  }

  getTrcksPdf(trckID: number)
  {
    this._apiService.getPdfTrckTypeRequest('trck_pdf' + "/" + trckID).subscribe(
      (response: any) => {
        
      }
    )
  }

  sendEmail(trckID: number)
  {
    this._apiService.getPdfTypeRequest('trck_send_pdf' + "/" + trckID).subscribe(
      (response: any) => {
        
      }
    )
  }


}
