import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  cardOrange = {
    plantType: 'Simples',
    planPrice: 100,
  }

  cardPurple = {
    plantType: 'Completo',
    planPrice: 200,
  }

  onCardButtonClicked() {
    console.log('onCardButtonClicked');
  }
}
