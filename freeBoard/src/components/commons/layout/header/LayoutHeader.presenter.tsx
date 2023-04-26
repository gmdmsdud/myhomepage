import { InnerLogo, InnerWrapper, Wrapper } from "./LayoutHeader.styles";
import { ILayoutHeaderProps } from "./LayoutHeader.types";

export default function LayoutHeaderUI(props: ILayoutHeaderProps) {
  return (
    <Wrapper>
      <InnerWrapper>
        <InnerLogo onClick={props.onClickLogo}> EUNYOUNG </InnerLogo>
        <div></div>
      </InnerWrapper>
    </Wrapper>
  );
}
