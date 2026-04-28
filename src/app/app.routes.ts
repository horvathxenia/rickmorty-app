import { Routes } from '@angular/router';
import { Characters } from './characters/characters';
import { Info } from './info/info';

export const routes: Routes = [
  { path: '', component: Characters },
  { path: 'info', component: Info }
];