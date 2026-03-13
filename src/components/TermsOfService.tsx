import { motion } from 'motion/react';
import { FileText } from 'lucide-react';

export function TermsOfService() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="max-w-4xl mx-auto w-full bg-white/5 border border-white/10 rounded-2xl p-6 md:p-12 shadow-xl"
    >
      <div className="flex items-center gap-4 mb-8 border-b border-white/10 pb-6">
        <div className="p-3 bg-indigo-500/10 rounded-xl text-indigo-400">
          <FileText className="w-8 h-8" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-white">Términos y Condiciones de Uso</h1>
          <p className="text-white/50 mt-1">Última actualización: {new Date().toLocaleDateString()}</p>
        </div>
      </div>

      <div className="space-y-8 text-white/70 leading-relaxed">
        <section>
          <h2 className="text-xl font-semibold text-white mb-3">1. Aceptación de los Términos</h2>
          <p>
            Al acceder y utilizar esta aplicación ("Mallin ESPOL"), aceptas estar sujeto a estos Términos y Condiciones de Uso, a todas las leyes y regulaciones aplicables, y aceptas que eres responsable del cumplimiento de las leyes locales aplicables. Si no estás de acuerdo con alguno de estos términos, se te prohíbe usar o acceder a este sitio.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">2. Exención de Responsabilidad (No Oficial)</h2>
          <p className="mb-3">
            <strong>Esta herramienta NO es una aplicación oficial de la Escuela Superior Politécnica del Litoral (ESPOL).</strong>
          </p>
          <p>
            Es un proyecto independiente creado por estudiantes para ayudar a otros estudiantes a planificar sus mallas curriculares. La información mostrada aquí (materias, créditos, prerrequisitos) se proporciona "tal cual" y puede contener errores, omisiones o estar desactualizada. Siempre debes verificar tu progreso académico y los requisitos de graduación en los canales y sistemas oficiales de la ESPOL.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">3. Uso de la Aplicación</h2>
          <p>
            Se concede permiso para descargar temporalmente una copia de los materiales (información o software) en este sitio web para visualización transitoria personal y no comercial. Esto es la concesión de una licencia, no una transferencia de título, y bajo esta licencia no puedes:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-2">
            <li>Modificar o copiar los materiales para uso comercial.</li>
            <li>Intentar descompilar o aplicar ingeniería inversa a cualquier software contenido en el sitio web.</li>
            <li>Eliminar cualquier derecho de autor u otras anotaciones de propiedad de los materiales.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">4. Limitaciones</h2>
          <p>
            En ningún caso el creador de esta aplicación o sus proveedores serán responsables de ningún daño (incluyendo, sin limitación, daños por pérdida de datos o beneficios, o debido a interrupción del negocio) que surja del uso o la incapacidad de usar los materiales en este sitio web, incluso si se ha notificado verbalmente o por escrito de la posibilidad de tal daño.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">5. Publicidad (Google AdSense)</h2>
          <p>
            Este sitio web utiliza Google AdSense para mostrar anuncios. Al utilizar este sitio, aceptas que terceros (incluido Google) pueden colocar y leer cookies en tu navegador, o utilizar balizas web para recopilar información como resultado de la publicación de anuncios en este sitio web.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">6. Modificaciones</h2>
          <p>
            Podemos revisar estos términos de servicio para nuestro sitio web en cualquier momento sin previo aviso. Al usar este sitio web, aceptas estar sujeto a la versión actual de estos Términos y Condiciones de Uso.
          </p>
        </section>
      </div>
    </motion.div>
  );
}
