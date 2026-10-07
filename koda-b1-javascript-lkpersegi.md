# Flowchart
``` mermaid
flowchart TD
    start((start))
    s[/Sisi/]
    lk{Hitung luas?}
    luas[L = S x S]
    keliling[K = 4 x S]
    outputluas[/Output Luas/]
    outputkeliling[/Output Keliling/]
    stop(((stop)))

    start --> s --> lk
    lk -- YES --> luas --> outputluas --> stop
    lk -- NO --> keliling --> outputkeliling --> stop
```