import { Provider } from 'react-redux'
import Application from '../_components/__Application'
import store from '../store/index'


export default function Main() {

     return (
          <section className='pages-wrapper'>
               <Provider store={store}>
                    <Application />
               </Provider>
          </section>
     )
}
