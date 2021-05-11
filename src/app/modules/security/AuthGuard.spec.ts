import { AuthGuard } from './authguard';
import {AuthentificationService} from '@services/authentification.service';

describe('AuthGuard', () => {
    let component: AuthentificationService;
    it('should create an instance', () => {
        expect(new AuthGuard(null, component)).toBeTruthy();
    });
});
