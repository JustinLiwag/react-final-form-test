import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <p className="text-center mt-20 terxt-gray-400">Home</p>
            <div className="flex justify-center mt-8">
                <Link
                    className="bg-green-100 text-green-800 px-4 py-2 rounded-md"
                    to="/onboarding"
                >
                    On Boarding Test
                </Link>
            </div>
        </div>
    );
};

export default Home;
