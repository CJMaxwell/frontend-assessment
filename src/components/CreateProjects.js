import React from 'react';
import { useHistory } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { useMutation } from '@apollo/react-hooks';
import styled from 'styled-components';


// const CREATE_PROJECTS = gql`
// {
//     mutation project($project: CreateProjectType!) {
//         createProject(project: $project) {
//             message
//             status
//         }
//     }
// }
// `;

const CreateProjects = () => {
    // const [project, {error, loading}] = useMutation(CREATE_PROJECTS);
    return (
        <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-8">
            <form>
                <div class="form-row">
                    <div class="form-group col-md-6">
                    <label for="firstName">Contractor Name</label>
                    <input type="text" className="form-control" id="firstName" name="firstName" placeholder="First Name" required/>
                    </div>
                    <div class="form-group col-md-6">
                    <label for="lastName">Contractor Address</label>
                    <input type="text" className="form-control" id="lastName" name="lastName" placeholder="Surname" required/>
                    </div>
              </div>
              <div class="form-row">
                    <div class="form-group col-md-6">
                    <label for="firstName">Start Date</label>
                    <input type="text" className="form-control" id="firstName" name="firstName" placeholder="First Name" required/>
                    </div>
                    <div class="form-group col-md-6">
                    <label for="lastName">End Date</label>
                    <input type="text" className="form-control" id="lastName" name="lastName" placeholder="Surname" required/>
                    </div>
              </div>
              <div class="form-row">
                    <div class="form-group col-md-6">
                    <label for="firstName">Title</label>
                    <input type="text" className="form-control" id="firstName" name="firstName" placeholder="First Name" required/>
                    </div>
              </div>
              <button type="submit" class="btn btn-primary">Create Project</button>

            </form>
            </div>
            <div className="col-md-2"></div>
            
        </div>
    )
}

export default CreateProjects;
