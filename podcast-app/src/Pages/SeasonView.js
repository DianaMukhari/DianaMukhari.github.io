import React, { useEffect, useState } from 'react';
import EpisodePlayer from './EpisodePlayer';

const SeasonView = ({ seasonId }) => {
  const [season, setSeason] = useState(null);

  useEffect(() => {
    fetch(`/api/seasons/${seasonId}`)
      .then(response => response.json())
      .then(data => setSeason(data))
      .catch(error => console.error('Error fetching season:', error));
  }, [seasonId]);

  if (!season) return <p>Loading...</p>;

  return (
    <div>
      <h2>{season.title}</h2>
      {season.episodes.map(episode => (
        <EpisodePlayer key={episode.id} episode={episode} />
      ))}
    </div>
  );
};

export default SeasonView;
