import React, { useContext } from 'react';
 
import FreeRoutes from '../routes/FreeRoutes';
import CloseRoutes from '../routes/CloseRoutes';
import "../utils/theme";
import { Context } from "../contexts/Context";

function App() {
  const { auth } = useContext(Context);
  return auth ? <CloseRoutes /> : <FreeRoutes />;
}

export default App;
