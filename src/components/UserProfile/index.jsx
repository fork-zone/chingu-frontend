import React, { Fragment } from "react";
import UserSideBar from "./UserSideBar";
import Request from "../utilities/Request"
import profileQuery from "./graphql/profileQuery"
import './UserProfile.css'
import PendingApproval from './ProjectCards/PendingVoyages';
import * as ProjectCards from '../ProjectCard';
import { CohortProjectCard } from './../ProjectCard/index';

// -- USER PROFILE (EXPORT) -- //
const UserProfile = ({ data, match }) => {
  // Only allow editing if no /profile param provided. TODO: Check for currently logged in user
  const editable = !match.params.username

  const { user, user: { cohorts, projects, active_cohort_project, active_projects } } = data;
  const pendingApproval = cohorts.filter(cohort =>
    cohort.members.some(member => member.member_status !== "applicant"),
  );
  const projectSections = [
    {
      sectionTitle: 'Current Cohort Project',
      data: active_cohort_project,
      cardComponent: (data, idx) => <ProjectCards.CohortProjectCard project={data} key={idx} />,
    },
    {
      sectionTitle: 'Current Projects',
      data: active_projects,
      cardComponent: (data, idx) => <ProjectCards.ProjectCard project={data} key={idx} />,
    },
    {
      sectionTitle: 'Past Projects',
      data: projects,
      cardComponent: (data, idx) => <ProjectCards.ProjectCard project={data} key={idx} />,
    },
  ]

  return (
    <div className="user-profile-background-color">
      <div className="user-profile-container">
        <aside className="user-profile">
          <UserSideBar editable={editable} user={user} />
        </aside>

        <main className="user-voyages">
          <section className="user-voyage">
            {
              pendingApproval.length > 0
              && <PendingApproval pendingApproval={pendingApproval} />
            }
          </section>
          {projectSections.map((projectSection, idx) => {
              const projectCard = !projectSection.data || projectSection.data.length === 0
                ? <ProjectCards.NoProjectCard />
                : projectSection.data.map((project, idx) => {
                  return projectSection.cardComponent(project, idx);
                })

              return (
                <section className="user-voyage" key={idx}>
                  <div className="user-voyage-title">{projectSection.sectionTitle}</div>
                  {projectCard}
                </section>
              )
          })}
        </main>
      </div>
    </div >
  )
}

export default props =>
  <Request
    {...props}
    query={profileQuery}
    variables={{ username: props.match.params.username }}
    component={UserProfile}
    loader
  />
