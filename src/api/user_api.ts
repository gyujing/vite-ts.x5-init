import service from '@/utils/request';

const request = service.service;

export function getApi(data: object) {
  return request({
    url: '/api/delete',
    method: 'get',
    params: data,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  });
}

export function postApi(data: object) {
  return request({
    url: '/api/add',
    method: 'post',
    data,
  });
}

export default {
  getApi,
  postApi,
};
