# 🧪 Testing Guide - UnifAI Mall

## Testing Strategy

UnifAI Mall uses a comprehensive testing strategy covering unit, integration, and end-to-end tests.

## Test Pyramid

```
        /\
       /E2E\        ← Few, slow, expensive
      /------\
     /Integration\  ← Some, medium speed
    /--------------\
   /   Unit Tests   \ ← Many, fast, cheap
  /------------------\
```

## Testing Stack

- **Jest** - Test runner and assertion library
- **React Testing Library** - Component testing
- **Playwright** - End-to-end testing
- **@testing-library/user-event** - User interaction simulation
- **@testing-library/jest-dom** - Custom matchers

## Running Tests

```bash
# All tests
npm test

# Unit tests only
npm run test:unit

# Integration tests only
npm run test:integration

# E2E tests
npm run test:e2e

# Watch mode (for development)
npm run test:watch

# Coverage report
npm run test:coverage
```

## Unit Testing

### Purpose
Test individual functions and components in isolation.

### Example - Testing a Service

```javascript
// tests/unit/services/toolsService.test.js
import { toolsService } from '../../../src/services/toolsService';

describe('toolsService', () => {
  describe('getAllTools', () => {
    it('should fetch all tools from database', async () => {
      const result = await toolsService.getAllTools();
      expect(result).toHaveProperty('tools');
      expect(Array.isArray(result.tools)).toBe(true);
    });
  });
});
```

### Example - Testing a Component

```javascript
// tests/unit/components/Button.test.jsx
import { render, screen, fireEvent } from '@testing-library/react';
import Button from '../../../frontend/src/components/ui/Button';

describe('Button Component', () => {
  it('renders with text', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('calls onClick when clicked', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click</Button>);
    
    fireEvent.click(screen.getByText('Click'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('shows loading state', () => {
    render(<Button loading>Submit</Button>);
    expect(screen.getByText('טוען...')).toBeInTheDocument();
  });
});
```

## Integration Testing

### Purpose
Test how different parts of the system work together.

### Example - Auth Flow

```javascript
// tests/integration/auth.test.js
import { authService } from '../../src/services/authService';

describe('Authentication Integration', () => {
  it('should sign in user with email and password', async () => {
    const email = 'test@example.com';
    const password = 'testpassword123';

    const result = await authService.signInWithEmail(email, password);
    
    expect(result).toBeDefined();
    expect(result.user).toHaveProperty('email', email);
  });

  it('should reject invalid credentials', async () => {
    const email = 'invalid@example.com';
    const password = 'wrongpassword';

    const result = await authService.signInWithEmail(email, password);
    expect(result).toHaveProperty('error');
  });
});
```

## End-to-End Testing

### Purpose
Test complete user workflows in a real browser.

### Example - User Journey

```javascript
// tests/e2e/user-journey.spec.js
import { test, expect } from '@playwright/test';

test.describe('User Journey', () => {
  test('complete flow from splash to tool usage', async ({ page }) => {
    // Navigate to app
    await page.goto('/');

    // Wait for splash screen
    await expect(page.locator('text=UnifAI')).toBeVisible();

    // Wait for home page
    await page.waitForTimeout(1500);
    await expect(page.locator('text=כלי AI')).toBeVisible();

    // Click on a tool
    const toolCard = page.locator('[data-testid="tool-card"]').first();
    await toolCard.click();

    // Verify tool page opened
    await expect(page.locator('[data-testid="tool-page"]')).toBeVisible();
  });
});
```

## Test Organization

```
tests/
├── unit/
│   ├── services/          # Service layer tests
│   ├── components/        # Component tests
│   └── utils/             # Utility function tests
│
├── integration/           # Integration tests
│   ├── auth.test.js
│   ├── favorites.test.js
│   └── tools.test.js
│
├── e2e/                   # End-to-end tests
│   ├── user-journey.spec.js
│   └── mobile.spec.js
│
├── setup.js               # Test setup
└── __mocks__/             # Mock files
```

## Coverage Goals

- **Unit Tests**: 80%+ coverage
- **Integration Tests**: Critical paths covered
- **E2E Tests**: Main user journeys covered

## Current Coverage

Run `npm run test:coverage` to see current coverage:

