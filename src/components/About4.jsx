import React from 'react';
import './about4.css';

function App() {
  return (
    <>
    
    <div className="blog-card">
      <input type="radio" name="select" id="tap-1" defaultChecked />
      <input type="radio" name="select" id="tap-2" />
      <input type="radio" name="select" id="tap-3" />
      <input type="checkbox" id="imgTap" />
      <div className="sliders">
        <label htmlFor="tap-1" className="tap tap-1"></label>
        <label htmlFor="tap-2" className="tap tap-2"></label>
        <label htmlFor="tap-3" className="tap tap-3"></label>
      </div>
      <div className="inner-part">
        <label htmlFor="imgTap" className="img">
        <img className="img-1" src="https://images.pexels.com/photos/4226207/pexels-photo-4226207.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Image 1" />

        </label> <br />
        <div className="content content-1">
       <br /><br /><br /><br />
          <div className="title">Extending Life</div>
          <div className="text">
            Unfortunately, not all illnesses can be totally treated. However, with the help of doctors, medicines, and therapies, the patient's lifetime or the start of the worst effects of sickness can be substantially extended
          </div>
          <button>Next</button>
        </div>
      </div>
      <div className="inner-part">
        <label htmlFor="imgTap" className="img">
          <img className="img-2" src="https://images.pexels.com/photos/7088529/pexels-photo-7088529.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Image 2" />
        </label>
        <div className="content content-2">
          
          <div className="title">Saving Life:</div>
          <div className="text">
          Typically, this occurs during an emergency procedure or an elective procedure for a time-sensitive or catastrophic sickness. Accidental injury and difficult labour are other factors.
          </div>
          <button>Next</button>
        </div>
      </div>
      <div className="inner-part">
        <label htmlFor="imgTap" className="img">
          <img className="img-3" src="https://images.pexels.com/photos/6234979/pexels-photo-6234979.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Image 3" />
        </label>
        <br /><br /><br /><br /><br />
        <div className="content content-3">
      
          <div className="title">Role of a Doctor</div>
          <div className="text">
          As far we have seen a few lines about doctors. Now we are going to see the role of a doctor. A doctor is a skilled person who knows diseases and treatments. A doctor is responsible for a lot of work in a hospital. .
          </div>
          <button>Next</button>
        </div>
      </div>
    </div>
    <br /><br /><br /><br /><br /><br /> <br /><br /><br /><br /><br /><br /> <br /><br /><br /> <br /><br /><br /><br /><br /><br /> <br /><br /><br />
  
    </>
  );
}

export default App;
