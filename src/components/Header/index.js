import React from 'react'
import {AppBar, Box, Button, Toolbar, Typography} from "@mui/material";

const Header = () => {
    return(
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        My money
                    </Typography>
                    <Button color="inherit">Сбросить всё</Button>
                </Toolbar>
            </AppBar>
        </Box>

    )
}

export default Header