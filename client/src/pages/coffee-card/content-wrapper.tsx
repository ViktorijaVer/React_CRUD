import { Stack, styled } from '@mui/material';

const ContentWrapper = styled(Stack)(({ theme }) => ({
  flexGrow: 1,
  width: '100%',
  padding: theme.spacing(1, 2),
}));

export default ContentWrapper;
