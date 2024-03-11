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

export function Title({ title, description }: { title: string; description?: string }) {
  return (
    <TitleSection>
      <H1>{title}</H1>
      {description && (
        <Tooltip content={description} direction="bottom">
          <QuestionIconWrapper>
            <Icon.InformationCircleLarge />
          </QuestionIconWrapper>
        </Tooltip>
      )}
    </TitleSection>
  );
}
