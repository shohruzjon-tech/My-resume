import React from 'react'
import Experience from '../../components/work-history/work-history.component';
import reseumeData from '../../components/utils/resume-data.component';
import WorkIcon from '@material-ui/icons/Work';
import EducationIcon from '@material-ui/icons/CastForEducation';


const  Resume=()=> {


  const styles={
      header:{
          background:"#fff",
          display:'flex',
          padding:'20px 0'
      }
  }

    
    return (
        <div style={styles.header}>
              <Experience  objects={reseumeData.workHistory} icon={<WorkIcon/>} tagName="Work History"/>
              <Experience  objects={reseumeData.educationHistory} icon={<EducationIcon/>} tagName="Education History"/>
        </div>
    )
}


export default Resume;