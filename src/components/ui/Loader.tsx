const Loader = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', width: '100%', marginTop: '5rem' }}>
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    )
}

export default Loader