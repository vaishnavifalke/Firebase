import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import {AngularFireModule }from '@angular/fire/compat'
import { environments } from "./environments/environments";
@NgModule({
    declarations:[
        AppComponent
    ],
    imports:[
        BrowserModule,
       
       AngularFireModule.initializeApp(environments.firebase)
    ],
    providers:[],
    bootstrap:[AppComponent]
})
export class AppModule{}