```
File                    | % Stmts | % Branch | % Funcs | % Lines
------------------------|---------|----------|---------|--------
All files               |   80.12 |    75.89 |   82.45 |   80.12
 services/              |   85.43 |    80.12 |   87.23 |   85.43
 components/            |   78.34 |    72.45 |   79.12 |   78.34
 utils/                 |   82.67 |    77.89 |   84.56 |   82.67
```

## Testing Best Practices

### 1. Test Behavior, Not Implementation

```javascript
// ❌ Bad - testing implementation
it('should call setState', () => {
  const wrapper = shallow(<Component />);
  expect(wrapper.instance().setState).toHaveBeenCalled();
});

// ✅ Good - testing behavior
it('should display updated count', () => {
  render(<Counter />);
  fireEvent.click(screen.getByText('Increment'));
  expect(screen.getByText('Count: 1')).toBeInTheDocument();
});
```

### 2. Use Data-TestId for Stable Selectors

```javascript
// Component
<button data-testid="submit-button">Submit</button>

// Test
const submitButton = screen.getByTestId('submit-button');
```

### 3. Mock External Dependencies

```javascript
// Mock Supabase
jest.mock('../src/lib/supabase', () => ({
  supabase: {
    from: jest.fn(() => ({
      select: jest.fn(() => ({ data: [], error: null })),
    })),
  },
}));
```

### 4. Test Edge Cases

```javascript
describe('Input validation', () => {
  it('should handle empty input', () => {});
  it('should handle very long input', () => {});
  it('should handle special characters', () => {});
  it('should handle null/undefined', () => {});
});
```

### 5. Keep Tests Fast

- Mock slow operations
- Use fake timers for delays
- Avoid unnecessary renders
- Run in parallel when possible

## Common Testing Patterns

### Testing Async Operations

```javascript
it('should load tools asynchronously', async () => {
  render(<ToolsList />);
  
  // Wait for loading to finish
  await waitFor(() => {
    expect(screen.queryByText('Loading...')).not.toBeInTheDocument();
  });
  
  // Check data is displayed
  expect(screen.getByText('ChatGPT')).toBeInTheDocument();
});
```

### Testing User Interactions

```javascript
it('should toggle favorite on click', async () => {
  const user = userEvent.setup();
  render(<ToolCard tool={mockTool} />);
  
  const favoriteButton = screen.getByRole('button', { name: /favorite/i });
  await user.click(favoriteButton);
  
  expect(favoriteButton).toHaveAttribute('aria-pressed', 'true');
});
```

### Testing Forms

```javascript
it('should submit form with valid data', async () => {
  const handleSubmit = jest.fn();
  render(<LoginForm onSubmit={handleSubmit} />);
  
  await userEvent.type(screen.getByLabelText(/email/i), 'test@example.com');
  await userEvent.type(screen.getByLabelText(/password/i), 'password123');
  await userEvent.click(screen.getByRole('button', { name: /submit/i }));
  
  expect(handleSubmit).toHaveBeenCalledWith({
    email: 'test@example.com',
    password: 'password123',
  });
});
```

## Debugging Tests

### Run Specific Test

```bash
# Run specific file
npm test -- toolsService.test.js

# Run tests matching pattern
npm test -- --testNamePattern="should fetch tools"
```

### Debug Mode

```bash
# Run with debugger
node --inspect-brk node_modules/.bin/jest --runInBand
```

### Playwright Debug Mode

```bash
# Run with UI
npx playwright test --ui

# Run with headed browser
npx playwright test --headed

# Debug specific test
npx playwright test --debug
```

## Continuous Integration

Tests run automatically on:
- Every push to main/develop
- Every pull request
- Before deployment

See `.github/workflows/ci.yml` for CI configuration.

## Troubleshooting

### Tests Timing Out

```javascript
// Increase timeout for slow tests
jest.setTimeout(10000); // 10 seconds
```

### Flaky Tests

- Avoid fixed timeouts, use `waitFor`
- Clean up after each test
- Mock time-dependent code
- Ensure proper test isolation

### Memory Leaks

```javascript
afterEach(() => {
  cleanup(); // React Testing Library cleanup
  jest.clearAllMocks();
});
```

## Additional Resources

- [Jest Documentation](https://jestjs.io/)
- [React Testing Library](https://testing-library.com/react)
- [Playwright Documentation](https://playwright.dev/)
- [Testing Best Practices](https://kentcdodds.com/blog/common-mistakes-with-react-testing-library)

---

*Happy Testing! 🧪*

