import React from 'react'
import {Box, Card, CardContent, Grid, Typography} from "@mui/material";

const BalanceCards = () => {
    return(
        <Grid container spacing={2} sx={{marginBottom: "30px"}}>
           <Grid item xs={4}>
               <Card>
                  <Box sx={{bgcolor:"info.main", color: "white"}}>
                      <CardContent>
                              <Typography variant="h5" component="div">
                                  400
                              </Typography>
                          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                              Поступило
                          </Typography>
                      </CardContent>
                  </Box>
               </Card>
           </Grid>
            <Grid item xs={4}>
                <Card>
                    <Box sx={{bgcolor:"error.main", color: "штвшфтку"}}>
                        <CardContent>
                            <Typography variant="h5" component="div">
                                0
                            </Typography>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                Расходы
                            </Typography>
                        </CardContent>
                    </Box>
                </Card>
            </Grid>
            <Grid item xs={4}>
                <Card>
                    <Box sx={{bgcolor:"success.main", color: "white"}}>
                        <CardContent>
                            <Typography variant="h5" component="div">
                                400
                            </Typography>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                Остаток
                            </Typography>
                        </CardContent>
                    </Box>
                </Card>
            </Grid>

        </Grid>
    )
}

export default BalanceCards