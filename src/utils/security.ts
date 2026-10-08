/**
 * Laufzeit-Zusammensetzung geschützter Kontaktdaten zur Vermeidung automatisierter Erfassung.
 * Die Adresse wird nicht als Klartext im Quelltext vorgehalten.
 */

// Kodierte Zeichensegmente mit Verschiebung (Offset 7)
const ENCODED_PARTS: readonly number[][] = [
  [112, 123, 122],               // its
  [116, 108, 121, 112, 123, 118, 117, 112], // meritoni
  [71],                           // @
  [110, 116, 104, 112, 115],      // gmail
  [53, 106, 118, 116]             // .com
];

const OFFSET = 7;

/**
 * Entschlüsselt und assembliert die Zieladresse ausschließlich bei bewusster Nutzerinteraktion.
 */
export function resolveProtectedContactAddress(): string {
  return ENCODED_PARTS.map((part) =>
    part.map((code) => String.fromCharCode(code - OFFSET)).join('')
  ).join('');
}
