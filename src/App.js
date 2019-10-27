import React from 'react';
import logo from './logo.svg';
import MarketSelect from './components/MarketSelect';
import TitleBar from './components/TitleBar';
import DataTable from './components/DataTable';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <TitleBar />
      <MarketSelect />
      <DataTable />
    </div>
  );
}

export default App;
