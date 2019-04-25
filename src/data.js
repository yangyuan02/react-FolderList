/*
 * @Author: yangyuan
 * @Date: 2018-05-28 17:54:35
 * @Email: 1367511704@qq.com
 * @LastEditTime: 2019-04-25 10:56:25
 */

export const tree = {
  title: '父级aaazzzzzz',
  status: true,
  dataId: '1',
  children: [
    {
      title: '父级1-子级1',
      status: true,
      dataId: '1-1',
      children: [
        {
          dataId: '1-1-1',
          title: '父级1-子级1-子子级1',
          status: true,
          children: [
            {
              dataId: '1-1-1-1',
              title: '父级1-子级1-子子子1',
              status: false
            }
          ]
        },
        {
          dataId: '1-1-2',
          title: '父级1-子级1-子子级2',
          status: false
        },
        {
          dataId: '1-1-3',
          title: '父级1-子级1-子子级3',
          status: false
        }
      ]
    },
    { dataId: '1-2', title: '父级1-子级1', status: false },
    {
      dataId: '1-3',
      title: '父级1-子级2',
      status: true,
      children: [
        {
          dataId: '1-3-1',
          title: '父级1-子级1-子子级1',
          status: false
        },
        {
          dataId: '1-3-2',
          title: '父级1-子级1-子子级2',
          status: false
        },
        {
          dataId: '1-3-3',
          title: '父级1-子级1-子子级3',
          status: false
        }
      ]
    }
  ]
};

const tree2 = {
  '0': {
    title: '父级',
    status: true,
    dataId: '0',
    children: ['0-1'],
    parentId: '0'
  },
  '0-1': {
    children: ['0-1-1'],
    dataId: '0-1',
    parentId: '0',
    title: '一级',
    status: false
  },
  '0-1-1': {
    children: ['0-1-1-1'],
    dataId: '0-1-1',
    parentId: '0-1',
    title: '二级',
    status: false
  },
  '0-1-1-1': {
    children: [],
    dataId: '0-1-1-1',
    parentId: '0-1-1',
    title: '三级',
    status: false
  }
};
