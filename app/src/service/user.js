import request from '@/request'

export function getCategory(params) {
    return request({
      url: '/category',
      method: "post",
      params
    })
  }
