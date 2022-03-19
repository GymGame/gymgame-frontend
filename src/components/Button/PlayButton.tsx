import React from "react";
import { Button, styled } from "@mui/material";

type MyProps = {
  onClickHandler: (event: React.MouseEvent<HTMLButtonElement>) => void;
  styles?: React.CSSProperties;
};

const PlayButton = ({ onClickHandler, styles }: MyProps) => {
  const StyledButton = styled(Button)({
    ...styles,
  });

  return (
    <StyledButton
      sx={{
        height: "13.7rem",
        width: "13.7rem",
        transform: "scale(.8)",
      }}
      disableRipple={true}
      onClick={onClickHandler}
    >
      <svg width='100%' height='100%' fill='none'>
        <mask
          id='ubpbfm1x7b'
          style={{ maskType: "alpha" }}
          maskUnits='userSpaceOnUse'
          x='0'
          y='0'
          width='100%'
          height='100%'
        >
          <path
            d='M203 101.5c0 56.057-45.443 101.5-101.5 101.5S0 157.557 0 101.5 45.443 0 101.5 0 203 45.443 203 101.5zm-187.695 0c0 47.604 38.59 86.195 86.195 86.195 47.604 0 86.195-38.591 86.195-86.195 0-47.604-38.591-86.195-86.195-86.195-47.604 0-86.195 38.59-86.195 86.195z'
            fill='url(#q1clvs0m9a)'
          />
        </mask>
        <g clipPath='url(#nvp7lqw1uc)' mask='url(#ubpbfm1x7b)'>
          <path fill='#fff' d='M0 0h203v203H0z' />
          <path transform='rotate(180 251 250)' fill='url(#m9gjw3ko6d)' d='M251 250h251v250H251z' />
          <path
            transform='rotate(180 251 250)'
            fill='url(#lo8zg5dt7e)'
            style={{ mixBlendMode: "difference" }}
            d='M251 250h251v250H251z'
          />
          <path
            transform='rotate(180 251 250)'
            fill='url(#rfg5jclm4f)'
            style={{ mixBlendMode: "screen" }}
            d='M251 250h251v250H251z'
          />
        </g>
        <path
          d='M44.926 121h8v-17.536h12.16c13.056 0 15.552-8.32 15.552-14.016s-2.496-14.144-15.552-14.144h-20.16V121zm8-39.168h11.84c4.224 0 7.872 1.536 7.872 7.552 0 5.76-4.416 7.552-8 7.552H52.926V81.832zM86.782 121h7.296V75.304h-7.296V121zm42.958-24.384c0-6.976-6.784-9.6-13.248-9.6-7.36 0-14.528 2.496-15.04 11.008h7.296c.32-3.584 3.2-5.248 7.296-5.248 2.88 0 6.848.64 6.848 4.48 0 4.352-4.608 3.648-9.92 4.672-6.144.704-12.736 2.048-12.736 10.304 0 6.464 5.376 9.664 11.328 9.664 3.904 0 8.576-1.216 11.456-4.032.576 3.008 2.624 4.032 5.632 4.032 1.216 0 3.52-.448 4.608-.832v-5.056c-.384.064-.704.128-1.024.128h-.768c-1.344 0-1.728-.704-1.728-2.496V96.616zm-7.296 13.248c0 4.608-4.992 6.272-8.192 6.272-2.56 0-6.72-.896-6.72-4.224 0-3.84 2.816-4.992 5.952-5.504 3.264-.576 6.72-.512 8.96-1.984v5.44zm24.042 11.008-.832 2.56c-.832 2.816-1.792 4.608-5.12 4.608-1.216 0-2.24-.256-3.456-.448v6.144c1.664.256 3.328.384 5.056.384 7.68 0 9.344-5.376 11.712-11.328l12.864-34.88h-7.616l-8.384 24.704h-.128l-8.64-24.704h-8l12.544 32.96z'
          fill='#fff'
        />
        <defs>
          <radialGradient
            id='m9gjw3ko6d'
            cx='0'
            cy='0'
            r='1'
            gradientUnits='userSpaceOnUse'
            gradientTransform='rotate(29.596 -468.629 683.38) scale(230.322 231.436)'
          >
            <stop offset='.076' stopColor='#FB876E' />
            <stop offset='.351' stopColor='#42FFD2' />
            <stop offset='.635' stopColor='#42D2FF' />
            <stop offset='1' stopColor='#42A4FF' />
          </radialGradient>
          <radialGradient
            id='lo8zg5dt7e'
            cx='0'
            cy='0'
            r='1'
            gradientUnits='userSpaceOnUse'
            gradientTransform='matrix(0 125 -125.5 0 376.5 375)'
          >
            <stop offset='.083' stopColor='#fff' />
            <stop offset='.266' />
            <stop offset='.469' stopColor='#fff' />
            <stop offset='.635' />
            <stop offset='.792' stopColor='#fff' />
            <stop offset='1' />
          </radialGradient>
          <radialGradient
            id='rfg5jclm4f'
            cx='0'
            cy='0'
            r='1'
            gradientUnits='userSpaceOnUse'
            gradientTransform='matrix(0 125 -125.5 0 376.5 375)'
          >
            <stop offset='.047' stopColor='#fff' stopOpacity='.72' />
            <stop offset='.245' />
            <stop offset='.422' stopColor='#fff' stopOpacity='.72' />
            <stop offset='.625' />
            <stop offset='.802' stopColor='#fff' stopOpacity='.72' />
            <stop offset='1' />
          </radialGradient>
          <clipPath id='nvp7lqw1uc'>
            <path fill='#fff' d='M0 0h203v203H0z' />
          </clipPath>
          <pattern id='q1clvs0m9a' patternContentUnits='objectBoundingBox' width='1' height='1'>
            <use xlinkHref='#9hmre6vf1g' transform='scale(.01563)' />
          </pattern>
          <image
            id='9hmre6vf1g'
            width='64'
            height='64'
            xlinkHref='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAA40lEQVR4Xu3bQQ6EQAhEUbj/oXsO8Sdh4XOvJAi/qkF3Zt6E6710++xuiD6T40uACtACqYlzD2IACFKBkoHcgmSQDJJBMngKIT6ADygF6DSYfcCLTzg/z0eGrASogDbT0gKxB2MB5pkiBoBgrEEMwIBjLx9fAAiCIAhygmkkRgYjhWMHditsL2AvYC+QIHjdwzk+BmAABmBAWc1kCF0bKRAEQRAEQRAMGaACbaCUz/P5BRiKxhQaiV07uRjfYgQDMKDpGAhGCMUCzD4CBEEw1iAGYIBPZMJh+g8/P8cKpAJfV4EfMee/sLtaEFIAAAAASUVORK5CYII='
          />
        </defs>
      </svg>
    </StyledButton>
  );
};

export default PlayButton;
