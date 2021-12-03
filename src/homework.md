# Tarea

1. Crear un nuevo componente dentro de la carpeta SRC llamado
    ```CounterApp```

2. El CounterApp debe de ser un __Functional Component__

3. El contenido del __CounterApp__ debe de ser:
    ```
        <h1>CounterApp</h1>
        <h2> { value } </h2>
    ```

4. Donde ```"value"``` es una propiedad enviada desde el padre hacia
    el componente __CounterApp__ __(Debe ser númerica validada con PropTypes)__

5. Reemplazar en el index.js el componente de <PrimeraApp />
    por el componente <CounterApp /> 
        (no se olviden del value que debe de ser un número)

6. Asegúrense de no tener errores ni warnings
    (Cualquier warning no usado, comentar el código)

## Primeras pruebas

Jest

Expect

toBe

Enzyme

Comandos útiles en la terminal para pruebas

Revisar elementos renderizados en el componente

Simular eventos

Esta sección de pruebas es sumamente importante porque nos dará la base de las
pruebas que estaremos haciendo durante el curso, las pruebas irán creciendo en
complejidad, por lo que les recomiendo que nos aseguremos de comprender bien
todos estos conceptos para que nos sea más fácil las siguientes secciones de pruebas.