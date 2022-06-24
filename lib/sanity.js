import sanityClient from '@sanity/client'

export const client = sanityClient({
   projectId: 'k2e3zxrv',
   dataset: 'production',
   apiVersion: '2021-03-25',
   token: 'skS3Pdqem3kyjCn2FMoVGOolHUtdlLJbQVIbSR7gTKk2HCc2VSE9eH3uRCUwedlnDpxYWSnTx3ewubiTUPsvT3HYvTbJYbta4AbRR5A0JIz8dSKXLXSYmUFwXmrL9hsiaQ4nTDdixDTIf0ADK7DheHlYmeBNGgwHuTJHmLA7qi1UNQXR2f4Z',
   useCdn: false
})