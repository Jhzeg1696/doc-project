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

  image3?: File;
  preview3: any = "assets/no-imagen.png";

  image4?: File;
  preview4: any = "assets/no-imagen.png";

  image5?: File;
  preview5: any = "assets/no-imagen.png";

  image6?: File;
  preview6: any = "assets/no-imagen.png";

  image7?: File;
  preview7: any = "assets/no-imagen.png";

  image8?: File;
  preview8: any = "assets/no-imagen.png";

  images: any[] = new Array();

  message?:string;
  subscription?: Subscription;
  displayCurrentImages: boolean = false;

  constructor(private _canvasDataService: CanvasDataService) 
  {
    /*
    this.subscription = this._canvasDataService.currentMessageImages.subscribe((images: any) => {
      if(images[3] != "a")
      {
        this.images = images.message;
        this.displayCurrentImages = true;
      }
    })
    */
  }

  ngOnInit(): void {
  }

  
  loadImg1(files: any) 
  {
    this.image1 = files.item(0)!
    this.removeDocument(this.image1)
    if(files.item(0))
    {
      const file = files.item(0);
      const reader = new FileReader();
      reader.onload = e => {
        this.preview1 = reader.result;
      };
      reader.readAsDataURL(file!);
      this.images[0] = files.item(0);
      //this.images.push(files.item(0)!)
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
      this.images[1] = files.item(0);
      //this.images.push(files.item(0)!)
    }

    this.newMessage(this.images);
  }

  loadImg3(files: any) 
  {
    this.image3 = files.item(0)!
    if(files.item(0))
    {
      const file = files.item(0);
      const reader = new FileReader();
      reader.onload = e => {
        this.preview3 = reader.result;
      };
      reader.readAsDataURL(file!);
      this.images[2] = files.item(0)
      //this.images.push(files.item(0)!)
    }

    this.newMessage(this.images);
  }

  loadImg4(files: any) 
  {
    this.image2 = files.item(0)!
    if(files.item(0))
    {
      const file = files.item(0);
      const reader = new FileReader();
      reader.onload = e => {
        this.preview4 = reader.result;
      };
      reader.readAsDataURL(file!);
      this.images[3] = files.item(0)
      //this.images.push(files.item(0)!)
    }

    this.newMessage(this.images);
  }

  loadImg5(files: any) 
  {
    this.image2 = files.item(0)!
    if(files.item(0))
    {
      const file = files.item(0);
      const reader = new FileReader();
      reader.onload = e => {
        this.preview5 = reader.result;
      };
      reader.readAsDataURL(file!);
      this.images[4] = files.item(0)
      //this.images.push(files.item(0)!)
    }

    this.newMessage(this.images);
  }

  loadImg6(files: any) 
  {
    this.image2 = files.item(0)!
    if(files.item(0))
    {
      const file = files.item(0);
      const reader = new FileReader();
      reader.onload = e => {
        this.preview6 = reader.result;
      };
      reader.readAsDataURL(file!);
      this.images[5] = files.item(0)
      //this.images.push(files.item(0)!)
    }

    this.newMessage(this.images);
  }

  loadImg7(files: any) 
  {
    this.image7 = files.item(0)!
    if(files.item(0))
    {
      const file = files.item(0);
      const reader = new FileReader();
      reader.onload = e => {
        this.preview7 = reader.result;
      };
      reader.readAsDataURL(file!);
      this.images[6] = files.item(0)
      //this.images.push(files.item(0)!)
    }

    this.newMessage(this.images);
  }

  loadImg8(files: any) 
  {
    this.image8 = files.item(0)!
    if(files.item(0))
    {
      const file = files.item(0);
      const reader = new FileReader();
      reader.onload = e => {
        this.preview8 = reader.result;
      };
      reader.readAsDataURL(file!);
      this.images[7] = files.item(0)
      //this.images.push(files.item(0)!)
    }

    this.newMessage(this.images);
  }
  
  newMessage(data: any) 
  {
    this._canvasDataService.changeMessageImages(data)
  }

  removeDocument(doc: any){
    this.images.forEach( (item, index) => {
      if(item === doc) this.images.splice(index,1);
    });
 }
}
