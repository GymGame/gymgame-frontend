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
};

const Card = ({ title, children }: CardProps) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: colors.grey_2,
        alignItems: 'center',
        width: '40%',
        height: '272px',
        borderRadius: '16px',
      }}
    >
      {children}
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
        <Card title="Discord">
          <Discord sx={{ color: colors.white, width: '100%', height: '70%' }} />
        </Card>
        <Card title="Twitter">
          <TwitterIcon sx={{ color: colors.white, width: '100%', height: '70%' }} />
        </Card>
      </Box>
    </>
  );
};

export default React.memo(MintNotReady);
