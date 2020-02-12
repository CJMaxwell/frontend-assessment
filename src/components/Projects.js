import React from 'react';
import { useHistory } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import styled from 'styled-components';
// import { format } from 'date-fns'
import { currencyFormatter } from '../Helper/formatter';


const ProjectWrapper = styled.div`
    padding-top: 5vh;
    .card {
        height: 28vh;
    }
`;
const ActionBar = styled.div`
    padding-top: 5vh;
`;

const LOADPROJECTS = gql`
{
    loadProject {
      id
      title
    #   contractorName
    #   contractorAddress
      budget
      startDate
      endDate
    }
  }
`;

const Projects = () => {
    const { loading, error, data } = useQuery(LOADPROJECTS);
    const history = useHistory();
    // console.log(loading, data, error);

    const handleClick = () => {
        history.push('/locations');
    }
    
    return (

        <>
        <ActionBar className="row mt-4">
            <div className="col-sm-6 col-md-6"></div>
            <div className="col-sm-5 col-md-6">
                <button type="button" class="btn btn-primary mr-3">Create a new project</button>
                <button type="button" class="btn btn-info" onClick={handleClick}>View Locations</button>
            </div>
        </ActionBar>
            <ProjectWrapper className="row">
            {
                data && data.loadProject.map(project => (
                    <div className="col-md-6 mb-4" key={project.id}>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">{project.title}</h5>
                                {/* <p className="card-text">{project.contractorName}</p>
                                <p className="card-text">{project.contractorAddress}</p> */}
                                <p className="card-text">Budget: {currencyFormatter.format(project.budget)}</p>
                                {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                            <p className="card-text">Duration: {project.startDate } - {project.endDate}</p>
                            </div>
                        </div>
                    </div>
                ))
            }
            </ProjectWrapper>
        </>

        
    
    )
}

export default Projects;
