import axios from 'axios';
import { useState, useEffect } from 'react';


export const useAxios = (opts, axioInstance = axios) => {
    const [state, setState] = useState({
      loading: true,
      error: null,
      data: null,
    });

    const [trigger, setTrigger] = useState(0);
    if (!opts.url) return;

    const refetch = () => {
      setState({
        ...state,
        loading: true,
      });
      setTrigger(Data.now());
    }

    useEffect(() => {
      axioInstance(opts)
      .then(data => {
        setState({
          ...state,
          loading: false,
          data
        });
      })
      .catch(error => {
        setState({...state, loading: false, error});
      });
    }, [trigger]);
    return {...state, refetch};
};