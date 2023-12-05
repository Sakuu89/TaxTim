import React from 'react'
import "../Styles/Logbook.css"
import gift from "../Images/logbook-image.gif"
const Logbook = () => {
  const logbookapp=()=>{
    window.open("https://logbook.taxtim.com/#/", "_blank");
  }
  return (
    <div>
      <div className='Top'>
        <img src={require('../Images/Logbookcarlogo.png')} alt="" />
        <h1>Record Your Work Travel</h1>
        <h4>Take control of your own Tax returns</h4>
        <button onClick={logbookapp}>Get Our App</button>
      </div>

      <div className='mid'>
        <div className='midtitle'>
          <h1>Our Free Digital </h1>
          <h1 className='h11' onClick={logbookapp}>Logbook App</h1>
          <h1> Makes Logging Travel Expenses For Tax Purposes Easy</h1>
        </div>
        <hr />
        <div className='midcontent'>
          <div>
            <img className='logbook-img' src={gift} alt="" />
          </div>
          <div className='midcontent-content'>
            <h2>Get Our SARS Logbook App On Your Phone Today</h2>
            <hr/>
            <p className='midcontent-content-p1'>Keeping your SARS travel logbook in order used to be a headache!
              Now you can keep your vehicle log book up to date with...</p>
              <h3 className='h33'> One-Click Simplicity From TaxGenius...</h3>

            <div className='midcontent-list'>
              <div>
                <img src={require('../Images/tick.png')} alt="" />
                <p>Built-in intelligence saves you time .</p>
              </div>
              <div>
                <img src={require('../Images/tick.png')} alt="" />
                <p>Electronic logbook is backed up safely in the cloud .</p>
              </div>
              <div>
                <img src={require('../Images/tick.png')} alt="" />
                <p>Saves trips, fuel and maintenance expenses .</p>
              </div>
              <div>
                <img src={require('../Images/tick.png')} alt="" />
                <p>Tax-relevant summary provided at year end .</p>
              </div>
              <div>
                <img src={require('../Images/tick.png')} alt="" />
                <p>Download full vehicle logbook records to your PC for SARS .</p>
              </div>
            </div>
            <p>Our Logbook App is a progressive web-app, thus it works on iPhone, Android, PC and more.</p>
            <h3>GET YOUR FREE VEHICLE LOGBOOK .</h3>
            <p>Start using our Logbook App by visiting logbook.taxGenius.com in your cellphone browser now. Once the app has loaded, add it to your home screen for future use.</p>
          <div className='mid-buttons'>
            <button onClick={logbookapp}>Get Our App</button>
            <img style={{cursor:"pointer"}} onClick={logbookapp} src={require('../Images/playstore.png')} alt="" />
            <img style={{cursor:"pointer"}} onClick={logbookapp} src={require('../Images/appstore.png')} alt="" />
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Logbook