import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class CanvasDataService {

  private messageSource = new BehaviorSubject('default message');
  private messageSource2 = new BehaviorSubject('default message 2')
  private messageSource3 = new BehaviorSubject('default message 2')
  private messageSource4 = new BehaviorSubject('default message 2')
  private messageSource5 = new BehaviorSubject('default message 2')
  private messageSource6 = new BehaviorSubject('default message 2')
  private messageSource7 = new BehaviorSubject('default message 2')
  private messageSource8 = new BehaviorSubject('default message 2')
  
  private messageSourceImages = new BehaviorSubject('default message 2')
  


  private messageSourceCanvas1 = new BehaviorSubject('default message 2')
  private messageSourceCanvas2 = new BehaviorSubject('default message 2')
  private messageSourceCanvas3 = new BehaviorSubject('default message 2')
  private messageSourceCanvas4 = new BehaviorSubject('default message 2')
  private messageSourceCanvas5 = new BehaviorSubject('default message 2')
  private messageSourceCanvas6 = new BehaviorSubject('default message 2')
  private messageSourceCanvas7 = new BehaviorSubject('default message 2')
  private messageSourceCanvas8 = new BehaviorSubject('default message 2')

  currentMessage = this.messageSource.asObservable();
  currentMessage2 = this.messageSource2.asObservable();
  currentMessage3 = this.messageSource3.asObservable();
  currentMessage4 = this.messageSource4.asObservable();
  currentMessage5 = this.messageSource5.asObservable();
  currentMessage6 = this.messageSource6.asObservable();
  currentMessage7 = this.messageSource7.asObservable();
  currentMessage8 = this.messageSource8.asObservable();

  currentMessageImages = this.messageSourceImages.asObservable();

  currentMessageCanvas1 = this.messageSourceCanvas1.asObservable();
  currentMessageCanvas2 = this.messageSourceCanvas2.asObservable();
  currentMessageCanvas3 = this.messageSourceCanvas3.asObservable();
  currentMessageCanvas4 = this.messageSourceCanvas4.asObservable();
  currentMessageCanvas5 = this.messageSourceCanvas5.asObservable();
  currentMessageCanvas6 = this.messageSourceCanvas6.asObservable();
  currentMessageCanvas7 = this.messageSourceCanvas7.asObservable();
  currentMessageCanvas8 = this.messageSourceCanvas8.asObservable();

  constructor() { }

  changeMessage(message: string) 
  {
    this.messageSource.next(message)
  }

  changeMessage2(message: string) 
  {
    this.messageSource2.next(message)
  }

  changeMessage3(message: string) 
  {
    this.messageSource3.next(message)
  }

  changeMessage4(message: string) 
  {
    this.messageSource4.next(message)
  }

  changeMessage5(message: string) 
  {
    this.messageSource5.next(message)
  }

  changeMessage6(message: string) 
  {
    this.messageSource6.next(message)
  }

  changeMessage7(message: string) 
  {
    this.messageSource7.next(message)
  }

  changeMessage8(message: string) 
  {
    this.messageSource8.next(message)
  }

  changeMessageImages(message: any) 
  {
    this.messageSourceImages.next(message)
  }

  paintCanvas1(markers: any)
  {
    this.messageSourceCanvas1.next(markers)
  }

  paintCanvas2(markers: any)
  {
    this.messageSourceCanvas2.next(markers)
  }

  paintCanvas3(markers: any)
  {
    this.messageSourceCanvas3.next(markers)
  }

  paintCanvas4(markers: any)
  {
    this.messageSourceCanvas4.next(markers)
  }

}