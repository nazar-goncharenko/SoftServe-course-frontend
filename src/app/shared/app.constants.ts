import { Injectable } from '@angular/core';

@Injectable({
   providedIn: 'root'
})

export class AppConstants {
   public static URL_PORT = '8081';
   public static API_URL = `http://localhost:${AppConstants.URL_PORT}`;
   public static MEDIA_PATH = '';
}
