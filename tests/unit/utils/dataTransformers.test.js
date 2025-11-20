import { transformTool, transformTools, transformPrompt } from '../../../src/utils/dataTransformers';

describe('dataTransformers', () => {
  describe('transformTool', () => {
    it('should transform tool data correctly', () => {
      const mockTool = {
        id: '1',
        name: 'Test Tool',
        description_he: 'תיאור',
        is_free: true,
        rating: 4.5,
      };

      const result = transformTool(mockTool);
      
      expect(result).toHaveProperty('id', '1');
      expect(result).toHaveProperty('name', 'Test Tool');
      expect(result).toHaveProperty('description', 'תיאור');
      expect(result).toHaveProperty('isFree', true);
      expect(result).toHaveProperty('rating', 4.5);
    });

    it('should handle missing fields', () => {
      const mockTool = {
        id: '1',
        name: 'Test Tool',
      };

      const result = transformTool(mockTool);
      expect(result).toHaveProperty('id');
      expect(result).toHaveProperty('name');
    });
  });

  describe('transformTools', () => {
    it('should transform array of tools', () => {
      const mockTools = [
        { id: '1', name: 'Tool 1' },
        { id: '2', name: 'Tool 2' },
      ];

      const result = transformTools(mockTools);
      expect(Array.isArray(result)).toBe(true);
      expect(result.length).toBe(2);
    });

    it('should handle empty array', () => {
      const result = transformTools([]);
      expect(Array.isArray(result)).toBe(true);
      expect(result.length).toBe(0);
    });
  });
});

