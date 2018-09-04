import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MainService } from './core/main.service';
import { HttpModule } from '@angular/http';
import { DataViewModule } from 'primeng/dataview';
import { MatTableModule, MatToolbarModule, MatPaginatorModule, MatCardModule, MatIconModule,
  MatSidenavModule, MatDividerModule, MatListModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    DataViewModule,
    MatTableModule,
    MatToolbarModule,
    MatPaginatorModule,
    MatIconModule,
    MatCardModule,
    MatSidenavModule,
    MatDividerModule,
    MatListModule,
    BrowserAnimationsModule
  ],
  providers: [MainService],
  bootstrap: [AppComponent]
})
export class AppModule { }
