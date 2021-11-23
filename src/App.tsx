import React, {useEffect} from 'react';
import {useTypedSelector} from "./hooks/useTypedSelector";
import {fetchPerformers} from "./store/actionCreates/performersAction";
import {usePerformerActions} from "./hooks/usePerformerActions";
import {Router} from "./router";
import './App.scss';

export const App: React.FC = () => {


    // if (loading) {
    //     return <h1>Идет загрузк...</h1>
    // } else if (error) {
    //     return <h1>{error}</h1>
    // }

    return (
            <Router/>
    )
}
