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
    <div className="w-full max-w-4xl mx-auto my-4 px-4 h-[10vh] min-h-[60px] max-h-[100px] flex justify-center items-center overflow-hidden bg-white/5 rounded-xl border border-white/10 relative">
      {/* 
        Reemplaza "XXXXXXXXXX" con el ID de tu bloque de anuncios (ad-slot).
      */}
      <ins
        className="adsbygoogle"
        style={{ display: 'block', width: '100%', height: '100%' }}
        data-ad-client="ca-pub-8362294904396944"
        data-ad-slot="XXXXXXXXXX"
        data-ad-format="horizontal"
        data-full-width-responsive="true"
      />
      
      {/* Placeholder visual para desarrollo (puedes borrarlo cuando pongas tus IDs reales) */}
      <div className="absolute text-white/20 text-xs font-mono pointer-events-none">
        Espacio para Anuncio (AdSense)
      </div>
    </div>
  );
}
