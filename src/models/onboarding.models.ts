type onboardingFields = {
  fullName: string;
  phone: string;
  id: string;
};
export type OnboardingFormProps = {
  modalOpen: boolean;
  id: string;
  updateUserDetails: (onboardingFields: onboardingFields) => void;
  onModalClose: () => void;
};

export type OnboardingFormType = {
  fullName: string;
  phone: string;
  id: string;
};
