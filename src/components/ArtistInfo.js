import React, {useState} from 'react'

const ArtistInfo = () => {
    const [albums, setAlbum] = useState([
        {name: 'Thank Me Later',releaseDate: "June 15, 2010" ,img:"https://upload.wikimedia.org/wikipedia/en/9/9c/Drake_-_Thank_Me_Later_cover.jpg"},
        {name: 'Take Care',releaseDate: "November 15, 2011" ,img:"https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Drake_-_Take_Care_cover.jpg/220px-Drake_-_Take_Care_cover.jpg"},
        {name: 'Nothing Was the Same',releaseDate: "September 24, 2013" ,img:"https://upload.wikimedia.org/wikipedia/en/thumb/4/42/Drake_-_Nothing_Was_the_Same_cover.png/220px-Drake_-_Nothing_Was_the_Same_cover.png"},
        {name: 'Views',releaseDate: "April 29, 2016" ,img:"https://upload.wikimedia.org/wikipedia/en/thumb/a/af/Drake_-_Views_cover.jpg/220px-Drake_-_Views_cover.jpg"},
        {name: 'Scorpion',releaseDate: "June 29, 2018" ,img:"https://upload.wikimedia.org/wikipedia/en/thumb/9/90/Scorpion_by_Drake.jpg/220px-Scorpion_by_Drake.jpg"},
        {name: 'Certified Lover Boy',releaseDate: "September 3, 2021" ,img:"https://upload.wikimedia.org/wikipedia/en/thumb/7/79/Drake_-_Certified_Lover_Boy.png/220px-Drake_-_Certified_Lover_Boy.png"}
    ])

    const renderRows = () => {
        return albums.map(a => <tr><td>{a.name}</td><td><img src={a.img}/></td><td>{a.releaseDate}</td></tr> )
    }

    return (
        <table style={{ border: "1px solid black", width: "100vw", textAlign: "center" }}>
            <thread>
                <tr>
                    <th>Album</th>
                    <th>Cover art</th>
                    <th>Release Date</th>
                </tr>
            </thread>
            <tbody>
                { renderRows() }
            </tbody>
        </table>
    );
};

export default ArtistInfo;