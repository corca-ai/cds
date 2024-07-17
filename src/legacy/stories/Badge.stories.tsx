import styled from '@emotion/styled';

import { Badge, badgeVariants } from '../components';
import type { Meta, StoryFn } from '@storybook/react';

export default {
  title: 'Components/Badge',
  component: Badge,
  tags: ['autodocs'],
  decorators: [
    (Story: StoryFn) => (
      <Container>
        <Story />
      </Container>
    ),
  ],
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

export function Variant() {
  return (
    <>
      <BadgeContainer>
        {badgeVariants.map(variant => (
          <Badge label="Example Badge" variant={variant} key={variant} />
        ))}
      </BadgeContainer>
      <BadgeContainer>
        {badgeVariants.map(variant => (
          <Badge dotted label="Example Badge" variant={variant} key={variant} />
        ))}
      </BadgeContainer>
    </>
  );
}

export function Width() {
  return (
    <>
      <BadgeContainer>
        {badgeVariants.map(variant => (
          <Badge label="Example Badge Long Text" variant={variant} key={variant} />
        ))}
      </BadgeContainer>
      <BadgeContainer>
        {badgeVariants.map(variant => (
          <Badge dotted label="Example Badge Long Text" variant={variant} key={variant} />
        ))}
      </BadgeContainer>
    </>
  );
}

const Container = styled.div`
  display: flex;
  gap: 40px;
  align-items: center;
  justify-content: center;
`;

const BadgeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
