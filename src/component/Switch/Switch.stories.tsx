import { useState } from 'react';

import type { Meta, StoryFn } from '@storybook/react';
import { Switch } from './Switch';
import { hstack, vstack } from '../../../styled-system/patterns';

export default {
  component: Switch,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/tN7Q8dJZqVsjo2FWflOKfu/CDS(Corca-Design-System)?type=design&node-id=435-15115&mode=design&t=bhY2SksBs7AqptYx-0',
    },
  },
} as Meta<typeof Switch>;

const Template: StoryFn<typeof Switch> = args => <Switch {...args} />;
export const Basic = Template.bind({});
Basic.args = {
  disabled: false,
  checked: true,
};

const containerStyle = vstack({ gap: 20, flexDirection: 'column' });
const wrapperStyle = hstack({ gap: 15 });

export function Active() {
  const [active, setActive1] = useState(false);
  const [disabled1, setdDisabled1] = useState(true);
  const [disabled2, setdDisabled2] = useState(false);

  return (
    <div className={containerStyle}>
      <div className={wrapperStyle}>
        <Switch checked={active} onChange={setActive1} />
      </div>
      <div className={wrapperStyle}>
        <Switch checked={disabled1} disabled onChange={setdDisabled1} />
        <Switch checked={disabled2} disabled onChange={setdDisabled2} />
      </div>
    </div>
  );
}
