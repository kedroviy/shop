import { Injectable, InjectionToken } from '@angular/core';

import { getNewID } from './gen-id.generator';

@Injectable()
export class GeneratorService {

  constructor() { }

  generate(n: number): string {
    let result = '';
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < n; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    return result;
  }

  getNewID = getNewID;
}

export const generatedString = new InjectionToken<GeneratorService>('randomSequence');