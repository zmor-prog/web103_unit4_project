// import React from 'react'
import React, { useState } from 'react';
import '../App.css'
import exteriorOps from '../../../server/data/exterior'

const CreateCar = () => {
    const [showPopup, setShowPopup] = useState(false);

    const handleExteriorButtonClick = () => {
        setShowPopup(true);
    }

    const closePopup = () => {
        setShowPopup(false);
    }

    const [showPopuptwo, setShowPopuptwo] = useState(false);

    const handleExteriorButtonClicktwo = () => {
        setShowPopuptwo(true);
    }

    const closePopuptwo = () => {
        setShowPopuptwo(false);
    }

    const [showPopupthree, setShowPopupthree] = useState(false);

    const handleExteriorButtonClickthree = () => {
        setShowPopupthree(true);
    }

    const closePopupthree = () => {
        setShowPopupthree(false);
    }

    const [showPopupfour, setShowPopupfour] = useState(false);

    const handleExteriorButtonClickfour = () => {
        setShowPopupfour(true);
    }

    const closePopupfour = () => {
        setShowPopupfour(false);
    }

    return (
        <div>
            <ul className='button-list'>
                <li><button onClick={handleExteriorButtonClick} role='button'>Exterior</button></li>                        
                <li><button onClick={handleExteriorButtonClicktwo} role='button'>Roof</button></li>     
                <li><button onClick={handleExteriorButtonClickthree} role='button'>Wheels</button></li>          
                <li><button onClick={handleExteriorButtonClickfour} role='button'>Interior</button></li>  
                <input type='text' id='name' placeholder='My New Car'/>
                <li><a href='/' role='button' className='create-button'>Create</a></li>
            </ul>

            {showPopup && (
                <div className="popup">
                    <div className="popup-content"> 
                        <div className='image-container'>
                            <img src='https://images.unsplash.com/flagged/photo-1593005510509-d05b264f1c9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80' alt='ex1' className='thumbnail'/>
                            <p className='text-on-image'>Red</p>
                            <p className='text-on-imagetwo'> 💵1500</p>
                        </div>
                        <div className='image-container'>                                           
                            <img src='https://images.unsplash.com/photo-1514483127413-f72f273478c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80' alt='ex1' className='thumbnail'/>
                            <p className='text-on-image'>Black</p>
                            <p className='text-on-imagetwo'> 💵1000</p>
                        </div>
                        <div className='image-container'>  
                            <img src='https://images.unsplash.com/photo-1557683316-973673baf926?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2029&q=80' alt='ex1' className='thumbnail'/>
                            <p className='text-on-image'>Blue</p>
                            <p className='text-on-imagetwo'> 💵1200</p>
                        </div>
                        <div className='image-container'>  
                            <img src='https://images.unsplash.com/photo-1545873509-33e944ca7655?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80' alt='ex1' className='thumbnail'/>
                            <p className='text-on-image'>Gold</p>
                            <p className='text-on-imagetwo'> 💵2000</p>
                        </div>
                        <button className="done" onClick={closePopup}>Done</button>                        
                    </div>
                </div>
            )}

            {showPopuptwo && (
                <div className="popup">
                    <div className="popup-content"> 
                        <div className='image-container'>
                            <img src='https://images.unsplash.com/flagged/photo-1593005510509-d05b264f1c9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80' alt='ex1' className='thumbnail'/>
                            <p className='text-on-image'>Red</p>
                            <p className='text-on-imagetwo'> 💵1500</p>
                        </div>
                        <div className='image-container'>                                           
                            <img src='https://images.unsplash.com/photo-1514483127413-f72f273478c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80' alt='ex1' className='thumbnail'/>
                            <p className='text-on-image'>Black</p>
                            <p className='text-on-imagetwo'> 💵1000</p>
                        </div>
                        <div className='image-container'>  
                            <img src='https://images.unsplash.com/photo-1557683316-973673baf926?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2029&q=80' alt='ex1' className='thumbnail'/>
                            <p className='text-on-image'>Blue</p>
                            <p className='text-on-imagetwo'> 💵1200</p>
                        </div>
                        <div className='image-container'>  
                            <img src='https://images.unsplash.com/photo-1545873509-33e944ca7655?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80' alt='ex1' className='thumbnail'/>
                            <p className='text-on-image'>Gold</p>
                            <p className='text-on-imagetwo'> 💵2000</p>
                        </div>
                        <button className="done" onClick={closePopuptwo}>Done</button>                        
                    </div>
                </div>
            )}

            {showPopupthree && (
                <div className="popup">
                    <div className="popup-content"> 
                        <div className='image-container'>
                            <img src='https://images.unsplash.com/flagged/photo-1593005510509-d05b264f1c9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80' alt='ex1' className='thumbnail'/>
                            <p className='text-on-image'>Red</p>
                            <p className='text-on-imagetwo'> 💵1500</p>
                        </div>
                        <div className='image-container'>                                           
                            <img src='https://images.unsplash.com/photo-1514483127413-f72f273478c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80' alt='ex1' className='thumbnail'/>
                            <p className='text-on-image'>Black</p>
                            <p className='text-on-imagetwo'> 💵1000</p>
                        </div>
                        <div className='image-container'>  
                            <img src='https://images.unsplash.com/photo-1557683316-973673baf926?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2029&q=80' alt='ex1' className='thumbnail'/>
                            <p className='text-on-image'>Blue</p>
                            <p className='text-on-imagetwo'> 💵1200</p>
                        </div>
                        <div className='image-container'>  
                            <img src='https://images.unsplash.com/photo-1545873509-33e944ca7655?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80' alt='ex1' className='thumbnail'/>
                            <p className='text-on-image'>Gold</p>
                            <p className='text-on-imagetwo'> 💵2000</p>
                        </div>
                        <button className="done" onClick={closePopupthree}>Done</button>                        
                    </div>
                </div>
            )}

            {showPopupfour && (
                <div className="popup">
                    <div className="popup-content"> 
                        <div className='image-container'>
                            <img src='https://images.unsplash.com/flagged/photo-1593005510509-d05b264f1c9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80' alt='ex1' className='thumbnail'/>
                            <p className='text-on-image'>Red</p>
                            <p className='text-on-imagetwo'> 💵1500</p>
                        </div>
                        <div className='image-container'>                                           
                            <img src='https://images.unsplash.com/photo-1514483127413-f72f273478c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80' alt='ex1' className='thumbnail'/>
                            <p className='text-on-image'>Black</p>
                            <p className='text-on-imagetwo'> 💵1000</p>
                        </div>
                        <div className='image-container'>  
                            <img src='https://images.unsplash.com/photo-1557683316-973673baf926?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2029&q=80' alt='ex1' className='thumbnail'/>
                            <p className='text-on-image'>Blue</p>
                            <p className='text-on-imagetwo'> 💵1200</p>
                        </div>
                        <div className='image-container'>  
                            <img src='https://images.unsplash.com/photo-1545873509-33e944ca7655?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80' alt='ex1' className='thumbnail'/>
                            <p className='text-on-image'>Gold</p>
                            <p className='text-on-imagetwo'> 💵2000</p>
                        </div>
                        <button className="done" onClick={closePopupfour}>Done</button>                        
                    </div>
                </div>
            )}
            
        </div>
    )
}

export default CreateCar