import React from 'react';

const SpotifyPlayer = ({ embedId }: any) => {
    return (
        <div className="relative mx-auto max-w-md bg-primary rounded-lg">
            <iframe
                style={{ width: '100%', height: '352px', borderRadius: '10px' }}
                className='rounded-lg aspect-square'
                src={`https://open.spotify.com/embed/${embedId}`}
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                title="Spotify Player"
            ></iframe>
        </div>
    );
};

export default SpotifyPlayer;
