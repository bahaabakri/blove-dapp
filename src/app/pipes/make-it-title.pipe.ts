import { Pipe, PipeTransform } from '@angular/core';
const capitalizeWords = ['ceo', 'cto']
@Pipe({
  name: 'makeItTitle',
  standalone: true
})
export class MakeItTitlePipe implements PipeTransform {

  transform(value: string): string {
    for(let word of capitalizeWords) {
      let regex = new RegExp(`\\b${word}\\b`, 'i');
      if (regex.test(value)) {
        return value.replace(regex, word.toUpperCase())
      }
    }
    return value
  }

}
