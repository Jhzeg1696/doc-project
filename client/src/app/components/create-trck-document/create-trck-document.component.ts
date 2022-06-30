import { Component, ElementRef, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { ApiService } from '../../services/api.service';
import { CanvasDataService } from '../../services/canvas-data.service';

@Component({
  selector: 'app-create-trck-document',
  templateUrl: './create-trck-document.component.html',
  styleUrls: ['./create-trck-document.component.scss']
})
export class CreateTrckDocumentComponent {
  canvas1!:any;
  canvas2!: any;
  canvas3!: any;
  canvas4!: any;
  canvas5!: any;
  canvas6!: any;
  canvas7!: any;
  canvas8!: any;
  images: any[] = new Array();

  subscription!: Subscription;

  constructor(private _apiService: ApiService, private _canvasDataService: CanvasDataService) { }

  ngOnInit() {
    this.subscription = this._canvasDataService.currentMessage.subscribe(canvas1 => {
      this.canvas1 = canvas1;
      console.warn("Canvas 1:")
      console.log(canvas1);
    })

    this.subscription = this._canvasDataService.currentMessage2.subscribe(canvas2 => {
      this.canvas2 = canvas2;
      console.warn("Canvas 2:")
      console.log(canvas2);
    })

    this.subscription = this._canvasDataService.currentMessage3.subscribe(canvas3 => {
      this.canvas3 = canvas3;
      console.warn("Canvas 3:")
      console.log(canvas3);
    })

    this.subscription = this._canvasDataService.currentMessage4.subscribe(canvas4 => {
      this.canvas4 = canvas4;
      console.warn("Canvas 4:")
      console.log(canvas4);
    })

    this.subscription = this._canvasDataService.currentMessage5.subscribe(canvas5 => {
      this.canvas5 = canvas5;
      console.warn("Canvas 5:")
      console.log(canvas5);
    })

    this.subscription = this._canvasDataService.currentMessage6.subscribe(canvas6 => {
      this.canvas6 = canvas6;
      console.warn("Canvas 6:")
      console.log(canvas6);
    })

    this.subscription = this._canvasDataService.currentMessage7.subscribe(canvas7 => {
      this.canvas7 = canvas7;
      console.warn("Canvas 7:")
      console.log(canvas7);
    })

    this.subscription = this._canvasDataService.currentMessage8.subscribe(canvas8 => {
      this.canvas8 = canvas8;
      console.warn("Canvas 8:")
      console.log(canvas8);
    })

    this.subscription = this._canvasDataService.currentMessageImages.subscribe((images: any) => {
      this.images = images;
      console.warn("Images:")
      console.log(images);
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  send()
  {
    if(this.images.length < 8 || this.images.length == 17) 
    {
      alert("Elige todas las imagenes");
      
    }
    else
    {
      
      this._apiService.postTrckTypeRequest('markers', this.canvas1, this.canvas2, this.canvas3, this.canvas4, 
      this.canvas5, this.canvas6, this.canvas7, this.canvas8, this.images).subscribe(
        response => alert(response)
      )
      
    }
   
    
  }

}
