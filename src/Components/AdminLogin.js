import React, { useState } from 'react';

export default function AdminLogin() {
    const username1 = 'Admin';
    const password1 = 'admin@rads@123';
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        authenticated: false // Flag to track authentication status
    });

    const handleInput = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (username1 === formData.username && password1 === formData.password) {
            console.log("Credentials Matched");
            setFormData({ ...formData, authenticated: true });
        } else {
            console.log('Error :');
            alert('Invalid Credentials');
        }
    };

    return (
        <section className="min-h-screen flex justify-center items-center bg-gray-200">
            {!formData.authenticated ? (
                <div className="max-w-md w-full bg-white p-8 rounded shadow-md">
                    <h2 className="text-2xl font-bold mb-4">Admin Login</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="username" className="block text-sm font-semibold">Username:</label>
                            <input
                                type='text'
                                name='username'
                                id='username'
                                value={formData.username}
                                onChange={handleInput}
                                placeholder='Enter your username...'
                                className="w-full border border-gray-300 rounded-md p-2 mt-1"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className="block text-sm font-semibold">Password:</label>
                            <input
                                type='password'
                                name='password'
                                id='password'
                                value={formData.password}
                                onChange={handleInput}
                                placeholder='Enter your password...'
                                className="w-full border border-gray-300 rounded-md p-2 mt-1"
                            />
                        </div>
                        <button type='submit' className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700">Submit</button>
                    </form>
                </div>
            ) : (
                <div className="max-w-md w-full bg-white p-8 rounded shadow-md">
                    <h2 className="text-2xl font-bold mb-4">Authenticated Successfully!</h2>
                    {/* Render your 'fetchdb' component here */}
                    {/* You can also navigate or redirect to the 'fetchdb' route using window.location.href if needed */}
                    <a className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700" href='/admin/fetchdb'> click to navigate</a>
                </div>
            )}
        </section>
    );
}
