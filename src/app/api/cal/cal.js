import Cal, { getCalApi } from '@calcom/embed-react';
import { useEffect } from 'react';

export default function CalComponent() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: '30min', embedLibUrl: 'https://cal.vincentpalomo.dev/embed/embed.js' });
      cal('ui', { styles: { branding: { brandColor: '#F1F1F1' } }, hideEventTypeDetails: false, layout: 'month_view' });
    })();
  }, []);
  return (
    <Cal
      namespace="30min"
      calLink="vincentpalomo/30min"
      style={{ width: '100%', height: '50%', overflow: 'scroll' }}
      config={{ layout: 'month_view', theme: 'auto' }}
      calOrigin="https://cal.vincentpalomo.dev"
      embedJsUrl="https://cal.vincentpalomo.dev/embed/embed.js"
    />
  );
}
