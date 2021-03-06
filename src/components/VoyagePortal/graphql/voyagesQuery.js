import { gql } from "apollo-boost"

export const voyagesQuery = gql`
  query getVoyages {
    user {
      id
      status
    }
    cohorts {
      id
      title
      start_date
      end_date
      status
      members {
        id
      }
    }
  }
`

export default voyagesQuery