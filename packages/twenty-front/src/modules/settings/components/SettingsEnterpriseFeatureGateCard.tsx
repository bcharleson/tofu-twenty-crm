export const SettingsEnterpriseFeatureGateCard = (_props: {
  title: string;
  description: string;
  buttonTitle: string;
}) => {
  // TOFU self-hosted: do not upsell Twenty's paid Enterprise key.
  return null;
};
