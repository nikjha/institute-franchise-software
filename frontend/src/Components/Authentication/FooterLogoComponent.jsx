import { Typography } from '@mui/material'
import useResponsive from '../../Hooks/useResponsive'

const FooterLogoComponent = () => {
     const isMobile = useResponsive('sm')
  return (
    <>
     <Typography sx={{fontSize:isMobile ?  "25px" : "30px"}} margin={0}>
          <span style={{color:"#8338EC",fontFamily:'Montserrat'}}>N</span>
          <span style={{color:"#FFBE0B",fontFamily:'Montserrat'}}>i</span>
          <span style={{color:"#FB5607",fontFamily:'Montserrat'}}>k</span>
          <span style={{color:"#8338EC",fontFamily:'Montserrat'}}>L</span>
          <span style={{color:"#FF006E",fontFamily:'Montserrat'}}>M</span>
          <span style={{color:"#13C2C2",fontFamily:'Montserrat'}}>S</span>
     </Typography>
    
    </>
  )
}

export default FooterLogoComponent