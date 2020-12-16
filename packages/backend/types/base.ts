export interface PaginationRequest {
  page?: number // 当前页 默认 = 0
  size?: number // 每页大小 默认 = 9999
}

export interface Pagination<T> extends Required<PaginationRequest> {
  count: number // 总数
  content: T[] // 内容
}
