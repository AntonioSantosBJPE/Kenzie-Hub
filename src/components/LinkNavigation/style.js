import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const LinkVariant = {
  primaryDefault: css`
    width: 100%;
    height: 38px;

    padding: 0 22px;
    border: 1px solid var(--color-primary);
    background-color: var(--color-primary);
    color: var(--color-gray-0);

    font-size: 12px;

    &:hover {
      border: 1px solid var(--color-primary-hover);
      background-color: var(--color-primary-hover);
    }

    @media (min-width: 450px) {
      height: 48px;
      font-size: 16px;
    }
  `,

  grey1Default: css`
    width: 100%;
    height: 38px;

    padding: 0 22px;
    border: 1px solid var(--color-gray-1);
    background-color: var(--color-gray-1);
    color: var(--color-gray-0);

    font-size: 12px;

    &:hover {
      border: 1px solid var(--color-gray-2);
      background-color: var(--color-gray-2);
    }

    @media (min-width: 450px) {
      height: 48px;
      font-size: 16px;
    }
  `,

  grey3Medium: css`
    height: 32px;

    padding: 0 16px;
    border: 1px solid var(--color-gray-3);
    background-color: var(--color-gray-3);
    color: var(--color-gray-0);

    font-size: 10px;

    &:hover {
      background-color: var(--color-gray-2);
    }
  `,
};

export const StyledLink = styled(Link)`
  ${({ variant }) => {
    return LinkVariant[variant];
  }}

  cursor: pointer;
  text-decoration: none;
  border-radius: 4px;

  font-weight: 500;
  line-height: 26px;

  display: flex;
  align-items: center;
  justify-content: center;
`;
