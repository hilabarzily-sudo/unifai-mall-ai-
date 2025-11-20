# 🤝 Contributing to UnifAI Mall

Thank you for considering contributing to UnifAI Mall! This document provides guidelines and instructions for contributing.

## Code of Conduct

Be respectful, inclusive, and constructive. We're all here to build something great together.

## How Can I Contribute?

### Reporting Bugs

Before creating a bug report:
1. Check existing issues
2. Verify it's actually a bug
3. Collect relevant information

**Bug Report Template:**

```markdown
**Describe the bug**
A clear description of what the bug is.

**To Reproduce**
Steps to reproduce the behavior:
1. Go to '...'
2. Click on '....'
3. See error

**Expected behavior**
What you expected to happen.

**Screenshots**
If applicable, add screenshots.

**Environment:**
- OS: [e.g. Windows 11]
- Browser: [e.g. Chrome 120]
- Version: [e.g. 1.0.0]
```

### Suggesting Features

Before suggesting a feature:
1. Check if it already exists
2. Verify it aligns with project goals
3. Provide clear use cases

**Feature Request Template:**

```markdown
**Problem Statement**
What problem does this solve?

**Proposed Solution**
How should it work?

**Alternatives Considered**
What other solutions did you consider?

**Additional Context**
Any other information or mockups.
```

### Pull Requests

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add/update tests
5. Update documentation
6. Submit pull request

## Development Setup

### Prerequisites

- Node.js 18+ and npm 9+
- Git
- Code editor (VS Code recommended)

### Initial Setup

```bash
# Clone repository
git clone https://github.com/unifai/unifai-mall.git
cd unifai-mall

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env
# Edit .env with your Supabase credentials

# Start development server
npm run dev
```

### Project Structure

```
unifai-mall/
├── frontend/          # Organized source code
├── src/               # Original structure
├── electron/          # Desktop app
├── tests/             # Test suites
├── docs/              # Documentation
└── .github/           # CI/CD workflows
```

## Development Workflow

### 1. Create a Branch

```bash
git checkout -b feature/your-feature-name
# or
git checkout -b fix/bug-description
```

### Branch Naming

- `feature/` - New features
- `fix/` - Bug fixes
- `docs/` - Documentation
- `refactor/` - Code refactoring
- `test/` - Adding tests
- `chore/` - Maintenance tasks

### 2. Make Changes

- Follow coding standards
- Write meaningful commit messages
- Keep commits atomic and focused
- Add tests for new features
- Update documentation

### 3. Testing

```bash
# Run all tests
npm test

# Run specific test suites
npm run test:unit
npm run test:integration
npm run test:e2e

# Check coverage
npm run test:coverage
```

### 4. Commit Changes

