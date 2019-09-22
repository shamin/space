import React from 'react';
import { storiesOf } from '@storybook/react';
import { ThemeProvider } from 'emotion-theming'
import themes from '../../themes'
import { RadioGroup } from '..'

class SimpleRadioButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: "radio-1",
    };
  }

  onChange = (selected) => {
    this.setState({ selected: selected.key })
  };

  render() {
    const options = [
      {
        key: "radio-1",
        value: "Radio 1",
        disabled: true
      },
      {
        key: "radio-2",
        value: "Radio 2"
      },
      {
        key: "radio-3",
        value: "Radio 3",
        
      }]
    const { selected } = this.state;
    return (
      <ThemeProvider theme={themes.light}>
        <RadioGroup
          options={options}
          name="radio-group"
          selected={selected}
          onChange={this.onChange} />
      </ThemeProvider>
    );
  }
}

storiesOf('Inputs', module)
  .add('Radio Button', () => (
    <SimpleRadioButton label="Checkbox" />
  ))
