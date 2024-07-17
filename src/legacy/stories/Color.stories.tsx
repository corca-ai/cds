import styled from '@emotion/styled';

import { B1, B3, H1, color } from '../components';

export default {
  title: 'Foundation/Color - Source',
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/tN7Q8dJZqVsjo2FWflOKfu/CDS(Corca-Design-System)?type=design&node-id=435-16999&mode=design&t=90XgbxcTRUn2ydEs-4',
    },
  },
};

export function Color() {
  return (
    <ColorContainer>
      <H1>Main color</H1>
      <ColorWrapper>
        <Palette name="main-black" />
        <Palette name="main-yellow" />
      </ColorWrapper>

      <H1>Grey color</H1>
      <ColorWrapper>
        <Palette name="grey-80" />
        <Palette name="grey-70" />
        <Palette name="grey-60" />
        <Palette name="grey-50" />
        <Palette name="grey-40" />
        <Palette name="grey-30" />
        <Palette name="grey-20" />
        <Palette name="grey-10" />
      </ColorWrapper>

      <H1>ETC color</H1>
      <EtcColorWrapper>
        <EtcColorContentsWrapper>
          <Palette name="black" />
          <Palette name="white" />
        </EtcColorContentsWrapper>
        <div>
          <Palette name="focus" />
        </div>
        <EtcColorContentsWrapper>
          <Palette name="error-10" />
          <Palette name="error-20" />
          <Palette name="error-30" />
        </EtcColorContentsWrapper>
        <EtcColorContentsWrapper>
          <Palette name="active-30" />
          <Palette name="active-20" />
          <Palette name="active-10" />
        </EtcColorContentsWrapper>
      </EtcColorWrapper>
    </ColorContainer>
  );
}

const ColorContainer = styled.div`
  padding: 47px;
`;

const ColorWrapper = styled.div`
  margin-bottom: 30px;
  display: flex;
  gap: 15px;
`;

const EtcColorWrapper = styled.div`
  margin-bottom: 30px;
  gap: 25px;
  display: flex;
  flex-direction: column;
`;

const EtcColorContentsWrapper = styled.div`
  gap: 15px;
  display: flex;
`;

type ColorType = keyof typeof color;

const Palette = ({ name }: { name: ColorType }) => {
  return (
    <PaletteContainer>
      <PaletteWrapper colorName={name} />
      <PaletteTextWrapper>
        <B1>{name}</B1>
        <B3>{color[name]}</B3>
      </PaletteTextWrapper>
    </PaletteContainer>
  );
};

const PaletteContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const PaletteWrapper = styled.div<{ colorName: ColorType }>`
  width: 110px;
  height: 55px;
  border-radius: 8px;
  background-color: ${({ colorName }) => color[colorName]};
`;

const PaletteTextWrapper = styled.div`
  display: flex;
  padding: 0px 2px;
  flex-direction: column;
  align-items: flex-start;
`;
