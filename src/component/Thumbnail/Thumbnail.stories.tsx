import { Thumbnail } from './Thumbnail';
import type { Meta, StoryFn } from '@storybook/react';
import { hstack, vstack } from '../../styled-system/patterns';
import { css } from '../../styled-system/css';

export default {
  component: Thumbnail,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/tN7Q8dJZqVsjo2FWflOKfu/CDS(Corca-Design-System)?node-id=435%3A15184&mode=dev',
    },
  },
} as Meta<typeof Thumbnail>;

const Template: StoryFn<typeof Thumbnail> = args => <Thumbnail {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  url: 'https://picsum.photos/id/237/200/300',
  alt: 'cute dog',
  size: 54,
};

const containerStyle = hstack({ gap: 20, alignItems: 'center', justifyContent: 'center' });
const wrapperStyle = vstack({ gap: 20, alignItems: 'center', justifyContent: 'center' });

export function Size() {
  const sizes = [54, 72, 90];

  return (
    <div className={containerStyle}>
      {sizes.map(size => (
        <div className={wrapperStyle} key={size}>
          <div
            css={{
              display: 'flex',
            }}
          >
            <span
              className={css({
                textStyle: 'b2',
              })}
            >{`Size ${size}px`}</span>
          </div>
          <div
            css={{
              display: 'flex',
              gap: 20,
            }}
          >
            <Thumbnail url="https://picsum.photos/id/237/200/300" alt="cute dog" size={size} />
            <Thumbnail url={null} alt="cute dog" size={size} />
          </div>
        </div>
      ))}
    </div>
  );
}
