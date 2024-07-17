import { StoryFn } from '@storybook/react';

import styled from '@emotion/styled';

import { ProfileMenu, type ProfileMenuProps, Title as TitleComponent } from '../components';
import Icon from '../components/Icon';
import { type ProfileOption } from '../components/Topbar/ProfileMenu';

export default {
  title: 'Components/Topbar',
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
      url: 'https://www.figma.com/file/tN7Q8dJZqVsjo2FWflOKfu/CDS(Corca-Design-System)?type=design&node-id=435-15200&mode=design&t=0RPfKYm5afDTRSEE-0',
    },
  },
};

const ProfileTemplate: StoryFn<typeof ProfileMenu> = args => <ProfileMenu {...args} />;

const profileOptions: ProfileOption[] = [
  {
    label: '로그아웃',
    onClick: () => {
      alert('로그아웃');
    },
    icon: () => <Icon.Logout />,
  },
  {
    label: '셀러 전환',
    onClick: () => {
      alert('셀러 전환');
    },
    icon: () => <Icon.Switch />,
  },
];

export const Profile = ProfileTemplate.bind({});
const profileArgs: ProfileMenuProps = {
  name: 'Client name',
  avatar:
    'https://mblogthumb-phinf.pstatic.net/MjAxOTA3MTVfMjA0/MDAxNTYzMTc2Mzc5NTAy.lh9RRCYZCuuD_nYPyNdbhiJzdd7_YuUxfyzTWHX1flEg.sL2fBPI0Iglgm1lILEORTWRyb66n6PXgBLf2c2eyuiYg.JPEG.petgeek/cici.toto.mametchi_55864983_674522579671640_592800947380049308_n.jpg?type=w800',
  description: 'Description',
  title: '계정',
  email: 'store@corca.ai',
  options: profileOptions,
};

Profile.args = profileArgs;

const TitleTemplate: StoryFn<typeof TitleComponent> = args => <TitleComponent {...args} />;

export const Title = TitleTemplate.bind({});
Title.args = {
  title: 'Title',
  description: 'Description',
};

const Container = styled.div`
  padding: 10px 80px;
`;
