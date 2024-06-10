import { type ReactElement, type ReactNode, useEffect, useRef, useState } from 'react';

import styled from '@emotion/styled';

import Icon from '../Icon';
import { B1, B2, B3, B4, B5 } from '../Text';
import { color } from '../styles';
import { IconProps } from '../Icon/type';

export interface ProfileProps {
  avatar?: string;
  name: string;
  description?: string;
}

export interface ProfileOption {
  label: string;
  onClick: () => void;
  icon: (icon: IconProps) => ReactElement;
}

export interface ProfileOptionListProps {
  title: ReactNode;
  name: string;
  email: string;
  options?: ProfileOption[];
}

export type ProfileMenuProps = ProfileProps & ProfileOptionListProps;

const Container = styled.div`
  position: relative;
  display: inline-block;
`;

const ProfileContainer = styled.div<{ clicked?: boolean }>`
  display: inline-flex;
  padding: 8px 14px 8px 13px;
  justify-content: flex-end;
  align-items: center;
  gap: 18px;
  border-radius: 50px;
  background: ${color.white};
  box-shadow: ${({ clicked }) => clicked && `0 0 0 1.5px ${color['grey-30']} inset,`} 0px 4px 10px
    0px rgba(0, 0, 0, 0.05);
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const AvatarWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;
const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  min-width: 86px;
  span:last-child {
    line-height: 12px;
  }
`;

const DropdownButton = styled.div<{ clicked?: boolean }>`
  width: 20px;
  height: 20px;
  margin: auto;
  flex-shrink: 0;
  cursor: pointer;
  transform: ${({ clicked }) => (clicked ? 'rotate(-180deg);' : 'rotate(0);')};
`;

const Image = styled.div<{ url?: string }>`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  object-fit: cover;
  background-image: url(${({ url }) => url});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-color: #7a7a7a;
`;

const MenuProfileContainer = styled.div`
  width: 100%;
  padding: 6px 10px 10px 10px;
  background: ${color.white};
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
`;

const ClientDataWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 0 8px;
  * {
    line-height: normal;
  }
`;
const MenuDivider = styled.hr`
  border-width: 0px 0px thin;
  border-style: solid;
  border-color: ${color['grey-30']};
  width: 100%;
  margin: 0;
  padding: 0;
  margin-top: 16px;
`;

const MenuWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 4px;
`;

const MenuButton = styled.button`
  background: inherit;
  border: none;
  cursor: pointer;
  padding: 0;
`;

const MenuItem = styled.li`
  display: flex;
  gap: 6px;
  padding: 6px 8px;
  align-items: center;
  border-radius: 8px;
  &:hover {
    background: ${color['grey-20']};
  }
  &:active {
    background: ${color['grey-30']};
  }
`;

const TitleWrapper = styled.div`
  height: 32px;
  padding-top: 12px;
`;

const OptionWrapper = styled.div`
  position: absolute;
  z-index: 1000;
  margin-top: 9px;
  right: 0;
  min-width: 100%;
`;

const InfoName = styled.div`
  height: 21px;
  display: flex;
  align-items: center;
`;

function ProfileOptionList({ title, name, email, options }: ProfileOptionListProps) {
  return (
    <MenuProfileContainer>
      <ClientDataWrapper>
        <TitleWrapper>
          <B4>{title}</B4>
        </TitleWrapper>
        <B1>{name}</B1>
        <B3>{email}</B3>
      </ClientDataWrapper>
      <MenuWrapper>
        <MenuDivider />
        {options?.map(menu => {
          const Icon = menu.icon;
          return (
            <MenuButton key={menu.label} onClick={menu.onClick}>
              <MenuItem>
                <Icon />
                <B3>{menu.label}</B3>
              </MenuItem>
            </MenuButton>
          );
        })}
      </MenuWrapper>
    </MenuProfileContainer>
  );
}

function Profile({
  avatar,
  name,
  description,
  onClick,
  clicked,
}: {
  avatar?: string;
  name: string;
  description?: string;
  onClick: () => void;
  clicked: boolean;
}) {
  return (
    <ProfileContainer clicked={clicked}>
      <Wrapper>
        <AvatarWrapper>
          <Image {...(avatar && { url: avatar })} />
          <Info>
            <InfoName>
              <B2>{name}</B2>
            </InfoName>
            <B5 c="grey-60">{description}</B5>
          </Info>
        </AvatarWrapper>
        <DropdownButton clicked={clicked} onClick={onClick}>
          <Icon.ChevronDownSmall />
        </DropdownButton>
      </Wrapper>
    </ProfileContainer>
  );
}

export function ProfileMenu({ avatar, name, description, ...optionListProps }: ProfileMenuProps) {
  const [showMenu, setShowMenu] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (wrapperRef.current != null && !wrapperRef.current.contains(event.target as Node)) {
        setShowMenu(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [wrapperRef]);

  return (
    <Container ref={wrapperRef}>
      <Profile
        avatar={avatar}
        name={name}
        {...(description && { description })}
        onClick={() => {
          setShowMenu(!showMenu);
        }}
        clicked={showMenu}
      />
      <OptionWrapper>
        {showMenu && <ProfileOptionList name={name} {...optionListProps} />}
      </OptionWrapper>
    </Container>
  );
}
