# Flowchart
``` mermaid
flowchart TD
    start((start))
    phi[/phi = 3.14/]
    r[/jari-jari/]
    lork{Hitung luas?}
    luas[phi x r x r]
    keliling[2 x phi x r]
    oluas[/Output luas/]
    okeliling[/Output keliling/]
    stop(((stop)))

    start --> phi --> r --> lork
    lork -- Ya --> luas --> oluas --> stop
    lork -- Tidak --> keliling --> okeliling --> stop

```