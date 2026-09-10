import { SettingsTableCard } from '@/settings/components/SettingsTableCard';
import { useApolloAdminClient } from '@/settings/admin-panel/apollo/hooks/useApolloAdminClient';
import { SettingsAdminVersionDisplay } from '@/settings/admin-panel/components/SettingsAdminVersionDisplay';
import { t } from '@lingui/core/macro';
import { IconCircleDot } from 'twenty-ui/icon';
import { useQuery } from '@apollo/client/react';
import { GetVersionInfoDocument } from '~/generated-admin/graphql';

export const SettingsAdminVersionContainer = () => {
  const apolloAdminClient = useApolloAdminClient();
  const { data, loading } = useQuery(GetVersionInfoDocument, {
    client: apolloAdminClient,
  });
  const { currentVersion } = data?.versionInfo ?? {};

  const versionItems = [
    {
      Icon: IconCircleDot,
      label: t`Current version`,
      value: (
        <SettingsAdminVersionDisplay
          version={currentVersion}
          loading={loading}
          noVersionMessage={t`Unknown`}
        />
      ),
    },
  ];

  return (
    <SettingsTableCard rounded items={versionItems} gridAutoColumns="3fr 8fr" />
  );
};
