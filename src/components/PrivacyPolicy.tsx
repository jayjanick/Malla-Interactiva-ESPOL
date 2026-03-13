import { motion } from 'motion/react';
import { Shield } from 'lucide-react';

export function PrivacyPolicy() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="max-w-4xl mx-auto w-full bg-white/5 border border-white/10 rounded-2xl p-6 md:p-12 shadow-xl"
    >
      <div className="flex items-center gap-4 mb-8 border-b border-white/10 pb-6">
        <div className="p-3 bg-emerald-500/10 rounded-xl text-emerald-400">
          <Shield className="w-8 h-8" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-white">Políticas de Privacidad</h1>
          <p className="text-white/50 mt-1">Última actualización: {new Date().toLocaleDateString()}</p>
        </div>
      </div>

      <div className="space-y-8 text-white/70 leading-relaxed">
        <section>
          <h2 className="text-xl font-semibold text-white mb-3">1. Información que recopilamos</h2>
          <p>
            Nuestra aplicación ("Mallin ESPOL") está diseñada para funcionar principalmente en tu navegador. Los datos sobre tu progreso académico, materias aprobadas y planificación se almacenan localmente en tu dispositivo (Local Storage). Por el momento, no almacenamos esta información personal en servidores externos, aunque en el futuro podríamos ofrecer la opción de crear cuentas de usuario para sincronizar datos.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">2. Uso de Cookies y Publicidad (Google AdSense)</h2>
          <p className="mb-3">
            Para mantener este proyecto gratuito, utilizamos Google AdSense para mostrar anuncios. Google y sus socios utilizan cookies para publicar anuncios basados en tus visitas anteriores a este u otros sitios web de Internet.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Los proveedores de terceros, incluido Google, utilizan cookies para mostrar anuncios relevantes.</li>
            <li>El uso de cookies de publicidad permite a Google y a sus socios mostrar anuncios basados en tu navegación.</li>
            <li>Puedes inhabilitar la publicidad personalizada visitando la <a href="https://myadcenter.google.com/" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:underline">Configuración de anuncios de Google</a>.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">3. Analíticas Web</h2>
          <p>
            Utilizamos Vercel Web Analytics para medir el tráfico y el uso de la aplicación de forma anónima. Esto nos ayuda a entender cómo los estudiantes interactúan con la plataforma para mejorarla, sin rastrear información personal identificable.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">4. Enlaces a terceros</h2>
          <p>
            Ocasionalmente, a nuestra discreción, podemos incluir o ofrecer productos o servicios de terceros en nuestro sitio web. Estos sitios de terceros tienen políticas de privacidad separadas e independientes. Por lo tanto, no tenemos ninguna responsabilidad por el contenido y las actividades de estos sitios enlazados.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">5. Consentimiento</h2>
          <p>
            Al utilizar nuestro sitio web, aceptas nuestra política de privacidad. Si decides no aceptar el uso de cookies con fines publicitarios, puedes configurar tu navegador para rechazarlas, aunque esto podría afectar la visualización de cierto contenido.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">6. Contacto</h2>
          <p>
            Si tienes alguna pregunta sobre esta política de privacidad, puedes contactarnos al correo electrónico: <a href="mailto:jay.palacios215@gmail.com" className="text-emerald-400 hover:underline">jay.palacios215@gmail.com</a>.
          </p>
        </section>
      </div>
    </motion.div>
  );
}
