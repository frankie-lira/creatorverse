import React, { useState, useEffect } from 'react';
import supabase from './client';
import ShowCreators from './pages/ShowCreators';
import AddCreator from './pages/AddCreator';
import './App.css';

function App() {
  const [creators, setCreators] = useState([]);
  const [activeView, setActiveView] = useState('showCreators');

  useEffect(() => {
    async function fetchData() {
      const { data, error } = await supabase.from('creators').select('*');
      if (error) {
        console.error('Error fetching data:', error.message);
      } else {
        setCreators(data);
      }
    }

    fetchData();
  }, []);

  const renderContent = () => {
    if (activeView === 'showCreators') {
      return <ShowCreators creators={creators} />;
    } else if (activeView === 'addCreator') {
      return <AddCreator/>;
    }
    return null;
  };

  return (
    <div className="App">
      <header style={headerStyle}>
        <h1 style={titleStyle}>CreatorVerse</h1>
        <nav style={navStyle}>
          <button className="App-button" onClick={() => setActiveView('showCreators')}>View all creators</button>
          <button className="App-button" onClick={() => setActiveView('addCreator')}>Add a creator</button>
        </nav>
      </header>
      {renderContent()}
    </div>
  );
}

const headerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '10px 20px',
  backgroundColor: '#282c34',
  color: 'white',
};

const titleStyle = {
  margin: 0,
};

const navStyle = {
  display: 'flex',
  justifyContent: 'center',
  marginTop: '10px',
};

// const buttonStyle = {
//   marginLeft: '10px',
//   padding: '10px 20px',
//   backgroundColor: '#61dafb',
//   border: 'none',
//   borderRadius: '5px',
//   cursor: 'pointer',
// };

export default App;
