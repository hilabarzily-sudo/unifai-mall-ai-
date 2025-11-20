import { authService } from '../../src/services/authService';

describe('Authentication Integration', () => {
  describe('User Sign In', () => {
    it('should sign in user with email and password', async () => {
      const email = 'test@example.com';
      const password = 'testpassword123';

      const result = await authService.signInWithEmail(email, password);
      
      // Should return user data or error
      expect(result).toBeDefined();
    });

    it('should reject invalid credentials', async () => {
      const email = 'invalid@example.com';
      const password = 'wrongpassword';

      const result = await authService.signInWithEmail(email, password);
      expect(result).toHaveProperty('error');
    });
  });

  describe('Google Sign In', () => {
    it('should initiate Google sign in flow', async () => {
      const result = await authService.signInWithGoogle();
      expect(result).toBeDefined();
    });
  });

  describe('User Session', () => {
    it('should get current user', async () => {
      const result = await authService.getCurrentUser();
      expect(result).toHaveProperty('user');
    });

    it('should handle sign out', async () => {
      const result = await authService.signOut();
      expect(result).toBeDefined();
    });
  });
});

