import { ReactNode } from 'react';

import styled from '@emotion/styled';

import { B3 } from '../components';
import Icon from '../components/Icon';

export default {
  title: 'Foundation/Icon',
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/tN7Q8dJZqVsjo2FWflOKfu/CDS(Corca-Design-System)?type=design&node-id=435-17316&mode=design&t=90XgbxcTRUn2ydEs-4',
    },
  },
};

interface IconProps {
  children: ReactNode;
  name: string;
}

function IconBlock({ children, name }: IconProps) {
  return (
    <IconBlockContainer>
      <BlockIconWrapper>{children}</BlockIconWrapper>
      <B3>{name}</B3>
    </IconBlockContainer>
  );
}

const IconBlockContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 120px;
  height: 'max-content';
  padding: 8px;
  margin: 8px;
  text-align: 'center';
  border-radius: 6px;
  background-color: #fff;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.16);
`;

const BlockIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 60px;
`;

export function Default() {
  const icons = Object.keys(Icon).map(name => {
    const renderIcon = Icon[name as keyof typeof Icon];
    return (
      <IconBlock name={name} key={name}>
        {renderIcon({})}{' '}
      </IconBlock>
    );
  });

  return (
    <DefaultStoryContainer>
      <DefaultStoryWrapper>{icons}</DefaultStoryWrapper>
    </DefaultStoryContainer>
  );
}

const DefaultStoryContainer = styled.div`
  padding: 20px;
`;

const DefaultStoryWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  grid-gap: 12px;
`;
