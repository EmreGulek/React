import React, { useState } from 'react';
import Liste from '../Liste';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function Form() {
    const [formData, setFormData] = useState({
        name: '',
        phone: ''
    });

    const [formList, setFormList] = useState([]);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormList([...formList, formData]);

        setFormData({
            name: '',
            phone: ''
        });
    };

    return (
        <>
            <div className='container mt-4'>
                <div className='row'>
                    <div className='col-6 form-col'>
                        <p>Please add a new name to your guide.</p>
                        <form onSubmit={handleSubmit}>
                            <input
                                type="text"
                                name="name"
                                placeholder="Name Surname"
                                required
                                value={formData.name}
                                onChange={handleChange}
                            />
                            <input
                                type="tel"
                                name="phone"
                                placeholder="Telephone Number"
                                pattern="[0-9]{10}"
                                required
                                value={formData.phone}
                                onChange={handleChange}
                                className='mx-2'

                            />
                            <button type="submit" className="mx-2 btn btn-primary">Save</button>
                        </form>
                    </div>
                    <div className='col-6 list-col'>
                        <Liste formList={formList} />
                    </div>

                </div>
            </div>
        </>
    );
}

export default Form;
