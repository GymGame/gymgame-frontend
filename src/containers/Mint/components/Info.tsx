import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';
import React from 'react';

function Info(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.67 2h8.67C19.73 2 22 4.38 22 7.92v8.17c0 3.53-2.27 5.91-5.66 5.91H7.67C4.28 22 2 19.62 2 16.09V7.92C2 4.38 4.28 2 7.67 2zm4.32 7.06a.87.87 0 0 1-.86-.87.875.875 0 1 1 .86.87zm.88 6.72c0 .48-.39.87-.88.87a.87.87 0 0 1-.87-.87v-4.42c0-.48.39-.88.87-.88.49 0 .88.4.88.88v4.42z"
        fill="#FFC700"
      />
    </SvgIcon>
  );
}

export default React.memo(Info);
