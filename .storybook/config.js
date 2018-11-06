import { configure } from '@storybook/react';

function loadStories() {
  require('./requireStories!./empty')
}

configure(loadStories, module);
