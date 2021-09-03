import {gql} from "@apollo/client";

export const launchMissionsList = gql`{
          launchesPast(limit: 100) {
                id
                mission_id
                mission_name
                links {
                     flickr_images
                }
                rocket {
                    rocket_name
                    rocket_type
                    rocket {
                      boosters
                      company
                      active
                      country
                    }
                }
              }    
          }`;
