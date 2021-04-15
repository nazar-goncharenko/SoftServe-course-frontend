import { AuthGuard } from './authguard';

describe('AuthGuard', () => {
    it('should create an instance', () => {
        expect(new AuthGuard(null)).toBeTruthy();
    });
});
