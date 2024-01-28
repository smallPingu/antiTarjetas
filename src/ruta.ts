interface Ruta {
    inicio: Coordenadas;
    final: Coordenadas;
    dificultad: string;
    longitud: number;
}

type Coordenadas = {
    latitud: number;
    longitud: number;
};
