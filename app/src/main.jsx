import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store,{persistor} from './redux/store.js'
import { PersistGate } from 'redux-persist/integration/react'

ReactDOM.createRoot(document.getElementById('root')).render(
   <Provider store={store}>
   <PersistGate loading={null} persistor={persistor}>
   <App />
   </PersistGate>
   </Provider>
)
