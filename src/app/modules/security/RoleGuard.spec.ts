import {RoleGuard} from './RoleGuard';

describe('RoleGuard', () => {
    it('should create an instance', () => {
        expect(new RoleGuard(null)).toBeTruthy();
    });
});
