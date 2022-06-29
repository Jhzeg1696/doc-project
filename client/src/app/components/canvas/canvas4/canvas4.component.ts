import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { Square } from 'src/app/models/square';
import { ApiService } from 'src/app/services/api.service';
import { CanvasDataService } from 'src/app/services/canvas-data.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-canvas4',
  templateUrl: './canvas4.component.html',
  styleUrls: ['./canvas4.component.scss']
})
export class Canvas4Component implements OnInit {
  @ViewChild('canvas', { static: true }) 
  canvas!: ElementRef<HTMLCanvasElement>;
  private ctx!: CanvasRenderingContext2D;

  markers: any = new Array();

  message?:string;
  subscription?: Subscription;

  constructor
  (
    private _apiService: ApiService,
    private _canvasDataService: CanvasDataService
  ) 
  { 
    this.subscription = this._canvasDataService.currentMessageCanvas1.subscribe((markers: any) => {
      if(markers[3] != "a")
      {
        for(let i = 0; i < markers.length; i++)
        {
          if(markers[i][1] == 4)
          {
           
            let marker = {id: 4, x: markers[i][3], y: markers[i][4] }

            this.paint(marker.x, marker.y);
            this.addToArray(marker)
          }
        }
      } 
    })
  }

  ngOnInit(): void
  {
    this.ctx = this.canvas.nativeElement.getContext('2d')!;
  }

  handleClickInsideCanvas(event: any, id: number)
  {
    let position = this.getCursorPosition(this.canvas.nativeElement, event)
    position.id = id;
    
    this.paint(position.x, position.y)
    this.addToArray(position)
  }

  getCursorPosition(canvas: any, event: any) 
  {
    const rect = canvas.getBoundingClientRect();
    let x = event.clientX - rect.left;
    let y = event.clientY - rect.top;

    return {id: 0, x: x, y: y}
  }

  paint(x: any, y: any) 
  {  
    this.ctx.fillStyle = 'red';
    const square = new Square(this.ctx);

    square.draw(x, y, 20);
  }

  addToArray(data: any)
  {
    this.markers.push(data);
    this.newMessage(this.markers);
  }

  removeMarkerFromCanvas(position: any)
  {
      this.ctx.clearRect(position.x  - 20 / 2, position.y  - 20 / 2, this.canvas.nativeElement.width, this.canvas.nativeElement.height);
  }

  removeMarkerFromArray(markerToRemove: any)
  {
    this.markers.forEach((marker: any, index: any) => {
      if(marker === markerToRemove)
      {
        this.removeMarkerFromCanvas(marker);
        this.markers.splice(index,1);
      }
      
      this.drawStoredMarkers();
    })
  }

  drawStoredMarkers()
  {
    this.markers.forEach((marker: any) => {
      this.paint(marker.x, marker.y)
    })
  }

  sendMarkers()
  {
    this.newMessage(this.markers)
    /*
    this._apiService.postTypeRequest('markers', this.markers).subscribe(
      response => alert(response)
    )
    */
  }

  newMessage(data: any) 
  {
    this._canvasDataService.changeMessage4(data)
  }

}
