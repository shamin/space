import React from 'react';
import { Text, COLORS, FONT_SIZES, WEIGHTS } from '../../src';
import Propsinfo from '../propsInfo';

const TextInfo = () => (
  <div>
    <h3>Typography</h3>
    <Text color={COLORS.Neutral.N10} size={FONT_SIZES.large}>
      Large Size Normal Weight #161D2E
    </Text>
    <Text color={COLORS.Neutral.N9} size={FONT_SIZES.medium} weight={WEIGHTS.medium}>
      Medium Size Medium Weight #252F3F
    </Text>
    <Text color={COLORS.Neutral.N7} size={FONT_SIZES.medium} weight={WEIGHTS.medium}>
      Medium Size Medium Weight #374151
    </Text>
    <Text color={COLORS.Neutral.N10} size={FONT_SIZES.medium}>
      Medium Size Normal Weight #161D2E
    </Text>
    <Text color={COLORS.Neutral.N8} size={FONT_SIZES.medium}>
      Medium Size Normal Weight #374151
    </Text>
    <Text color={COLORS.Neutral.N7} size={FONT_SIZES.medium}>
      Medium Size Normal Weight #6C7280
    </Text>
    <Text color={COLORS.Neutral.N10} size={FONT_SIZES.normal}>
      Normal Size Normal Weight #161D2E
    </Text>
    <Text color={COLORS.Neutral.N8} size={FONT_SIZES.normal}>
      Normal Size Normal Weight #374151
    </Text>
    <Text color={COLORS.Neutral.N7} size={FONT_SIZES.normal}>
      Normal Size Normal Weight #6C7280
    </Text>
    <Text color={COLORS.Neutral.N6} size={FONT_SIZES.normal}>
      Normal Size Normal Weight #9EA6B2
    </Text>
    <Text color={COLORS.Neutral.N7} size={FONT_SIZES.small}>
      Small Size Normal Weight #6C7280
    </Text>
    <Text color={COLORS.Neutral.N7} size={FONT_SIZES.verySmall}>
      Very Small Size Normal Weight #6C7280
    </Text>
    <Propsinfo component={Text} />
  </div>
);

export default TextInfo;
