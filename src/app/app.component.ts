import { Component } from '@angular/core';
import { Quote } from './quote'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'short Quotes'
  quotes = [
    new Quote(1, 'Never regret anything that made you smile.', 'smile is the best make up that a female can wear', 'alpha', new Date(2017, 3, 26)),
    new Quote(2, 'Change the world by being yourself.', 'being your self helps to discover your self', 'mamie', new Date(2019, 1, 1)),
    new Quote(3, 'Every moment is a fresh beginning.', 'absolutely yees!', 'Samie', new Date(2018, 3, 11)),
    new Quote(4, 'Love For All, Hatred For None.', 'its better to love all people bcz they are Jehovahs creations', 'Ashley', new Date(2019, 1, 14)),

  ]
}
