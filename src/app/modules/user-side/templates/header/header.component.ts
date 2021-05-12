import {Component, OnInit} from '@angular/core';
import {AppConstants} from '../../../../shared/app.constants';
import {AuthentificationService} from '../../../../services/authentification.service';
import {User} from '../../../../shared/interfaces/user';
import {Router} from '@angular/router';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    languageOptions = [];

    language = null;

    user: User = null;

    searchText: string = null;


    constructor(private authenticationService: AuthentificationService,
                private router: Router) {
    }


    ngOnInit(): void {
        this.languageOptions = AppConstants.languageOptions;
        this.language = this.languageOptions[0];
        if (this.authenticationService.isUserLoggedIn()) {
            this.authenticationService.getLoggedUser().subscribe(data => {
                    this.user = data;
                },
                error => {
                    return this.router.navigate(['/login']);
                });
        }
    }


    // tslint:disable-next-line:variable-name
    changeLanguage(language_: any): void {
        this.language = language_;
    }
}
