import React, { useEffect, useState } from 'react'
import { useCustom } from './useCustom'

const fetchCustom = (state, action) => {
    switch (action.type) {
        case "fetchAPI/request":
            return { ...state, isLoading: action.isLoading }
        case "fetchAPI/success":
        case "fetchAPI/error":
            return { ...state, isLoading: action.isLoading, error: action.error, data: action.data }
        default:
            return state
    }
}

export default function CustomeHook() {
    const [state, dispatch] = useCustom(fetchCustom, {
        data: [],
        isLoading: false,
        error: null,

    })
    const { data, isLoading, error } = state;

    const fetchUser = async () => {
        dispatch({
            type: "fetchAPI/request",

        })
        try {
            const res = await fetch("https://628b9961667aea3a3e32d1c5.mockapi.io/api/teachers");
            const { data } = await res.json();

            dispatch({
                type: "fetchAPI/success",
                isLoading: false,
                error: null,
                data: JSON.stringify(data)
            })
        } catch (err) {
            dispatch({
                type: "fetchAPI/error",
                isLoading: false,
                error: null,
                data: []
            })
        }
    };
    useEffect(() => {
        fetchUser()
    }, [])
    if (error) {
        return "Sometihing wrong!!!"
    }
    return isLoading ? (
        <p>Loading ...</p>
    ) : (
        <p>123456798</p>
    )
}
