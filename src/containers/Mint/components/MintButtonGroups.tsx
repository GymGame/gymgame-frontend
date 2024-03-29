import React from 'react';
import { Box, Button, SvgIcon } from '@mui/material';
import { styled } from '@mui/material/styles';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { colors } from '../../../theme';

export type MintButtonGroupsProps = {
  initialNumber: number;
  handleAdd: () => void;
  handleRemove: () => void;
  disableAdd: boolean;
  disableRemove: boolean;
};

type ButtonCommonOptions = {
  disabled?: boolean;
};

const styles = {
  flexRow: { display: 'flex', flexDirection: 'row' },
  boxRelative: { position: 'relative', '&:before': { content: '""', display: 'block', paddingTop: '100%' } },
  buttonAbsolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: '100%',
  },
  boxPlusSubtract: {
    display: 'flex',
    flexDirection: 'column',
    width: '20%',
    ml: '1rem',
    justifyContent: 'space-between',
  },
  buttonCommon: (options: ButtonCommonOptions = { disabled: false }) => ({
    backgroundColor: '#2a2a2a',
    color: '#ffffff',
    border: 'solid 2px #5b5b5b',
    borderRadius: '8px',
    padding: 0,
    minWidth: 0,
    '& svg': {
      color: options.disabled ? colors.grey_5 : '#fff',
    },
  }),
  buttonLarge: {
    fontSize: '5vw',
  },
  boxLarge: {
    width: '40%',
  },
  boxSmall: {
    width: 'calc(100% - 0.5rem)',
  },
};

const iconWrapper = (icon: typeof SvgIcon) => {
  return styled(icon)(({ theme }) => ({
    color: colors.white,
    [theme.breakpoints.down('sm')]: {
      fontSize: 15,
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: 30,
    },
    [theme.breakpoints.up('md')]: {
      fontSize: 60,
    },
  }));
};

const AddIconWrapper = iconWrapper(AddIcon);
const RemoveIconWrapper = iconWrapper(RemoveIcon);

const MintButtonGroups = ({
  initialNumber,
  handleAdd,
  handleRemove,
  disableAdd,
  disableRemove,
}: MintButtonGroupsProps) => {
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
            ...styles.buttonCommon(),
            ...styles.buttonAbsolute,
            ...styles.buttonLarge,
          }}
        >
          {initialNumber}
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
            disabled={disableAdd}
            sx={{
              ...styles.buttonCommon({ disabled: disableAdd }),
              ...styles.buttonAbsolute,
            }}
          >
            <AddIconWrapper onClick={handleAdd} />
          </Button>
        </Box>
        <Box
          sx={{
            ...styles.boxRelative,
            ...styles.boxSmall,
          }}
        >
          <Button
            disabled={disableRemove}
            sx={{
              ...styles.buttonCommon({ disabled: disableRemove }),
              ...styles.buttonAbsolute,
            }}
          >
            <RemoveIconWrapper onClick={handleRemove} />
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default React.memo(MintButtonGroups);
