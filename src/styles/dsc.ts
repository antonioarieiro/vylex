//design system components styles
import styled from "styled-components";

interface ButtonProps {
  type: string;
}

export const ButtonContainer = styled.button<ButtonProps>`
  font-weight: 600;
  background-color: ${({ type }) =>
    type === "alert" ? "#f1ca45" : type === "subtle" ? "none" : "#0052cc"};
  padding: 4px;
  color: ${({ type }) => (type === "subtle" ? " #000" : " #fff")};
  border-radius: 4px;
  font-family: system-ui;
  transition: box-shadow 0.3s ease;
  box-shadow: ${({ type }) =>
    type !== "subtle" ? "0 4px 6px rgba(0, 0, 0, 0.1)" : "none"};

  &:active {
    transform: translateY(2px);
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);
  }
`;

export const InputContainer = styled.input`
  width: 100%;
  font-family: system-ui;
  background-color: rgb(250, 251, 252);
  border-radius: 4px;
  border-width: 2px;
  cursor: text;
  padding: 4px;
  &:focus {
    border-color: #0052cc;
    outline: none;
  }
`;

export const TextAreaContainer = styled.textarea`
  font-family: system-ui;
  width: 100%;
  background-color: rgb(250, 251, 252);
  border-radius: 3px;
  border-width: 2px;
  cursor: text;
  padding: 4px;
  &:focus {
    border-color: #0052cc;
    outline: none;
  }
`;

export const Title = styled.h1`
  font-family: system-ui;
  font-weight: 600;
  font-size: 22px;
`;

export const DefaulText = styled.h1`
  font-family: system-ui;
  font-weight: 400;
  font-size: 15px;
`;

export const SubTitle = styled.h2`
  font-family: system-ui;
  font-weight: 600;
  font-size: 18px;
`;

export const inputLabel = styled.label`
  font-family: system-ui;
  font-weight: 600;
  font-size: 15px;
`;

export const CardContainer = styled.div`
  gap: 10px;
  border-radius: 3px;
  border-width: 2px;
  padding: 10px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
`;

export const CardContainerFooter = styled.div`
  gap: 4px;
  width: 100%;
  display: flex;
  align-items: end;
  justify-content: end;
`;

export const CardContainerBody = styled.div`
  gap: 4px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const BreadCrumb = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
`;

export const ReturnLink = styled.p`
  font-weight: 400;
  font-family: system-ui;
  &:hover {
    color: #0052cc;
    font-weight: 600;
  }
`;

export const CurrentPath = styled.p`
  font-weight: 600;
  font-family: system-ui;
`;

export const ModalOverlayContainer = styled.div`
  z-index: 10;
  background-color: #191c32;
  opacity: 0.4;
  position: absolute;
  top: 0px;
  left: 0px;
  width: -webkit-fill-available;
  height: -webkit-fill-available;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContainer = styled.div`
  top: -10px;
  left: -10px;
  position: absolute;
  z-index: 10;
  width: -webkit-fill-available;
  height: -webkit-fill-available;
  overflow: hidden;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalBody = styled.div`
  gap: 10px;
  display: flex;
  flex-direction: column;
  padding: 10px;
  min-width: 400px;
  background: #fff;
  border-radius: 4px;
  position: relative;
  z-index: 100;
  width: fit-content;
  height: auto;
`;

export const Layout = styled.div`
  //padding: 16px;
  width: 100%;
  height: 100%;
`;

export const LayoutHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #ebecf0;
  background-color: #ffffff;
  padding: 10px;
  background-color: #f0f0f0;
  gap: 15px;
`;

export const LayoutBody = styled.div`
  margin-top: 10px;
  padding: 10px;
`;

export const NavItem = styled.nav`
  display: flex;
  color: #000;
  font-weight: 600;
  &:hover {
    color: #0052cc;
    font-weight: 600;
  }
`;

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;