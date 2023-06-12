import { React, useState } from 'react'
import './style.css'
import { Breadcrumbs, Typography, useMediaQuery, useTheme } from '@mui/material'
import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import Button from '../../components/Button'
import NumberTextField from '../../components/NumberTextField'


const SingleProduct = () => {
    const isMobile = useMediaQuery(useTheme().breakpoints.down('md'));

    const [informations, setInformations] = useState({ name: "Mug Vincent's flowers", price: "$ 9.00", quantity: 1, available: 50 })

    const handleButtonClick = (e) => {
        console.log(informations)
    }

    const handleQuantityChange = (value) => {
        setInformations(informations => ({
            ...informations,
            quantity: value
        }))
    }

    return <>

        <Navbar bgColor='#FFF' />

        <div className='links-singleproduct'>
            <Breadcrumbs color='#D7A324' aria-label="breadcrumb">
                <Link underline="hover" style={{ color: "#D7A324" }} to="/">
                    Home
                </Link>
                <Link underline="hover" style={{ color: "#D7A324" }} to="/products">
                    Products
                </Link>
                {isMobile ? ('') : (<Typography color="#D7A324">{informations.name}</Typography>)}
            </Breadcrumbs>
        </div>

        <div id='singleproductpage'>
            <img id='image-singleproduct' alt={informations.name} src={require('../../images/products/mug-vincents-flowers.jpg')} />
            <div id='singleproductinformations'>
                <Typography variant='productYellowName'>{informations.name}</Typography>
                <Typography variant='editProductText'>{informations.price}</Typography>
                <Typography variant='editProductText'>In stock: {informations.available}</Typography>
                <div id='quantity-singleproduct'>
                    <Typography variant='editProductText'>Quantity: </Typography>
                    <div id='quantityinput-singleproduct'>
                        <NumberTextField value={informations.quantity} setValue={handleQuantityChange} label="Qty." maxLenght={3} />
                    </div>
                </div>
                <div id="button-singleproductpage">
                    <Button onClick={handleButtonClick} styles={{ height: '30px', backgroundColor: '#D7A324', fontSize: '13px' }}>ADD TO CART</Button>
                </div>
            </div>
        </div>

    </>

}

export default SingleProduct