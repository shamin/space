import React from 'react';
import { storiesOf } from '@storybook/react';
import { ThemeProvider } from 'emotion-theming'
import themes from '../../themes'
import { Select } from '..'

class SelectDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: "option-2",
    };
  }

  onSelect = (selected) => {
    this.setState({ selected })
  };

  render() {
    const options = [
      {
        key: "option-1",
        value: "Option 1",
        disabled: true
      },
      {
        key: "option-2",
        value: "Option 2"
      },
      {
        key: "option-3",
        value: "Option 3",
        
      }]
    const { selected } = this.state;
    return (
      <ThemeProvider theme={themes.light}>
        <Select
          options={options}
          name="radio-group"
          selected={selected}
          onSelect={this.onSelect}
          defaultValue={selected} />
      </ThemeProvider>
    );
  }
}

storiesOf('Inputs', module)
  .add('Select', () => (
    <SelectDemo label="Checkbox" />
  ))
