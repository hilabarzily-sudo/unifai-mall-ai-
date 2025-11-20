import { favoritesService } from '../../src/services/favoritesService';

describe('Favorites Integration', () => {
  const mockUserId = 'test-user-id';
  const mockToolId = 'test-tool-id';

  describe('Add Favorite', () => {
    it('should add tool to favorites', async () => {
      const result = await favoritesService.addFavorite(mockUserId, mockToolId);
      expect(result).toBeDefined();
    });

    it('should handle duplicate favorites', async () => {
      await favoritesService.addFavorite(mockUserId, mockToolId);
      const result = await favoritesService.addFavorite(mockUserId, mockToolId);
      // Should handle gracefully
      expect(result).toBeDefined();
    });
  });

  describe('Remove Favorite', () => {
    it('should remove tool from favorites', async () => {
      await favoritesService.addFavorite(mockUserId, mockToolId);
      const result = await favoritesService.removeFavorite(mockUserId, mockToolId);
      expect(result).toBeDefined();
    });
  });

  describe('Get Favorites', () => {
    it('should get user favorites', async () => {
      const result = await favoritesService.getUserFavorites(mockUserId);
      expect(result).toHaveProperty('favorites');
      expect(Array.isArray(result.favorites)).toBe(true);
    });
  });
});

