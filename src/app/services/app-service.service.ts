import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export default class AppServiceService {
  constructor() {}

  /**
   * Definitipoln
   * @param num1 num1
   * @param num2 num2 bla bla
   * @param cb cb to tmpaoposah
   */
  myFunction(num1: number, num2: number): Promise<number> {
    return new Promise((resolve, reject) => {
      const result = num1 + num2;
      if (result > 1000) {
        reject('Error');
      } else {
        resolve(result);
      }
    });
  }
}


