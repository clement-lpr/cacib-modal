# Modal Component Documentation

## Overview

The CACIB Modal is a flexible, accessible dialog component built with StencilJS. It is fully parametized for each use.

**Key Features:**

- Accessibility
- Responsive design
- Customizable button text and states
- Multiple interaction patterns (ESC key, click outside, button actions)

**When to Use:**

- Confirmation dialogs
- Form submissions requiring user attention

## Quick Start

### Basic Usage

```html
<cacib-modal is-open="true" modal-title="Confirm Action" subtitle="Are you sure you want to proceed?">
  <p>This action cannot be undone.</p>
</cacib-modal>
```

### Common Patterns

**Confirmation Dialog:**

```html
<cacib-modal is-open="true" modal-title="Delete Item" primary-button-text="Delete" secondary-button-text="Cancel" subtitle="This action is permanent.">
  <p>The selected item will be permanently removed.</p>
</cacib-modal>
```

**Content Display:**

```html
<cacib-modal is-open="true" modal-title="User Details" show-close-button="true">
  <div>
    <h3>Contact Information</h3>
    <p>Email: user@example.com</p>
    <p>Phone: +1 234 567 8900</p>
  </div>
</cacib-modal>
```

**No Close Button (Force Action):**

```html
<cacib-modal is-open="true" modal-title="Terms Updated" show-close-button="false">
  <p>Please accept the new terms to continue.</p>
</cacib-modal>
```

## API Reference

### Properties

| Property                  | Type      | Default       | Description                      |
| ------------------------- | --------- | ------------- | -------------------------------- |
| `is-open`                 | `boolean` | `false`       | Controls modal visibility        |
| `modal-title`             | `string`  | `''`          | Main title displayed in header   |
| `subtitle`                | `string`  | `''`          | Secondary text below title       |
| `primary-button-text`     | `string`  | `'Confirmer'` | Text for primary action button   |
| `secondary-button-text`   | `string`  | `'Annuler'`   | Text for secondary/cancel button |
| `show-close-button`       | `boolean` | `true`        | Show/hide X close button         |
| `primary-button-disabled` | `boolean` | `false`       | Disable primary button           |

### Events

| Event                  | Payload | Description                             |
| ---------------------- | ------- | --------------------------------------- |
| `modalClose`           | `void`  | Fired when modal is closed (any method) |
| `modalPrimaryAction`   | `void`  | Fired when primary button is clicked    |
| `modalSecondaryAction` | `void`  | Fired when secondary button is clicked  |

### Event Handling Example

```javascript
const modal = document.querySelector('cacib-modal');

modal.addEventListener('modalClose', () => {
  console.log('Modal closed');
});

modal.addEventListener('modalPrimaryAction', () => {
  console.log('Primary action confirmed');
  // Handle confirmation logic
});

modal.addEventListener('modalSecondaryAction', () => {
  console.log('Action cancelled');
  // Handle cancellation logic
});
```

### Content Projection (Slots)

The modal accepts any HTML content between its opening and closing tags:

```html
<cacib-modal is-open="true" modal-title="Custom Content">
  <!-- Any HTML content goes here -->
  <form>
    <input type="email" placeholder="Enter email" />
    <textarea placeholder="Message"></textarea>
  </form>
</cacib-modal>
```

## Implementation

### Framework Integration

**Vanilla HTML:**

```html
<script type="module" src="node_modules/@cacib/modal-component/dist/cacib-modal/cacib-modal.esm.js"></script>
<cacib-modal is-open="false">Content here</cacib-modal>
```

**React:**

```jsx
import { CacibModal } from '@cacib/modal-component/react';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <CacibModal isOpen={isOpen} modalTitle="React Modal" onModalClose={() => setIsOpen(false)}>
      <p>React content</p>
    </CacibModal>
  );
}
```
