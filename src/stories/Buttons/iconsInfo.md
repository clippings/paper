This is the good way to display the icons (icon is set in scss):

```js
<CircleButton
  className="button-happy--example"
  variant="primary"
/>
```

This works but not desirable:

```js
<CircleButton variant="primary">
  <i className="icon-heart" />
</CircleButton>
```
You will find icons placeholders in *web/scss/components/buttons-icons.scss*.
If none of them serves create the placeholder that you need and a class extending this placeholder.

**Why so complicated?**
In the future we are going to cleanup our custom font and export it as placeholders, not classes. 
In our current font we have duplicates like several "user" icons so you don't know which one is to be used.

