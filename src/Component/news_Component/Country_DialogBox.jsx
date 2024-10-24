import { Box, Button, Card, CardContent, CardHeader, CardMedia, Dialog, DialogActions, DialogContent, DialogTitle, Divider, Grid2, IconButton, Skeleton, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchErrorCountry, fetchLoadingCountry, setCountry, setCountryId, uploadAllCountryData } from '../../Store/CountrySlice';
import { Close } from '@mui/icons-material';

function Country_DialogBox({open,ToggleCountry}) {   
     const dispatch=useDispatch();
     const {loading,list,errorMessage,countryId}=useSelector(state=>state.Country);
     useEffect(()=>{
          try {
               dispatch(fetchLoadingCountry());
               setTimeout(()=>{
                    dispatch(uploadAllCountryData(data));
               },2000)
          } catch (error) {
               dispatch(fetchErrorCountry());
          }
     },[dispatch])
     
     if (errorMessage) {
          return (
            <Dialog open={open} onClick={ToggleCountry} onClose={ToggleCountry}>
              <DialogContent>
                <img
                  src="https://res.cloudinary.com/duih8hld2/image/upload/v1728990865/news/nwy6akwbpvzkbfzu8mzg.jpg"
                  height={500}
                  alt=""
                />
                <Typography
                  sx={{
                    fontFamily: "monospace",
                    textAlign: "center",
                    fontSize: "22px",
                  }}
                >
                  {errorMessage}
                </Typography>
              </DialogContent>
              <DialogActions>
                <Button sx={{
                    ":focus":{
                         outline:'none'
                    }
                }} >
                  <Close onClick={ToggleCountry} />
                </Button>
              </DialogActions>
            </Dialog>
          );
        }
  return (
    <>
          <Dialog open={open} onClick={ToggleCountry} >
               <DialogTitle sx={{
                    display:'flex',
                    justifyContent:'space-between',
                    alignItems:'center'
               }}>
                         <Typography sx={{
                              fontSize: "23px",
                              fontFamily: "monospace",
                              backgroundColor: "red",
                              WebkitBackgroundClip: "text",
                              
                         }}  >
                              Country Names
                         </Typography>
                         {loading?(<Skeleton width={20} height={40} />):(<IconButton  sx={{
                              "&:focus":{
                                   outline:'none'
                              }
                         }} onClick={ToggleCountry} >
                         <Close />
                         </IconButton>)}
               </DialogTitle>
               <Divider />
               <DialogContent>
                         <Box sx={{display:'flex',gap:'10px',mb:'16px',alignItems:'center'}} >
                        {loading ?(<Skeleton height={30} width={150}/>):( <Typography>Default Country : </Typography>)}
                         {loading ?(<Skeleton height={40} width={100}/>):(<Typography sx={{
                              fontSize:'18px',
                              fontFamily:'monospace',
                              color:'darkblue',
                              textShadow:'0px 2px 1px gray'
                         }} >{list[countryId]?.country}</Typography>)}
                         </Box>
                         <Grid2 container justifyContent={'center'} spacing={3}  >
                              {
                                   loading ? Array.from(new Array(10)).map((Item,index)=>{
                                        return <Grid2 key={index} xs={12} sm={6} md={4} lg={3} >
                                             <Skeleton width={140} height={250}/>
                                        </Grid2>
                                   }) :list.map((Item,index)=>{
                                        return <Grid2 key={index} xs={12} sm={6} md={4} lg={3}  >
                                             <Card sx={{
                                                  width:'150px',
                                                  boxShadow:'0px 2px 8px gray',
                                                  cursor:'pointer'
                                             }}
                                             onClick={()=>{
                                                  dispatch(setCountry(Item.code));
                                                  dispatch(setCountryId(Item.id));
                                             }}
                                             >
                                                  <CardMedia component={'img'} height={70} image={Item.flag} title={Item?.country} />
                                                  <CardContent>
                                                       <Typography sx={{
                                                            fontFamily:'monospace',
                                                            textAlign:'center',
                                                            textShadow:'0 2px 1px gray'
                                                       }}  >
                                                            {Item?.country}
                                                       </Typography>
                                                  </CardContent>
                                             </Card>
                                        </Grid2>
                                   })
                              }
                         </Grid2>
               </DialogContent>
               
          </Dialog>
    </>
  )
}

