import { T, useTranslate } from '@tolgee/react';
import { assertUnreachable } from 'tg.fixtures/assertUnreachable';
import { components } from 'tg.service/apiSchema.generated';
import { Announcement } from './Announcement';
import { BannerLink } from './BannerLink';

type AnnouncementDtoType = components['schemas']['AnnouncementDto']['type'];

export function useAnnouncement() {
  const { t } = useTranslate();

  return (value: AnnouncementDtoType) => {
    switch (value) {
      case 'FEATURE_BATCH_OPERATIONS':
        return (
          <Announcement
            content={t('announcement_feature_batch_operations')}
            link="https://tolgee.io/platform/translation_keys/batch_operations"
          />
        );
      case 'FEATURE_MT_FORMALITY':
        return (
          <Announcement
            content={t('announcement_feature_mt_formality')}
            link="https://tolgee.io/platform/projects_and_organizations/languages#machine-translation-settings"
          />
        );
      case 'FEATURE_CONTENT_DELIVERY_AND_WEBHOOKS':
        return (
          <Announcement
            content={
              <T
                keyName="announcement_feature_content_delivery_and_webhooks"
                params={{
                  'link-delivery': (
                    <BannerLink href="https://tolgee.io/platform/projects_and_organizations/content_delivery" />
                  ),
                  'link-webhooks': (
                    <BannerLink href="https://tolgee.io/platform/projects_and_organizations/webhooks" />
                  ),
                }}
              />
            }
          />
        );
      default:
        assertUnreachable(value);
    }
  };
}
