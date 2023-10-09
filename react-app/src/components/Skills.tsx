//import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function BasicAccordion() {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Frontend Web Development:</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          HTML5, Bootstrap, React.js, Material UI, EJS, JavaScript skills such as AnyChart, PDF report, leaflet map, JSON.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Server-side development:</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Node.js, Express.js, Passport.js, .NET Core, Microsoft IIS server
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Programming Language</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          JavaScript, Java, C++, C#, Python
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Machine learning:</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Neural network model, Scikit Learn, Keras, TensorFlow, Matplotlib, NumPy, Pandas, data
analysis, Google Cola
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Data Engineering, cloud and Database</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Oracle Database, MySQL, PostgreSQL, Amazon RDS, Google Cloud Data pipeline, AWS EC2
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>GIS</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          ArcGIS, QGIS, leaflet
          </Typography>
        </AccordionDetails>
      </Accordion>
     {/*  -------------------------------------------------------- */}
      <Accordion disabled>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>Disabled Accordion</Typography>
        </AccordionSummary>
      </Accordion>
    </div>
  );
}