export default Country_DialogBox
const data=[
     {id: 0, country: 'All', code: 'all', flag: 'https://img1.wsimg.com/isteam/stock/NrGP8Z7/:/cr=t:0%25,l:10.43%25,w:74.98%25,h:100%25/rs=w:365,h:365,cg:true'},
     {id: 1, country: 'India', code: 'in', flag: 'https://flagcdn.com/in.svg'},
     {id: 2, country: 'United States', code: 'us', flag: 'https://flagcdn.com/us.svg'},
     {id: 3, country: 'Japan', code: 'jp', flag: 'https://flagcdn.com/jp.svg'},
     {id: 4, country: 'Germany', code: 'de', flag: 'https://flagcdn.com/de.svg'},
     {id: 5, country: 'United Kingdom', code: 'gb', flag: 'https://flagcdn.com/gb.svg'},
     {id: 6, country: 'Canada', code: 'ca', flag: 'https://flagcdn.com/ca.svg'},
     {id: 7, country: 'Australia', code: 'au', flag: 'https://flagcdn.com/au.svg'},
     {id: 8, country: 'France', code: 'fr', flag: 'https://flagcdn.com/fr.svg'},
     {id: 9, country: 'Brazil', code: 'br', flag: 'https://flagcdn.com/br.svg'},
     {id: 10, country: 'South Korea', code: 'kr', flag: 'https://flagcdn.com/kr.svg'},
     {id: 11, country: 'Mexico', code: 'mx', flag: 'https://flagcdn.com/mx.svg'},
     {id: 12, country: 'Italy', code: 'it', flag: 'https://flagcdn.com/it.svg'},
     {id: 13, country: 'South Africa', code: 'za', flag: 'https://flagcdn.com/za.svg'},
     {id: 14, country: 'New Zealand', code: 'nz', flag: 'https://flagcdn.com/nz.svg'},
     {id: 15, country: 'Switzerland', code: 'ch', flag: 'https://flagcdn.com/ch.svg'},
     {id: 16, country: 'Russia', code: 'ru', flag: 'https://flagcdn.com/ru.svg'},
     {id: 17, country: 'China', code: 'cn', flag: 'https://flagcdn.com/cn.svg'},
     {id: 18, country: 'Spain', code: 'es', flag: 'https://flagcdn.com/es.svg'},
     {id: 19, country: 'Netherlands', code: 'nl', flag: 'https://flagcdn.com/nl.svg'},
     {id: 20, country: 'Singapore', code: 'sg', flag: 'https://flagcdn.com/sg.svg'},
     {id: 21, country: 'Argentina', code: 'ar', flag: 'https://flagcdn.com/ar.svg'},
     {id: 22, country: 'Colombia', code: 'co', flag: 'https://flagcdn.com/co.svg'},
     {id: 23, country: 'Egypt', code: 'eg', flag: 'https://flagcdn.com/eg.svg'},
     {id: 24, country: 'Turkey', code: 'tr', flag: 'https://flagcdn.com/tr.svg'},
     {id: 25, country: 'Indonesia', code: 'id', flag: 'https://flagcdn.com/id.svg'},
     {id: 26, country: 'Vietnam', code: 'vn', flag: 'https://flagcdn.com/vn.svg'},
     {id: 27, country: 'Malaysia', code: 'my', flag: 'https://flagcdn.com/my.svg'},
     {id: 28, country: 'Philippines', code: 'ph', flag: 'https://flagcdn.com/ph.svg'},
     {id: 29, country: 'Thailand', code: 'th', flag: 'https://flagcdn.com/th.svg'},
     {id: 30, country: 'Nigeria', code: 'ng', flag: 'https://flagcdn.com/ng.svg'},
     {id: 31, country: 'Bangladesh', code: 'bd', flag: 'https://flagcdn.com/bd.svg'},
     {id: 32, country: 'Pakistan', code: 'pk', flag: 'https://flagcdn.com/pk.svg'},
     {id: 33, country: 'Iraq', code: 'iq', flag: 'https://flagcdn.com/iq.svg'},
     {id: 34, country: 'Iran', code: 'ir', flag: 'https://flagcdn.com/ir.svg'},
     {id: 35, country: 'Saudi Arabia', code: 'sa', flag: 'https://flagcdn.com/sa.svg'},
     {id: 36, country: 'UAE', code: 'ae', flag: 'https://flagcdn.com/ae.svg'},
     {id: 37, country: 'Kuwait', code: 'kw', flag: 'https://flagcdn.com/kw.svg'},
     {id: 38, country: 'Jordan', code: 'jo', flag: 'https://flagcdn.com/jo.svg'},
     {id: 39, country: 'Lebanon', code: 'lb', flag: 'https://flagcdn.com/lb.svg'},
     {id: 40, country: 'Qatar', code: 'qa', flag: 'https://flagcdn.com/qa.svg'},
     {id: 41, country: 'Oman', code: 'om', flag: 'https://flagcdn.com/om.svg'},
     {id: 42, country: 'Bahrain', code: 'bh', flag: 'https://flagcdn.com/bh.svg'},
     {id: 43, country: 'Afghanistan', code: 'af', flag: 'https://flagcdn.com/af.svg'},
     {id: 44, country: 'Sri Lanka', code: 'lk', flag: 'https://flagcdn.com/lk.svg'},
     {id: 45, country: 'Nepal', code: 'np', flag: 'https://flagcdn.com/np.svg'},
     {id: 46, country: 'Myanmar', code: 'mm', flag: 'https://flagcdn.com/mm.svg'},
     {id: 47, country: 'Cambodia', code: 'kh', flag: 'https://flagcdn.com/kh.svg'},
     {id: 48, country: 'Brunei', code: 'bn', flag: 'https://flagcdn.com/bn.svg'},
     {id: 49, country: 'Mongolia', code: 'mn', flag: 'https://flagcdn.com/mn.svg'},
     {id: 50, country: 'Kazakhstan', code: 'kz', flag: 'https://flagcdn.com/kz.svg'},
     {id: 51, country: 'Uzbekistan', code: 'uz', flag: 'https://flagcdn.com/uz.svg'},
     {id: 52, country: 'Turkmenistan', code: 'tm', flag: 'https://flagcdn.com/tm.svg'},
     {id: 53, country: 'Tajikistan', code: 'tj', flag: 'https://flagcdn.com/tj.svg'},
     {id: 54, country: 'Armenia', code: 'am', flag: 'https://flagcdn.com/am.svg'},
     {id: 55, country: 'Azerbaijan', code: 'az', flag: 'https://flagcdn.com/az.svg'},
     {id: 56, country: 'Georgia', code: 'ge', flag: 'https://flagcdn.com/ge.svg'},
     {id: 57, country: 'Ukraine', code: 'ua', flag: 'https://flagcdn.com/ua.svg'},
     {id: 58, country: 'Belarus', code: 'by', flag: 'https://flagcdn.com/by.svg'},
     {id: 59, country: 'Moldova', code: 'md', flag: 'https://flagcdn.com/md.svg'},
     {id: 60, country: 'Lithuania', code: 'lt', flag: 'https://flagcdn.com/lt.svg'},
     {id: 61, country: 'Latvia', code: 'lv', flag: 'https://flagcdn.com/lv.svg'},
     {id: 62, country: 'Estonia', code: 'ee', flag: 'https://flagcdn.com/ee.svg'},
     {id: 63, country: 'Finland', code: 'fi', flag: 'https://flagcdn.com/fi.svg'},
     {id: 64, country: 'Sweden', code: 'se', flag: 'https://flagcdn.com/se.svg'},
     {id: 65, country: 'Norway', code: 'no', flag: 'https://flagcdn.com/no.svg'},
     {id: 66, country: 'Denmark', code: 'dk', flag: 'https://flagcdn.com/dk.svg'},
     {id: 67, country: 'Iceland', code: 'is', flag: 'https://flagcdn.com/is.svg'},
     {id: 68, country: 'Ireland', code: 'ie', flag: 'https://flagcdn.com/ie.svg'},
     {id: 69, country: 'Portugal', code: 'pt', flag: 'https://flagcdn.com/pt.svg'},
     {id: 70, country: 'Greece', code: 'gr', flag: 'https://flagcdn.com/gr.svg'},
     {id: 71, country: 'Czech Republic', code: 'cz', flag: 'https://flagcdn.com/cz.svg'},
     {id: 72, country: 'Slovakia', code: 'sk', flag: 'https://flagcdn.com/sk.svg'},
     {id: 73, country: 'Hungary', code: 'hu', flag: 'https://flagcdn.com/hu.svg'},
     {id: 74, country: 'Romania', code: 'ro', flag: 'https://flagcdn.com/ro.svg'},
     {id: 75, country: 'Bulgaria', code: 'bg', flag: 'https://flagcdn.com/bg.svg'},
     {id: 76, country: 'Serbia', code: 'rs', flag: 'https://flagcdn.com/rs.svg'},
     {id: 77, country: 'Croatia', code: 'hr', flag: 'https://flagcdn.com/hr.svg'},
     {id: 78, country: 'Slovenia', code: 'si', flag: 'https://flagcdn.com/si.svg'},
     {id: 79, country: 'Bosnia-Herzegovina', code: 'ba', flag: 'https://flagcdn.com/ba.svg'},
     {id: 80, country: 'Montenegro', code: 'me', flag: 'https://flagcdn.com/me.svg'},
     {id: 81, country: 'North Macedonia', code: 'mk', flag: 'https://flagcdn.com/mk.svg'},
     {id: 82, country: 'Albania', code: 'al', flag: 'https://flagcdn.com/al.svg'},
     {id: 83, country: 'Malta', code: 'mt', flag: 'https://flagcdn.com/mt.svg'},
     {id: 84, country: 'Cyprus', code: 'cy', flag: 'https://flagcdn.com/cy.svg'},
     {id: 85, country: 'Kosovo', code: 'xk', flag: 'https://flagcdn.com/xk.svg'},
     {id: 86, country: 'Vatican City', code: 'va', flag: 'https://flagcdn.com/va.svg'},
     {id: 87, country: 'San Marino', code: 'sm', flag: 'https://flagcdn.com/sm.svg'},
     {id: 88, country: 'Liechtenstein', code: 'li', flag: 'https://flagcdn.com/li.svg'},
     {id: 89, country: 'Monaco', code: 'mc', flag: 'https://flagcdn.com/mc.svg'},
     {id: 90, country: 'Andorra', code: 'ad', flag: 'https://flagcdn.com/ad.svg'},
     {id: 91, country: 'Luxembourg', code: 'lu', flag: 'https://flagcdn.com/lu.svg'},
     {id: 92, country: 'Eswatini', code: 'sz', flag: 'https://flagcdn.com/sz.svg'},
     {id: 93, country: 'Lesotho', code: 'ls', flag: 'https://flagcdn.com/ls.svg'},
     {id: 94, country: 'Seychelles', code: 'sc', flag: 'https://flagcdn.com/sc.svg'},
     {id: 95, country: 'Malawi', code: 'mw', flag: 'https://flagcdn.com/mw.svg'},
     {id: 96, country: 'Zambia', code: 'zm', flag: 'https://flagcdn.com/zm.svg'},
     {id: 97, country: 'Zimbabwe', code: 'zw', flag: 'https://flagcdn.com/zw.svg'},
     {id: 98, country: 'Botswana', code: 'bw', flag: 'https://flagcdn.com/bw.svg'},
     {id: 99, country: 'Namibia', code: 'na', flag: 'https://flagcdn.com/na.svg'},
     {id: 100, country: 'Angola', code: 'ao', flag: 'https://flagcdn.com/ao.svg'},
     {id: 101, country: 'DR Congo', code: 'cd', flag: 'https://flagcdn.com/cd.svg'},
     {id: 102, country: 'R-Congo', code: 'cg', flag: 'https://flagcdn.com/cg.svg'},
     {id: 103, country: 'Ghana', code: 'gh', flag: 'https://flagcdn.com/gh.svg'},
     {id: 104, country: 'Kenya', code: 'ke', flag: 'https://flagcdn.com/ke.svg'},
     {id: 105, country: 'Tanzania', code: 'tz', flag: 'https://flagcdn.com/tz.svg'},
     {id: 106, country: 'Uganda', code: 'ug', flag: 'https://flagcdn.com/ug.svg'},
     {id: 107, country: 'Rwanda', code: 'rw', flag: 'https://flagcdn.com/rw.svg'},
     {id: 108, country: 'Somalia', code: 'so', flag: 'https://flagcdn.com/so.svg'},
     {id: 109, country: 'South Sudan', code: 'ss', flag: 'https://flagcdn.com/ss.svg'},
     {id: 110, country: 'Sierra Leone', code: 'sl', flag: 'https://flagcdn.com/sl.svg'},
     {id: 111, country: 'Liberia', code: 'lr', flag: 'https://flagcdn.com/lr.svg'},
     {id: 112, country: 'Mauritius', code: 'mu', flag: 'https://flagcdn.com/mu.svg'},
     {id: 113, country: 'Madagascar', code: 'mg', flag: 'https://flagcdn.com/mg.svg'},
     {id: 114, country: 'Comoros', code: 'km', flag: 'https://flagcdn.com/km.svg'},
     {id: 115, country: 'Sao Tome-Principe', code: 'st', flag: 'https://flagcdn.com/st.svg'},
     {id: 116, country: 'Cabo Verde', code: 'cv', flag: 'https://flagcdn.com/cv.svg'},
     {id: 117, country: 'Djibouti', code: 'dj', flag: 'https://flagcdn.com/dj.svg'},
     {id: 118, country: 'Western Sahara', code: 'eh', flag: 'https://flagcdn.com/eh.svg'},
     {id: 119, country: 'Togo', code: 'tg', flag: 'https://flagcdn.com/tg.svg'},
     {id: 120, country: 'Benin', code: 'bj', flag: 'https://flagcdn.com/bj.svg'},
     {id: 121, country: 'Burkina Faso', code: 'bf', flag: 'https://flagcdn.com/bf.svg'},
     {id: 122, country: 'Mali', code: 'ml', flag: 'https://flagcdn.com/ml.svg'},
     {id: 123, country: 'Niger', code: 'ne', flag: 'https://flagcdn.com/ne.svg'},
     {id: 124, country: 'Chad', code: 'td', flag: 'https://flagcdn.com/td.svg'},
     {id: 125, country: 'Cameroon', code: 'cm', flag: 'https://flagcdn.com/cm.svg'},
     {id: 126, country: 'Central African Republic', code: 'cf', flag: 'https://flagcdn.com/cf.svg'},
     {id: 127, country: 'Gabon', code: 'ga', flag: 'https://flagcdn.com/ga.svg'},
     {id: 128, country: 'Equatorial Guinea', code: 'gq', flag: 'https://flagcdn.com/gq.svg'},
     {id: 129, country: 'Anguilla', code: 'ai', flag: 'https://flagcdn.com/ai.svg'},
     {id: 130, country: 'Aruba', code: 'aw', flag: 'https://flagcdn.com/aw.svg'},
     {id: 131, country: 'Bahamas', code: 'bs', flag: 'https://flagcdn.com/bs.svg'},
     {id: 132, country: 'Barbados', code: 'bb', flag: 'https://flagcdn.com/bb.svg'},
     {id: 133, country: 'Bermuda', code: 'bm', flag: 'https://flagcdn.com/bm.svg'},
     {id: 134, country: 'British Virgin Islands', code: 'vg', flag: 'https://flagcdn.com/vg.svg'},
     {id: 135, country: 'Cayman Islands', code: 'ky', flag: 'https://flagcdn.com/ky.svg'},
     {id: 136, country: 'Curacao', code: 'cw', flag: 'https://flagcdn.com/cw.svg'},
     {id: 137, country: 'Dominica', code: 'dm', flag: 'https://flagcdn.com/dm.svg'},
     {id: 138, country: 'Grenada', code: 'gd', flag: 'https://flagcdn.com/gd.svg'},
     {id: 139, country: 'Haiti', code: 'ht', flag: 'https://flagcdn.com/ht.svg'},
     {id: 140, country: 'Jamaica', code: 'jm', flag: 'https://flagcdn.com/jm.svg'},
     {id: 141, country: 'Martinique', code: 'mq', flag: 'https://flagcdn.com/mq.svg'},
     {id: 142, country: 'Montserrat', code: 'ms', flag: 'https://flagcdn.com/ms.svg'},
     {id: 143, country: 'Saint Kitts-Nevis', code: 'kn', flag: 'https://flagcdn.com/kn.svg'},
     {id: 144, country: 'Saint Lucia', code: 'lc', flag: 'https://flagcdn.com/lc.svg'},
     {id: 145, country: 'Saint Vincent-Grenadines', code: 'vc', flag: 'https://flagcdn.com/vc.svg'},
     {id: 146, country: 'Sint Maarten', code: 'sx', flag: 'https://flagcdn.com/sx.svg'},
     {id: 147, country: 'Turks-Caicos Islands', code: 'tc', flag: 'https://flagcdn.com/tc.svg'},
     {id: 148, country: 'US-Virgin Islands', code: 'vi', flag: 'https://flagcdn.com/vi.svg'},
     {id: 149, country: 'Guadeloupe', code: 'gp', flag: 'https://flagcdn.com/gp.svg'},
     {id: 150, country: 'Guatemala', code: 'gt', flag: 'https://flagcdn.com/gt.svg'},
     {id: 151, country: 'Honduras', code: 'hn', flag: 'https://flagcdn.com/hn.svg'},
     {id: 152, country: 'Nicaragua', code: 'ni', flag: 'https://flagcdn.com/ni.svg'},
     {id: 153, country: 'El Salvador', code: 'sv', flag: 'https://flagcdn.com/sv.svg'},
     {id: 154, country: 'Costa Rica', code: 'cr', flag: 'https://flagcdn.com/cr.svg'},
     {id: 155, country: 'Panama', code: 'pa', flag: 'https://flagcdn.com/pa.svg'},
     {id: 156, country: 'Belize', code: 'bz', flag: 'https://flagcdn.com/bz.svg'},
     {id: 157, country: 'Cuba', code: 'cu', flag: 'https://flagcdn.com/cu.svg'},
     {id: 158, country: 'Dominican Rep.', code: 'do', flag: 'https://flagcdn.com/do.svg'},
     {id: 159, country: 'Puerto Rico', code: 'pr', flag: 'https://flagcdn.com/pr.svg'},
     {id: 160, country: 'Mexico', code: 'mx', flag: 'https://flagcdn.com/mx.svg'},
     {id: 161, country: 'Colombia', code: 'co', flag: 'https://flagcdn.com/co.svg'},
     {id: 162, country: 'Venezuela', code: 've', flag: 'https://flagcdn.com/ve.svg'},
     {id: 163, country: 'Peru', code: 'pe', flag: 'https://flagcdn.com/pe.svg'},
     {id: 164, country: 'Chile', code: 'cl', flag: 'https://flagcdn.com/cl.svg'},
     {id: 165, country: 'Bolivia', code: 'bo', flag: 'https://flagcdn.com/bo.svg'},
     {id: 166, country: 'Paraguay', code: 'py', flag: 'https://flagcdn.com/py.svg'},
     {id: 167, country: 'Uruguay', code: 'uy', flag: 'https://flagcdn.com/uy.svg'},
     {id: 168, country: 'Ecuador', code: 'ec', flag: 'https://flagcdn.com/ec.svg'},
     {id: 169, country: 'Guyana', code: 'gy', flag: 'https://flagcdn.com/gy.svg'},
     {id: 170, country: 'Suriname', code: 'sr', flag: 'https://flagcdn.com/sr.svg'},
     {id: 171, country: 'Fiji', code: 'fj', flag: 'https://flagcdn.com/fj.svg'},
     {id: 172, country: 'Papua New Guinea', code: 'pg', flag: 'https://flagcdn.com/pg.svg'},
     {id: 173, country: 'Solomon Islands', code: 'sb', flag: 'https://flagcdn.com/sb.svg'},
     {id: 174, country: 'Vanuatu', code: 'vu', flag: 'https://flagcdn.com/vu.svg'},
     {id: 175, country: 'Kiribati', code: 'ki', flag: 'https://flagcdn.com/ki.svg'},
     {id: 176, country: 'Tuvalu', code: 'tv', flag: 'https://flagcdn.com/tv.svg'},
     {id: 177, country: 'Nauru', code: 'nr', flag: 'https://flagcdn.com/nr.svg'},
     {id: 178, country: 'Marshall Islands', code: 'mh', flag: 'https://flagcdn.com/mh.svg'},
     {id: 179, country: 'Micronesia', code: 'fm', flag: 'https://flagcdn.com/fm.svg'},
     {id: 180, country: 'Palau', code: 'pw', flag: 'https://flagcdn.com/pw.svg'},
     {id: 181, country: 'American Samoa', code: 'as', flag: 'https://flagcdn.com/as.svg'},
     {id: 182, country: 'Samoa', code: 'ws', flag: 'https://flagcdn.com/ws.svg'},
     {id: 183, country: 'Tonga', code: 'to', flag: 'https://flagcdn.com/to.svg'},
     {id: 184, country: 'Wallis-Futuna', code: 'wf', flag: 'https://flagcdn.com/wf.svg'},
     {id: 185, country: 'New Caledonia', code: 'nc', flag: 'https://flagcdn.com/nc.svg'},
     {id: 186, country: 'French Polynesia', code: 'pf', flag: 'https://flagcdn.com/pf.svg'},
     {id: 187, country: 'Guam', code: 'gu', flag: 'https://flagcdn.com/gu.svg'},
     {id: 188, country: 'Northern Mariana Is.', code: 'mp', flag: 'https://flagcdn.com/mp.svg'},
     {id: 189, country: 'Cook Islands', code: 'ck', flag: 'https://flagcdn.com/ck.svg'},
     {id: 190, country: 'Niue', code: 'nu', flag: 'https://flagcdn.com/nu.svg'},
     {id: 191, country: 'Tokelau', code: 'tk', flag: 'https://flagcdn.com/tk.svg'},
     {id: 192, country: 'Bermuda', code: 'bm', flag: 'https://flagcdn.com/bm.svg'},
     {id: 193, country: 'Pitcairn Islands', code: 'pn', flag: 'https://flagcdn.com/pn.svg'},
     {id: 194, country: 'Saint Helena', code: 'sh', flag: 'https://flagcdn.com/sh.svg'},
     {id: 195, country: 'Ascension Island', code: 'ac', flag: 'https://flagcdn.com/ac.svg'},
     {id: 196, country: 'Tristan da Cunha', code: 'ta', flag: 'https://flagcdn.com/ta.svg'},
     {id: 197, country: 'Falkland Islands', code: 'fk', flag: 'https://flagcdn.com/fk.svg'},
     {id: 198, country: 'South Georgia-S.-Sandwich Is.', code: 'gs', flag: 'https://flagcdn.com/gs.svg'},
     {id: 199, country: 'Antarctica', code: 'aq', flag: 'https://flagcdn.com/aq.svg'},
     {id: 200, country: 'Montserrat', code: 'ms', flag: 'https://flagcdn.com/ms.svg'},
     {id: 201, country: 'Saint Pierre-Miquelon', code: 'pm', flag: 'https://flagcdn.com/pm.svg'},
     {id: 202, country: 'Åland Islands', code: 'ax', flag: 'https://flagcdn.com/ax.svg'},
     {id: 203, country: 'Sint Maarten', code: 'sx', flag: 'https://flagcdn.com/sx.svg'},
     {id: 204, country: 'Saint Martin', code: 'mf', flag: 'https://flagcdn.com/mf.svg'}
]
   
