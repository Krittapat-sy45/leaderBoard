import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

import { AngularFireModule } from '@angular/fire/compat'
import { environment } from '../environments/environment';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';

import { DialogModule } from 'primeng/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';

import { ToastrModule, ToastrService } from 'ngx-toastr';
import { Toastr, TOASTR_TOKEN } from './toastr.service';


declare const toastr: Toastr;


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    ReactiveFormsModule,
    InputTextModule,
    BrowserAnimationsModule,
    DialogModule,
    AutoCompleteModule,
    FormsModule,
    DropdownModule,
    ButtonModule,
    ConfirmDialogModule,
    ToastrModule.forRoot(),

  ],
  providers: [
    provideFirestore(() => getFirestore()),
    provideFirebaseApp(() => initializeApp({ "projectId": "leader-board-c5136", "appId": "1:106686724549:web:5c73089290ed84b2c6f3ac", "storageBucket": "leader-board-c5136.firebasestorage.app", "apiKey": "AIzaSyAtHA0qL5mQyI8GVfcKt99eMM-dVSweYJA", "authDomain": "leader-board-c5136.firebaseapp.com", "messagingSenderId": "106686724549" })),
    ToastrService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
