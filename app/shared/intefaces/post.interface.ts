export  interface Post {
    ID : number;
    author : {
        ID:number,
        URL:string,
        avatar:string,
        description:string,
        first_name:string,
        last_name:string,
        meta:{
          links : {
              archives:string,
              self:string
          }
        },
        name:string,
        nickname:string,
        registered:string,
        slug:string,
        username:string
    },
    comment_status : string,
    date : string,
    content : string,
    date_gmt : string,
    date_tz : string,
    except : string,
    featured_image : boolean|string,
    format:string,
    guid : string,
    link : string,
    menu_order:number,
    meta: {
        // @todo
    },
    modified:string,
    modified_gmt:string,
    modified_tz:string,
    parent: boolean|number,
    ping_status:string,
    slug:string,
    status:string,
    sticky:boolean,
    terms:{
        category:[
            {
                ID:number,
                count:number,
                description:string,
                link:string,
                meta:{
                    links:{
                        collection:string,
                        self:string
                    }
                },
                name:string,
                parent:boolean|number,
                slug:string,
                taxonomy:string
            }
        ]
    },
    title:string,
    type:string
}