# Message Web Component

A UI friendly message web component.

## Usage

### Step 1:

Reference component in the page:

```html
<script src="https://unpkg.com/wc-message@1.0.5/dist/index.js"></script>
```

### Step 2:

Using custom element `wc-message`:

```html
<wc-message id="message"></wc-message>
```

### Step 3:

Get an element and change its properties:

```html
<script>
  const el = document.querySelector('#message')

  el.textContent = 'Oops.'
  el.type = 'error'
  el.show = true
</script>
```

## Component Properties

Controlling the state of a component using properties.

| Properties | Type    | Default value | Optional value                           |
| ---------- | ------- | ------------- | ---------------------------------------- |
| show       | boolean | false         | `true` / `false`                         |
| duration   | number  | 3000          | number of milliseconds                   |
| type       | string  | success       | `info` / `success` / `error` / `warning` |

### Note ⚠️

Please use ``properties`` to change the state of the component instead of ``attributes``, so that the state of the reactivity can be maintained.

```html
<script>
  const el = document.querySelector('#message')
  
  // Good
  el.duration = 1000
  el.type = 'error'
  el.show = true

  // Bad
  el.setAttribute('duration', '1000')
  el.setAttribute('type', 'error')
  el.setAttribute('show', 'true')
</script>
```

## License

[MIT](LICENSE).
