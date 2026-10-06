import type { Localized } from '../../shared/types/content'

// TODO(leonardo): have this reviewed, and add a contact email for privacy requests (GDPR art. 13).
export const privacyUpdatedAt = '2026-10-04'

export const privacySections: { title: Localized; paragraphs: Localized<string[]> }[] = [
    {
        title: { it: 'Titolare del trattamento', en: 'Data controller' },
        paragraphs: {
            it: [
                'Il titolare del trattamento è Leonardo Ramaj, P.IVA 02610360972, con sede a Prato (PO). Per qualsiasi richiesta sui tuoi dati puoi scrivermi tramite il modulo di contatto di questo sito.',
            ],
            en: [
                'The data controller is Leonardo Ramaj, VAT number IT02610360972, based in Prato (PO), Italy. For any request about your data, you can write to me through this website’s contact form.',
            ],
        },
    },
    {
        title: { it: 'Quali dati raccolgo', en: 'What data I collect' },
        paragraphs: {
            it: [
                'Modulo di contatto: nome, indirizzo email e testo del messaggio che decidi di inviarmi.',
                'Verifica anti-bot: quando invii il modulo o chiedi di vedere telefono ed email, Cloudflare Turnstile analizza segnali tecnici del browser per distinguere le persone dai bot. Non uso questi dati per profilarti.',
                'Dati tecnici: come ogni sito, il server riceve l’indirizzo IP e i dati tecnici della richiesta, trattati dal fornitore di hosting per erogare il sito e proteggerlo da abusi.',
            ],
            en: [
                'Contact form: your name, email address and the text of the message you choose to send.',
                'Anti-bot check: when you send the form or ask to see my phone and email, Cloudflare Turnstile analyses technical browser signals to tell people from bots. I don’t use this data to profile you.',
                'Technical data: like any website, the server receives your IP address and technical request data, processed by the hosting provider to serve the site and protect it from abuse.',
            ],
        },
    },
    {
        title: { it: 'Perché e su quale base', en: 'Why, and on what legal basis' },
        paragraphs: {
            it: [
                'Uso i dati del modulo solo per rispondere alla tua richiesta ed eventualmente preparare un preventivo (misure precontrattuali, art. 6.1.b GDPR).',
                'La verifica anti-bot e i dati tecnici servono a proteggere il sito e i miei contatti dallo spam (legittimo interesse, art. 6.1.f GDPR).',
            ],
            en: [
                'I use form data only to reply to your request and, if needed, prepare a quote (pre-contractual measures, Art. 6(1)(b) GDPR).',
                'The anti-bot check and technical data protect the site and my contact details from spam (legitimate interest, Art. 6(1)(f) GDPR).',
            ],
        },
    },
    {
        title: { it: 'Fornitori', en: 'Service providers' },
        paragraphs: {
            it: [
                'Cloudflare, Inc. ospita il sito e fornisce la verifica Turnstile. Resend, Inc. recapita i messaggi del modulo alla mia casella email. Entrambi possono trattare dati negli Stati Uniti, con le garanzie previste dal GDPR (EU-US Data Privacy Framework o clausole contrattuali standard).',
            ],
            en: [
                'Cloudflare, Inc. hosts the site and provides the Turnstile check. Resend, Inc. delivers contact form messages to my inbox. Both may process data in the United States, under the safeguards required by the GDPR (EU-US Data Privacy Framework or standard contractual clauses).',
            ],
        },
    },
    {
        title: { it: 'Per quanto tempo', en: 'How long' },
        paragraphs: {
            it: [
                'Conservo i messaggi per il tempo necessario a gestire la tua richiesta e l’eventuale rapporto di lavoro che ne segue. Se non nasce una collaborazione, li cancello entro 24 mesi.',
            ],
            en: [
                'I keep messages for as long as needed to handle your request and any working relationship that follows. If no collaboration starts, I delete them within 24 months.',
            ],
        },
    },
    {
        title: { it: 'Cookie', en: 'Cookies' },
        paragraphs: {
            it: [
                'Il sito non usa cookie di profilazione né strumenti di statistica. Salva solo nel tuo browser la preferenza di tema (chiaro o scuro); Turnstile può usare dati tecnici strettamente necessari alla verifica.',
            ],
            en: [
                'The site uses no profiling cookies and no analytics. It only stores your theme preference (light or dark) in your browser; Turnstile may use technical data strictly needed for the check.',
            ],
        },
    },
    {
        title: { it: 'I tuoi diritti', en: 'Your rights' },
        paragraphs: {
            it: [
                'Puoi chiedere in qualsiasi momento l’accesso, la rettifica, la cancellazione, la limitazione o la portabilità dei tuoi dati e opporti al trattamento. Hai anche il diritto di proporre reclamo al Garante per la protezione dei dati personali (garanteprivacy.it).',
            ],
            en: [
                'You can ask at any time to access, correct, delete, restrict or port your data, and object to its processing. You also have the right to lodge a complaint with the Italian data protection authority, the Garante per la protezione dei dati personali (garanteprivacy.it).',
            ],
        },
    },
]
