interface Movie {
    id: number,
    url: string,
    name: string,
    summary: string,
    image: {
        medium: string,
        original: string
    },
    premiered: date
}