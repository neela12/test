import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { 
    MatCardModule,MatFormFieldModule, MatInputModule,MatCheckboxModule, MatButtonModule
} from '@angular/material';

@NgModule({
  imports: [ 
    MatCardModule,MatFormFieldModule, MatInputModule,MatCheckboxModule, MatButtonModule
  ],
  exports: [ MatCardModule,MatFormFieldModule, MatInputModule,MatCheckboxModule, MatButtonModule]    
})

export class MaterialModule {}