type OrganizationAdornmentProps = {
  tooltipContent?: string;
};

export const OrganizationAdornment = (_props: OrganizationAdornmentProps) => {
  // TOFU self-hosted: do not badge features as Twenty Organization/Enterprise.
  return null;
};
