import { BrowserModule } from '@angular/platform-browser'; 
import { NgModule } from '@angular/core'; 
import { AppRoutingModule } from './app-routing.module'; 
import { AppComponent } from './app.component'; 
import { LoginComponent } from './components/login/login.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'; 
import { InterceptorService } from './services/interceptor-service.service'; 
import { NotificationService } from './services/notification.service';
import { CreateFileComponent } from './components/create-file/create-file.component';
import { ListFilesComponent } from './components/list-files/list-files.component';
import { EditFileComponent } from './components/edit-file/edit-file.component';
import { CreateTrckDocumentComponent } from './components/create-trck-document/create-trck-document.component';
import { Canvas1Component } from './components/canvas/canvas1/canvas1.component';
import { Canvas2Component } from './components/canvas/canvas2/canvas2.component';
import { ImagesComponent } from './components/images/images.component';
import { CanvasDataService } from './services/canvas-data.service';
import { ListTrckDocumentsComponent } from './components/list-trck-documents/list-trck-documents.component';
import { Canvas3Component } from './components/canvas/canvas3/canvas3.component';
import { Canvas4Component } from './components/canvas/canvas4/canvas4.component';
import { Canvas5Component } from './components/canvas/canvas5/canvas5.component';
import { Canvas6Component } from './components/canvas/canvas6/canvas6.component';
import { Canvas7Component } from './components/canvas/canvas7/canvas7.component';
import { Canvas8Component } from './components/canvas/canvas8/canvas8.component';
 
@NgModule({ 
  declarations: [ 
    AppComponent, 
    LoginComponent, 
    PerfilComponent, CreateFileComponent, ListFilesComponent, EditFileComponent, CreateTrckDocumentComponent, Canvas1Component, Canvas2Component, ImagesComponent, ListTrckDocumentsComponent, Canvas3Component, Canvas4Component, Canvas5Component, Canvas6Component, Canvas7Component, Canvas8Component, 
     
  ], 
  imports: [ 
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ], 
  providers: [ 
    { 
      provide: HTTP_INTERCEPTORS, 
      useClass: InterceptorService, 
      multi: true 
    } ,
    NotificationService,
    CanvasDataService
  ], 
  bootstrap: [AppComponent] 
}) 


export class AppModule { }