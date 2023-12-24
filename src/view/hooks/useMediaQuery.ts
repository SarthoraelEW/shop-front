import { useMediaQuery } from '@mui/material';

export const useMobileMedia = (): boolean => {
  return useMediaQuery('(max-width:768px)');
};
