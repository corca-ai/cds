import { Meta, StoryFn } from '@storybook/react';
import { Badge } from './Badge';
import { hstack, vstack } from '../../../styled-system/patterns';

export default {
  component: Badge,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/tN7Q8dJZqVsjo2FWflOKfu/CDS(Corca-Design-System)?type=design&node-id=392-1871&mode=design&t=ML3YPcDZJzLhfFhw-0',
    },
  },
} as Meta<typeof Badge>;

const Template: StoryFn<typeof Badge> = args => <Badge {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  dotted: true,
  label: 'Example Badge',
  variant: 'green',
};

const badgeVariants = ['green', 'grey', 'yellow', 'red'] as const;

const containerStyle = hstack({ gap: 40, alignItems: 'center', justifyContent: 'center' });
const wrapperStyle = vstack({ gap: 20, alignItems: 'center', justifyContent: 'center' });

export function Variant() {
  return (
    <div className={containerStyle}>
      <div className={wrapperStyle}>
        {badgeVariants.map(variant => (
          <Badge label={'Example Badge'} variant={variant} key={variant} />
        ))}
      </div>
      <div className={wrapperStyle}>
        {badgeVariants.map(variant => (
          <Badge dotted={true} label={'Example Badge'} variant={variant} key={variant} />
        ))}
      </div>
    </div>
  );
}

export function Width() {
  return (
    <div className={containerStyle}>
      <div className={wrapperStyle}>
        {badgeVariants.map(variant => (
          <Badge label={'Example Badge Long Text'} variant={variant} key={variant} />
        ))}
      </div>
      <div className={wrapperStyle}>
        {badgeVariants.map(variant => (
          <Badge dotted={true} label={'Example Badge Long Text'} variant={variant} key={variant} />
        ))}
      </div>
    </div>
  );
}
