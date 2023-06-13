import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';

function LoadingButton(props) {
  
   

  useEffect(() => {
    

    if (props.isLoading) {
      props.simulateNetworkRequest().then(() => {
        props.setResp(true);
        props.setLoading(false);
      });
    }
  }, [props.isLoading]);

  const handleClick = () => props.setLoading(true);

  return (
    <Button
      variant="primary"
      className='mt-2 float-end m-2'
      type="submit"
    //   disabled={isLoading}
      onClick={!props.isLoading ? handleClick : null}
    >
      {props.isLoading ? 'Loading…' : 'Calculate'}
    </Button>
  );
}

export default LoadingButton;