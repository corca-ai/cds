import { type ReactElement, type ReactNode, cloneElement, createElement, useCallback } from 'react';

import styled from '@emotion/styled';

import { type IconProps } from '../Icon/type';
import { Text } from '../Text';
import { color, typography } from '../styles';

interface NavItemType {
  icon: (icon: IconProps) => ReactElement;
  label: string;
  href: string;
  selected?: boolean;
}

export interface NavbarGroup {
  title: string;
  navItems: NavItemType[];
}

const Container = styled.nav`
  display: inline-flex;
  overflow-y: hidden;
  height: 100vh;
  padding: 25px 14px 18px 14px;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  flex-shrink: 0;
  background: ${color.white};
  box-shadow: 0px 4px 15px 0px rgba(0, 0, 0, 0.1);
`;

const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

const LogoContainer = styled.div`
  display: flex;
  width: 212px;
  height: 60px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const NavigationList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
`;

const Section = styled.ol`
  display: flex;
  width: 212px;
  flex-direction: column;
  align-items: flex-start;
  gap: 6px;
`;

const TitleWrapper = styled.div`
  width: 100%;
  padding: 0 8px;
  height: 28px;
  display: flex;
  align-items: center;
`;

const NavItem = styled.li<{ selectedColor?: string; selected: boolean }>`
  display: flex;
  width: 212px;
  height: 36px;
  padding: 8px;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
  border-radius: 8px;
  cursor: pointer;
  ${({ selected, selectedColor }) =>
    selected
      ? `
          background: ${selectedColor};
          span {
            font-weight: ${typography.weight.semibold} !important;
          }
        `
      : `&:hover {background: ${color['grey-20']};}`}
`;

const BottomSection = styled.div`
  width: 100%;
`;

export function Navigation({
  logoImage,
  logoHref,
  bottom,
  navbarGroup,
  selectedColor,
  LinkElement,
}: {
  logoImage: { src: string; width: number; height: number };
  logoHref: string;
  bottom?: ReactNode;
  navbarGroup: NavbarGroup[];
  selectedColor?: string;
  LinkElement?: ReactElement;
}) {
  const Link = useCallback(
    ({ href, children }: { href: string; children: ReactElement }) =>
      LinkElement != null
        ? cloneElement(LinkElement, { href }, children)
        : createElement('a', { href }, children),
    [],
  );
  return (
    <Container>
      <NavContainer>
        <LogoContainer>
          <Link href={logoHref}>
            <img
              alt="logo-image"
              src={logoImage.src}
              width={logoImage.width}
              height={logoImage.height}
            />
          </Link>
        </LogoContainer>
        <NavigationList>
          {navbarGroup.map(section => (
            <Section key={section.title}>
              <TitleWrapper>
                <Text size="xxs" fw="bold" c="grey-80">
                  {section.title}
                </Text>
              </TitleWrapper>
              {section.navItems.map(item => {
                const Icon = item.icon;
                return (
                  <Link href={item.href} key={item.label}>
                    <NavItem {...(selectedColor && { selectedColor })} selected={!!item.selected}>
                      <Icon size={20} />
                      <Text size="s" fw="regular">
                        {item.label}
                      </Text>
                    </NavItem>
                  </Link>
                );
              })}
            </Section>
          ))}
        </NavigationList>
      </NavContainer>
      <BottomSection>{bottom}</BottomSection>
    </Container>
  );
}
