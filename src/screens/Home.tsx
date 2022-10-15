import React, { ReactElement, useState, useEffect } from 'react';
import { getSupabaseData } from '../services/supabase.service';
import { BlogSectionTypes } from '../models/blog.models';
import { getAllBlogs } from '../services/blog';
import styled from 'styled-components';
import BlogSection from '../components/BlogSection';
import { CircularLoader } from '../components/loader';
import { getUserDetails, postUserDetails } from '../services/user';
import {
  UserDetailsResponseType,
  UserDetailsPayloadType,
} from '../models/user.models';
import { userDetailsInitialState } from '../constants/user.constants';
import OnboardingForm from '../components/OnboardingForm';
import Header from '../components/Header';
import { logOut } from '../services/auth';
import { useNavigate } from 'react-router-dom';
const Home = (): ReactElement => {
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState<BlogSectionTypes[]>();
  const [loading, setLoading] = useState<boolean>(false);
  const [userDetails, setUserDetails] = useState<UserDetailsResponseType[]>([
    userDetailsInitialState,
  ]);
  const [onboardingModal, setOnboardingModal] = useState<boolean>(false);
  const { session } = getSupabaseData();

  const acceptCallbackFromModal = (): void => {
    setLoading(true);
    getAllBlogs(session?.user.id as string)
      .then((response) => {
        setBlogs(response);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  };
  const fetchUserDetails = (): void => {
    setLoading(true);
    getUserDetails(session?.user.id as string)
      .then((response) => {
        setUserDetails(response);
        if (response.length === 0) {
          setOnboardingModal(true);
          console.log('triggered');
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  };
  const endSession = (): void => {
    logOut(navigate)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => console.error(err));
  };
  const updateUserDetails = (requestPayload: UserDetailsPayloadType): void => {
    postUserDetails(requestPayload)
      .then((response) => alert('data updated successfully'))
      .catch((error) => console.error(error));
    setOnboardingModal(false);
    fetchUserDetails();
  };
  useEffect(() => {
    setLoading(true);
    getAllBlogs(session?.user.id as string)
      .then((response) => {
        setBlogs(response);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
    fetchUserDetails();
  }, []);
  console.log(userDetails);
  return (
    <HomeContainer>
      <Header
        name={userDetails[0]?.fullName}
        logOut={endSession}
        leftContainer="t8 CMS"
        search={true}
      />
      <div className="body-contents">
        {loading && (
          <LoadingContainer>
            <CircularLoader shouldDisplayLoader={loading} size="50px" />
          </LoadingContainer>
        )}
        {!loading && (
          <BlogSection
            blogs={blogs as BlogSectionTypes[]}
            callback={acceptCallbackFromModal}
            fullName={userDetails?.[0]?.fullName}
          />
        )}
        <OnboardingForm
          id={session?.user.id as string}
          modalOpen={onboardingModal}
          updateUserDetails={updateUserDetails}
          onModalClose={() => setOnboardingModal(false)}
        />
      </div>
    </HomeContainer>
  );
};

export default Home;

const HomeContainer = styled.div`
  height: 100%;
  width: 100%;
  .body-contents {
    margin-top: 80px;
  }
`;

const LoadingContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
