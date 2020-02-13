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
         transition: box-shadow .3s;
    }
    .card:hover {
        box-shadow: 0 0 11px rgba(33,33,33,.2); 
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
    const handleCreateProject = () => {
        history.push('/new-project');
    }
    
    return (

        <>
        <ActionBar className="row mt-4">
            <div className="col-sm-6 col-md-6"></div>
            <div className="col-sm-5 col-md-6">
                <button type="button" className="btn btn-info mr-3" onClick={handleCreateProject}>Create a new project</button>
                <button type="button" className="btn btn-secondary" onClick={handleClick}>View Locations</button>
            </div>
        </ActionBar>
        <ActionBar className="row">
            <h4 class="col-md-12 text-center">Here is a list of some of our Projects</h4>
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
                                <p className="card-text"><b>Budget:</b> {currencyFormatter.format(project.budget)}</p>
                            <p className="card-text"><b>Duration:</b> {project.startDate } - {project.endDate}</p>
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
