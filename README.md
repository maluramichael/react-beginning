# react-beginning

Mein Sandkasten von damals, als ich React angefangen habe. Drei kleine Widgets nebeneinander, mehr nicht.

## Was drin ist
- `timer.js`: zählt Sekunden hoch
- `box.js`: zeigt die aktuelle Fensterbreite und hört auf `resize`
- `userinfo.js`: eine leere Hülle, die ich nie fertig gemacht habe

Geschrieben mit React 0.14 und `React.createClass`, gebaut mit Gulp, Browserify und Babel. React und ReactDOM landen in einem eigenen Bundle (`dependencies.js`), damit der Build der eigenen Dateien schneller ist. `main.js` ist ein Express-Server, der `dist` ausliefert.

## Starten
```
npm install
npm run build
npm run run
```
Dann auf `http://localhost:8080`.

## Stand
Ein Lernprojekt aus 2015, an dem nichts mehr weitergeht. Die Abhängigkeiten sind entsprechend alt.
