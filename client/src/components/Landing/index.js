import React from "react";

const Landing = () => (
  <div align='center'>
    <h1 style={{ textDecoration: 'none', color: '#64ffda' }} >
      Connections </h1>

    <h2 style={{ textDecoration: 'none', color: '#bdbdbd' }}> Contacts | QR </h2>
    <h3 style={{ textDecoration: 'none', color: '#ffffff' }}>
      Developed by: <br />
      {/* Sienna's LinkedIn and GitHub */}
      <a href="https://www.linkedin.com/in/sienna-spargo-534703b8/" style={{ textDecoration: 'none', color: '#ffffff' }}> Sienna</a> <a href="https://github.com/siennaspargo" style={{ textDecoration: 'none', color: '#bdbdbd' }}> Spargo </a>
      {/* Rafael's LinkedIn and GitHub */}
      <a href="https://github.com/rafblanco/business_qr_card.git" style={{ textDecoration: 'none', color: '#64ffda' }}>&</a> <a href="https://www.linkedin.com/in/rafael-blanco-13b6a76b/" style={{ textDecoration: 'none', color: '#ffffff' }}> Rafael</a> <a href="https://github.com/rafblanco" style={{ textDecoration: 'none', color: '#bdbdbd' }}> Blanco</a></h3>


    {/* https://github.com/rafblanco */}
    <p style={{ textDecoration: 'none', color: '#bdbdbd' }}>
      Store your professional contacts, share info by QR code.
  </p>


    <br />
    <br />
    <br />

    <img src={require('../../images/scanmeQR.png')} />
    <img src={require('../../images/scanmeQR.png')} />
    <img src={require('../../images/scanmeQR.png')} />
    <img src={require('../../images/scanmeQR.png')} />

    <br />
    <br /><br /><br /><br /><br />

    <p style={{ textDecoration: 'none', color: '#bdbdbd' }}>
    Built with React.js using Node.js and Express Web Server,
    <br />
     backed by MongoDB and Mongoose ORM.
     <br />
      Has both GET and POST routes for retrieving contact data.
      <br />
       Utilizes Material UI, MVC structure, Firebase Authentication and deployed with Heroku.
  </p>


  </div>
);

export default Landing;
