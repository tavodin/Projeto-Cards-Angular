import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input({ required: true, alias: 'text'}) 
  buttonText: string = '';
  
  @Input({ required: true, alias: 'style'})
  buttonStyle: 'white' | 'purple' = 'white';

  @Input({ alias: 'disabled'}) 
  isDisabled: boolean = false;

  @Output('clicked') buttonClickedEmit = new EventEmitter<void>();

  onButtonClicked() {
    this.buttonClickedEmit.emit();
  }
}
