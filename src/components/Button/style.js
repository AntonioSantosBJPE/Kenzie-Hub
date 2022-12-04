import styled, { css } from "styled-components";

const ButtonVariant = {
  primaryDefault: css`
    width: 100%;
    height: 38px;

    padding: 0 22px;

    border: 1px solid var(--color-primary);
    background-color: var(--color-primary);
    color: var(--color-gray-0);

    &:hover {
      border: 1px solid var(--color-primary-hover);
      background-color: var(--color-primary-hover);
    }

    &:disabled {
      border: 1px solid var(--color-primary-disableb);
      background-color: var(--color-primary-disableb);
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

    &:hover {
      border: 1px solid var(--color-gray-2);
      background-color: var(--color-gray-2);
    }
    &:disabled {
      border: 1px solid var(--color-gray-4);
      background-color: var(--color-gray-4);
    }

    @media (min-width: 450px) {
      height: 48px;
    }
  `,
  grey3Default: css`
    height: 32px;

    padding: 0px 16px;

    border: 1px solid var(--color-gray-3);
    background-color: var(--color-gray-3);
    color: var(--color-gray-0);

    &:hover {
      border: 1px solid var(--color-gray-2);
      background-color: var(--color-gray-2);
    }

    @media (min-width: 450px) {
      height: 38px;
    }
  `,
  borderNone: css`
    height: 32px;

    border: none;
    background-color: transparent;
    color: var(--color-gray-1);

    &:hover {
      opacity: 50%;
    }

    @media (min-width: 450px) {
      height: 38px;
    }
  `,
};

export const StyledButton = styled.button`
  ${({ variant }) => {
    return ButtonVariant[variant];
  }}
  cursor: pointer;

  border-radius: 4px;

  font-weight: 500;
  font-size: 12px;
  line-height: 26px;

  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 450px) {
    font-size: 16px;
  }
`;
