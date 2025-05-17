# Button Components

This directory contains reusable button components for the FitIzen India application.

## Components

### Button

A versatile button component with multiple variants, sizes, and options.

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | string | `'primary'` | Button style (`'primary'`, `'secondary'`, `'outline'`, `'text'`) |
| `size` | string | `'md'` | Button size (`'sm'`, `'md'`, `'lg'`) |
| `fullWidth` | boolean | `false` | Whether the button should take full width |
| `disabled` | boolean | `false` | Whether the button is disabled |
| `children` | ReactNode | - | Button content |
| `className` | string | `''` | Additional CSS classes |
| `onClick` | function | - | Click handler |
| `type` | string | `'button'` | Button type (`'button'`, `'submit'`, `'reset'`) |
| `as` | ElementType | `'button'` | Render as different element (button, a, etc.) |

#### Usage

```jsx
import { Button } from '../sharedComponents/buttons';

// Basic usage
<Button variant="primary">Click Me</Button>

// Different variants
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="text">Text</Button>

// Different sizes
<Button variant="primary" size="sm">Small</Button>
<Button variant="primary" size="md">Medium</Button>
<Button variant="primary" size="lg">Large</Button>

// Full width button
<Button variant="primary" fullWidth>Full Width</Button>

// Disabled button
<Button variant="primary" disabled>Disabled</Button>

// Custom class
<Button variant="primary" className="custom-class">Custom Class</Button>

// As a link
<Button variant="primary" as="a" href="/path">Link</Button>
```

### IconButton

A button component designed to work with icons.

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `icon` | ReactNode | - | Icon element to display |
| `position` | string | `'left'` | Position of the icon (`'left'`, `'right'`, `'only'`) |
| `rounded` | boolean | `false` | Whether to use a fully rounded button |
| `variant` | string | `'primary'` | Button style (`'primary'`, `'secondary'`, `'outline'`, `'text'`) |
| `size` | string | `'md'` | Button size (`'sm'`, `'md'`, `'lg'`) |
| `disabled` | boolean | `false` | Whether the button is disabled |
| `children` | ReactNode | - | Button content (not needed if position is 'only') |
| `className` | string | `''` | Additional CSS classes |
| `onClick` | function | - | Click handler |
| `type` | string | `'button'` | Button type (`'button'`, `'submit'`, `'reset'`) |

#### Usage

```jsx
import { IconButton } from '../sharedComponents/buttons';
import { FiPlus, FiArrowRight, FiSearch } from 'react-icons/fi';

// Icon on the left
<IconButton 
  variant="primary" 
  icon={<FiPlus />}
  position="left"
>
  Add New
</IconButton>

// Icon on the right
<IconButton 
  variant="outline" 
  icon={<FiArrowRight />}
  position="right"
>
  Continue
</IconButton>

// Icon only button
<IconButton 
  variant="primary" 
  icon={<FiSearch />}
  position="only"
/>

// Rounded icon button
<IconButton 
  variant="primary" 
  icon={<FiPlus />}
  position="only"
  rounded
/>
```

## Examples

For more examples, check out the `ButtonUsageExamples.jsx` file. 