// context/recentlyView.js
import React, { createContext, useContext, useState } from 'react';

const RecentlyViewedContext = createContext();

export const useRecentlyViewed = () => useContext(RecentlyViewedContext);
export const RecentlyViewedProvider = ({ children }) => {
	const [recentlyViewed, setRecentlyViewed] = useState([]);
  
	const addRecentlyViewed = (cityId) => {
	  if (!recentlyViewed.includes(cityId)) {
		//Limit the recently viewed list to 5 cities
		const newList = [cityId, ...recentlyViewed.slice(0, 4)];
		setRecentlyViewed(newList);
		console.log('Recently Viewed updated:', newList); // Log updated state
	  }
	};
  
	return (
	  <RecentlyViewedContext.Provider value={{ recentlyViewed, addRecentlyViewed }}>
		{children}
	  </RecentlyViewedContext.Provider>
	);
  };
  