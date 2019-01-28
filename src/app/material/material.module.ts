import { NgModule } from '@angular/core';
import {
    MatButtonModule,
    MatProgressBarModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatGridListModule,
} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    MatButtonModule,
    MatProgressBarModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatGridListModule,
  ],
  exports: [
    MatButtonModule,
    MatProgressBarModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatGridListModule,
  ]
})
export class MaterialModule { }
