# Mostrar Atributos
- - -
La clase **Auto** contendrá tres atributos, los cuales son:

> Marca: Volkswagen, Audi, etc.

> Año de fabricación: 2010, 2018, etc.

> Tipo: Deportivo o familiar.

```Java
public Enum TipoAuto {
    DEPORTIVO,
    FAMILIAR
}
public class Auto {
    private String marca;
    private Date añoFabricación;
    private TipoAuto tipo;
}
```

Siendo que los atributos tengan acceso privado, 
deberás buscar la forma de mostrar los valores
de esas variables.