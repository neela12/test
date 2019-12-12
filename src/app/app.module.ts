import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataComponent } from './data/data.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { MatCardModule,MatFormFieldModule, MatInputModule } from '@angular/material';
// import { MatCardModule,MatFormFieldModule, MatInputModule,   MatButtonModule,  
//   MatMenuModule,  
//   MatToolbarModule,  
//   MatIconModule,
//   MatDatepickerModule,  
//   MatNativeDateModule,  
//   MatRadioModule,  
//   MatSelectModule,  
//   MatOptionModule,  
//   MatSlideToggleModule      } from '@angular/material';
  import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
  import { MaterialModule } from './material.module';
@NgModule({
  declarations: [
    AppComponent,
    DataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FormsModule ,
    MaterialModule ],
 
  exports: [],   
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
