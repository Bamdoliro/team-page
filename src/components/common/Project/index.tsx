import * as S from './style';

interface PropsType {
  title: string;
  date: string;
  background: string;
  img: string;
  url: string;
}

export default function Project({
  title,
  date,
  img,
  background,
  url,
}: PropsType) {
  return (
    <S.Project>
      <S.ImgFrame style={{ background: `${background}` }}>
        <S.Img src={img} />
      </S.ImgFrame>
      <S.InfoWrap>
        <S.Github href={url} target="_blank">
          <S.InfoTitle>{title}</S.InfoTitle>
        </S.Github>
        <S.InfoDate>{date}</S.InfoDate>
      </S.InfoWrap>
    </S.Project>
  );
}
