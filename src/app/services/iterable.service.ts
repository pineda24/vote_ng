import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IterableService {

  constructor() { }
  
  trackByIdentity = (index: number, item: any) => item;
}
