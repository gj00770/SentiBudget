import { FunctionComponent } from "react";
import { HeaderWarper, HeaderItem, Logout } from "./style";

export const Header: FunctionComponent = () => {
  return (
    <HeaderWarper>
      <HeaderItem>대시보드</HeaderItem>
      <HeaderItem>히스토리</HeaderItem>
      <HeaderItem>설정</HeaderItem>
      <Logout>로그아웃</Logout>
    </HeaderWarper>
  );
};
