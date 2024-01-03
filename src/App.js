import logo from './logo.svg';
import './App.css';

import AddVehicle from './Components/AddVehicle';
import SearchVehicle from './Components/SearchVehicle';
import DeleteVehicle from './Components/DeleteVehicle';
import ViewAllVehicle from './Components/ViewAllVehicle';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFound from './Components/NotFound';


function App() {
  return (
<BrowserRouter>
<Routes>
  <Route path='/' exact element={<AddVehicle/>}/>
  <Route path='/search' element={<SearchVehicle/>}/>
  <Route path='/delete' element={<DeleteVehicle/>}/>
  <Route path='/viewAll' element={<ViewAllVehicle/>}/>
  <Route path='*' element={<NotFound/>}/>
</Routes>
</BrowserRouter>
  );
}

export default App;
