import { css } from "@emotion/react";

// export const add = () =>
//   css`
//     padding: 16px;
//   `;

// export const addForm = () =>
//   css`
//     /* display: flex;
//     align-items: flex-start; */
//   `;

export const addInput = ({ theme }) =>
  css`
    background: unset;
    border: unset;
    padding: 10px 64px;
    width: 100%;
    /* flex: 1; */
    border-bottom: 1px solid ${theme.color.primary.red};
    outline: unset;
    font-family: "Homemade Apple", sans-serif;
    font-size: 20px;
  `;
