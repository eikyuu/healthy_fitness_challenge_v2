import React from 'react'

import * as SQLite from "expo-sqlite"

const db = SQLite.openDatabase('healthyfitnesschallenge.db')


const setupDatabaseAsync = async () => {
    return new Promise((resolve, reject) => {
        db.transaction(tx => {
                tx.executeSql(
                    'create table if not exists challenge (id integer primary key not null, name varchar(255), duration integer, first_repetition integer, repetition integer, remaining integer, exercise JSON, total_repetition integer );'
                );
            },
            (_, error) => { console.log("db error creating tables"); console.log(error); reject(error) },
            (_, success) => { resolve(success)}
        )
    })
}

const insertChallenge = (name, duration,firstRepetition, repetition, remaining, exercise, successFunc) => {
    db.transaction( tx => {
            tx.executeSql( 'insert into challenge (name, duration, first_repetition, repetition, remaining, exercise, total_repetition) values (?, ?, ?, ?, ?, ?, ?)', [name, duration, firstRepetition, repetition, remaining, exercise, firstRepetition] );
        },
        (t, error) => { console.log("db error insertUser"); console.log(error);},
        (t, success) => { console.log("success"); }
    )
}

const updateExo = (name, exercise) => {
    db.transaction(
        (tx) => {
            tx.executeSql(`UPDATE challenge set exercise = '${exercise}' WHERE name = '${name}'`);
        },
        (t, error) => { console.log("db error update"); console.log(error);},
        (t, success) => { console.log("success"); }
    )
}

const updateNextDay = (name, exercise, remaining, repetition) => {
    db.transaction(
        (tx) => {
            tx.executeSql(`UPDATE challenge set exercise = '${exercise}', remaining = '${remaining}', total_repetition = '${repetition}' WHERE name = '${name}'`);
        },
        (t, error) => { console.log("db error update"); console.log(error);},
        (t, success) => { console.log("success"); }
    )
}

const fetchChallenge = (setUserFunc) => {
    db.transaction(
        tx => {
            tx.executeSql(
                'select * from challenge',
                [],
                (_, { rows: { _array } }) => {
                    setUserFunc(_array)
                }
            );
        },
        (t, error) => { console.log("db error load challenges"); console.log(error) },
        (_t, _success) => { console.log("loaded challenges")}
    );
}

const fetchChallengeById = (setUserFunc, id) => {
    db.transaction(
        tx => {
            tx.executeSql(
                'select * from challenge where id='+id,
                [],
                (_, { rows: { _array } }) => {
                    setUserFunc(_array)
                }
            );
        },
        (t, error) => { console.log("db error load challenges"); console.log(error) },
        (_t, _success) => { console.log("loaded challenges")}
    );
}

export const database = {
    updateExo,
    setupDatabaseAsync,
    insertChallenge,
    fetchChallenge,
    fetchChallengeById,
    updateNextDay
}