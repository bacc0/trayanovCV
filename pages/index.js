import { Provider } from 'react-redux'
import Home from '../_components/__Home'
import store from '../store/index'


export default function App() {

     return (
          <section className='pages-wrapper'>
               <Provider store={store}>
                     {/* <h1>{store.getState().scrollDirection}</h1> 
                    <h1>{store.getState()}</h1>  */}
                    < Home  />
               </Provider>
          </section>
     )
}
