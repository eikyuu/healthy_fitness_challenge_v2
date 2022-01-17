// force the state to clear with fast refresh in Expo
// @refresh reset
import React, {useEffect, useState} from 'react';
import {database} from "../service/database";

export default function useDatabase() {
    const [isDBLoadingComplete, setDBLoadingComplete] = useState(false);

    useEffect(() => {
        async function loadDataAsync() {
            try {
                await database.setupDatabaseAsync()
                setDBLoadingComplete(true);
            } catch (e) {
                console.warn(e);
            }
        }

        loadDataAsync();
    }, []);

    return isDBLoadingComplete;
}