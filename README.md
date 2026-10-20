# Eroide Music

## A) PWA sul tuo server
Copia il contenuto di `www/` in una cartella servita in **HTTPS** (serve per service worker e Media Session).
Su iPhone: Safari > Condividi > Aggiungi a Home. In "Server" inserisci l'indirizzo del tuo Invidious.

## B) .ipa (serve un Mac con Xcode)
    npm install
    npx cap add ios
    npx cap sync ios
    npx cap open ios
In Xcode:
1. Target App > Signing & Capabilities: scegli il tuo Team (Apple ID) e un Bundle Identifier univoco.
2. "+ Capability" > Background Modes > spunta **Audio, AirPlay, and Picture in Picture** (musica a schermo bloccato).
3. Collega l'iPhone, premi Run per installare; oppure Product > Archive > Distribute App > Ad Hoc/Development per esportare il file **.ipa**.
Con Apple ID gratuito l'app scade dopo 7 giorni; con Developer Program (99 €/anno) dura un anno e puoi usare TestFlight.

## C) .ipa senza Mac (GitHub + Sideloadly)
1. Crea un repository GitHub e carica tutto il contenuto della cartella `eroide` (compresa `.github`).
2. Actions > Build IPA > Run workflow. Dopo qualche minuto scarica l'artifact `EroideMusic-ipa` (zip con dentro `EroideMusic.ipa`).
3. Apri `EroideMusic.ipa` in Sideloadly, collega l'iPhone, inserisci il tuo Apple ID e premi Start. L'.ipa esce senza firma: Sideloadly la firma con il tuo Apple ID.
