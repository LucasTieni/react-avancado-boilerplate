import * as S from './styles'

const Main = ({
  title = 'React Avancado',
  description = 'TypeScript, ReactJs, NextJs e Styled Components'
}) => (
  <S.Wrapper>
    <S.Logo src="/img/favicon.ico" alt="imagem do next" />
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
    <S.illustration src="/img/favicon.ico" alt="bla bla bla" />
  </S.Wrapper>
)

export default Main
