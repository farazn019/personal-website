import { NavigationBar } from './NavigationBar';
import { AboutMe } from './AboutMe';

import './App.css';
import { WorkExperience } from './WorkExperience';


import Faraz_Naseem_Resume from './pdf_files/Faraz_Naseem_Resume.pdf';

import { Document, Page, pdfjs} from 'react-pdf';
import { useState } from 'react';

/*pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url,
).toString();*/

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function App() {


  /*const [numPages, setNumPages] = useState(1);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess (numPages) {
    setNumPages(numPages);
  }*/

  const resume = './Faraz_Naseem_Resume.pdf';


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

        {/*<PDFViewer>
          <PDFDocument></PDFDocument>
        </PDFViewer>*/}

        {/*<Document options={{workerSrc: './pdf_files/Faraz_Naseem_Resume.pdf'}}>
          <Page></Page>
        </Document>*/}
        <div style={{width: 600}} className="resume-document">
          <Document file={resume}>
            <Page pageNumber={1} renderTextLayer={false} renderAnnotationLayer={false} customTextRenderer={false}></Page> 
            <Page pageNumber={2} renderTextLayer={false} renderAnnotationLayer={false} customTextRenderer={false}></Page> 
          </Document> 



        </div>
      </div>

      {/*<div className="side-projects" id="side-projects">

      </div>

      <div className="contact-me" id="contact-me">

      </div>*/}
    </div>
  );
}

export default App;
