
export const tree = {
    title: "父级1",
    status: true,
    dataId: "1",
    children: [
        {
            title: "父级1-子级1",
            status: true,
            dataId:"1-1",
            children: [
                {
                    dataId:"1-1-1",
                    title: "父级1-子级1-子子级1",
                    status: true,
                    children: [
                        {
                            dataId:'1-1-1-1',
                            title: "父级1-子级1-子子子1",
                            status: false
                        }
                    ]
                },
                {
                    dataId:"1-1-2",
                    title: "父级1-子级1-子子级2",
                    status: false
                },
                {
                    dataId:"1-1-3",
                    title: "父级1-子级1-子子级3",
                    status: false
                }
            ]
        },
        {   dataId:"1-2",
            title: "父级1-子级1",
            status: false
        },
        {   
            dataId:"1-3",
            title: "父级1-子级2",
            status: true,
            children: [
                {
                    dataId:"1-3-1",
                    title: "父级1-子级1-子子级1",
                    status: false
                },
                {
                    dataId:"1-3-2",
                    title: "父级1-子级1-子子级2",
                    status: false
                },
                {
                    dataId:"1-3-3",
                    title: "父级1-子级1-子子级3",
                    status: false
                }
            ]
        }
    ]
}

