import styled from '@emotion/styled';

import {
  B1,
  B2,
  B3,
  B4,
  B5,
  B6,
  B7,
  H1,
  H2,
  Text,
  color,
  fontStyle,
  typography,
} from '../components';

export default {
  title: 'Foundation/Typography',
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/tN7Q8dJZqVsjo2FWflOKfu/CDS(Corca-Design-System)?type=design&node-id=435-16895&mode=design&t=90XgbxcTRUn2ydEs-4',
    },
  },
};

export function Style() {
  const textSizeArray: Array<keyof typeof fontStyle> = [
    'h1',
    'h2',
    'b1',
    'b2',
    'b3',
    'b4',
    'b5',
    'b6',
    'b7',
  ];

  return (
    <Container>
      {textSizeArray.map((style, index) => (
        <StyleText key={index} style={style} />
      ))}
    </Container>
  );
}

const numToFontWeight = Object.entries(typography.weight).reduce(
  (acc, [k, v]) => ({ ...acc, [v]: k }),
  {},
) as Array<keyof typeof typography.weight>;

const styleSheet = {
  h1: {
    name: 'H1/heading1',
    component: H1,
    fontSize: fontStyle.h1.fontSize,
    fontWeight: numToFontWeight[fontStyle.h1.fontWeight],
  },
  h2: {
    name: 'H2/heading2',
    component: H2,
    fontSize: fontStyle.h2.fontSize,
    fontWeight: numToFontWeight[fontStyle.h2.fontWeight],
  },
  b1: {
    name: 'B1/Body1',
    component: B1,
    fontSize: fontStyle.b1.fontSize,
    fontWeight: numToFontWeight[fontStyle.b1.fontWeight],
  },
  b2: {
    name: 'B2/Body2',
    component: B2,
    fontSize: fontStyle.b2.fontSize,
    fontWeight: numToFontWeight[fontStyle.b2.fontWeight],
  },
  b3: {
    name: 'B3/Body3',
    component: B3,
    fontSize: fontStyle.b3.fontSize,
    fontWeight: numToFontWeight[fontStyle.b3.fontWeight],
  },
  b4: {
    name: 'B4/Body4',
    component: B4,
    fontSize: fontStyle.b4.fontSize,
    fontWeight: numToFontWeight[fontStyle.b4.fontWeight],
  },
  b5: {
    name: 'B5/Body5',
    component: B5,
    fontSize: fontStyle.b5.fontSize,
    fontWeight: numToFontWeight[fontStyle.b5.fontWeight],
  },
  b6: {
    name: 'B6/Body6',
    component: B6,
    fontSize: fontStyle.b6.fontSize,
    fontWeight: numToFontWeight[fontStyle.b6.fontWeight],
  },
  b7: {
    name: 'B7/Body7',
    component: B7,
    fontSize: fontStyle.b7.fontSize,
    fontWeight: numToFontWeight[fontStyle.b7.fontWeight],
  },
};

function StyleText({ style }: { style: keyof typeof styleSheet }) {
  const { component: Component, fontSize, fontWeight } = styleSheet[style];
  return (
    <ContentWrapper>
      {<Component>{styleSheet[style].name}</Component>}
      <TextWrapper>
        <Text>{fontSize}px</Text>
        <Text>{fontWeight}</Text>
        <Text>Pretendard</Text>
      </TextWrapper>
    </ContentWrapper>
  );
}

export function Size() {
  return (
    <Container>
      {(Object.keys(typography.size) as Array<keyof typeof typography.size>).map((size, index) => (
        <ContentWrapper key={index}>
          <Text size={size}>font-size-{size}</Text>
          <Text>{typography.size[size]}px</Text>
        </ContentWrapper>
      ))}
    </Container>
  );
}

export function Weight() {
  return (
    <Container>
      {(Object.keys(typography.weight) as Array<keyof typeof typography.weight>).map(
        (weight, index) => (
          <ContentWrapper key={index}>
            <Text fw={weight}>font-size-{weight}</Text>
            <Text>{typography.weight[weight]}</Text>
          </ContentWrapper>
        ),
      )}
    </Container>
  );
}

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

const ContentWrapper = styled.div`
  display: flex;
  height: 60px;
  padding: 0 30px;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${color['grey-20']};
`;

const TextWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 50px;
  width: 300px;
`;
