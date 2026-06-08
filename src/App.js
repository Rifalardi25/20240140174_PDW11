import React from 'react';
import './index.css'; 
import logomcfc from './mcfc.png';

const PlayerCard = (props) => {
  return (
    <div className="player-card">
      <div className="card-header">
        <div className="player-number">{props.nomorPunggung}</div>
        <div className="player-position-badge">{props.posisiSingkat}</div>
      </div>
      <div className="player-info">
        <h3>{props.namaPemain}</h3>
        <p className="player-position">{props.posisi}</p>
        <p className="player-nation">🌍 {props.kewarganegaraan}</p>
      </div>
    </div>
  );
};


const App = () => {
  return (
    <div className="app-container">
      <header className="team-header">

        <img 
          src={logomcfc}
          alt="Logo Manchester City" 
          className="team-logo" 
        />
        <h1>Manchester City</h1>
        <p>Skuad Utama - Formasi 4-3-3</p>
      </header>

      <main className="football-pitch">
        
        <div className="formation-row">
          <PlayerCard namaPemain="Jérémy Doku" nomorPunggung="11" posisi="Sayap Kiri" posisiSingkat="LW" kewarganegaraan="Belgia" />
          <PlayerCard namaPemain="Erling Haaland" nomorPunggung="9" posisi="Striker Utama" posisiSingkat="ST" kewarganegaraan="Norwegia" />
          <PlayerCard namaPemain="Phil Foden" nomorPunggung="47" posisi="Sayap Kanan" posisiSingkat="RW" kewarganegaraan="Inggris" />
        </div>

        <div className="formation-row">
          <PlayerCard namaPemain="Bernardo Silva" nomorPunggung="20" posisi="Gelandang" posisiSingkat="CM" kewarganegaraan="Portugal" />
          <PlayerCard namaPemain="Rodri" nomorPunggung="16" posisi="Gelandang Bertahan" posisiSingkat="CDM" kewarganegaraan="Spanyol" />
          <PlayerCard namaPemain="Kevin De Bruyne" nomorPunggung="17" posisi="Gelandang Serang" posisiSingkat="CAM" kewarganegaraan="Belgia" />
        </div>

        <div className="formation-row">
          <PlayerCard namaPemain="Joško Gvardiol" nomorPunggung="24" posisi="Bek Kiri" posisiSingkat="LB" kewarganegaraan="Kroasia" />
          <PlayerCard namaPemain="Rúben Dias" nomorPunggung="3" posisi="Bek Tengah" posisiSingkat="CB" kewarganegaraan="Portugal" />
          <PlayerCard namaPemain="John Stones" nomorPunggung="5" posisi="Bek Tengah" posisiSingkat="CB" kewarganegaraan="Inggris" />
          <PlayerCard namaPemain="Kyle Walker" nomorPunggung="2" posisi="Bek Kanan" posisiSingkat="RB" kewarganegaraan="Inggris" />
        </div>

        <div className="formation-row">
          <PlayerCard namaPemain="Ederson Moraes" nomorPunggung="31" posisi="Kiper" posisiSingkat="GK" kewarganegaraan="Brazil" />
        </div>

      </main>
    </div>
  );
};

export default App;