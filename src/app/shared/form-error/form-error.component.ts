import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-form-error',
  templateUrl: './form-error.component.html'
})
export class FormErrorComponent  {

  @Input() invalid: boolean;
  @Input() touched: boolean;
  @Input() message: string;

}
