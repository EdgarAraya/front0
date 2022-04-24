import { NgModule } from '@angular/core';

import { MatButtonModule} from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { MatDividerModule } from '@angular/material/divider';
import {MatSelectModule} from '@angular/material/select';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatSliderModule} from '@angular/material/slider';
import {MatTreeModule} from '@angular/material/tree';
import {MatMenuModule} from '@angular/material/menu';

const material = [
  MatButtonModule,
  MatCardModule,
  MatListModule,
  MatFormFieldModule,
  MatToolbarModule,
  MatIconModule,
  MatInputModule,
  MatDividerModule,
  MatNativeDateModule,
  MatRippleModule,
  MatFormFieldModule,
  MatSelectModule,
  MatGridListModule,
  MatProgressBarModule,
  MatInputModule,
  MatSelectModule,
  MatAutocompleteModule,
  MatSliderModule,
  MatTreeModule,
  MatMenuModule
    
]


@NgModule({
  imports: [material
],
  exports: [
    material
  ]
})
export class MaterialModule { }
