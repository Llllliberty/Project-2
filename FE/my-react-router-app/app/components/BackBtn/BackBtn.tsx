const BackBtn = () => {
    return (
        <button onClick={() => window.history.back()}>
            Go Back
        </button>
    );
};

export default BackBtn;