Follow [Conventional Commits](https://www.conventionalcommits.org/):

```bash
git commit -m "feat: add tool filtering by category"
git commit -m "fix: resolve search input lag"
git commit -m "docs: update installation guide"
```

**Commit Types:**
- `feat` - New feature
- `fix` - Bug fix
- `docs` - Documentation
- `style` - Formatting
- `refactor` - Code restructuring
- `test` - Adding tests
- `chore` - Maintenance

### 5. Push and Create PR

```bash
git push origin feature/your-feature-name
```

Then create a Pull Request on GitHub.

## Coding Standards

### JavaScript/React

```javascript
// Use functional components
function MyComponent({ prop }) {
  // Component logic
}

// Use descriptive names
const isLoading = false;
const userTools = [];

// Destructure props
function ToolCard({ tool, onFavorite, isFavorite }) {
  // ...
}

// Early returns
if (!tool) return null;

// Extract complex logic
const sortedTools = useMemo(() => {
  return tools.sort((a, b) => b.rating - a.rating);
}, [tools]);
```

### Component Structure

```javascript
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// 1. Component definition
function MyComponent({ prop1, prop2 }) {
  // 2. State
  const [state, setState] = useState(initial);
  
  // 3. Effects
  useEffect(() => {
    // Side effects
  }, [dependencies]);
  
  // 4. Handlers
  const handleClick = () => {
    // Handle click
  };
  
  // 5. Render
  return (
    <div>
      {/* JSX */}
    </div>
  );
}

// 6. PropTypes (optional)
MyComponent.propTypes = {
  prop1: PropTypes.string.isRequired,
  prop2: PropTypes.func,
};

// 7. Export
export default MyComponent;
```

### CSS/Tailwind

```jsx
// Use Tailwind classes
<div className="flex items-center gap-4 p-6 rounded-xl bg-white/40 backdrop-blur-xl">

// Break long class strings
<div className={`
  flex items-center gap-4
  p-6 rounded-xl
  bg-white/40 backdrop-blur-xl
  hover:scale-[1.02] transition-all
`}>

// Use template literals for conditional classes
<button className={`
  px-4 py-2 rounded-lg
  ${isActive ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}
`}>
```

### File Naming

- Components: `PascalCase.jsx`
- Utilities: `camelCase.js`
- Tests: `*.test.js` or `*.spec.js`
- Styles: `kebab-case.css`

## Testing Guidelines

### Unit Tests

```javascript
describe('Component/Function name', () => {
  it('should do something specific', () => {
    // Arrange
    const input = 'test';
    
    // Act
    const result = functionUnderTest(input);
    
    // Assert
    expect(result).toBe('expected');
  });
});
```

### Integration Tests

```javascript
describe('Feature Integration', () => {
  beforeEach(() => {
    // Setup
  });

  afterEach(() => {
    // Cleanup
  });

  it('should complete user workflow', async () => {
    // Test workflow
  });
});
```

### E2E Tests

```javascript
test('user can complete task', async ({ page }) => {
  await page.goto('/');
  await page.click('[data-testid="button"]');
  await expect(page.locator('[data-testid="result"]')).toBeVisible();
});
```

## Documentation

### Code Comments

```javascript
// Use comments for complex logic only
// Prefer self-documenting code

/**
 * Transforms raw tool data from database
 * @param {Object} tool - Raw tool data
 * @returns {Object} Transformed tool with camelCase fields
 */
function transformTool(tool) {
  // Implementation
}
```

### Component Documentation

```javascript
/**
 * Button Component
 * 
 * A reusable button with multiple variants and sizes.
 * 
 * @param {string} variant - Button style (primary, secondary, danger)
 * @param {string} size - Button size (sm, md, lg)
 * @param {boolean} loading - Show loading state
 * @param {function} onClick - Click handler
 */
```

### Markdown Files

- Use clear headings
- Include code examples
- Add screenshots when helpful
- Keep language simple

## Pull Request Process

### Before Submitting

- [ ] All tests pass
- [ ] No linter errors
- [ ] Code is documented
- [ ] Commits are clean
- [ ] Branch is up to date with main

### PR Template

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
How was this tested?

## Screenshots
If applicable

## Checklist
- [ ] Tests pass
- [ ] No linter errors
- [ ] Documentation updated
- [ ] Self-reviewed code
```

### Review Process

1. Automated checks run (CI/CD)
2. Code review by maintainers
3. Address feedback
4. Approval and merge

## Release Process

### Version Numbering

We use [Semantic Versioning](https://semver.org/):

- `MAJOR.MINOR.PATCH`
- `1.0.0` → `1.0.1` (patch)
- `1.0.1` → `1.1.0` (minor)
- `1.1.0` → `2.0.0` (major)

### Creating a Release

1. Update version in `package.json`
2. Update CHANGELOG.md
3. Create git tag
4. Push tag
5. GitHub Actions builds and releases

```bash
npm version patch # or minor, or major
git push origin main --tags
```

## Getting Help

- **Discord** - Join our community
- **GitHub Issues** - Technical questions
- **Email** - support@unifai.com

## Recognition

Contributors are recognized in:
- README.md contributors section
- Release notes
- Project website

Thank you for contributing! 🎉

