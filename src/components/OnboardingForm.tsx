import React, { useState, ReactElement } from 'react';
import TextField from '@mui/material/TextField';
import styled from 'styled-components';
import Button from '@mui/material/Button';
import {
  OnboardingFormProps,
  OnboardingFormType,
} from '../models/onboarding.models';
import { OnboardingFormInitialState } from '../constants/onboarding.constants';

const OnboardingForm = ({
  id,
  updateUserDetails,
}: OnboardingFormProps): ReactElement => {
  const [formState, setFormState] = useState<OnboardingFormType>(
    OnboardingFormInitialState
  );
  return (
    <Container>
      <TextField
        label="fullName"
        variant="standard"
        type="email"
        value={formState.fullName}
        onChange={(e: any) =>
          setFormState({ ...formState, fullName: e.target.value })
        }
        fullWidth
        required
      />
      <TextField
        label="phone number"
        variant="standard"
        type="number"
        value={formState.phone}
        onChange={(e: any) =>
          setFormState({ ...formState, phone: e.target.value })
        }
        fullWidth
        required
      />
      <Button
        variant="outlined"
        color="primary"
        onClick={() => updateUserDetails(formState.fullName, formState.phone)}
      >
        Submit
      </Button>
    </Container>
  );
};

export default OnboardingForm;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
