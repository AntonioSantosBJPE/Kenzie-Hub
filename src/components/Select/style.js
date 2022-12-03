import styled from "styled-components";

export const StyledContainerSelect = styled.div`
  width: 100%;
  height: fit-content;

  display: flex;
  flex-direction: column;

  label {
    font-weight: 400;
    font-size: 10px;
    color: var(--color-gray-0);
    margin-bottom: 15px;
  }
  p {
    font-weight: 400;
    font-size: 10px;
    color: var(--color-negative);
    margin-top: 5px;
  }

  select {
    width: 100%;
    height: 38px;

    background: var(--color-gray-2);
    color: var(--color-gray-1);
    outline-style: none;

    border-radius: 4px;
    border: 1px solid var(--color-gray-2);
    padding: 8px 13px;

    font-weight: 400;
    font-size: 12px;
    line-height: 21px;
  }

  select:focus {
    border: 1px solid var(--color-gray-0);
  }

  @media (min-width: 400px) {
    label,
    p {
      font-size: 12px;
    }

    select {
      height: 48px;
      font-size: 16px;
    }
  }
`;
