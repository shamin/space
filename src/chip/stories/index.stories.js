import React from 'react';
import { storiesOf } from '@storybook/react';
import { ThemeProvider } from 'emotion-theming'
import themes from '../../themes'
import { Chip } from '..'

class ChipsDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chips: [
        { label: "Closable 1", closable: true },
        { label: "Closable 2", closable: true },
        { label: "Non Closable", closable: false },
        { label: "Closable 3", closable: true }
      ],
    };
  }

  onClose = (chip) => {
    this.setState({ chips: this.state.chips.filter((c) => chip !== c) });
  }

  render() {
    const { chips } = this.state;
    return (
      <ThemeProvider theme={themes.light}>
        {chips.map((chip) =>
          <Chip
            key={chip.label}
            label={chip.label}
            closable={chip.closable}
            chip={chip}
            onClose={this.onClose} />
        )}
      </ThemeProvider>
    );
  }
}

storiesOf('Inputs', module)
  .add('Chips', () => (
    <ChipsDemo />
  ))
