APP BARBERÍA - V1

1. Ejecuta schema.sql en el SQL Editor del mismo proyecto Supabase.
2. En supabaseClient.js pega el ANON KEY del proyecto. La URL ya corresponde al proyecto que estaba usando tu app de perfumes.
3. Crea un usuario en Authentication > Users.
4. Copia su UUID y crea su perfil como admin con el SQL indicado al final de schema.sql.
5. Para cada barbero: crea su usuario en Authentication > Users, copia el UUID y desde la sección Barberos de la app registra su nombre y comisión 50%.
6. Configura Yape y QR desde Configuración.
7. Sube todos los archivos a GitHub Pages, Netlify o Vercel.

IMPORTANTE
- Esta app usa únicamente tablas con prefijo barberia_.
- No lee ni modifica las tablas de la app de perfumes.
- La comisión queda guardada en cada corte para conservar el porcentaje histórico aunque después cambie la configuración.
- Los comprobantes se almacenan en el bucket privado barberia-comprobantes.
