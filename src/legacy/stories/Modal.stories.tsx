import { Alert as CdsAlert, Confirm as CdsConfirm, Drawer, Modal } from '../components';
import type { Meta, StoryFn } from '@storybook/react';

export default {
  title: 'Components/Modal',
  tags: ['autodocs'],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/tN7Q8dJZqVsjo2FWflOKfu/CDS(Corca-Design-System)?type=design&node-id=953-38810&mode=design&t=qaeh1DmnXnMBnUdB-0',
    },
  },
} as Meta<any>;

const Template: StoryFn<typeof Modal> = args => <Modal {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  title: 'Title',
  subtitle: 'Description',
  opened: true,
  cancel: {
    label: '취소',
    onClick: () => {},
  },
  confirm: {
    label: '다음',
    onClick: () => {},
  },
  children: <>Body</>,
};

export const BasicDisabled = Template.bind({});
BasicDisabled.args = {
  title: 'Title',
  subtitle: 'Description',
  opened: true,
  cancel: {
    label: '취소',
    onClick: () => {},
    disabled: true,
  },
  confirm: {
    label: '다음',
    onClick: () => {},
    disabled: true,
  },
  children: <>Body</>,
};

const AlertTemplate: StoryFn<typeof CdsAlert> = args => <CdsAlert {...args} />;

export const Alert = AlertTemplate.bind({});
Alert.args = {
  opened: true,
  title: 'title',
  contents: 'contents',
  close: {
    label: '닫기',
    onClick: () => {},
  },
};

const ConfirmTemplate: StoryFn<typeof CdsConfirm> = args => <CdsConfirm {...args} />;

export const Confirm = ConfirmTemplate.bind({});
Confirm.args = {
  opened: true,
  title: 'title',
  contents: 'contents',
  cancel: {
    label: '닫기',
    onClick: () => {},
  },
  confirm: {
    label: '확인',
    onClick: () => {},
  },
};

const DrawerTemplate: StoryFn<typeof Drawer> = args => <Drawer {...args} />;

export const Side = DrawerTemplate.bind({});
Side.args = {
  title: 'Title',
  opened: true,
  children: <>Body</>,
};
