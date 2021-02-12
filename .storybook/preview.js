import { addDecorator } from '@storybook/react';
import { withConsole } from '@storybook/addon-console';
import '@storybook/addon-console';

addDecorator((storyFn, context) => withConsole()(storyFn)(context));
