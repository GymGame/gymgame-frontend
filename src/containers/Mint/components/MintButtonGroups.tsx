import React from 'react';
import { Box, Button } from '@mui/material';

const styles = {
  flexRow: { display: 'flex', flexDirection: 'row' },
  boxRelative: { position: 'relative', '&:before': { content: '""', display: 'block', paddingTop: '100%' } },
  buttonAbsolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  boxPlusSubtract: {
    display: 'flex',
    flexDirection: 'column',
    width: '20%',
    ml: '1rem',
    justifyContent: 'space-between',
  },
  buttonCommon: {
    backgroundColor: '#2a2a2a',
    color: '#ffffff',
    border: 'solid 2px #5b5b5b',
    borderRadius: '8px',
    padding: 0,
    minWidth: 0,
  },
  buttonLarge: {
    fontSize: '7vw',
  },
  buttonSmall: {
    fontSize: '4vw',
  },
  boxLarge: {
    width: '40%',
  },
  boxSmall: {
    width: 'calc(100% - 0.5rem)',
  },
};

const MintButtonGroups = () => {
  return (
    <Box sx={styles.flexRow}>
      <Box
        sx={{
          ...styles.boxRelative,
          ...styles.boxLarge,
        }}
      >
        <Button
          sx={{
            ...styles.buttonCommon,
            ...styles.buttonAbsolute,
            ...styles.buttonLarge,
          }}
        >
          3
        </Button>
      </Box>
      <Box sx={styles.boxPlusSubtract}>
        <Box
          sx={{
            ...styles.boxRelative,
            ...styles.boxSmall,
          }}
        >
          <Button
            sx={{
              ...styles.buttonCommon,
              ...styles.buttonAbsolute,
              ...styles.buttonSmall,
            }}
          >
            +
          </Button>
        </Box>
        <Box
          sx={{
            ...styles.boxRelative,
            ...styles.boxSmall,
          }}
        >
          <Button
            sx={{
              ...styles.buttonCommon,
              ...styles.buttonAbsolute,
              ...styles.buttonSmall,
            }}
          >
            -
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default React.memo(MintButtonGroups);
