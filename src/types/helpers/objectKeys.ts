// Helper type to join paths
type JoinPath<K extends string, P extends string> = K extends "" ? P : `${K}.${P}`;

// Main type to get all possible paths
type ObjectPaths<T extends object, Prefix extends string = ""> = {
    [K in keyof T]: T[K] extends object
        ? ObjectPaths<T[K], JoinPath<Prefix & string, K & string>>
        : JoinPath<Prefix & string, K & string>;
}[keyof T];
