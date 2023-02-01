import { useState, useEffect } from 'react';

const Clock = () => {
    // On déclare un état local
    const [date, setDate] = useState(new Date())


    
    // On crée une fonction tick() permettant de mettre à jour notre état local
    const tick = () => {
        setDate(new Date())
    }

    // On utilise la fonctionnalité de react permettant de controler 
    // le cycle de vie de mon composant
    useEffect(() => {
        
        // On nettoie un interval pour mettre à jour la date toutes les secondes
        const interval = setInterval(tick, 1000)
        return () => {
            clearInterval(interval)
        }

    }, [])


    return (
            <h1>{date.toLocaleTimeString()}</h1>
    );
};

export default Clock;