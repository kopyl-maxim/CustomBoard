import React, { FC } from 'react';

type IconType = {
  color?: string;
};

export const CloseIcon: FC<IconType> = ({ color = 'grey' }) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path
          d="M18.3 5.71C17.91 5.32 17.28 5.32 16.89 5.71L12 10.59L7.11 5.7C6.72 5.31 6.09 5.31 5.7 5.7C5.31 6.09 5.31 6.72 5.7 7.11L10.59 12L5.7 16.89C5.31 17.28 5.31 17.91 5.7 18.3C6.09 18.69 6.72 18.69 7.11 18.3L12 13.41L16.89 18.3C17.28 18.69 17.91 18.69 18.3 18.3C18.69 17.91 18.69 17.28 18.3 16.89L13.41 12L18.3 7.11C18.68 6.73 18.68 6.09 18.3 5.71Z"
          fill={color}
      />
    </svg>
);


export const CheckIcon: FC<IconType> = ({ color = 'grey' }) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path
          d="M9 16.2L5.5 12.7C5.11 12.31 4.49 12.31 4.1 12.7C3.71 13.09 3.71 13.71 4.1 14.1L8.29 18.29C8.68 18.68 9.31 18.68 9.7 18.29L20.3 7.7C20.69 7.31 20.69 6.69 20.3 6.3C19.91 5.91 19.29 5.91 18.9 6.3L9 16.2Z"
          fill={color}
      />
    </svg>
);

export const EditIcon: FC<IconType> = ({ color = 'grey' }) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path
            d="M3 18.46V21.5C3 21.78 3.22 22 3.5 22H6.54C6.67 22 6.8 21.95 6.89 21.85L17.81 10.94L14.06 7.19L3.15 18.1C3.05 18.2 3 18.32 3 18.46ZM20.71 8.04C21.1 7.65 21.1 7.02 20.71 6.63L18.37 4.29C17.98 3.9 17.35 3.9 16.96 4.29L15.13 6.12L18.88 9.87L20.71 8.04Z"
            fill={color}
        />
    </svg>
);

