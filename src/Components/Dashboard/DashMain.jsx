import cover from "../../assets/cover.jpeg"

const DashMain = () => {
    return (
        <div
        className="hero min-h-screen"
        style={{ backgroundImage: `url(${cover})` }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Dashboard</h1>
            <p>Here you can access only things that you are authorized to access</p>
          </div>
        </div>
      </div>
    );
};

export default DashMain;