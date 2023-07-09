
const Title = ({heading, subHeading}) => {
    return (
        <div>
            <h1 className="text-center font-bold text-3xl border-b-2 border-t-2 w-[320px] mx-auto py-3 border-red-600">{heading}</h1>
      <p className="text-center mt-3 text-gray-500">---- {subHeading} ----</p>
        </div>
    );
};

export default Title;