import JsxLite from '../scripts/jsx-lite';

const Website = () => {
    const getHeaderStyle = () => ({
        textAlign: 'center',
    });

    const getMainStyle = () => ({
        textAlign: 'center',
    });

    return (
        <>
            <header style={getHeaderStyle()}>
                <h1>Hi, I'm Saahil</h1>
            </header>
            <main style={getMainStyle()}>
                Who are you?
            </main>
        </>
    );
};

export default Website;