import styled from '@emotion/styled';

import { color } from '../styles';

const Container = styled.div<{ size: number }>`
  width: ${p => p.size}px;
  height: ${p => p.size}px;
  border-radius: 4px;
  background-color: ${color['grey-30']};
  box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.08) inset;
`;

const Image = styled.img`
  object-fit: cover;
  border-radius: 4px;
`;

interface Props {
  url: string | null;
  alt?: string;
  size?: number;
}

export function Thumbnail({ url, alt = 'image alt', size = 54 }: Props) {
  return (
    <Container size={size}>
      {url && <Image src={url} alt={alt} width={size} height={size} />}
    </Container>
  );
}
