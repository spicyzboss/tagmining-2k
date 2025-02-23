interface Env {
  readonly COOKIE: string;
  readonly TAGS: string;
}

interface ImportMeta {
  readonly env: Env;
}
