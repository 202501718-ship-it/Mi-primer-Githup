import { Component } from '@angular/core';
import { ClienteComponent } from './cliente/cliente.component';

@Component({
  selector: 'app-root',
  imports: [ClienteComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}
