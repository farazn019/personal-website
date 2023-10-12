import { NavigationBar } from './NavigationBar';
import { AboutMe } from './AboutMe';

import './App.css';
import { WorkExperience } from './WorkExperience';

import { Document, Page, pdfjs} from 'react-pdf';

import resume from './pdf_files/Faraz_Naseem_Resume.pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function App() {

  return (
    <div className="app">
      
      <div className='navigation' id="navigation">
        <NavigationBar/>
      </div>

      <div className="about-me-section" id="about-me-section">
        <AboutMe/>
      </div>

      <div className="work-experience" id="work-experience">
        <WorkExperience/>
      </div>

      <div className="embed-responsive" id="resume" style = {{height: '100vh'}}>

        <div style={{width: 600}} className="resume-document">
          <Document file={resume}>
            <Page pageNumber={1} renderTextLayer={false} renderAnnotationLayer={false} customTextRenderer={false}></Page> 
            <Page pageNumber={2} renderTextLayer={false} renderAnnotationLayer={false} customTextRenderer={false}></Page> 
          </Document> 



        </div>
        
      </div>

    </div>
  );
}

export default App;
