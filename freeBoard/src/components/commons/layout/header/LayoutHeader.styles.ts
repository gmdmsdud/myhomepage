import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  z-index: 9;
  padding: 12px 120px 0px 0px;
`;

export const InnerWrapper = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
`;

export const InnerLogo = styled.div`
  font-size: 25px;
  font-weight: bold;
  font-family: "live";
  font-style: italic;
  color: #6495ed;
  cursor: pointer;
`;

export const InnerButton = styled.span`
  margin: 10px;
  color: #5729ff;
  cursor: pointer;
`;
