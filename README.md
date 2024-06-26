*CONSEGNA*
Ciao ragazzi,
esercizio di oggi: calcolo del prezzo del biglietto del treno
cartella/repo js-biglietto-treno-form
Descrizione: Scrivere un programma che chieda all’utente:
Il numero di chilometri da percorrere
Età del passeggero Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
Questo è il primo esercizio suddiviso per milestone, quindi seguite le milestone nell'ordine: non passate alla successiva se non avete fatto la precedente
Numero minimo di push: 10
MILESTONE 0: Creare il file README.md
MILESTONE 1: Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console.
MILESTONE 2: Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo. Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo). Questo richiederà un minimo di ricerca.
Nota: Se non vi sentite particolarmente creativi, questa potrebbe essere un’implementazione da seguire per il secondo milestone. Potete scegliere di implementare una soluzione completamente diversa oppure simile, ma in ogni caso cercate di farla vostra.
Link repo live coding: https://github.com/fabriziom90/js-html-css.git
Buon lavoro (modificato) 

*PROBLEMA*
Calcolare il prezzo di un biglietto del treno in base all'età e alla distanza che l'utente deve percorrere


*SOLUZIONE*

- chiedo all'utente il suo nome e cognome
- chiedo all'utente quanta distanza deve percorrere
- chiedo all'utente la sua età
- SE l'utente è un minorenne, egli avrà il biglietto scontato del 20%
- SE l'utente è un over 65, egli avrà il biglietto scontato del 40%
- ALTRIMENTI l'utente dovrà pagare il prezzo pieno
- calcolo il prezzo finale
- innesto il prezzo nel file html