import React, { useState, useEffect } from 'react';
import RecipeItem from './components/RecipeItem';
import SearchBar from './components/SearchBar';


function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState('');

  useEffect(() => {
    fetch(`/api/* http://starlord.hackerearth.com/recipe`)
      .then(res => res.json())
      .then(data => {
        setImages(data);
        setIsLoading(false);
      })
      .catch(err => console.log(err));
  }, [term]);

  return (
    <div className="container mx-auto">
      <SearchBar searchText={(text) => setTerm(text)} />

      {!isLoading && images.length === 0 && <h1 className="text-5xl text-center mx-auto mt-32">No Images Found</h1> }
      {isLoading ? <h1 className="text-6xl text-center mx-auto mt-32">Loading...</h1> : <div className="grid grid-cols-3 gap-4">
        {images
        .filter(image => {
          return image.name.toLowerCase().indexOf(term.toLowerCase()) >= 0
        })
        .map(image => (
          <RecipeItem key={image.id} image={image} />
        ))}
      </div>}
      
      <div className="font-bold text-white text-xl bg-black flex justify-center max-w-sm rounded overflow-hidden my-10 mx-auto">
        Created By Sourab Banka
      </div>

    </div>
  );
}

export default App;
