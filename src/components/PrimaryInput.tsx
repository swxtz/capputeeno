
import { SearchIcon } from "@/icons/SearchIcon";
import { InputHTMLAttributes } from "react";
import { styled } from "styled-components";

export const PrimaryInput = styled.input`
  width: 352px;
  border-radius: 8px;
  background-color: var(--bg-secondary);
  padding: 10px 16px;
  
  border: none;
  font-family: inherit;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: var(--text-dark);
`;

const InputContainer = styled.div`
  position: relative;
  width: 352px;

  svg {
    position: absolute;
    right: 20px;
    top:50%;
    transform: translateY(-50%);
  }
`;

interface PrimaryInputWithSearchIconProps extends InputHTMLAttributes<HTMLInputElement>{

}

export function PrimaryInputWithSearchIcon(props: PrimaryInputWithSearchIconProps) {
  return (
    <InputContainer>
      <PrimaryInput {...props} />
      <SearchIcon />
    </InputContainer>
  );
}