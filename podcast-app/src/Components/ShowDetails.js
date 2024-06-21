const ShowDetails = () => {
    // State and addToFavorites function as before

    return (
        <div className="show-details-container">
            <h2>{episode.title}</h2>
            <p>Season {episode.season} - {episode.showTitle}</p>
            <button onClick={() => addToFavorites(episode)}>Add to Favorites</button>

            {/* Display favorites */}
            <div className="favorites-list">
                <h3>My Favorites</h3>
                {favorites.map(fav => (
                    <div key={fav.id}>
                        <p>{fav.title}</p>
                        <p>Season {fav.season} - {fav.showTitle}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};
