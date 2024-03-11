import { Component } from '@angular/core';
import { GeneratorService } from './services/generator.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  regex: string = '';
  text: string = '';
  result: string = '';
  message: string = '';
  isValid: boolean = false;
  allowNum: boolean = false;
  allowAlph: boolean = false;
  min: number = 0;
  max: number = 0;
  specialChars: string = '';

  constructor(private generatorService: GeneratorService) {
  }

  validate() {
    if (!this.isNullOrEmpty(this.result)) {
      this.generatorService.getData(this.text, this.result).subscribe((x: any) => {
        this.isValid = x.isValid;
        this.message = x.message;
      });
    }
  }

  generate() {
    let configObject = {
      allowNumeric: this.allowNum,
      allowAlphaNumeric: this.allowAlph,
      minLength: this.min,
      maxLength: this.max,
      allowedSpecialChars: this.specialChars
    };
    this.generatorService.postData(configObject).subscribe((x: any) => {
      this.result = x.expression;
    });
  }

  isNullOrEmpty(value: string): boolean {
    return !value || value.trim().length === 0;
  }
}
