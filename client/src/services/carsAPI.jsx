import React, {useEffect, useState} from 'react';
import {getAllCars, getCar, createCar, updateCar, deleteCar} from '/customcar';

function CarComponent(){
    const [cars, setCars] = useState([]);
    const [selectedCar, setSelectedCar] = useState(null);

    useEffect(() => {
        // Fetch all cars when component mounts
        getAllCars().then((data) => setCars(data));
    }, []);

    const handleGetCar = (carID) => {
        getCar(carID).then((data) => setSelectedCar(data));
    };

    const handleCreateCar = (carData) => {
        createCar(carData).then((data) => {
            setCars((prevCars) => [...prevCars, data]);
        });
    };

    const handleUpdateCar = (carID,carData) => {
        updateCar(carID, carData).then((data) => {
            setCars((prevCars) => 
            prevCars.map((car) => (car.id === carID ? data : car))
        );
     });  
    };  

    const handleDeleteCar = (carID) => {
        deleteCar(carID).then((success) => {
           if (success) { 
            prevCars.filter((car) => (car.id !== carID)
            );
            setSelectedCar(null);
           }
     });  
    };  

}

export default CarComponent;