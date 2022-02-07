import * as React from 'react';
import styles from './PageNav.module.scss';
import Veselin from './_illustration/Veselin';
import { Box, Card } from '@mui/material';
import { TState } from '../store/index';
import { useSelector } from 'react-redux';

// interface IPageNav {
//      (): JSX.Element;
// };

interface IStyle  {
     card_container: {
         background: string;
         boxShadow: number;
     }
};

const PageNav: React.FC<{}> = () => {


     const colors = useSelector((state: TState) => state.appColorsReducer.value);
    
     const style: IStyle = {
          card_container: {
               background: 'transparent',
               boxShadow: 0,
          }
     };

     const cardTitle: JSX.Element = (
          <Card sx={style.card_container} className={styles.card_container}>
               <Box>
                    <Veselin color={colors.bodyColor} />
               </Box>
               <Box className={styles.typing_container} />
          </Card>
     );

     return cardTitle;
}

export default PageNav;

