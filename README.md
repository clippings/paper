# Paper
**Clippings Design System**

This is Clippings design system called Paper built using [Storybook][].

## Install

``` shell
git clone git@github.com:clippings/paper.git
cd paper
yarn install
yarn storybook
```

With the above commands you'd be able to browse the design system locally with the local URL outputted in your terminal.

## Usage

In order to use the Paper design system in your application, you need to install it as a dependency and import components from it:

``` shell
yarn add @clippings/paper
```

``` js
import { Button, ThemeProvider } from '@clippings/paper';

<ThemeProvider theme={{mode: "light" }}>
<p>
This is a paper button: <Button>Click me!</Button>
</p>
</ThemeProvider>
```

## Develop

When you develop Paper components, keep the storybook running and run the test script to watch for changes and run the tests.
``` shell
yarn test
```

Make sure to run the linters before commiting:
``` shell
yarn lint
```

## License

Licensed to Clippings Limited under the MIT license.

[Storybook]: https://storybook.js.org/
