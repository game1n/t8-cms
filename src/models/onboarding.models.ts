export type OnboardingFormProps = {
  id: string;
  updateUserDetails: (fullName: string, phone: string) => void;
};

export type OnboardingFormType = {
  fullName: string;
  phone: string;
};
