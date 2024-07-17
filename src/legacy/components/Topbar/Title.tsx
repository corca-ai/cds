import styled from '@emotion/styled';

import Icon from '../Icon';
import { H1 } from '../Text';
import { Tooltip } from '../Tooltip';

const TitleSection = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  flex-shrink: 0;
`;

const QuestionIconWrapper = styled.i`
  cursor: pointer;
  display: flex;
  align-items: center;
`;

export interface TitleProps {
  title: string;
  description?: string;
}

export function Title({ title, description }: TitleProps) {
  return (
    <TitleSection>
      <H1>{title}</H1>
      {description && (
        <Tooltip content={description} direction="top-center">
          <QuestionIconWrapper>
            <Icon.InformationCircleLarge />
          </QuestionIconWrapper>
        </Tooltip>
      )}
    </TitleSection>
  );
}
