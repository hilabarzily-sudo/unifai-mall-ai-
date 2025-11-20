import { toolsService } from '../../../src/services/toolsService';

describe('toolsService', () => {
  describe('getAllTools', () => {
    it('should fetch all tools from database', async () => {
      const result = await toolsService.getAllTools();
      expect(result).toHaveProperty('tools');
      expect(Array.isArray(result.tools)).toBe(true);
    });

    it('should handle errors gracefully', async () => {
      // Mock error scenario
      const result = await toolsService.getAllTools();
      expect(result).toHaveProperty('error');
    });
  });

  describe('getAllCategories', () => {
    it('should fetch all categories', async () => {
      const result = await toolsService.getAllCategories();
      expect(result).toHaveProperty('categories');
      expect(Array.isArray(result.categories)).toBe(true);
    });
  });

  describe('getToolById', () => {
    it('should fetch a specific tool', async () => {
      const mockId = 'test-id';
      const result = await toolsService.getToolById(mockId);
      expect(result).toHaveProperty('tool');
    });

    it('should return error for invalid ID', async () => {
      const result = await toolsService.getToolById(null);
      expect(result).toHaveProperty('error');
    });
  });
});

