import React from 'react';

const HandleDate = ({ item }) => {
    const Months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    
    const acceptedDate = item?.publish_date.split(" ")[0].split('-')[1];
    const getMonth = Months[parseInt(acceptedDate) - 1];
    const getDate = item?.publish_date.split(" ")[0].split('-')[1];

    return (
        <div>
            <p className='text-xs'>
                {getMonth} {getDate} 2024
            </p>
        </div>
    );
}

export default HandleDate;