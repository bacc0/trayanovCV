import { Provider } from 'react-redux'
import Home from '../_components/__Home'
import store from '../store/index'


export default function App() {

     return (
          <section className='pages-wrapper'>

               <Provider store={store}>
                 
                         < Home />
                   
               </Provider>
          </section>
     )
}
