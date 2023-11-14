import request from '@/request'

export function swiperAdd(data) {
    return request({
      url: '/file/pic',
      method: "post",
      data
    })
  }