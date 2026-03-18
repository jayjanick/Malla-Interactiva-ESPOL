import { useEffect, useRef } from 'react';

export function AdSenseFooter() {
  const adLoaded = useRef(false);

  useEffect(() => {
    if (!adLoaded.current) {
      try {
        // @ts-ignore
        (window.adsbygoogle = window.adsbygoogle || []).push({});
        adLoaded.current = true;
      } catch (e: any) {
        // Ignorar el error si AdSense ya llenó el contenedor (común en React Strict Mode)
        if (e.message && e.message.includes('already have ads')) {
          adLoaded.current = true;
        } else {
          console.error('AdSense error:', e);
        }
      }
    }
  }, []);

  return (
    <div className="w-full max-w-4xl mx-auto my-4 px-4 h-[10vh] min-h-[60px] max-h-[100px] flex justify-center items-center overflow-hidden bg-slate-100 dark:bg-white/5 rounded-xl border border-slate-300 dark:border-white/10 relative">
      <ins
        className="adsbygoogle"
        style={{ display: 'block', width: '100%', height: '100%' }}
        data-ad-client="ca-pub-8362294904396944"
        data-ad-slot="4968263639"
        data-ad-format="horizontal"
        data-full-width-responsive="true"
      />
    </div>
  );
}
