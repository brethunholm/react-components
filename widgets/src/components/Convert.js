import React, { useState, useEffect } from 'react';

export default function Convert({ language, text }) {
    useEffect(() => {
        console.log('new language or text');
    }, [language, text]);
    return (
        <div>
            
        </div>
    )
}
