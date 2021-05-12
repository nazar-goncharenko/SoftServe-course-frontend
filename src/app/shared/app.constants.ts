import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class AppConstants {
    public static URL_PORT = '8082';
    public static API_URL = `http://localhost:${AppConstants.URL_PORT}`;
    public static MEDIA_PATH = '';

    public static Paths =
        {
            before: [
                {name: 'Home', ulr: '/'}
            ],
            after: [
                {name: 'Video', ulr: '/videos'},
                {name: 'DealBook', ulr: '/'},
                {name: 'LifeStyle', ulr: '/'},
                {name: 'TeamHub', ulr: '/teamHub'}
            ]
        };

    public static languageOptions = [
        {value: 1, viewValue: 'EN'},
        {value: 2, viewValue: 'UA'},
        {value: 2, viewValue: 'FR'},
        {value: 3, viewValue: 'DE'}
    ]

}
