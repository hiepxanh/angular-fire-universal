import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import 'firebase/firestore';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'web';
  constructor(firestore: AngularFirestore) {
    firestore.collection('hello').valueChanges().subscribe(value => console.log('firestore data', value));
  }
}
