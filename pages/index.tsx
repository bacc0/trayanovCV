import { Provider } from 'react-redux';
import Application from '../_components/App';
import store from '../store/index';


const Main: React.VFC = () => {  //  VFC === VoidFunctionComponent

     return (
          <section className='pages-wrapper'>
               <Provider store={store}>
                    <Application />
               </Provider>
          </section>
     );
};


export default Main;