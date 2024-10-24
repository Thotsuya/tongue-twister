import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import LoadingSpinner from './LoadingSpinner';

function LoadingHandler({ children }) {
    const [loading, setLoading] = useState(false);
    const location = useLocation();

    useEffect(() => {
        setLoading(true);
        const timer = setTimeout(() => setLoading(false), 500);
        return () => clearTimeout(timer);
    }, [location]);

    return (
        <div> 
            {loading && <LoadingSpinner />}
            {!loading && children}
        </div>
    );
}

export default LoadingHandler;