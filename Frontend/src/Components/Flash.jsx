const Flash = function ({ message }) {
    return (
        <div
            className="alert alert-success text-center"
            style={{ height: "4rem" }}
            role="alert"
            id="flash"
        >
            {message}
        </div>
    );
};

export default Flash;
