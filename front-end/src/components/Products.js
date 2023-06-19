import React, { useState } from 'react'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import { IconButton, TextField, Toolbar, Typography } from '@mui/material';
import AssessmentIcon from '@mui/icons-material/Assessment';
import InputAdornment from '@mui/material/InputAdornment';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircle from '@mui/icons-material/AccountCircle';


function Products() {
  const [products, setProducts] = useState([])

  const getAllProducts = async () => {
    const response = await fetch('https://nov-deploy.onrender.com/api/products')
    const productsData = await response.json()
    setProducts(productsData)
  }
  return (
    <>
      <Box sx={{ flexGrow: 1, position: 'sticky' }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton color='inherit' size="medium" sx={{ mr: 2 }}>
              <AssessmentIcon />
            </IconButton>
            <Typography>Products</Typography>
            <TextField
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <ManageSearchIcon color='warning' />
                  </InputAdornment>
                ),
              }}>
            </TextField>
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                <Badge badgeContent={'4'} color="error">
                  <MailIcon />
                </Badge>
              </IconButton>
              <IconButton
                size="large"
                aria-label="show 17 new notifications"
                color="inherit"
              >
                <Badge badgeContent={17} color="error">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-haspopup="true"
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
      <Button onClick={getAllProducts} variant="contained" sx={{ mt: 5, ml: 2 }}>Fetch Products</Button>
      <ul>
        {products.map((product) => <li>{product.name} -- {product.price}</li>)}
      </ul>

    </>
  )
}

export default Products