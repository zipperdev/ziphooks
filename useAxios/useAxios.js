import { useState, useEffect } from "react";
import defaultAxios from "axios";

export const useAxios = (options, axiosInstance = defaultAxios) => {
    const [state, setState] = useState({
        loading: true,
        error: null,
        data: null
    });
    const [trigger, setTrigger] = useState(0);
    const refetch = () => {
        setState({
            ...state,
            loading: true
        });
        setTrigger(Date.now());
    };
    useEffect(() => {
        if (!options.url) {
            return;
        };
        axiosInstance(options)
            .then((data) => {
                setState({
                    ...state,
                    loading: false,
                    data
                });
            })
            .catch((error) => {
                setState({
                    ...state,
                    loading: false,
                    error
                });
            });
    }, [trigger]);
    return {
        ...state,
        refetch
    };
};