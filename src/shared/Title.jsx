import React from 'react';

const Title = ({heading, subHeading}) => {
    return (
        <div>
            <h1 className="text-center font-bold text-4xl border-b-4 border-t-4 w-[300px] mx-auto py-3 border-red-600">{heading}</h1>
      <p className="text-center mt-3 text-gray-500">---- {subHeading} ----</p>
        </div>
    );
};

export default Title;