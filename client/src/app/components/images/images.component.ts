import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CanvasDataService } from 'src/app/services/canvas-data.service';
@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.scss']
})
export class ImagesComponent implements OnInit {
  image1?: File;
  preview1: any = "assets/no-imagen.png";

  image2?: File;
  preview2: any = "assets/no-imagen.png";

  images: any[] = new Array();

  message?:string;
  subscription?: Subscription;
  displayCurrentImages: boolean = false;

  constructor(private _canvasDataService: CanvasDataService) 
  {
    this.subscription = this._canvasDataService.currentMessageImages.subscribe((images: any) => {
      if(images[3] != "a")
      {
        this.images = images.message;
        this.displayCurrentImages = true;
      }
    })
  }

  ngOnInit(): void {
  }

  
  loadImg1(files: any) 
  {
    this.image1 = files.item(0)!
    if(files.item(0))
    {
      const file = files.item(0);
      const reader = new FileReader();
      reader.onload = e => {
        this.preview1 = reader.result;
      };
      reader.readAsDataURL(file!);
      this.images.push(files.item(0)!)
    }
    
    this.newMessage(this.images);
  }

  loadImg2(files: any) 
  {
    this.image2 = files.item(0)!
    if(files.item(0))
    {
      const file = files.item(0);
      const reader = new FileReader();
      reader.onload = e => {
        this.preview2 = reader.result;
      };
      reader.readAsDataURL(file!);
      this.images.push(files.item(0)!)
    }

    this.newMessage(this.images);
  }

  newMessage(data: any) 
  {
    this._canvasDataService.changeMessageImages(data)
  }

}
