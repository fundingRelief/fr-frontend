// import { useState, useEffect } from 'react';
import React, { createContext, useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { fetchCampaigns } from '../services/fundingReliefAPI';

const CampaignsContext = createContext();

export const CampaignsProvider = ({ children }) => {

  const [campaigns, setCampaigns] = useState([]);

  const [loading, setLoading] = useState(false);

  const [localCampaigns, setLocalCampaigns] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetchCampaigns()
      .then(fetchedCampaigns => {
        setCampaigns(fetchedCampaigns);
        localStorage.setItem('localCampaigns', JSON.stringify(fetchedCampaigns));
        setLocalCampaigns(JSON.parse(localStorage.getItem('localCampaigns')));
        setLoading(false);
      });
  }, []);

  // localStorage.setItem("localCampaigns", fetchedCampaigns);

  // let localCampaigns = localStorage.getItem("localCampaigns");

  // setLocalCampaigns(localStorage.getItem('localCampaigns'));

  //   if (users) {
  //     users = JSON.parse(users);
  //     this.setState({ users });
  //   } else {
  //     fetch("https://jsonplaceholder.typicode.com/users")
  //       .then(res => res.json())
  //       .then(users => {
  //         this.setState({ users });
  //         localStorage.setItem("users", JSON.stringify(users));
  //       });
  //   }
  // }

  // handleClick = index => {
  //   this.setState(
  //     prevState => {
  //       const users = [...prevState.users];
  //       users.splice(index, 1);
  //       return { users };
  //     },
  //     () => {
  //       localStorage.setItem("users", JSON.stringify(this.state.users));
  //     }
  //   );
  // };


  return (
    <CampaignsContext.Provider
      value={{
        campaigns,
        loading,
        setLoading,
        localCampaigns
        
      }}
    >
      {children}
    </CampaignsContext.Provider>
  );
};

CampaignsProvider.propTypes = {
  children: PropTypes.node,
};

export const useCampaign = () => {
  const { campaigns } = useContext(CampaignsContext);
  return campaigns;
};

export const useLoading = () => {
  const { loading } = useContext(CampaignsContext);
  return loading;
};

export const useSetLoading = () => {
  const { setLoading } = useContext(CampaignsContext);
  return setLoading;
};

export const useLocalCampaigns = () => {
  const { localCampaigns } = useContext(CampaignsContext);
  return localCampaigns;
};


// localCampaigns

// export const useGetCampaigns = fetchFunction => {
//   const [campaigns, setCampaigns] = useState([]);

//   const [loading, setLoading] = useState(false);



//   // console.log(campaigns);

//   // if(campaigns.length === 0) {
//   //   useEffect(() => {
//   //     setLoading(true);
//   //     fetchFunction()
//   //       .then(fetchedCampaigns => {
//   //         setCampaigns(fetchedCampaigns);
//   //         setLoading(false);
//   //       });
//   //   }, []);
//   // }

//   useEffect(() => {
//     setLoading(true);
//     fetchFunction()
//       .then(fetchedCampaigns => {
//         setCampaigns(fetchedCampaigns);
//         setLoading(false);
//       });
//   }, []);

//   // useEffect(() => {
//   //   setLoading(true);
//   //   fetchFunction()
//   //     .then(fetchedCampaigns => {
//   //       setCampaigns(fetchedCampaigns);
//   //       setLoading(false);
//   //     });
//   // }, []);

//   return { campaigns, setCampaigns, loading, setLoading };
// };


