# sass-contrast-color

## API

```sass
// Compare colors to higher contrast
contrast($base-color, $color1, $color2)

// Compare colors to lower contrast (inverting the former contrast function)
invert-contrast($base-color, $color1, $color2)
```
### Parameter:

* $base-color - set the basic color
* $color1 - first color to compare with base-color
* $color2 - second color to compare with base-color

## Example

```sass
  body
    background-color: red
    color: contrast(red, black, white)
```

The example will compare black and white with red and give back the more higher contrast color.

See the compiled CSS code:

```css
  body {
    background-color: red;
    color: white;
  }
```
