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

export const useFetch = (url) => {
    const [state, dispatch] = useCustom(fetchCustom, {
        data: [],
        isLoading: false,
        error: null,

    })
    useEffect(() => {
        (async () => {
            dispatch({
                type: "fetchAPI/request",

            })
            try {
                const res = await fetch(url).then(response => response.json())
                    .then(response => {
                        dispatch({
                            type: "fetchAPI/success",
                            isLoading: false,
                            error: null,
                            data: response
                        })
                    })
                    .catch(error => console.error(error));
            } catch (err) {
                dispatch({
                    type: "fetchAPI/error",
                    isLoading: false,
                    error: null,
                    data: []
                })
            }
        })()
    }, [])
    // return { data: state.data, isLoading: state.isLoading, error: state.error }
    return { ...state }
}