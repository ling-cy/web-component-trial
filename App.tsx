import * as React from 'react';
import Button from '@mui/material/Button';
import PropTypes from 'prop-types';

type AppProps = {
  url?: string;
  color?: React.CSSProperties;
  text?: string;
};

const App: React.FC<AppProps> = ({
  url = 'https://www.google.com.hk/',
  color = '#FF0068',
  text = 'Login',
}) => {
  const handleOnClick = () => {
    window.open(url, '_blank');
  };

  return (
    <Button
      variant="contained"
      onClick={handleOnClick}
      disableRipple
      sx={{
        backgroundColor: color,
        minWidth: 150,
        minHeight: 40,
        borderRadius: 20,
      }}
    >
      {text}
    </Button>
  );
};

App.propTypes = {
  url: PropTypes.string,
  color: PropTypes.string,
  text: PropTypes.string,
};

export default App;
