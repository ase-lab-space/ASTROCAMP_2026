import React from 'react';
import SeminarPage from './SeminarPage';
import { cancellationData } from '../data/PageData';

const Cancellation = () => {
    return <SeminarPage data={cancellationData} />;
};

export default Cancellation;
