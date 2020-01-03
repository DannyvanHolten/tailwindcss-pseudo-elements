# tailwindcss-pseudo-elements

TailwindCSS Plugin that adds variants of pseudo elements (`::before`, `::after`, `::first-letter`, etc.).
Also add a utility named `content` that will add an empty content property to your element

## Usage

### Install

#### NPM
```sh
npm install tailwindcss-pseudo --save-dev
```

#### Yarn
```sh
yarn add tailwindcss-pseudo -D
```

### Configuration

```js
module.exports = {
  variants: {
    backgroundColor: ['focus', 'hover', 'after', 'before'],
},
  plugins: [
    require('tailwindcss-pseudo')(),
  ]
}
```

### HTML

```html
<div class="relative before:bg-blue-500 before:content">
  <img class="absolute pin w-full h-full" src="..." />
</div>
```

### Credits

Special thanx to @yutahaga for the original plugin, I only changed it a bit to include the utility.