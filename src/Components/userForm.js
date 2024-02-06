import React, { useState } from 'react';
import axios from 'axios';

function UserForm() {
    const [data, setData] = useState({
        name: '',
        course: '',
        branch: '',
        dance: false,
        skits: false,
        cultural: false,
        photography: false,
    });

    const handleChange = (event) => {
        const { name, value, type, checked } = event.target;
        setData(prevData => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("submit Data", data);
        alert("Submission Success")
        try {
            setData({
                name: '',
        course: '',
        branch: '',
        dance: false,
        skits: false,
        cultural: false,
        photography: false,
            })
            await axios.post('http://localhost:3002/api/mongodb', data);
            console.log("FormData added to db");
            
        } catch (error) {
            console.error('Error:', error.message);
        }
    };

    return (
        <div className="font-sans bg-gray-100 min-h-screen">
            <div className="absolute top-0 left-0 w-full bg-blue-500 p-4 box-border mb-8">
                <div className="text-3xl font-bold text-white text-center">
                    Wings Registration Form
                </div>
            </div>

            <a className="bg-green-500 text-white py-2 px-4 rounded-md absolute top-4 right-4 hover:bg-green-700" href="/admin">
                Admin
            </a>

            <div className="max-w-md mx-auto p-8 bg-white rounded-md shadow-md mt-10">
                <form onSubmit={handleSubmit}>
                    <p className="mb-2">Name:</p>
                    <input type="text" name="name" onChange={handleChange} className="w-full border-2 border-gray-300 rounded-md p-2 mb-4" />

                    <p className="mb-2">Course:</p>
                    <select name="course" id="course" onChange={handleChange} className="w-full border-2 border-gray-300 rounded-md p-2 mb-4">
                        <option>SELECT</option>
                        <option value="B.Tech">B.Tech</option>
                        <option value="Degree">Degree</option>
                        <option value="Pharmacy">Pharmacy</option>
                    </select>

                    <p className="mb-2">Branch:</p>
                    <input type="text" name="branch" onChange={handleChange} className="w-full border-2 border-gray-300 rounded-md p-2 mb-4" />

                    <p className="mb-2">Activities:</p>
                    <div className="flex items-center mb-4">
                        <input type="checkbox" name="dance" id="dance" checked={data.dance} onChange={handleChange} className="mr-2" />
                        <label className="text-gray-700" htmlFor="dance">Dance</label>
                    </div>
                    <div className="flex items-center mb-4">
                        <input type="checkbox" name="cultural" id="cultural" checked={data.cultural} onChange={handleChange} className="mr-2" />
                        <label className="text-gray-700" htmlFor="cultural">Cultural</label>
                    </div>
                    <div className="flex items-center mb-4">
                        <input type="checkbox" name="skits" id="skits" checked={data.skits} onChange={handleChange} className="mr-2" />
                        <label className="text-gray-700" htmlFor="skits">Skits</label>
                    </div>
                    <div className="flex items-center mb-4">
                        <input type="checkbox" name="photography" id="photography" checked={data.photography} onChange={handleChange} className="mr-2" />
                        <label className="text-gray-700" htmlFor="photography">Photography</label>
                    </div>

                    <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    )
}

export default UserForm;
