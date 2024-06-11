import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideClientHydration(), provideFirebaseApp(() => initializeApp({"projectId":"fir-angular-89180","appId":"1:483056101727:web:784abb0c5758091039aeea","storageBucket":"fir-angular-89180.appspot.com","apiKey":"AIzaSyD0M914lr3G10xnW_Xay4rchgxJ8PlJiI0","authDomain":"fir-angular-89180.firebaseapp.com","messagingSenderId":"483056101727"})), provideAuth(() => getAuth()), provideFirestore(() => getFirestore())]
};
