import styled from '@emotion/styled';

import { Button } from '../Button';
import { B2, H2 } from '../Text';
import { color } from '../styles';

export interface EmptyStateProps {
  label: string;
  description: string;
  button?: {
    text: string;
    onClick: () => void;
  };
}

export function EmptyState({ label, description, button }: EmptyStateProps) {
  return (
    <Container>
      <EmptyImage />
      <DescriptionContainer>
        <H2>{label}</H2>
        <B2>{description}</B2>
      </DescriptionContainer>
      {button != null && (
        <ButtonContainer>
          <Button variant="filled" size="large" color="main-black" onClick={button.onClick}>
            {button.text}
          </Button>
        </ButtonContainer>
      )}
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 100px 100px 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${color.white};
`;

const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-top: 40px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 24px;
`;

function EmptyImage() {
  return (
    <svg
      width="184"
      height="184"
      viewBox="0 0 184 184"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="92" cy="92" r="92" fill="#F3F3F3" />
      <rect x="39.5372" y="54.7441" width="104.926" height="27.3719" fill="#C8C8C8" />
      <rect
        x="46.8254"
        y="48.8193"
        width="87.4351"
        height="54.7786"
        transform="rotate(-2.93015 46.8254 48.8193)"
        fill="white"
      />
      <path
        d="M39.5372 135.338V60.0654H75.1251L78.9724 66.2545H144.463V135.338H39.5372Z"
        fill="#EEEEEE"
        fillOpacity="0.7"
      />
      <path
        d="M39.5372 135.141V65.3887H72.239L76.0863 71.8859H144.463V135.141C144.463 137.35 142.672 139.141 140.463 139.141H43.5372C41.3281 139.141 39.5372 137.35 39.5372 135.141Z"
        fill="#DDDDDD"
      />
    </svg>
  );
}
