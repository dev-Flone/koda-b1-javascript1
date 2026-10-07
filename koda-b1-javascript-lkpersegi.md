# Flowchart
``` mermaid
flowchart TD
    start((start))
    s[/Sisi/]
    lk{Hitung luas?}
    luas[L = S x S]
    keliling[K = 4 x S]
    stop(((stop)))

    start --> s --> lk
    lk -- YES --> luas --> stop
    lk -- NO --> keliling --> stop
```