import React, { useState } from 'react';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function Liste({ formList }) {
    const [searchName, setSearchName] = useState({
        name: ""
    }); 

    const handleChange = (e) => {
        setSearchName({
            ...searchName,
            [e.target.name]: e.target.value
        });
    };

    // Burada filterData bir dizi olarak başlatılmalı
    const [filterData, setFilterData] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form gönderildi.");
    
        const filtered = formList.filter((item) =>
            item.name.toLocaleLowerCase().includes(searchName.name.toLocaleLowerCase())
        );
    
        setFilterData(filtered);
    };

    return (
        <>
            <div>
                <form onSubmit={handleSubmit} className='form-list'>
                    <p>You can search in your guide</p>
                    <input 
                        type="text" 
                        name="name" 
                        value={searchName.name} 
                        onChange={handleChange} 
                        placeholder="Name"  
                    />
                    <button type="submit" className='mx-3 btn btn-primary'>Search</button>
                </form>
            </div>

            <div >
                
                <ul>
                    {filterData.length === 0 ? (
                        <p>Filtrelenmiş sonuç yok</p>
                    ) : (
                        filterData.map((item, index) => (
                            <li key={index} className='filter-form'>
                                {item.name} - {item.phone}
                            </li>
                        ))
                    )}
                </ul>
            </div>
        </>
    );
}

export default Liste;
