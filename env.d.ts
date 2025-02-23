interface Env {
  readonly COOKIE: string;
  readonly TAGS: string;
  readonly USERNAME: string;
}

interface ImportMeta {
  readonly env: Env;
}
