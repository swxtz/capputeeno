"use client"

import { styled } from "styled-components";

import { Saira_Stencil_One } from 'next/font/google'
import { PrimaryInputWithSearchIcon } from "./PrimaryInput";

const sairaStencil = Saira_Stencil_One({ 
  weight: ["400"],
  subsets: ['latin'] 
})

const TagHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 160px;
`;

const Logo = styled.a`
  color: var(--logo-color);
  font-size: 2.5rem; // 40px
  font-weight: 400;
  line-height: 150%;
`;

export function Header() {
  return (
    <TagHeader>
      <Logo className={sairaStencil.className}>Capputeeno</Logo>
      <div>
        <PrimaryInputWithSearchIcon placeholder="Procurando por algo específico?" />
      </div>
    </TagHeader>
  )
}