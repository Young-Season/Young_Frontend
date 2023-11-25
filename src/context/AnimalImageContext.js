import React, { createContext, useState } from 'react';
export const AnimalImageContext = createContext();
export const AnimalImageContextProvider = ({ children }) => {
const [animalImage, setAnimalImage] = useState(null);
return (
<AnimalImageContext.Provider value={{ animalImage, setAnimalImage }}>
{children}
</AnimalImageContext.Provider>
);};