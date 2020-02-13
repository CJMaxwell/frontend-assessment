import React from 'react';
import { useHistory } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { useMutation } from '@apollo/react-hooks';
import { Formik } from 'formik';
import styled from 'styled-components';


const CREATE_PROJECTS = gql`
    mutation project($project: CreateProjectType!) {
        createProject(project: $project) {
            message
            status
        }
    }
`;

const backButton = {
    marginBottom: '8vh'
}
const Wrapper = styled.div`
    .form-control:focus {
        color: #495057;
        background-color: #fff;
        border-color: #6c757d;
        outline: 0;
        box-shadow: 0 0 0 1px #6c757d;
    }
`;

const CreateProjects = () => {
    const [createProject, {error}] = useMutation(CREATE_PROJECTS);
    const handleClick = () => {
        history.push('/projects');
    }
    const history = useHistory();

    return (
        <Wrapper className="row">
            <div className="col-md-2">
            </div>
            <div className="col-md-8 mt-5">
            <button style={backButton} type="button" className="btn btn-info" onClick={handleClick}>Back</button>

            <Formik
      initialValues={{ contractorName: '', contractorAddress: '',startDate:'',endDate:'',title:'',budget:'' }}
      onSubmit={(values, { setSubmitting }) => {
        createProject({
            variables:{
            project: values
        }}).then((data) => {
            console.log(data);
            setSubmitting(false)}).catch(err => {});
           
        
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
            <form onSubmit={handleSubmit}>
                <div className="form-row">
                    <div className="form-group col-md-6">
                    <label for="contractorName">Contractor Name</label>
                    <input 
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.contractorName}
                        type="text" className="form-control" id="contractorName" name="contractorName" placeholder="Contractor Name" required/>
                    </div>
                    <div className="form-group col-md-6">
                    <label for="contractorAddress">Contractor Address</label>
                    <input 
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.contractorAddress}
                        type="text" className="form-control" id="contractorAddress" name="contractorAddress" placeholder="Contractor Address" required/>
                    </div>
              </div>
              <div className="form-row">
                    <div className="form-group col-md-6">
                    <label for="startDate">Start Date</label>
                    <input 
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.startDate}
                        type="text" className="form-control" id="startDate" name="startDate" placeholder="Start Date" required/>
                    </div>
                    <div className="form-group col-md-6">
                    <label for="endDate">End Date</label>
                    <input
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.endDate}
                        type="text" className="form-control" id="endDate" name="endDate" placeholder="End Date" required/>
                    </div>
              </div>
              <div className="form-row">
                    <div className="form-group col-md-6">
                    <label for="title">Title</label>
                    <input
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.title}
                        type="text" className="form-control" id="title" name="title" placeholder="Project Title" required/>
                    </div>
                    <div className="form-group col-md-6">
                    <label for="budget">Budget</label>
                    <input
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.budget}
                        type="text" className="form-control" id="budget" name="budget" placeholder="Project budget" required/>
                    </div>
              </div>
              <button type="submit" disabled={isSubmitting} className="btn btn-secondary btn-lg btn-block">Create Project</button>

            </form>
            )}
            </Formik>
            </div>
            <div className="col-md-2"></div>
            
        </Wrapper>
    )
}

export default CreateProjects;
