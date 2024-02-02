import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';

interface starsCount {
   starsValue: number
}

export default function Stars({starsValue}: starsCount) {
   const [value, setValue] = React.useState<number | null>(2);

   return (
      <Box
         sx={{
            '& > legend': { mt: 2 },
         }}
      >
      


         <Rating name="half-rating-read" defaultValue={starsValue} precision={.5} readOnly  sx={{
          '& .MuiRating-iconFilled': {
            color: '#5D5A88', // Menjanje boje popunjenih zvezdica
          },
          '& .MuiRating-iconEmpty': {
            color: '#5D5A88', // Menjanje boje praznih zvezdica
          }
        }}/>

      </Box>
   );
}