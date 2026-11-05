import { describe, it, expect } from 'vitest'
import { average, roundTo, calculatePercentage } from '../services/numberUtils'

describe('numberUtils service', () => {
    it('average - calcul la moyenne d un tableau de nombre', () => {
        const array = [18, 25, 123456789, 100.5, 1.23456, -99999, -1.23456789, -1000, -1]
        expect(average(array)).toBe(13706214.722221345)
    })
    it('average - retourne 0 si le tableau est vide', () => {
        const array = []
        expect(average(array)).toBe(0)
    })
    it('average - retourne 0 si pas de valeur en paramètre de fonction', () => {
        expect(average()).toBe(0)
    })
})

describe('numberUtils - roundTo', () => {
    it('roundTo - arrondie un nombre avec la décimale spécifiée en paramètre', () => {
        expect(roundTo(1.23456, 2)).toBe(1.23);
        expect(roundTo(1.23456, 4)).toBe(1.2346); // Vérifie l'arrondi supérieur (56 -> 6)
    });

    it('roundTo - arrondie a deux décimale après la virgule par défaut si pas de décimale en paramètre', () => {
        expect(roundTo(9.8765)).toBe(9.88);
    });

    it('roundTo - arrondie un nombre négatif avec la décimale spécifié en paramètre  ', () => {
        expect(roundTo(-1.23456, 2)).toBe(-1.23);
        expect(roundTo(-1.238, 2)).toBe(-1.24);
    });

    it('roundTo - retourne le même nombre entier même avec une décimale en paramètre', () => {
        expect(roundTo(42, 2)).toBe(42);
        expect(roundTo(0, 5)).toBe(0);
    });

    it('roundTo - retourne un entier si la décimale est 0', () => {
        expect(roundTo(123.456, 0)).toBe(123);
        expect(roundTo(123.567, 0)).toBe(124);
    });
});


describe('numberUtils - calculatePercentage', () => {
    it('calculatePercentage - calcule le pourcentage d un nombre', () => {
        expect(calculatePercentage(25, 100)).toBe(25);
        expect(calculatePercentage(1, 4)).toBe(25);
    });

    it('calculatePercentage - retourne 0 si le total est égal à 0', () => {
        expect(calculatePercentage(50, 0)).toBe(0);
        expect(calculatePercentage(0, 0)).toBe(0);
    });

    it('calculatePercentage - retourne 0 si la partie est égal à 0', () => {
        expect(calculatePercentage(0, 150)).toBe(0);
    });

    it('calculatePercentage - calcule le pourcentage même si la partie est supérieur à 100%', () => {
        expect(calculatePercentage(300, 100)).toBe(300);
        expect(calculatePercentage(20, 10)).toBe(200);
    });

    it('calculatePercentage - calcule le pourcentage avec des nombres négatifs', () => {
        expect(calculatePercentage(-25, 100)).toBe(-25);
        expect(calculatePercentage(25, -100)).toBe(-25);
    });
});
