import React, { useState, ReactElement } from 'react';
import TextField from '@mui/material/TextField';
import styled from 'styled-components';
import Button from '@mui/material/Button';
import {
  OnboardingFormProps,
  OnboardingFormType,
} from '../models/onboarding.models';
import { OnboardingFormInitialState } from '../constants/onboarding.constants';
import { Modal, Box } from '@mui/material';

const OnboardingForm = ({
  modalOpen,
  id,
  updateUserDetails,
  onModalClose,
}: OnboardingFormProps): ReactElement => {
  const [formState, setFormState] = useState<OnboardingFormType>(
    OnboardingFormInitialState
  );
  const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  return (
    <div style={{ height: '100%', width: '100%' }}>
      <Modal
        open={modalOpen}
        onClose={onModalClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
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
                setFormState({ ...formState, phone: e.target.value, id })
              }
              fullWidth
              required
            />
            <Button
              variant="outlined"
              color="primary"
              onClick={() => updateUserDetails(formState)}
            >
              Submit
            </Button>
          </Container>
        </Box>
      </Modal>
    </div>
  );
};

export default OnboardingForm;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
