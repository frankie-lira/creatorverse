import React, { useState, useEffect } from 'react';
import supabase from './client';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ShowCreators from './pages/ShowCreators';
import AddCreator from './pages/AddCreator';
import ViewCreator from './pages/ViewCreator'; 
import EditCreator from './components/EditCreator';

import './styles/App.css';

function App() {
  const [creators, setCreators] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const { data, error } = await supabase.from('creators').select('*');
      if (error) {
        console.error('Error fetching data:', error.message);
      } else {
        setCreators(data);
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Router>
      <div className="App">
        <header style={headerStyle}>
          <h1 style={titleStyle}>CreatorVerse</h1>
          <nav style={navStyle}>
            <Link className="App-button" to="/">View all creators</Link>
            <Link className="App-button" to="/addcreator">Add a creator</Link>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<ShowCreators creators={creators} />} />
          <Route path="/addcreator" element={<AddCreator />} />
          <Route path="/viewcreator/:id" element={<ViewCreator creators={creators} />} />
          <Route path="/editcreator/:id" element={<EditCreator creators={creators} setCreators={setCreators} />} />

        </Routes>
      </div>
    </Router>
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

export default App;
