import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

@NgModule({

    imports: [
        FormsModule,
        ReactiveFormsModule,
        BrowserModule,
        HttpClientModule
    ],
    exports: [
        FormsModule,
        ReactiveFormsModule,
        BrowserModule,
        HttpClientModule,
        MDBBootstrapModule
    ],
    providers: [
        //    {
        //        provide: HTTP_INTERCEPTORS,
        //        useClass: LoaderInterceptor,
        //        multi: true,
        //    },

    ]
})
export class AppSharedModule { }