import React from 'react';
import { Box, Button, Typography } from '@mui/material';

const MintWhiteList = () => {
  return (
    <Box sx={{ width: '100%', backgroundColor: '#2a2a2a', borderRadius: '16px', padding: '32px', mb: '2rem' }}>
      <Typography variant="h3" component="div" gutterBottom>
        Whitelist Mint
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'row' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', flexBasis: '100%', flex: 1 }}>
          <Typography variant="h6" component="div" sx={{ color: '#adadad', mb: '16px' }}>
            Quantity to mint
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', justifyItems: 'space-between' }}>
            <Box
              sx={{
                position: 'relative',
                width: '40%',
                '&:before': { content: '""', display: 'block', paddingTop: '100%' },
              }}
            >
              <Button
                sx={{
                  backgroundColor: '#2a2a2a',
                  color: '#ffffff',
                  fontSize: '7vw',
                  border: 'solid 2px #5b5b5b',
                  borderRadius: '8px',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                }}
              >
                3
              </Button>
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                width: '20%',
                ml: '1rem',
                justifyContent: 'space-between',
              }}
            >
              <Box
                sx={{
                  position: 'relative',
                  width: '90%',
                  '&:before': { content: '""', display: 'block', paddingTop: '100%' },
                }}
              >
                <Button
                  sx={{
                    backgroundColor: '#2a2a2a',
                    color: '#ffffff',
                    border: 'solid 2px #5b5b5b',
                    borderRadius: '8px',
                    padding: 0,
                    fontSize: '4vw',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    minWidth: 0,
                  }}
                >
                  +
                </Button>
              </Box>
              <Box
                sx={{
                  position: 'relative',
                  width: '90%',
                  '&:before': { content: '""', display: 'block', paddingTop: '100%' },
                }}
              >
                <Button
                  sx={{
                    backgroundColor: '#2a2a2a',
                    color: '#ffffff',
                    border: 'solid 2px #5b5b5b',
                    borderRadius: '8px',
                    padding: 0,
                    fontSize: '4vw',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    minWidth: 0,
                  }}
                >
                  -
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', flexBasis: '100%', flex: 1 }}>
          <Box>Price per Gym Junkie</Box>
          <Box>Total price</Box>
        </Box>
      </Box>
    </Box>
  );
};

export default React.memo(MintWhiteList);
