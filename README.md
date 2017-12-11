# Zadanie rekrutacyjne

## Przygotowanie środowiska

* Należy posiadać zainstalowane środowisko NodeJS w wersji stabilnej
* `npm install -g json-server`


## Uruchomienie serwera

Aby uruchomić serwer danych należy w katalogu z aplikacją uruchomić polecenie
`json-server db.json --static ./public`

## Obsługa API

* http://localhost:3000/users - pobieranie wszystkich użytkowników
* http://localhost:3000/users?_page=1&_limit=5 - pobranie pierwszych 5 użytkowników
* http://localhost:3000/1.png - pobranie awatara użytkownika o ID = 1

(dokumentacja: https://github.com/typicode/json-server)



# Wymagania funcjonalne

* wyświetlenie dwóch tabel obok siebie (kobiety, mężczyźni)z danymi użytkowników: 
  * imię
  * nazwisko
  * data urodzenia
  * miniaturka awataru (o ile istnieje)
* możliwość zaznaczenia kiku wierszy i ich usunięcia 
* stronicowanie (np. za pomocą przycisków (kolejny, następny) lub w stylu 'infinite scroll')
* możliwość zmiany liczby elementów na stronie (dowolna ilość)
* sortowanie (opcjonalne)
* graficzna prezentacja stosunku ilości płci (np. wykres, pasek postępu)

## Technologia wymagana
 * React w dowolnej wersji
 * Biblioteka UI w stylu material design (material-ui.com, materializecss.com lub inna)
 * Aplikacja w stylu SPA (bez zbędnych przeładowań)
 
Możliwe jest użycie składni ES6 (od stage-0) pod warunkiem skompilowania kodu np za pomocą babel.
Możliwe jest użycie dowolnie innej biblioteki.
Możliwe jest użycie publicznie dostępnego szkieletu aplikacji.
Kod zostanie uruchomiony na najnowszej wersji Chrome lub Firefox.

## Rozwiązanie powinno zawierać paczkę ZIP z:
 * kodem źródłowym
 * kodem wynikowym (jeżeli kod został przekompilowany)
 * `package.json` z:
  * listą użytych zależności
  * komendą uruchchamiającą budowanie (o ile jest potrzebne)
  
  
Wszelkie pytania oraz rozwiązania proszę kierować na adres: `kwarpechowski@macrosystem.pl`
