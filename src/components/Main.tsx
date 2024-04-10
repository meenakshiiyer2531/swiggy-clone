import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Menu from './Menu';
import Restaurants from './Restaurants';
import Footer from './Footer';
import TopRated from './TopRated';
import Offers from './Offers';
import { useLocation } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Main = () => {
    const location = useLocation();
    const [restaurantsList, setRestaurantsList] = useState<any>([]);
    const [menu, setMenu] = useState('');

    const getRestaurants = async () => {
        const url = 'https://restaurants222.p.rapidapi.com/search';
        const options = {
            method: 'POST',
            headers: {
                'content-type': 'application/x-www-form-urlencoded',
                'X-RapidAPI-Key': '7f8c442972msh55ba136217a69e8p10b225jsn277f9a0f5946',
                'X-RapidAPI-Host': 'restaurants222.p.rapidapi.com'
            },
            body: new URLSearchParams({
                location_id: `${location?.state?.data ?? '297701'}`,
                language: 'en_US',
                currency: 'USD',
                offset: '0'
            })
        };

        try {
            const response = await fetch(url, options);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const details = await response.json();
            setRestaurantsList(details?.results?.data);
        } catch (error) {
            console.error('Error fetching restaurants:', error);
        }
    };

    useEffect(() => {
        getRestaurants();
    }, [location?.state?.data]);

    return (
        <>
            <ToastContainer autoClose={3000} />
            <div>
                <Navbar restaurantsList={restaurantsList} />
                <div className="ml-44 w-8/12">
                    <h1 className="mt-7 font-bold text-2xl">Best offers for you</h1>
                    <Offers />
                    <h1 className="mt-7 font-bold text-2xl">What's on your mind?</h1>
                    <Menu setMenu={setMenu} />
                    <h1 className="mt-7 font-bold text-2xl">
                        Top restaurant chains in{' '}
                        {restaurantsList ? restaurantsList[0]?.address_obj?.city : 'Location'}
                    </h1>
                    <TopRated restaurantsList={restaurantsList} />
                </div>
                <div className="ml-44">
                    <h1 className="mt-7 font-bold text-2xl">
                        Restaurants with online food delivery in{' '}
                        {restaurantsList ? restaurantsList[0]?.address_obj?.city : 'Location'}
                    </h1>
                    <Restaurants menu={menu} restaurantsList={restaurantsList} />
                </div>
                <Footer />
            </div>
        </>
    );
};

export default Main;
