import Application from '../_components/App';

import { Provider } from 'react-redux';
import store from '../store/index';

import { ThemeProvider } from '@mui/material/styles';
import theme from '../MUI.theme';


const Main: React.VFC = () => {  //    VFC === VoidFunctionComponent 
                                 //    TO IGNORE:   @ts-ignore 
     return (
          <section className='pages-wrapper'>
               <Provider store={store}>
                    <ThemeProvider theme={theme}>
                         <Application />
                    </ThemeProvider>
               </Provider>
          </section>
     );
};


export default Main;