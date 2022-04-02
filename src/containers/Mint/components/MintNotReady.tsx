import React from 'react';
import { Box, Typography } from '@mui/material';
import { colors } from '../../../theme';
import TwitterIcon from '@mui/icons-material/Twitter';
import Discord from './Discord';

const styles = {
  typographyOne: { color: colors.grey_1, mb: '16px' },
};

type CardProps = {
  title: string;
  children: JSX.Element;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
};

const Card = ({ title, children, onClick }: CardProps) => {
  return (
    <Box
      onClick={onClick}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: colors.grey_2,
        alignItems: 'center',
        width: '40%',
        height: '272px',
        borderRadius: '16px',
        '&:hover': { cursor: 'pointer' },
      }}
    >
      <Box sx={{ m: '2rem auto' }}>{children}</Box>
      <Typography variant="h4" component="div">
        {title}
      </Typography>
    </Box>
  );
};

const MintNotReady = () => {
  return (
    <>
      <Typography variant="h5" component="div" sx={styles.typographyOne}>
        The minting process hasn’t begun yet. Be sure to join our Discord and follow our Twitter for the latest updates.
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'row', gap: '1rem' }}>
        <Card title="Discord" onClick={() => window.open('https://discord.com/', '_blank')}>
          <Discord />
        </Card>
        <Card title="Twitter" onClick={() => window.open('https://twitter.com/', '_blank')}>
          <TwitterIcon sx={{ color: colors.white, width: '152px', height: '118px' }} />
        </Card>
      </Box>
    </>
  );
};

export default React.memo(MintNotReady);
