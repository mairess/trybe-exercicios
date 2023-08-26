const API = 'https://api.wheretheiss.at/v1/satellites/25544';

export const fetchCoordinates  = async () => {
     const response = await fetch(API)
     if (!response.ok) {
        throw new Error('Faild to fetch coordinates');
     }

     const coodinates = await response.json();

     const latitude = Number(coodinates.latitude.toFixed(4));
     const longitude = Number(coodinates.longitude.toFixed(4));

     return { latitude, longitude };
     ;
     
}