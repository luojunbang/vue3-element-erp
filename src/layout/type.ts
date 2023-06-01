export declare interface Menu {
  title: string
  path: string
  meta?: {
    icon?: string
  }
  children?: Menu[]
}

export declare interface Tab {
  label: string
  key: string
  baseUrl: string
}
