# Autoversicherungsrechner

Dieses Projekt ist ein React-basiertes Webanwendung zur Berechnung von Autoversicherungsprämien. Die Anwendung führt den Benutzer durch mehrere Schritte, in denen Informationen zum Fahrzeug, zum Halter und persönliche Daten gesammelt werden, um die beste Versicherungsoption basierend auf den eingegebenen Daten zu berechnen und anzuzeigen.

## Inhaltsverzeichnis
- [Technologien](#technologien)
- [Installation](#installation)
- [Verwendung](#verwendung)
- [Berechnung der Versicherungsprämien](#berechnung-der-versicherungsprämien)


## Technologien

- React
- React Router
- CSS
- Google Fonts (Roboto)

## Installation

1. Wechseln Sie in das Projektverzeichnis:

    ```bash
    cd autoversicherungsrechner
    ```

2. Installieren Sie die Abhängigkeiten:

    ```bash
    npm install
    ```

3. Starten Sie die Anwendung:

    ```bash
    npm start
    ```

## Verwendung

1. Öffnen Sie Ihren Browser und gehen Sie zu `http://localhost:3000`.
2. Sie werden zur Startseite weitergeleitet, auf der Sie den Prozess starten können, um Ihre Autoversicherungsprämie zu berechnen.
3. Geben Sie auf den verschiedenen Seiten (Fahrzeugdetails, Halterangaben, persönliche Daten) die erforderlichen Informationen ein.
4. Am Ende sehen Sie die verschiedenen Versicherungsoptionen mit den berechneten Prämien.

## Berechnung der Versicherungsprämien

Die Versicherungsprämie wird basierend auf verschiedenen Faktoren berechnet, die während des Eingabeprozesses gesammelt werden. Hier ist eine detaillierte Erklärung, wie die Berechnung durchgeführt wird:

1. **Basispreis**: Jeder Versicherungsplan hat einen Basispreis, der als Ausgangspunkt für die Berechnung dient.

2. **Fahrzeuginformationen**:
    - **Treibstofftyp**: Diesel erhöht die Prämie um 100 CHF, Elektro senkt die Prämie um 100 CHF, und Hybrid senkt die Prämie um 50 CHF.
    - **Fahrzeugtyp**: Motorräder senken die Prämie um 50 CHF.
    - **Leistung**: Fahrzeuge mit mehr als 150 PS erhöhen die Prämie um 100 CHF, Fahrzeuge mit mehr als 100 PS erhöhen die Prämie um 50 CHF.
    - **Nutzungsart**: Fahrzeuge, die für Dienstfahrten verwendet werden, erhöhen die Prämie um 100 CHF.
    - **Leasing**: Fahrzeuge, die geleast werden, erhöhen die Prämie um 150 CHF.
    - **Alter des Fahrzeugs**: Fahrzeuge, die älter als 10 Jahre sind, erhöhen die Prämie um 100 CHF, Fahrzeuge, die älter als 5 Jahre sind, erhöhen die Prämie um 50 CHF.

3. **Halterinformationen**:
    - **Alter des Fahrers**: Fahrer unter 25 Jahren erhöhen die Prämie um 200 CHF.
    - **Führerscheinentzug**: Wenn der Führerschein des Fahrers in den letzten 5 Jahren länger als 3 Monate entzogen wurde, erhöht sich die Prämie um 300 CHF.
    - **Unfallhistorie**: Wenn der Fahrer in den letzten 3 Jahren 3 oder mehr Schadenfälle hatte, erhöht sich die Prämie um 200 CHF.

4. **Persönliche Daten**:
    - **Geschlecht**: Frauen erhalten einen Rabatt von 50 CHF auf die Prämie.
    - **Wohnort**: Fahrzeuge, die in Zürich oder Genf zugelassen sind, erhöhen die Prämie um 50 CHF.
    - **Führerscheindauer**: Wenn der Fahrer den Führerschein weniger als 2 Jahre hat, erhöht sich die Prämie um 200 CHF, und wenn der Führerschein weniger als 5 Jahre hat, erhöht sich die Prämie um 100 CHF.
    - **Telefonnummer**: Schweizer Telefonnummern (+41) erhalten einen Rabatt von 10 CHF.

Die Berechnung wird in der `Offers.js`-Datei durchgeführt, wo die verschiedenen Faktoren addiert oder subtrahiert werden, um die endgültige Prämie zu bestimmen.

